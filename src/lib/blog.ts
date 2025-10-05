import fs from "fs";
import path from "path";

const BLOG_DIR = path.join(process.cwd(), "src/app/blog");

export async function getAllBlogPosts() {
    let posts = [];

    // Loop through year folders (e.g., /2024/)
    for (const year of fs.readdirSync(BLOG_DIR)) {
        const yearPath = path.join(BLOG_DIR, year);
        if (!fs.statSync(yearPath).isDirectory()) continue;

        // Loop through month folders (e.g., /2024/03/)
        for (const month of fs.readdirSync(yearPath)) {
            const monthPath = path.join(yearPath, month);
            if (!fs.statSync(monthPath).isDirectory()) continue;

            // Read all post directories inside the month folder
            for (const postFolder of fs.readdirSync(monthPath)) {
                const postPath = path.join(monthPath, postFolder);

                if (fs.statSync(postPath).isDirectory()) {
                    // Check for multiple possible file types
                    const possibleFiles = ["page.js", "page.jsx", "page.ts", "page.tsx"];
                    let pageFile = null;

                    for (const file of possibleFiles) {
                        if (fs.existsSync(path.join(postPath, file))) {
                            pageFile = path.join(postPath, file);
                            break;
                        }
                    }

                    let metadata = {
                        title: postFolder.replace(/-/g, " ").toUpperCase(),
                        description: "",
                        date: `${year}-${month}`,
                    };

                    if (pageFile) {
                        try {
                            // Read file content as a string
                            const fileContent = fs.readFileSync(pageFile, "utf8");

                            // Extract metadata using regex (looks for `export const metadata = { ... }`)
                            const metadataMatch = fileContent.match(/export const metadata = ({[\s\S]*?});/);

                            if (metadataMatch) {
                                const extractedMetadata = eval("(" + metadataMatch[1] + ")"); // Parse metadata safely
                                metadata = { ...metadata, ...extractedMetadata };
                            }
                        } catch (error) {
                            console.error(`Failed to load metadata for ${postFolder}:`, error.message);
                        }
                    }

                    posts.push({
                        slug: `${year}/${month}/${postFolder}`, // Slug is now folder-based
                        ...metadata, // Spread metadata
                    });
                }
            }
        }
    }

    // Sort posts by most recent (descending order)
    return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
}
