"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AdminPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to posts list once authenticated (layout handles auth)
    router.replace("/admin/posts");
  }, [router]);

  return (
    <div className="flex items-center justify-center py-20">
      <p className="text-gray-500">Redirecting to posts...</p>
    </div>
  );
}
