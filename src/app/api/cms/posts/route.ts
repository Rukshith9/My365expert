import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";
import { validateCmsSecret } from "@/lib/auth";

// GET /api/cms/posts — list all posts (including drafts)
export async function GET(request: NextRequest) {
  const authError = validateCmsSecret(request);
  if (authError) return authError;

  const { data, error } = await supabaseAdmin
    .from("posts")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}

// POST /api/cms/posts — create a new post
export async function POST(request: NextRequest) {
  const authError = validateCmsSecret(request);
  if (authError) return authError;

  const body = await request.json();
  const { title, slug, type, excerpt, cover_image, content, published } = body;

  if (!title || !slug) {
    return NextResponse.json(
      { error: "Title and slug are required" },
      { status: 400 },
    );
  }

  const { data, error } = await supabaseAdmin
    .from("posts")
    .insert({
      title,
      slug,
      type: type || "Read More",
      excerpt: excerpt || "",
      cover_image: cover_image || "/images/blog/blog_common.png",
      content: content || "",
      published: published ?? false,
    })
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data, { status: 201 });
}
