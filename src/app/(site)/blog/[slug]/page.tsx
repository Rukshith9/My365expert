import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts, getBlogPost } from "@/data/blogPosts";
import { getBlogSeo } from "@/data/blogSeo";
import { services } from "@/data/services";
import markdownToHtml from "@/utils/markdownToHtml";

const baseUrl = "https://www.my365expert.co";

type Props = { params: Promise<{ slug: string }> };

const serviceByCategory: Record<string, string> = {
  "M365 Security": "microsoft-365-azure-security",
  "Identity & Access": "microsoft-365-azure-security",
  "SharePoint Security": "sharepoint-security-optimisation",
  "AI & Copilot Security": "microsoft-ai-copilot-security",
  "Endpoint Security": "endpoint-intune-security",
  "Purview & Information Protection": "microsoft-purview-information-protection",
  "Azure & AI Security": "microsoft-ai-copilot-security",
  "AI & Cybersecurity": "microsoft-ai-copilot-security",
  Cybersecurity: "microsoft-365-azure-security",
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Article not found | My365Expert" };

  const seo = getBlogSeo(slug);
  const title = seo?.title ?? post.title;
  const description = seo?.description ?? post.excerpt;
  const keywords = seo?.keywords ?? [post.category];

  return {
    title,
    description,
    keywords,
    authors: [{ name: "My365Expert" }],
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: { title, description, type: "article", url: `${baseUrl}/blog/${post.slug}`, siteName: "My365Expert", publishedTime: new Date(post.date).toISOString(), section: post.category },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function Post({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const seo = getBlogSeo(slug);
  const title = seo?.title ?? post.title;
  const description = seo?.description ?? post.excerpt;
  const serviceSlug = serviceByCategory[post.category] ?? "microsoft-365-azure-security";
  const relatedService = services.find((service) => service.slug === serviceSlug);
  const relatedPosts = blogPosts.filter((item) => item.slug !== post.slug && item.category === post.category).slice(0, 3);
  const publishedTime = new Date(post.date).toISOString();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    datePublished: publishedTime,
    dateModified: publishedTime,
    mainEntityOfPage: { "@type": "WebPage", "@id": `${baseUrl}/blog/${post.slug}` },
    url: `${baseUrl}/blog/${post.slug}`,
    articleSection: post.category,
    keywords: seo?.keywords?.join(", ") ?? post.category,
    author: { "@type": "Organization", name: "My365Expert", url: baseUrl },
    publisher: { "@type": "Organization", name: "My365Expert", url: baseUrl },
    isPartOf: { "@type": "Blog", name: "My365Expert Insights", url: `${baseUrl}/blog` },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
      { "@type": "ListItem", position: 2, name: "Insights", item: `${baseUrl}/blog` },
      { "@type": "ListItem", position: 3, name: title, item: `${baseUrl}/blog/${post.slug}` },
    ],
  };

  const html = await markdownToHtml(post.content);

  return (
    <main className="bg-white text-slate-900 dark:bg-slate-950 dark:text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c") }} />
      <article>
        <header className="border-b border-slate-200 bg-[#f7f9fc] px-6 pb-14 pt-32 sm:px-8 lg:px-10 lg:pb-16 dark:border-slate-800 dark:bg-slate-900">
          <div className="mx-auto max-w-4xl">
            <nav className="text-sm text-slate-500 dark:text-slate-400" aria-label="Breadcrumb"><Link href="/blog" className="hover:text-[#2563eb]">Insights</Link><span className="mx-2">/</span><span>{post.category}</span></nav>
            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.16em] text-[#2563eb]">{post.category}</p>
            <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.03em] text-slate-950 sm:text-5xl dark:text-white">{title}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">{description}</p>
            <div className="mt-7 flex gap-5 text-sm text-slate-500 dark:text-slate-400"><span>{post.date}</span><span>·</span><span>{post.readTime}</span></div>
          </div>
        </header>

        <div className="mx-auto max-w-3xl px-6 py-14 sm:px-8 lg:py-20">
          <div className="blog-details prose prose-slate max-w-none dark:prose-invert prose-headings:tracking-[-0.02em] prose-a:text-[#2563eb]"><div dangerouslySetInnerHTML={{ __html: html }} /></div>

          <section className="mt-14 rounded-xl border border-slate-200 bg-[#f7f9fc] p-7 dark:border-slate-800 dark:bg-slate-900">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#2563eb]">Need help with this?</p>
            <h2 className="mt-2 text-2xl font-semibold">{relatedService?.name}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{relatedService?.description}</p>
            <div className="mt-5 flex flex-wrap gap-5 text-sm font-semibold"><Link href={`/services/${relatedService?.slug}`} className="text-[#2563eb] hover:underline">Explore this service →</Link><Link href="/contact" className="text-[#2563eb] hover:underline">Book a consultation →</Link></div>
          </section>

          {relatedPosts.length > 0 && <section className="mt-14 border-t border-slate-200 pt-10 dark:border-slate-800"><h2 className="text-2xl font-semibold">More {post.category} insights</h2><div className="mt-6 grid gap-5 sm:grid-cols-2">{relatedPosts.map((item) => <article key={item.slug} className="rounded-lg border border-slate-200 p-5 dark:border-slate-800"><h3 className="font-semibold leading-6"><Link href={`/blog/${item.slug}`} className="hover:text-[#2563eb]">{getBlogSeo(item.slug)?.title ?? item.title}</Link></h3><p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{getBlogSeo(item.slug)?.description ?? item.excerpt}</p></article>)}</div></section>}

          <div className="mt-12 flex flex-wrap gap-5 border-t border-slate-200 pt-8 text-sm font-semibold dark:border-slate-800"><Link href="/services" className="text-[#2563eb] hover:underline">View all services →</Link><Link href="/blog" className="text-[#2563eb] hover:underline">Back to insights →</Link><Link href="/contact" className="text-[#2563eb] hover:underline">Contact My365Expert →</Link></div>
        </div>
      </article>
    </main>
  );
}
