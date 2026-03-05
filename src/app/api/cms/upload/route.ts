import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";
import { validateCmsSecret } from "@/lib/auth";
import { v4 as uuidv4 } from "uuid";

// POST /api/cms/upload — upload an image to Supabase Storage
export async function POST(request: NextRequest) {
  const authError = validateCmsSecret(request);
  if (authError) return authError;

  const formData = await request.formData();
  const file = formData.get("file") as File | null;

  if (!file) {
    return NextResponse.json({ error: "No file provided" }, { status: 400 });
  }

  const ext = file.name.split(".").pop();
  const fileName = `${uuidv4()}.${ext}`;
  const filePath = `blog/${fileName}`;

  const buffer = Buffer.from(await file.arrayBuffer());

  const { error } = await supabaseAdmin.storage
    .from("blog-images")
    .upload(filePath, buffer, {
      contentType: file.type,
      upsert: false,
    });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  const {
    data: { publicUrl },
  } = supabaseAdmin.storage.from("blog-images").getPublicUrl(filePath);

  return NextResponse.json({ url: publicUrl });
}
