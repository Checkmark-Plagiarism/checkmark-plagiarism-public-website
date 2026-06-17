/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://checkmarkplagiarism.com',
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  generateRobotsTxt: true,
  exclude: [],

  // Default transformation function
  transform: async (config, path) => {
    return {
      loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    }
  },

  // The article + section listing pages are server-rendered (dynamic) routes,
  // so next-sitemap's crawl of the static build output misses them. Enumerate
  // them from the filesystem here so Research/Blogs/Learning content is indexed.
  additionalPaths: async (config) => {
    const fs = require('fs');
    const path = require('path');
    const SECTIONS = ['research', 'blogs', 'learning'];
    const APP_DIR = path.join(process.cwd(), 'src/app');
    const PAGE_FILES = ['page.tsx', 'page.ts', 'page.jsx', 'page.js'];
    const isDir = (p) => { try { return fs.statSync(p).isDirectory(); } catch { return false; } };
    const ls = (p) => { try { return fs.readdirSync(p).filter((n) => !n.startsWith('.')); } catch { return []; } };

    const locs = [];
    for (const section of SECTIONS) {
      locs.push(`/${section}`); // section listing page
      const base = path.join(APP_DIR, section);
      for (const year of ls(base)) {
        const yearPath = path.join(base, year);
        if (!isDir(yearPath)) continue;
        for (const month of ls(yearPath)) {
          const monthPath = path.join(yearPath, month);
          if (!isDir(monthPath)) continue;
          for (const slug of ls(monthPath)) {
            const slugPath = path.join(monthPath, slug);
            if (!isDir(slugPath)) continue;
            if (PAGE_FILES.some((f) => fs.existsSync(path.join(slugPath, f)))) {
              locs.push(`/${section}/${year}/${month}/${slug}`);
            }
          }
        }
      }
    }
    return Promise.all(locs.map((loc) => config.transform(config, loc)));
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [

    ],
  },
}
