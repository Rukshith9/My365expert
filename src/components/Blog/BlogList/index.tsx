import React from "react";
import BlogCard from "@/components/SharedComponents/Blog/blogCard";
import { getAllPublishedPosts } from "@/lib/blog";

const BlogList = async () => {
  const posts = await getAllPublishedPosts();

  return (
    <section
      className="flex flex-wrap justify-center md:pt-20 pt-8 lg:pb-24 pb-10 dark:bg-darkmode "
      id="blog"
    >
      <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4">
        <div className="lg:grid grid-cols-12 gap-x-12 gap-y-20">
          {posts.map((blog, i) => (
            <div key={i} className="w-full md:col-span-6 col-span-12">
              <BlogCard blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogList;
