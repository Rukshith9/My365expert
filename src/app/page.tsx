import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My365Expert | Microsoft 365, Azure & AI Security Consulting",
  description: "Practical Microsoft 365, Azure, SharePoint, Intune, Purview and Copilot security consulting for businesses.",
};

const services = [
  ["01", "M365 & Azure Security", "Assess and strengthen your Microsoft cloud environment, identity controls and security configuration."],
  ["02", "SharePoint Security & Optimisation", "Improve permissions, external sharing, information architecture, search and Copilot readiness."],
  ["03", "Purview & Information Protection", "Protect sensitive information with practical data governance, DLP, auditing and compliance controls."],
  ["04", "Endpoint & Intune Security", "Secure devices and access with Intune, Defender for Endpoint, compliance and modern endpoint controls."],
  ["05", "AI & Copilot Security", "Prepare for Microsoft Copilot and AI adoption with sensible security, governance and data controls."],
];

const capabilities = ["Microsoft 365", "Azure", "Entra ID", "SharePoint", "Intune", "Purview", "Defender", "Copilot"];

export default function Home() {
  return (
    <main className="bg-white text-slate-900">
      <section className="border-b border-slate-200 bg-[#f7f9fc] pt-24 sm:pt-28">
        <div className="mx-auto max-w-7xl px-6 pb-16 sm:px-8 lg:px-10 lg:pb-20">
          <div className="max-w-4xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-[#2563eb]">Microsoft security consulting</p>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-0.04em] text-slate-950 sm:text-6xl lg:text-7xl">Secure. Optimise. Modernise.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">Microsoft 365, Azure and AI security consulting for organisations that want practical solutions, not unnecessary complexity.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="inline-flex items-center justify-center rounded-md bg-[#2563eb] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#1d4ed8]">Book a Consultation</Link>
              <Link href="/services" className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 transition hover:bg-slate-50">Explore our services →</Link>
            </div>
          </div>
          <div className="mt-12 border-t border-slate-200 pt-5"><p className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-slate-400">Microsoft ecosystem</p><div className="flex flex-wrap gap-x-7 gap-y-2 text-sm font-medium text-slate-600">{capabilities.map((item) => <span key={item}>{item}</span>)}</div></div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20"><div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20"><div><p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2563eb]">The challenge</p><h2 className="mt-3 text-3xl font-semibold tracking-[-0.025em] text-slate-950 sm:text-4xl">Microsoft makes powerful tools available. Securing them properly is another matter.</h2></div><div className="max-w-2xl text-lg leading-8 text-slate-600"><p>Microsoft 365 and Azure can become complicated quickly. Permissions grow, policies get missed, devices fall out of compliance and sensitive information can end up in places it should not.</p><p className="mt-5">My365Expert helps you understand what is happening in your environment, identify what matters and turn it into a practical improvement plan.</p></div></div></section>

      <section className="border-y border-slate-200 bg-[#f7f9fc]"><div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20"><div className="mb-9 max-w-2xl"><p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2563eb]">What we do</p><h2 className="mt-3 text-3xl font-semibold tracking-[-0.025em] text-slate-950 sm:text-4xl">Focused Microsoft expertise, built around security.</h2></div><div className="divide-y divide-slate-200 border-y border-slate-200">{services.map(([number,title,description])=><Link key={number} href="/services" className="group grid gap-4 py-6 transition sm:grid-cols-[70px_1fr_auto] sm:items-start sm:gap-8"><span className="text-sm font-semibold text-slate-400">{number}</span><div><h3 className="text-xl font-semibold text-slate-950 group-hover:text-[#2563eb]">{title}</h3><p className="mt-1.5 max-w-2xl leading-7 text-slate-600">{description}</p></div><span className="hidden text-slate-400 transition group-hover:translate-x-1 group-hover:text-[#2563eb] sm:block">→</span></Link>)}</div></div></section>

      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20"><div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-20"><div><p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2563eb]">How we think</p><h2 className="mt-3 max-w-md text-2xl font-semibold leading-tight tracking-[-0.02em] text-slate-950 sm:text-3xl">Technology is only part of the problem.</h2></div><div><blockquote className="max-w-xl border-l-2 border-[#2563eb] pl-6 text-lg leading-8 text-slate-700 sm:text-xl">Good security is not about turning on every Microsoft feature. It is about understanding your environment, knowing where the risks are and making sensible improvements without disrupting the business.</blockquote><p className="mt-5 pl-6 text-sm font-medium text-slate-500">My365Expert — Microsoft 365, Azure & Security Consulting</p></div></div></section>

      <section className="bg-slate-950 text-white"><div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20"><div className="max-w-2xl"><p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">Our approach</p><h2 className="mt-3 text-3xl font-semibold tracking-[-0.025em] text-white sm:text-4xl">Understand first. Improve what matters.</h2></div><div className="mt-10 grid gap-0 border-y border-white/15 sm:grid-cols-2 lg:grid-cols-4">{[["01","Understand","Learn how your environment works."],["02","Assess","Identify risks, gaps and opportunities."],["03","Prioritise","Focus on what actually matters."],["04","Improve","Implement practical, sustainable changes."]].map(([n,t,d])=><div key={n} className="border-b border-white/15 p-6 last:border-b-0 sm:border-r lg:border-b-0"><span className="text-sm text-slate-400">{n}</span><h3 className="mt-6 text-xl font-semibold text-white">{t}</h3><p className="mt-2 leading-7 text-slate-300">{d}</p></div>)}</div></div></section>

      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20"><div className="border border-slate-200 bg-[#f7f9fc] p-7 sm:p-10 lg:p-12"><div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center"><div><p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2563eb]">Start here</p><h2 className="mt-3 text-3xl font-semibold tracking-[-0.025em] text-slate-950 sm:text-4xl">Not sure where your Microsoft environment stands?</h2><p className="mt-4 max-w-2xl leading-7 text-slate-600">Start with a Microsoft 365 & Azure Security Health Check. We will identify security gaps, configuration issues and practical quick wins.</p><p className="mt-5 text-sm font-medium text-slate-500">Security gaps · Identity risks · Policy issues · Quick wins</p></div><Link href="/contact" className="inline-flex items-center justify-center rounded-md bg-[#2563eb] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#1d4ed8]">Book a Consultation →</Link></div></div></section>

      <section className="border-t border-slate-200"><div className="mx-auto max-w-7xl px-6 py-16 text-center sm:px-8 lg:px-10 lg:py-20"><h2 className="text-3xl font-semibold tracking-[-0.025em] text-slate-950 sm:text-4xl">Need help with Microsoft 365, Azure or security?</h2><p className="mx-auto mt-3 max-w-xl leading-7 text-slate-600">Tell us what you are trying to solve. We will start with the environment, the risk and the outcome — not a sales pitch.</p><Link href="/contact" className="mt-6 inline-flex text-sm font-semibold text-[#2563eb] hover:text-[#1d4ed8]">Let&apos;s have a conversation →</Link></div></section>
    </main>
  );
}
