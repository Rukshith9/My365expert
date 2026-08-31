import React from "react";
import Link from "next/link";
import { blogPosts } from "@/data/blogPosts";

const BlogList = () => {
  return (
    <section className="bg-white px-6 py-14 sm:px-8 lg:px-10 lg:py-20 dark:bg-slate-950" id="blog">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article key={post.slug} className="group flex h-full flex-col border border-slate-200 bg-white p-7 transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <div className="flex items-center justify-between gap-4 text-xs font-semibold uppercase tracking-[0.12em] text-[#2563eb]">
                <span>{post.category}</span>
                <span className="text-slate-400 dark:text-slate-500">{post.readTime}</span>
              </div>
              <h2 className="mt-5 text-xl font-semibold leading-7 tracking-[-0.015em] text-slate-950 dark:text-white">
                <Link href={`/blog/${post.slug}`} className="group-hover:text-[#2563eb]">{post.title}</Link>
              </h2>
              <p className="mt-4 flex-1 text-sm leading-6 text-slate-600 dark:text-slate-300">{post.excerpt}</p>
              <div className="mt-7 flex items-center justify-between border-t border-slate-100 pt-5 text-xs text-slate-500 dark:border-slate-800 dark:text-slate-400">
                <span>{post.date}</span>
                <Link href={`/blog/${post.slug}`} className="font-semibold text-slate-700 hover:text-[#2563eb] dark:text-slate-200">Read article →</Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogList;
