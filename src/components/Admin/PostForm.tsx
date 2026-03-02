"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { useAdmin } from "@/app/admin/layout";
import dynamic from "next/dynamic";
import slugify from "slugify";
import { Blog } from "@/types/blog";

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });

type PostFormProps = {
  initialData?: Blog;
  isEditing?: boolean;
};

export default function PostForm({ initialData, isEditing }: PostFormProps) {
  const { secret } = useAdmin();
  const router = useRouter();

  const [title, setTitle] = useState(initialData?.title || "");
  const [slug, setSlug] = useState(initialData?.slug || "");
  const [type, setType] = useState(initialData?.type || "Read More");
  const [excerpt, setExcerpt] = useState(initialData?.excerpt || "");
  const [coverImage, setCoverImage] = useState(
    initialData?.cover_image || "/images/blog/blog_common.png",
  );
  const [content, setContent] = useState(initialData?.content || "");
  const [published, setPublished] = useState(initialData?.published || false);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  const generateSlug = useCallback(
    (value: string) => {
      if (!isEditing || !initialData?.slug) {
        setSlug(slugify(value, { lower: true, strict: true, trim: true }));
      }
    },
    [isEditing, initialData?.slug],
  );

  const handleTitleChange = (value: string) => {
    setTitle(value);
    generateSlug(value);
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/cms/upload", {
        method: "POST",
        headers: { "x-cms-secret": secret },
        body: formData,
      });

      if (res.ok) {
        const { url } = await res.json();
        setCoverImage(url);
      } else {
        const { error } = await res.json();
        setError(`Upload failed: ${error}`);
      }
    } catch {
      setError("Upload failed");
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError("");

    const payload = {
      title,
      slug,
      type,
      excerpt,
      cover_image: coverImage,
      content,
      published,
    };

    try {
      const url = isEditing
        ? `/api/cms/posts/${initialData?.id}`
        : "/api/cms/posts";
      const method = isEditing ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          "x-cms-secret": secret,
        },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        router.push("/admin/posts");
      } else {
        const data = await res.json();
        setError(data.error || "Failed to save post");
      }
    } catch {
      setError("Failed to save post");
    } finally {
      setSaving(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
          {error}
        </div>
      )}

      {/* Title */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Title *
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => handleTitleChange(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
          required
        />
      </div>

      {/* Slug */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Slug *
        </label>
        <input
          type="text"
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
          required
        />
      </div>

      {/* Two columns: Type + Published */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Type
          </label>
          <input
            type="text"
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
          />
        </div>
        <div className="flex items-end">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={published}
              onChange={(e) => setPublished(e.target.checked)}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <span className="text-sm font-medium text-gray-700">Published</span>
          </label>
        </div>
      </div>

      {/* Excerpt */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Excerpt
        </label>
        <textarea
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
          rows={3}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
        />
      </div>

      {/* Cover Image */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Cover Image
        </label>
        <div className="flex items-center gap-4">
          <input
            type="text"
            value={coverImage}
            onChange={(e) => setCoverImage(e.target.value)}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
            placeholder="/images/blog/blog_common.png"
          />
          <label className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-gray-200 transition-colors cursor-pointer border border-gray-300">
            {uploading ? "Uploading..." : "Upload"}
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
              disabled={uploading}
            />
          </label>
        </div>
        {coverImage && (
          <div className="mt-2">
            <img
              src={coverImage}
              alt="Cover preview"
              className="h-32 object-cover rounded-lg"
            />
          </div>
        )}
      </div>

      {/* Content (Markdown Editor) */}
      <div data-color-mode="light">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Content (Markdown)
        </label>
        <MDEditor
          value={content}
          onChange={(val) => setContent(val || "")}
          height={500}
          preview="live"
        />
      </div>

      {/* Actions */}
      <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
        <button
          type="submit"
          disabled={saving}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
        >
          {saving ? "Saving..." : isEditing ? "Update Post" : "Create Post"}
        </button>
        <button
          type="button"
          onClick={() => router.push("/admin/posts")}
          className="text-gray-600 hover:text-gray-800 px-6 py-2"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
