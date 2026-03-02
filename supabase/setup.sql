-- Blog CMS Database Setup for Supabase
-- Run this SQL in your Supabase SQL Editor (Dashboard > SQL Editor)

-- 1. Create the posts table
CREATE TABLE IF NOT EXISTS posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  type TEXT DEFAULT 'Read More',
  excerpt TEXT DEFAULT '',
  cover_image TEXT DEFAULT '/images/blog/blog_common.png',
  content TEXT NOT NULL DEFAULT '',
  published BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- 2. Create an index on slug for fast lookups
CREATE INDEX IF NOT EXISTS idx_posts_slug ON posts (slug);

-- 3. Create an index on published + created_at for listing
CREATE INDEX IF NOT EXISTS idx_posts_published_date ON posts (published, created_at DESC);

-- 4. Auto-update updated_at on row changes
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER set_updated_at
  BEFORE UPDATE ON posts
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- 5. Disable RLS (no user auth needed — admin uses service role key)
ALTER TABLE posts DISABLE ROW LEVEL SECURITY;

-- 6. Create a storage bucket for blog images (run separately if needed)
-- INSERT INTO storage.buckets (id, name, public) VALUES ('blog-images', 'blog-images', true);
