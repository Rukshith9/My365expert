"use client";

import PostForm from "@/components/Admin/PostForm";

export default function NewPostPage() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Create New Post</h2>
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <PostForm />
      </div>
    </div>
  );
}
