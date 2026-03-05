/**
 * Migration script: Reads existing MDX blog files and inserts them into Supabase.
 *
 * Usage:
 *   1. Make sure your `.env.local` has NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY
 *   2. Run: npx tsx scripts/migrate-blogs.ts
 */

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { createClient } from "@supabase/supabase-js";
import slugify from "slugify";

// Load env vars from .env.local
import { config } from "dotenv";
config({ path: ".env.local" });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error(
    "Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in .env.local",
  );
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

const BLOGS_DIR = path.join(process.cwd(), "markdown", "blogs");

async function migrate() {
  const files = fs
    .readdirSync(BLOGS_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .sort();

  console.log(`Found ${files.length} MDX files to migrate.\n`);

  for (const file of files) {
    const fullPath = path.join(BLOGS_DIR, file);
    const raw = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(raw);

    const title = data.title || file.replace(/\.mdx$/, "");
    const slug = slugify(title, { lower: true, strict: true, trim: true });
    const type = data.type || "Read More";
    const coverImage = data.coverImage || "/images/blog/blog_common.png";

    console.log(`Migrating: ${file} → slug: "${slug}"`);

    const { error } = await supabase.from("posts").upsert(
      {
        title,
        slug,
        type,
        excerpt: "",
        cover_image: coverImage,
        content: content.trim(),
        published: true,
      },
      { onConflict: "slug" },
    );

    if (error) {
      console.error(`  ✗ Error: ${error.message}`);
    } else {
      console.log(`  ✓ Done`);
    }
  }

  console.log("\nMigration complete!");
}

migrate();
