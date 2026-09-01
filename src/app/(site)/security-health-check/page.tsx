import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Microsoft 365 & Azure Security Health Check | My365Expert",
  description:
    "Find out how secure your Microsoft 365 and Azure environment really is. My365Expert provides practical security health checks for businesses across NZ, Australia and the USA.",
  alternates: { canonical: "/security-health-check" },
  openGraph: {
    title: "Microsoft 365 & Azure Security Health Check | My365Expert",
    description:
      "A practical review of Microsoft 365, Azure, identity, endpoints, data and Copilot security — with clear priorities for what to fix first.",
    type: "website",
  },
};

const areas = [
  ["Microsoft 365", "Secure Score, Entra ID, MFA, Conditional Access, Defender and core security settings."],
  ["Azure", "Subscriptions, IAM/RBAC, Azure Policy, Defender for Cloud and key configuration risks."],
  ["Identity & access", "Identity controls, privileged access, authentication and access pathways."],
  ["Endpoints", "Intune, device compliance, Defender for Endpoint and Windows security controls."],
  ["Data protection", "SharePoint sharing, Purview, DLP, sensitivity labels and information protection."],
  ["AI & Copilot", "Copilot readiness, data exposure, AI governance and security considerations for agents."],
];

const deliverables = [
  "A clear Security Health Score",
  "Plain-English executive findings",
  "Risk and configuration gaps prioritised by impact",
  "A practical Fix Now / Fix Next / Improve Later roadmap",
  "A findings consultation to talk through the results",
];

export default function SecurityHealthCheckPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Microsoft 365 & Azure Security Health Check",
    provider: { "@type": "ProfessionalService", name: "My365Expert", url: "https://www.my365expert.co" },
    areaServed: ["New Zealand", "Australia", "United States"],
    serviceType: "Microsoft Cloud Security Assessment",
    url: "https://www.my365expert.co/security-health-check",
  };

  return (
    <main className="bg-white text-slate-900 dark:bg-slate-950 dark:text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />

      <section className="border-b border-slate-200 bg-[#f7f9fc] dark:border-slate-800 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-6 pb-16 pt-28 sm:px-8 sm:pb-20 lg:px-10 lg:pt-32">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2563eb]">Microsoft Cloud Security Health Check</p>
            <h1 className="mt-5 text-4xl font-semibold tracking-[-0.045em] text-slate-950 sm:text-5xl lg:text-6xl dark:text-white">
              Is your Microsoft environment actually secure?
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              We review the security controls that matter across Microsoft 365 and Azure, identify the gaps, and give you a practical plan for what to fix first.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="inline-flex items-center justify-center rounded-md bg-[#2563eb] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#1d4ed8]">Book a Free 20-Minute Review →</Link>
              <Link href="#what-we-check" className="inline-flex items-center justify-center rounded-md border border-slate-300 px-6 py-3.5 text-sm font-semibold text-slate-800 hover:bg-white dark:border-slate-700 dark:text-white dark:hover:bg-slate-900">See what we check</Link>
            </div>
            <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">Consultant-led. Practical. No unnecessary jargon.</p>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 dark:border-slate-800">
        <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-10 lg:py-14">
          <div className="grid gap-8 lg:grid-cols-3">
            <div><p className="text-sm font-semibold text-[#2563eb]">The problem</p><h2 className="mt-2 text-2xl font-semibold tracking-tight">Security gaps rarely sit in one place.</h2></div>
            <p className="leading-7 text-slate-600 dark:text-slate-300 lg:col-span-2">Microsoft environments grow quickly. Policies, identities, devices, data and applications can change without anyone having a complete picture of the risk. Our assessment gives you that picture — without turning it into a 200-page technical exercise.</p>
          </div>
        </div>
      </section>

      <section id="what-we-check" className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="max-w-2xl"><p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2563eb]">What we check</p><h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">One review across the Microsoft cloud.</h2></div>
        <div className="mt-10 grid gap-px overflow-hidden border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-3 dark:border-slate-800 dark:bg-slate-800">
          {areas.map(([title, text]) => <article key={title} className="bg-white p-7 dark:bg-slate-950"><h3 className="font-semibold">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{text}</p></article>)}
        </div>
      </section>

      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div><p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">What you receive</p><h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">A clear answer, not just a list of alerts.</h2></div>
            <ul className="divide-y divide-slate-800 border-y border-slate-800">{deliverables.map((item, i) => <li key={item} className="flex gap-5 py-5 text-slate-200"><span className="text-sm font-semibold text-blue-300">0{i + 1}</span><span>{item}</span></li>)}</ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div><p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2563eb]">Who it's for</p><h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em]">For businesses that use Microsoft, but don't have a dedicated security specialist.</h2><p className="mt-5 max-w-2xl leading-7 text-slate-600 dark:text-slate-300">Particularly useful for growing organisations with around 10–100 employees that want an independent view of their Microsoft security posture.</p></div>
          <div className="border border-slate-200 p-7 dark:border-slate-800"><p className="font-semibold">Start with a conversation</p><p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">Tell us what you're concerned about. We'll work out whether a health check is the right starting point.</p><Link href="/contact" className="mt-6 inline-flex text-sm font-semibold text-[#2563eb] hover:underline">Book a free 20-minute review →</Link></div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-[#f7f9fc] dark:border-slate-800 dark:bg-slate-900"><div className="mx-auto max-w-4xl px-6 py-14 text-center sm:px-8 lg:py-16"><h2 className="text-3xl font-semibold tracking-[-0.03em]">Know where you stand before you start fixing things.</h2><p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600 dark:text-slate-300">A short conversation is the easiest place to start.</p><Link href="/contact" className="mt-7 inline-flex rounded-md bg-[#2563eb] px-6 py-3.5 text-sm font-semibold text-white hover:bg-[#1d4ed8]">Book a Free 20-Minute Review →</Link></div></section>
    </main>
  );
}
