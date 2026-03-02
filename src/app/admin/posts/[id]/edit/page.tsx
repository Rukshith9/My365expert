"use client";

import { useEffect, useState } from "react";
import { useAdmin } from "@/app/admin/layout";
import { useParams } from "next/navigation";
import PostForm from "@/components/Admin/PostForm";
import { Blog } from "@/types/blog";

export default function EditPostPage() {
  const { secret } = useAdmin();
  const params = useParams();
  const id = params.id as string;

  const [post, setPost] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!secret || !id) return;

    const fetchPost = async () => {
      const res = await fetch(`/api/cms/posts/${id}`, {
        headers: { "x-cms-secret": secret },
      });

      if (res.ok) {
        const data = await res.json();
        setPost(data);
      } else {
        setError("Post not found");
      }
      setLoading(false);
    };

    fetchPost();
  }, [secret, id]);

  if (loading) {
    return <p className="text-gray-500">Loading post...</p>;
  }

  if (error || !post) {
    return (
      <div className="text-center py-12">
        <p className="text-red-600">{error || "Post not found"}</p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Edit Post</h2>
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <PostForm initialData={post} isEditing />
      </div>
    </div>
  );
}
