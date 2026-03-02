"use client";

import { useEffect, useState } from "react";
import { useAdmin } from "../AdminContext";
import { Blog } from "@/types/blog";
import Link from "next/link";
import { format } from "date-fns";

export default function PostsListPage() {
  const { secret } = useAdmin();
  const [posts, setPosts] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchPosts = async () => {
    setLoading(true);
    const res = await fetch("/api/cms/posts", {
      headers: { "x-cms-secret": secret },
    });
    if (res.ok) {
      const data = await res.json();
      setPosts(data);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (secret) fetchPosts();
  }, [secret]);

  const handleDelete = async (id: string, title: string) => {
    if (!confirm(`Delete "${title}"? This cannot be undone.`)) return;

    const res = await fetch(`/api/cms/posts/${id}`, {
      method: "DELETE",
      headers: { "x-cms-secret": secret },
    });

    if (res.ok) {
      setPosts((prev) => prev.filter((p) => p.id !== id));
    } else {
      alert("Failed to delete post");
    }
  };

  const togglePublish = async (post: Blog) => {
    const res = await fetch(`/api/cms/posts/${post.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "x-cms-secret": secret,
      },
      body: JSON.stringify({ published: !post.published }),
    });

    if (res.ok) {
      setPosts((prev) =>
        prev.map((p) =>
          p.id === post.id ? { ...p, published: !p.published } : p,
        ),
      );
    }
  };

  if (loading) {
    return <p className="text-gray-500">Loading posts...</p>;
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">All Posts</h2>
        <Link
          href="/admin/posts/new"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors"
        >
          + New Post
        </Link>
      </div>

      {posts.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
          <p className="text-gray-500 mb-4">No posts yet</p>
          <Link
            href="/admin/posts/new"
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            Create your first post
          </Link>
        </div>
      ) : (
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Title
                </th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Slug
                </th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="text-right px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {posts.map((post) => (
                <tr key={post.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <p className="text-sm font-medium text-gray-900 truncate max-w-xs">
                      {post.title}
                    </p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm text-gray-500 truncate max-w-xs">
                      {post.slug}
                    </p>
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => togglePublish(post)}
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium cursor-pointer ${
                        post.published
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {post.published ? "Published" : "Draft"}
                    </button>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {format(new Date(post.created_at), "MMM dd, yyyy")}
                  </td>
                  <td className="px-6 py-4 text-right space-x-3">
                    <Link
                      href={`/admin/posts/${post.id}/edit`}
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(post.id, post.title)}
                      className="text-red-600 hover:text-red-800 text-sm font-medium"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
