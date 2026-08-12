// One-off: give every blog/learning article that currently shares a Pexels
// hero a unique, topically-matched replacement. Research is already clean.
//
// Reuses the same parse approach as src/lib/blog.ts but standalone (no path
// alias / no tsx) so it runs with plain `node`.
//
//   DRY_RUN=1 node scripts/fixup-hero-images.mjs   # print plan, download nothing
//   node scripts/fixup-hero-images.mjs             # download + rewrite page.tsx
//
// Pexels key:  export PEXELS_API_KEY=$(grep -m1 PEXELS_API_KEY ~/teamhub/.env | cut -d= -f2- | tr -d '"')
import { readdirSync, readFileSync, writeFileSync, existsSync, mkdirSync, rmSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = fileURLToPath(new URL("../", import.meta.url));
const APP = join(ROOT, "src/app");
const PUBLIC = join(ROOT, "public");
const DRY_RUN = !!process.env.DRY_RUN;
// Read the key from PEXELS_API_KEY, or fall back to a file path in
// PEXELS_KEY_FILE (handy when the shell quoting for the key value is painful).
const KEY =
  process.env.PEXELS_API_KEY ??
  (process.env.PEXELS_KEY_FILE && existsSync(process.env.PEXELS_KEY_FILE)
    ? readFileSync(process.env.PEXELS_KEY_FILE, "utf8").trim()
    : null);

const SECTIONS = ["blogs", "learning"]; // research is already unique — skip

const STOPWORDS = new Set(
  "a an the of to in for and or with how what why when where is are be you your their its on at by from as that this these those it they do does not no yes can will should would could has have had more most actually really here there vs new every all which who whom our we us i me my mine".split(/\s+/),
);

// ---- overrides: hand-tuned pexels queries when the auto-derivation is too abstract ----
const OVERRIDES = {
  // fill during dry-run review; keyed by the article slug folder name, e.g.
  // "a-parent-and-teachers-guide-to-chegg-and-quizlet-alternatives-in-2026": "student laptop textbook",
};

function safeReaddir(p) {
  try {
    return readdirSync(p).filter((n) => !n.startsWith("."));
  } catch {
    return [];
  }
}

/** Walk src/app/<section>/<year>/<month>/<slug>/page.tsx */
function collectArticles() {
  const out = [];
  for (const section of SECTIONS) {
    for (const year of safeReaddir(join(APP, section))) {
      const yPath = join(APP, section, year);
      for (const month of safeReaddir(yPath)) {
        const mPath = join(yPath, month);
        for (const slug of safeReaddir(mPath)) {
          const page = join(mPath, slug, "page.tsx");
          if (!existsSync(page)) continue;
          const src = readFileSync(page, "utf8");
          // hero path from meta["opengraph-image"]
          const og = src.match(/"opengraph-image"\s*:\s*"([^"]+)"/);
          // title: first `title: "..."` occurrence (metadata + meta share it)
          const titleM = src.match(/title:\s*"([^"]+)"/);
          if (!og || !titleM) continue;
          const image = og[1];
          const pexelsIdM = image.match(/pexels-(\d+)/i);
          if (!pexelsIdM) continue; // product screenshots under /images/services/ — skip
          out.push({ section, slug, page, image, title: titleM[1], pexelsId: pexelsIdM[1] });
        }
      }
    }
  }
  return out;
}

function deriveQuery(title) {
  const words = title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, " ")
    .split(/\s+/)
    .filter((w) => w && !STOPWORDS.has(w));
  const q = words.slice(0, 4).join(" ");
  return q || "education classroom";
}

/** Every pexels id currently referenced anywhere (incl. research) — seed the exclude set. */
function allReferencedPexelsIds() {
  const ids = new Set();
  for (const section of [...SECTIONS, "research"]) {
    for (const year of safeReaddir(join(APP, section))) {
      for (const month of safeReaddir(join(APP, section, year))) {
        for (const slug of safeReaddir(join(APP, section, year, month))) {
          const page = join(APP, section, year, month, slug, "page.tsx");
          if (!existsSync(page)) continue;
          const src = readFileSync(page, "utf8");
          for (const m of src.matchAll(/pexels-(\d+)/gi)) ids.add(m[1]);
        }
      }
    }
  }
  return ids;
}

async function searchPexels(query, page) {
  const url = `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=15&orientation=landscape&page=${page}`;
  const res = await fetch(url, { headers: { Authorization: KEY } });
  if (!res.ok) throw new Error(`pexels ${res.status}`);
  const data = await res.json();
  return data.photos ?? [];
}

/** Pick the first unused photo across up to 5 pages. Returns {photo} or null. */
async function pickUnusedPhoto(query, usedIds) {
  for (let page = 1; page <= 5; page++) {
    const photos = await searchPexels(query, page);
    const photo = photos.find((p) => !usedIds.has(String(p.id)));
    if (photo) return photo;
    if (photos.length < 15) break;
  }
  return null;
}

function imageDiskPath(webPath) {
  return join(PUBLIC, webPath.replace(/^\//, ""));
}

async function main() {
  if (!KEY && !DRY_RUN) {
    console.error("PEXELS_API_KEY is required (set it in env).");
    process.exit(1);
  }

  const articles = collectArticles();
  const usedIds = allReferencedPexelsIds();

  // Group by pexelsId; keep the first (sorted) as keeper, replace the rest.
  const groups = new Map();
  for (const a of articles) {
    if (!groups.has(a.pexelsId)) groups.set(a.pexelsId, []);
    groups.get(a.pexelsId).push(a);
  }
  const toReplace = [];
  for (const [id, group] of groups) {
    if (group.length < 2) continue; // already unique
    group.sort((a, b) => a.slug.localeCompare(b.slug));
    const [keeper, ...rest] = group;
    for (const a of rest) toReplace.push(a);
  }

  console.log(`Found ${articles.length} pexels-backed articles across blogs+learning.`);
  console.log(`${groups.size} distinct pexels images; ${toReplace.length} articles need a replacement.\n`);

  const report = [];
  for (const a of toReplace) {
    const query = OVERRIDES[a.slug] ?? deriveQuery(a.title);
    let photo = null;
    let err = null;
    if (KEY) {
      try {
        photo = await pickUnusedPhoto(query, usedIds);
      } catch (e) {
        err = String(e);
      }
    }
    if (!photo) {
      report.push({ slug: a.slug, query, oldId: a.pexelsId, status: err ? `ERROR ${err}` : "NO_MATCH" });
      continue;
    }
    usedIds.add(String(photo.id)); // reserve even in dry-run so the plan reflects final state
    const newFile = `pexels-${photo.id}.jpg`;
    const dir = dirname(imageDiskPath(a.image));
    const newDiskPath = join(dir, newFile);
    const newWebPath = a.image.replace(/pexels-\d+\.(jpg|jpeg)/i, newFile);
    report.push({
      slug: a.slug,
      query,
      oldId: a.pexelsId,
      newId: String(photo.id),
      newWebPath,
      status: DRY_RUN ? "DRY_RUN" : "DONE",
    });

    if (!DRY_RUN) {
      const src = photo.src.large2x || photo.src.large || photo.src.landscape || photo.src.original;
      const imgRes = await fetch(src);
      if (!imgRes.ok) throw new Error(`download ${imgRes.status} for ${src}`);
      const bytes = Buffer.from(await imgRes.arrayBuffer());
      mkdirSync(dir, { recursive: true });
      writeFileSync(newDiskPath, bytes);
      // rewrite page.tsx: the old path string appears in both metadata.openGraph.images
      // and meta["opengraph-image"]; replaceAll covers both.
      const pageSrc = readFileSync(a.page, "utf8");
      const before = pageSrc.split(a.image).length - 1;
      if (before < 2) console.warn(`  ! ${a.slug}: expected ≥2 occurrences of old path, found ${before}`);
      const next = pageSrc.split(a.image).join(newWebPath);
      writeFileSync(a.page, next);
      console.log(`  ✓ ${a.slug}: ${a.pexelsId} → ${photo.id}  (${query})`);
    }
  }

  console.log("\n=== plan ===");
  console.table(report.map((r) => ({
    slug: r.slug.length > 42 ? r.slug.slice(0, 40) + ".." : r.slug,
    query: r.query,
    old: r.oldId,
    new: r.newId ?? "-",
    status: r.status,
  })));
  const noid = report.filter((r) => r.status !== "DONE" && r.status !== "DRY_RUN");
  if (noid.length) console.log(`\n${noid.length} article(s) could not be matched — tune OVERRIDES for them.`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
