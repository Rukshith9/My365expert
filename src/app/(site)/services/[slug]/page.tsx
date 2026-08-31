import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getService, services } from "@/data/services";
import { blogPosts } from "@/data/blogPosts";

const baseUrl = "https://www.my365expert.co";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Service not found | My365Expert" };

  return {
    title: service.title,
    description: service.description,
    keywords: service.keywords,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: service.title,
      description: service.description,
      type: "website",
      url: `${baseUrl}/services/${service.slug}`,
      siteName: "My365Expert",
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const relatedPosts = service.relatedBlogs
    .map((blogSlug) => blogPosts.find((post) => post.slug === blogSlug))
    .filter(Boolean);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    url: `${baseUrl}/services/${service.slug}`,
    provider: {
      "@type": "ProfessionalService",
      name: "My365Expert",
      url: baseUrl,
    },
    areaServed: ["New Zealand", "Australia"],
    serviceType: service.name,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
      { "@type": "ListItem", position: 2, name: "Services", item: `${baseUrl}/services` },
      { "@type": "ListItem", position: 3, name: service.name, item: `${baseUrl}/services/${service.slug}` },
    ],
  };

  return (
    <main className="bg-white text-slate-900 dark:bg-slate-950 dark:text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c") }} />

      <section className="border-b border-slate-200 bg-[#f7f9fc] px-6 pb-14 pt-32 sm:px-8 lg:px-10 lg:pb-16 dark:border-slate-800 dark:bg-slate-900">
        <div className="mx-auto max-w-5xl">
          <nav className="text-sm text-slate-500 dark:text-slate-400" aria-label="Breadcrumb">
            <Link href="/services" className="hover:text-[#2563eb]">Services</Link>
            <span className="mx-2">/</span>
            <span>{service.shortName}</span>
          </nav>
          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.18em] text-[#2563eb]">{service.shortName}</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl lg:text-6xl dark:text-white">{service.title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">{service.intro}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center rounded-md bg-[#2563eb] px-6 py-3.5 text-sm font-semibold text-white hover:bg-[#1d4ed8]">Book a Consultation →</Link>
            <Link href="/services" className="inline-flex items-center justify-center rounded-md border border-slate-300 px-6 py-3.5 text-sm font-semibold text-slate-800 hover:border-slate-400 dark:border-slate-700 dark:text-white">View All Services</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-14 sm:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <h2 className="text-3xl font-semibold tracking-[-0.025em]">What we can help with</h2>
            <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">We focus on practical improvements that are appropriate for your organisation rather than adding complexity for its own sake.</p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {service.items.map((item) => <li key={item} className="rounded-lg border border-slate-200 px-5 py-4 text-sm font-medium dark:border-slate-800">{item}</li>)}
            </ul>
          </div>
          <aside className="h-fit rounded-xl border border-slate-200 bg-[#f7f9fc] p-7 dark:border-slate-800 dark:bg-slate-900">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#2563eb]">Need help deciding?</p>
            <h2 className="mt-3 text-2xl font-semibold">Start with an assessment.</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">A focused review can identify the highest-priority risks and give you a practical roadmap.</p>
            <Link href="/contact" className="mt-6 inline-flex font-semibold text-[#2563eb] hover:underline">Talk to My365Expert →</Link>
          </aside>
        </div>
      </section>

      {relatedPosts.length > 0 && (
        <section className="border-t border-slate-200 bg-[#f7f9fc] px-6 py-14 sm:px-8 lg:px-10 lg:py-16 dark:border-slate-800 dark:bg-slate-900">
          <div className="mx-auto max-w-5xl">
            <div className="flex items-end justify-between gap-6">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#2563eb]">Related insights</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.025em]">Learn more before you decide.</h2>
              </div>
              <Link href="/blog" className="hidden text-sm font-semibold text-[#2563eb] sm:block">View all insights →</Link>
            </div>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {relatedPosts.map((post) => post && (
                <article key={post.slug} className="flex h-full flex-col rounded-lg border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-950">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#2563eb]">{post.category}</p>
                  <h3 className="mt-3 text-lg font-semibold leading-7"><Link href={`/blog/${post.slug}`} className="hover:text-[#2563eb]">{post.title}</Link></h3>
                  <p className="mt-3 flex-1 text-sm leading-6 text-slate-600 dark:text-slate-300">{post.excerpt}</p>
                  <Link href={`/blog/${post.slug}`} className="mt-5 text-sm font-semibold text-[#2563eb]">Read article →</Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-slate-950 px-6 py-14 text-white sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-5xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div><h2 className="text-3xl font-semibold">Ready to review your environment?</h2><p className="mt-2 text-slate-300">Let's identify the risks and improvements worth prioritising.</p></div>
          <Link href="/contact" className="inline-flex shrink-0 items-center justify-center rounded-md bg-[#2563eb] px-6 py-3.5 text-sm font-semibold text-white hover:bg-[#1d4ed8]">Book a Consultation →</Link>
        </div>
      </section>
    </main>
  );
}
