import type { Metadata } from "next";
import Link from "next/link";

const baseUrl = "https://www.my365expert.co";

export const metadata: Metadata = {
  title: "About My365Expert | Microsoft 365 & Azure Security Consulting",
  description: "Learn about My365Expert, a Microsoft-focused security consultancy helping small and mid-sized businesses in New Zealand and Australia improve Microsoft 365, Azure, data and AI security.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About My365Expert | Microsoft 365 & Azure Security Consulting",
    description: "Practical Microsoft 365, Azure, data and AI security consulting for businesses in New Zealand and Australia.",
    url: `${baseUrl}/about`,
    type: "website",
  },
};

export default function AboutPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About My365Expert",
    url: `${baseUrl}/about`,
    mainEntity: {
      "@type": "ProfessionalService",
      name: "My365Expert",
      url: baseUrl,
      areaServed: ["New Zealand", "Australia"],
      serviceType: [
        "Microsoft 365 Security Consulting",
        "Azure Security Consulting",
        "Microsoft Purview Consulting",
        "Microsoft Copilot Security",
      ],
    },
  };

  return (
    <main className="bg-white text-slate-900 dark:bg-slate-950 dark:text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <section className="border-b border-slate-200 bg-[#f7f9fc] px-6 pb-14 pt-32 sm:px-8 lg:px-10 lg:pb-16 dark:border-slate-800 dark:bg-slate-900">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2563eb]">About My365Expert</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl lg:text-6xl dark:text-white">Practical Microsoft security for growing businesses.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">My365Expert helps small and mid-sized businesses in New Zealand and Australia understand, secure and improve their Microsoft 365 and Azure environments.</p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-14 sm:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <h2 className="text-3xl font-semibold tracking-[-0.025em]">What My365Expert does</h2>
            <p className="mt-5 leading-8 text-slate-600 dark:text-slate-300">Microsoft 365 and Azure can become difficult to manage as a business grows. Identity, permissions, devices, data, cloud resources and AI adoption all introduce security decisions that need to work together.</p>
            <p className="mt-5 leading-8 text-slate-600 dark:text-slate-300">My365Expert focuses on practical security assessments and improvements across Microsoft 365, Azure, SharePoint, Intune, Defender, Purview and Microsoft Copilot.</p>
            <p className="mt-5 leading-8 text-slate-600 dark:text-slate-300">The objective is straightforward: identify meaningful gaps, explain what they mean for the business and provide a practical path to improve security without unnecessary complexity.</p>
          </div>
          <aside className="h-fit rounded-xl border border-slate-200 bg-[#f7f9fc] p-7 dark:border-slate-800 dark:bg-slate-900">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#2563eb]">Who we help</p>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
              <li>Small and mid-sized businesses</li>
              <li>New Zealand and Australian organisations</li>
              <li>Businesses using Microsoft 365 and Azure</li>
              <li>Teams preparing for Microsoft Copilot and AI</li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-[#f7f9fc] px-6 py-14 sm:px-8 lg:px-10 lg:py-16 dark:border-slate-800 dark:bg-slate-900">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-semibold tracking-[-0.025em]">Our focus</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {[
              ["Microsoft 365 Security", "Identity, Conditional Access, Defender, devices, sharing and security configuration."],
              ["Azure Security", "Cloud identity, governance, policies, workloads, networking and monitoring."],
              ["Data Protection", "Microsoft Purview, sensitivity labels, DLP, information governance and data access."],
              ["AI & Copilot Security", "Security readiness for Microsoft Copilot, AI applications and agent-based workflows."],
            ].map(([title, text]) => (
              <article key={title} className="rounded-lg border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-950">
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-5xl px-6 py-14 sm:px-8 lg:px-10 lg:py-16">
          <h2 className="text-3xl font-semibold">Want to understand your current security position?</h2>
          <p className="mt-4 max-w-2xl leading-7 text-slate-300">Start with a focused Microsoft 365 security review and identify the areas worth addressing first.</p>
          <div className="mt-7 flex flex-wrap gap-4">
            <Link href="/contact" className="inline-flex rounded-md bg-[#2563eb] px-6 py-3.5 text-sm font-semibold text-white hover:bg-[#1d4ed8]">Book a Security Review →</Link>
            <Link href="/services" className="inline-flex rounded-md border border-slate-700 px-6 py-3.5 text-sm font-semibold text-white hover:border-slate-500">Explore Services</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
