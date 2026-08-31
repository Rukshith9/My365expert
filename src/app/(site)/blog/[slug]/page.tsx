import { notFound } from "next/navigation";
import { Metadata } from "next";
import { blogPosts, getBlogPost } from "@/data/blogPosts";
import markdownToHtml from "@/utils/markdownToHtml";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Article not found | My365Expert" };

  return {
    title: `${post.title} | My365Expert`,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: new Date(post.date).toISOString(),
      section: post.category,
    },
  };
}

export default async function Post({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const html = await markdownToHtml(post.content);

  return (
    <main className="bg-white text-slate-900 dark:bg-slate-950 dark:text-white">
      <article>
        <header className="border-b border-slate-200 bg-[#f7f9fc] px-6 pb-14 pt-32 sm:px-8 lg:px-10 lg:pb-16 dark:border-slate-800 dark:bg-slate-900">
          <div className="mx-auto max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#2563eb]">{post.category}</p>
            <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.03em] text-slate-950 sm:text-5xl dark:text-white">{post.title}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">{post.excerpt}</p>
            <div className="mt-7 flex gap-5 text-sm text-slate-500 dark:text-slate-400">
              <span>{post.date}</span><span>·</span><span>{post.readTime}</span>
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-3xl px-6 py-14 sm:px-8 lg:py-20">
          <div className="blog-details prose prose-slate max-w-none dark:prose-invert prose-headings:tracking-[-0.02em] prose-a:text-[#2563eb]">
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        </div>
      </article>
    </main>
  );
}
