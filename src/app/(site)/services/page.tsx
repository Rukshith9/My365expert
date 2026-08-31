import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Microsoft 365, Azure & AI Security Services | My365Expert",
  description: "Microsoft 365, Azure, SharePoint, Purview, Intune and AI security consulting for businesses in New Zealand and Australia.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Microsoft 365, Azure & AI Security Services | My365Expert",
    description: "Practical Microsoft security consulting across Microsoft 365, Azure, SharePoint, Purview, Intune and AI.",
    type: "website",
  },
};

export default function Services() {
  const itemLists = services.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: service.name,
    url: `https://www.my365expert.co/services/${service.slug}`,
  }));

  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "My365Expert services",
    itemListElement: itemLists,
  };

  return (
    <main className="bg-white text-slate-900 dark:bg-slate-950 dark:text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <section className="border-b border-slate-200 bg-[#f7f9fc] pt-24 sm:pt-28 dark:border-slate-800 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-6 pb-14 sm:px-8 lg:px-10 lg:pb-16">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2563eb]">Our services</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl lg:text-6xl dark:text-white">Practical Microsoft expertise, focused on security.</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">We help organisations assess, secure and optimise Microsoft 365, Azure and the technologies built around them.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-10 lg:py-16">
        <div className="divide-y divide-slate-200 border-y border-slate-200 dark:divide-slate-800 dark:border-slate-800">
          {services.map((service, index) => (
            <article key={service.slug} className="py-10 sm:py-12">
              <div className="grid gap-7 lg:grid-cols-[80px_0.8fr_1.2fr_auto] lg:gap-10 lg:items-start">
                <span className="text-sm font-semibold text-slate-400">{String(index + 1).padStart(2, "0")}</span>
                <div><h2 className="text-2xl font-semibold tracking-[-0.02em] text-slate-950 dark:text-white"><Link href={`/services/${service.slug}`} className="hover:text-[#2563eb]">{service.name}</Link></h2><p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{service.intro}</p></div>
                <ul className="grid gap-x-8 gap-y-2 text-sm leading-7 text-slate-600 dark:text-slate-300 sm:grid-cols-2">
                  {service.items.slice(0, 8).map((item) => <li key={item} className="border-b border-slate-100 py-1.5 dark:border-slate-800">{item}</li>)}
                </ul>
                <Link href={`/services/${service.slug}`} className="text-sm font-semibold text-[#2563eb] hover:underline">View service →</Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-950 text-white"><div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 lg:px-10 lg:py-16"><div className="grid gap-7 lg:grid-cols-[1fr_auto] lg:items-center"><div><p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">Not sure where to start?</p><h2 className="mt-3 text-3xl font-semibold tracking-[-0.025em] text-white">Let's look at your environment first.</h2><p className="mt-3 max-w-2xl leading-7 text-slate-300">A focused assessment can help identify the risks, gaps and improvements worth prioritising.</p></div><Link href="/contact" className="inline-flex items-center justify-center rounded-md bg-[#2563eb] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#1d4ed8]">Book a Consultation →</Link></div></div></section>
    </main>
  );
}
