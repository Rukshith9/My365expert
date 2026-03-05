import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";
import { validateCmsSecret } from "@/lib/auth";

type RouteParams = { params: Promise<{ id: string }> };

// GET /api/cms/posts/[id] — get a single post
export async function GET(request: NextRequest, { params }: RouteParams) {
  const authError = validateCmsSecret(request);
  if (authError) return authError;

  const { id } = await params;

  const { data, error } = await supabaseAdmin
    .from("posts")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 404 });
  }

  return NextResponse.json(data);
}

// PUT /api/cms/posts/[id] — update a post
export async function PUT(request: NextRequest, { params }: RouteParams) {
  const authError = validateCmsSecret(request);
  if (authError) return authError;

  const { id } = await params;
  const body = await request.json();

  const { title, slug, type, excerpt, cover_image, content, published } = body;

  const { data, error } = await supabaseAdmin
    .from("posts")
    .update({
      ...(title !== undefined && { title }),
      ...(slug !== undefined && { slug }),
      ...(type !== undefined && { type }),
      ...(excerpt !== undefined && { excerpt }),
      ...(cover_image !== undefined && { cover_image }),
      ...(content !== undefined && { content }),
      ...(published !== undefined && { published }),
    })
    .eq("id", id)
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}

// DELETE /api/cms/posts/[id] — delete a post
export async function DELETE(request: NextRequest, { params }: RouteParams) {
  const authError = validateCmsSecret(request);
  if (authError) return authError;

  const { id } = await params;

  const { error } = await supabaseAdmin.from("posts").delete().eq("id", id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
