# Blog CMS Setup Guide

A simple CMS for managing blog posts, powered by **Supabase** (Postgres + Storage). No user authentication — the site owner manages posts via a secret key.

---

## Changes Summary

### New Files

| File                                     | Description                                               |
| ---------------------------------------- | --------------------------------------------------------- |
| `src/lib/supabase.ts`                    | Supabase client instances (public + admin)                |
| `src/lib/auth.ts`                        | CMS secret key validation helper                          |
| `src/lib/blog.ts`                        | Blog query helpers for fetching published posts           |
| `src/app/api/cms/posts/route.ts`         | API: List all posts (GET) / Create post (POST)            |
| `src/app/api/cms/posts/[id]/route.ts`    | API: Get (GET) / Update (PUT) / Delete (DELETE) a post    |
| `src/app/api/cms/upload/route.ts`        | API: Upload image to Supabase Storage                     |
| `src/app/admin/layout.tsx`               | Admin layout with password gate and context provider      |
| `src/app/admin/page.tsx`                 | Admin root — redirects to posts list                      |
| `src/app/admin/posts/page.tsx`           | Posts dashboard (list, toggle publish, delete)            |
| `src/app/admin/posts/new/page.tsx`       | Create new post page                                      |
| `src/app/admin/posts/[id]/edit/page.tsx` | Edit existing post page                                   |
| `src/components/Admin/PostForm.tsx`      | Shared post form with markdown editor & image upload      |
| `supabase/setup.sql`                     | Database schema (table, indexes, trigger)                 |
| `scripts/migrate-blogs.ts`               | One-time script to migrate existing MDX posts to Supabase |
| `.env.local.example`                     | Environment variable template                             |

### Modified Files

| File                                                | What Changed                                                                                        |
| --------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `src/types/blog.ts`                                 | Replaced old `Blog` type with DB schema fields; added `BlogCardData` type for card components       |
| `src/app/(site)/blog/[slug]/page.tsx`               | Switched from filesystem reads to Supabase queries; added `generateStaticParams`; uses `notFound()` |
| `src/components/Blog/BlogList/index.tsx`            | Now async; fetches from Supabase via `getAllPublishedPosts()`                                       |
| `src/components/Blog/BlogHeader/index.tsx`          | Switched to Supabase queries; removed hardcoded author section                                      |
| `src/components/Home/Blog/index.tsx`                | Now async; fetches from Supabase                                                                    |
| `src/components/SharedComponents/Blog/index.tsx`    | Now async; fetches from Supabase                                                                    |
| `src/components/SharedComponents/Blog/blogCard.tsx` | Updated type import to `BlogCardData`                                                               |
| `src/components/Home/Blog/BlogCard/index.tsx`       | Updated type import to `BlogCardData`                                                               |
| `next.config.mjs`                                   | Added Supabase image domain to `remotePatterns`                                                     |
| `package.json`                                      | Added `@supabase/supabase-js`, `@uiw/react-md-editor`, `slugify`, `dotenv`, `tsx`                   |

---

## Setup Instructions

### 1. Create a Supabase Project

1. Go to [supabase.com](https://supabase.com) and create a new project
2. Note down your:
   - **Project URL** (e.g. `https://abc123.supabase.co`)
   - **Anon (public) key**
   - **Service role key** (found in Settings → API)

### 2. Run Database Setup

1. Open your Supabase Dashboard → **SQL Editor**
2. Copy and paste the contents of `supabase/setup.sql`
3. Click **Run** to create the `posts` table, indexes, and trigger

### 3. Create Storage Bucket

1. In Supabase Dashboard → **Storage**
2. Click **New bucket**
3. Name it `blog-images`
4. Check **Public bucket**
5. Save

### 4. Configure Environment Variables

Copy the example file and fill in your values:

```bash
cp .env.local.example .env.local
```

Edit `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
CMS_SECRET_KEY=choose-a-strong-password
```



### 5. Migrate Existing Blog Posts

Run the migration script to move your existing MDX files into Supabase:

```bash
npx tsx scripts/migrate-blogs.ts
```

You should see output like:

```
Found 8 MDX files to migrate.

Migrating: blog_1.mdx → slug: "microsoft-copilot-readiness-..."
  ✓ Done
...
Migration complete!
```

### 6. Start the App

```bash
npm run dev
```

### 7. Access the CMS

1. Navigate to `http://localhost:3000/admin`
2. Enter your `CMS_SECRET_KEY`
3. You'll see the posts dashboard

---

## Using the CMS

### Admin Dashboard (`/admin/posts`)

- View all posts (published and drafts)
- Click the **Published/Draft** badge to toggle a post's status
- **Edit** or **Delete** any post
- Click **+ New Post** to create a post

### Creating / Editing a Post

- **Title** — auto-generates the slug
- **Slug** — URL-friendly identifier (editable)
- **Type** — label shown on cards (default: "Read More")
- **Published** — toggle to make visible on the public site
- **Excerpt** — short description
- **Cover Image** — paste a URL or upload an image to Supabase Storage
- **Content** — full markdown editor with live preview

### Image Uploads

- Click the **Upload** button next to the cover image field
- Images are stored in Supabase Storage (`blog-images` bucket)
- The public URL is automatically filled in

---

## Architecture

```
Public Site (reads)          Admin CMS (writes)
─────────────────           ──────────────────
supabase anon key           supabase service role key
  ↓                           ↓
src/lib/blog.ts             src/app/api/cms/*
  ↓                           ↓
Blog pages &                Admin pages at /admin/*
components                  (password-gated via CMS_SECRET_KEY)
```
