import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Microsoft 365 & Azure Security Services | My365Expert",
  description: "Choose the Microsoft security services your business actually needs. Practical security for growing businesses across New Zealand and Australia.",
  alternates: { canonical: "/security-health-check" },
  openGraph: {
    title: "Microsoft 365 & Azure Security Services | My365Expert",
    description: "Choose one security service, combine several, or secure the whole Microsoft environment.",
    type: "website",
  },
};

const services = [
  { number: "01", title: "Microsoft 365 Security", description: "Secure Microsoft 365 and reduce common identity, email and collaboration risks.", checks: ["Secure Score", "Entra ID & MFA", "Conditional Access", "Defender settings", "Security baseline"] },
  { number: "02", title: "Azure Security", description: "Find and prioritise the security gaps across your Azure environment.", checks: ["Subscriptions & RBAC", "Azure Policy", "Defender for Cloud", "Network security", "Configuration risks"] },
  { number: "03", title: "Identity & Access", description: "Make sure the right people have the right access and privileged accounts are properly protected.", checks: ["Entra ID", "Privileged access", "MFA & authentication", "Conditional Access", "Access risk"] },
  { number: "04", title: "Device & Endpoint Security", description: "Improve the security of company laptops and devices with practical Microsoft endpoint controls.", checks: ["Intune", "Device compliance", "Defender for Endpoint", "Windows security", "Patch & onboarding"] },
  { number: "05", title: "Data & AI Security", description: "Protect business information across Microsoft 365, SharePoint and emerging AI and Copilot workloads.", checks: ["SharePoint sharing", "Purview & DLP", "Sensitivity labels", "Copilot readiness", "AI data exposure"] },
];

const outcomes = ["A clear view of your security posture", "Highest-impact risks identified first", "Plain-English executive findings", "Practical recommendations", "A prioritised Fix Now / Fix Next / Improve Later roadmap"];

export default function SecurityHealthCheckPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Microsoft 365 & Azure Security Services",
    provider: { "@type": "ProfessionalService", name: "My365Expert", url: "https://www.my365expert.co" },
    areaServed: ["New Zealand", "Australia"],
    serviceType: "Microsoft Cloud Security Services",
    url: "https://www.my365expert.co/security-health-check",
  };

  return (
    <main className="bg-white text-slate-900 dark:bg-slate-950 dark:text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />

      <section className="border-b border-slate-200 bg-[#f7f9fc] dark:border-slate-800 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-6 pb-16 pt-28 sm:px-8 sm:pb-20 lg:px-10 lg:pt-32">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2563eb]">Microsoft Cloud Security</p>
            <h1 className="mt-5 text-4xl font-semibold tracking-[-0.045em] text-slate-950 sm:text-5xl lg:text-6xl dark:text-white">Get the security help your business actually needs.</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">You don't need to buy a huge security package. Choose the areas you need help with, combine several services, or let us review the environment and recommend where to start.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="inline-flex items-center justify-center rounded-md bg-[#2563eb] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#1d4ed8]">Book a Free 20-Minute Review →</Link>
              <Link href="#services" className="inline-flex items-center justify-center rounded-md border border-slate-300 px-6 py-3.5 text-sm font-semibold text-slate-800 hover:bg-white dark:border-slate-700 dark:text-white dark:hover:bg-slate-900">See the 5 services</Link>
            </div>
            <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">Choose one. Choose several. Or secure the whole environment.</p>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 dark:border-slate-800">
        <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-10 lg:py-14">
          <div className="grid gap-8 lg:grid-cols-3">
            <div><p className="text-sm font-semibold text-[#2563eb]">Built for growing businesses</p><h2 className="mt-2 text-2xl font-semibold tracking-tight">Security should fit your business — not the other way around.</h2></div>
            <p className="leading-7 text-slate-600 dark:text-slate-300 lg:col-span-2">If you use Microsoft 365 or Azure but don't have a dedicated security specialist, it can be difficult to know what matters. We make that simple. Start with one area, combine multiple services, or ask us to assess the bigger picture.</p>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="max-w-3xl"><p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2563eb]">Choose your security areas</p><h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">Five focused services. One practical approach.</h2><p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">Each service can stand alone or be combined into a broader security assessment. We'll help you decide what is actually worth doing.</p></div>
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {services.map((service) => (
            <article key={service.number} className="border border-slate-200 p-7 transition hover:border-slate-300 hover:shadow-sm dark:border-slate-800 dark:hover:border-slate-700">
              <div className="flex items-start justify-between gap-5"><span className="text-sm font-semibold text-[#2563eb]">{service.number}</span><span className="text-xs font-medium uppercase tracking-[0.14em] text-slate-400">Security service</span></div>
              <h3 className="mt-5 text-2xl font-semibold tracking-tight">{service.title}</h3>
              <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{service.description}</p>
              <ul className="mt-6 grid gap-2 sm:grid-cols-2">{service.checks.map((check) => <li key={check} className="flex gap-2 text-sm text-slate-600 dark:text-slate-300"><span className="text-[#2563eb]">✓</span><span>{check}</span></li>)}</ul>
            </article>
          ))}
          <article className="border border-dashed border-slate-300 bg-[#f7f9fc] p-7 dark:border-slate-700 dark:bg-slate-900">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#2563eb]">Not sure what you need?</p>
            <h3 className="mt-4 text-2xl font-semibold tracking-tight">That's exactly what the free review is for.</h3>
            <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">Tell us what you're worried about and how your business uses Microsoft. We'll point you toward the most useful starting point — without pushing a package you don't need.</p>
            <Link href="/contact" className="mt-6 inline-flex rounded-md bg-[#2563eb] px-5 py-3 text-sm font-semibold text-white hover:bg-[#1d4ed8]">Talk to us →</Link>
          </article>
        </div>
      </section>

      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div><p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">What you get</p><h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">A clear security picture — without the security jargon.</h2><p className="mt-5 leading-7 text-slate-300">The goal isn't hundreds of findings. It's to tell you what matters and what you should do about it.</p></div>
            <ul className="divide-y divide-slate-800 border-y border-slate-800">{outcomes.map((item, i) => <li key={item} className="flex gap-5 py-5 text-slate-200"><span className="text-sm font-semibold text-blue-300">0{i + 1}</span><span>{item}</span></li>)}</ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div><p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2563eb]">Who it's for</p><h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em]">For organisations with around 10–100 employees using Microsoft 365, Azure or both.</h2><p className="mt-5 max-w-2xl leading-7 text-slate-600 dark:text-slate-300">Especially useful when the business relies on Microsoft but doesn't have a dedicated security specialist.</p></div>
          <div className="border border-slate-200 p-7 dark:border-slate-800"><p className="font-semibold">Start with a free conversation</p><p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">No long sales pitch. We'll understand your environment and help you decide whether one service or a broader review makes sense.</p><Link href="/contact" className="mt-6 inline-flex text-sm font-semibold text-[#2563eb] hover:underline">Book your free 20-minute review →</Link></div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-[#f7f9fc] dark:border-slate-800 dark:bg-slate-900"><div className="mx-auto max-w-4xl px-6 py-14 text-center sm:px-8 lg:py-16"><h2 className="text-3xl font-semibold tracking-[-0.03em]">Not sure which service you need?</h2><p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600 dark:text-slate-300">Let's work it out together. Start with a free 20-minute review.</p><Link href="/contact" className="mt-7 inline-flex rounded-md bg-[#2563eb] px-6 py-3.5 text-sm font-semibold text-white hover:bg-[#1d4ed8]">Book a Free 20-Minute Review →</Link></div></section>
    </main>
  );
}
