import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Microsoft 365, Azure & AI Security Services | My365Expert",
  description: "Microsoft 365, Azure, SharePoint, Purview, Intune and AI security consulting focused on practical improvements.",
};

const services = [
  { number: "01", title: "Microsoft 365 & Azure Security", intro: "Assess and improve the security of your Microsoft cloud environment.", items: ["Azure subscription review", "Azure Policy", "Defender for Cloud", "Entra ID / IAM", "Conditional Access", "Security baselines", "Microsoft Secure Score", "Security recommendations"] },
  { number: "02", title: "SharePoint Security & Optimisation", intro: "Review access, structure and information management so SharePoint works securely and efficiently.", items: ["Permissions and access review", "External sharing", "Sites and libraries", "Metadata", "Information architecture", "Search optimisation", "SharePoint security configuration", "Copilot readiness"] },
  { number: "03", title: "Microsoft Purview & Information Protection", intro: "Protect sensitive information and establish practical data governance and compliance controls.", items: ["Microsoft Purview", "Sensitivity Labels", "Data Loss Prevention", "Auditing", "Information protection", "Data governance", "Compliance configuration"] },
  { number: "04", title: "Endpoint & Intune Security", intro: "Secure and manage Microsoft endpoints with consistent device and access controls.", items: ["Intune", "Device configuration", "Compliance policies", "Defender for Endpoint", "Endpoint security", "Windows security baseline", "Device onboarding", "Conditional Access integration"] },
  { number: "05", title: "Microsoft AI & Copilot Security", intro: "Help your organisation adopt Microsoft AI with the right data, access and governance controls in place.", items: ["Microsoft Copilot", "Copilot readiness", "Copilot Studio", "AI agents", "AI applications", "Data access and security", "AI governance", "SharePoint / Copilot security", "M365 AI security"] },
];

export default function Services() {
  return (
    <main className="bg-white text-slate-900">
      <section className="border-b border-slate-200 bg-[#f7f9fc] pt-24 sm:pt-28">
        <div className="mx-auto max-w-7xl px-6 pb-14 sm:px-8 lg:px-10 lg:pb-16">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2563eb]">Our services</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl lg:text-6xl">Practical Microsoft expertise, focused on security.</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">We help organisations assess, secure and optimise Microsoft 365, Azure and the technologies built around them.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-10 lg:py-16">
        <div className="divide-y divide-slate-200 border-y border-slate-200">
          {services.map((service) => (
            <article key={service.number} className="py-10 sm:py-12">
              <div className="grid gap-7 lg:grid-cols-[80px_0.8fr_1.2fr] lg:gap-10">
                <span className="text-sm font-semibold text-slate-400">{service.number}</span>
                <div><h2 className="text-2xl font-semibold tracking-[-0.02em] text-slate-950">{service.title}</h2><p className="mt-3 leading-7 text-slate-600">{service.intro}</p></div>
                <ul className="grid gap-x-8 gap-y-2 text-sm leading-7 text-slate-600 sm:grid-cols-2">
                  {service.items.map((item) => <li key={item} className="border-b border-slate-100 py-1.5">{item}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-950 text-white"><div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 lg:px-10 lg:py-16"><div className="grid gap-7 lg:grid-cols-[1fr_auto] lg:items-center"><div><p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">Not sure where to start?</p><h2 className="mt-3 text-3xl font-semibold tracking-[-0.025em] text-white">Let's look at your environment first.</h2><p className="mt-3 max-w-2xl leading-7 text-slate-300">A focused assessment can help identify the risks, gaps and improvements worth prioritising.</p></div><Link href="/contact" className="inline-flex items-center justify-center rounded-md bg-[#2563eb] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#1d4ed8]">Book a Consultation →</Link></div></div></section>
    </main>
  );
}
