import { supabase } from "./supabase";
import { Blog, BlogCardData } from "@/types/blog";

/**
 * Convert a Blog DB row to the card format used by existing components.
 */
export function toBlogCard(post: Blog): BlogCardData {
  return {
    title: post.title,
    slug: post.slug,
    type: post.type,
    excerpt: post.excerpt,
    coverImage: post.cover_image,
    date: post.created_at,
  };
}

/**
 * Get all published posts, ordered by newest first.
 */
export async function getAllPublishedPosts(): Promise<BlogCardData[]> {
  const { data, error } = await supabase
    .from("posts")
    .select("id, title, slug, type, excerpt, cover_image, created_at")
    .eq("published", true)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching posts:", error);
    return [];
  }

  return (data as Blog[]).map(toBlogCard);
}

/**
 * Get a single published post by its slug.
 */
export async function getPublishedPostBySlug(
  slug: string,
): Promise<Blog | null> {
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .eq("slug", slug)
    .eq("published", true)
    .single();

  if (error) {
    console.error("Error fetching post:", error);
    return null;
  }

  return data as Blog;
}

/**
 * Get all post slugs (for generateStaticParams).
 */
export async function getAllPostSlugs(): Promise<string[]> {
  const { data, error } = await supabase
    .from("posts")
    .select("slug")
    .eq("published", true);

  if (error) {
    console.error("Error fetching slugs:", error);
    return [];
  }

  return (data ?? []).map((p) => p.slug);
}
