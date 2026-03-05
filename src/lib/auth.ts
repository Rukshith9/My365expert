import { NextRequest, NextResponse } from "next/server";

/**
 * Validate the CMS secret key from request headers.
 * Returns an error response if invalid, or null if valid.
 */
export function validateCmsSecret(request: NextRequest): NextResponse | null {
  const secret = request.headers.get("x-cms-secret");
  if (!secret || secret !== process.env.CMS_SECRET_KEY) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  return null;
}
