import type { Metadata } from "next";
import Link from "next/link";

const baseUrl = "https://www.my365expert.co";
const url = `${baseUrl}/microsoft-365-security-assessment-nz`;

export const metadata: Metadata = {
  title: "Microsoft 365 Security Assessment NZ | My365Expert",
  description: "Microsoft 365 security assessment for New Zealand businesses. Identify identity, access, device, data and collaboration security gaps with a practical remediation roadmap.",
  keywords: ["Microsoft 365 security assessment NZ", "M365 security assessment New Zealand", "Microsoft 365 security audit NZ", "Microsoft 365 security review NZ"],
  alternates: { canonical: "/microsoft-365-security-assessment-nz" },
  openGraph: { title: "Microsoft 365 Security Assessment NZ | My365Expert", description: "Identify Microsoft 365 security gaps and prioritise practical improvements.", url, type: "website" },
};

export default function AssessmentNzPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Microsoft 365 Security Assessment NZ",
    url,
    provider: { "@type": "ProfessionalService", name: "My365Expert", url: baseUrl },
    areaServed: { "@type": "Country", name: "New Zealand" },
    serviceType: "Microsoft 365 Security Assessment",
    description: "A practical review of Microsoft 365 identity, access, devices, collaboration, data protection and security controls.",
  };

  return (
    <main className="bg-white text-slate-900 dark:bg-slate-950 dark:text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <section className="border-b border-slate-200 bg-[#f7f9fc] px-6 pb-14 pt-32 sm:px-8 lg:px-10 lg:pb-16 dark:border-slate-800 dark:bg-slate-900">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2563eb]">Microsoft 365 Security Assessment NZ</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">Find the Microsoft 365 security gaps worth fixing first.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">A practical assessment for New Zealand businesses that want a clear view of identity, access, device, data and collaboration security risks.</p>
          <Link href="/contact" className="mt-8 inline-flex rounded-md bg-[#2563eb] px-6 py-3.5 text-sm font-semibold text-white hover:bg-[#1d4ed8]">Book a Security Review →</Link>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-14 sm:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <h2 className="text-3xl font-semibold">What the assessment covers</h2>
            <p className="mt-5 leading-8 text-slate-600 dark:text-slate-300">The assessment focuses on the controls that protect identities, devices, data and access to Microsoft 365 services.</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                ["Identity", "Entra ID, privileged roles, MFA and authentication."],
                ["Conditional Access", "Access policies, risky sign-ins and legacy authentication."],
                ["Devices", "Intune, compliance and endpoint protection coverage."],
                ["Collaboration", "SharePoint, OneDrive, guest access and external sharing."],
                ["Data", "Purview, sensitivity labels, DLP and sensitive information."],
                ["Threat protection", "Defender coverage, alerts and security visibility."],
                ["Governance", "Security ownership, configuration standards and review processes."],
                ["Priorities", "A practical remediation roadmap based on identified gaps."],
              ].map(([title, text]) => <article key={title} className="rounded-lg border border-slate-200 p-5 dark:border-slate-800"><h3 className="font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{text}</p></article>)}
            </div>
          </div>
          <aside className="h-fit rounded-xl border border-slate-200 bg-[#f7f9fc] p-7 dark:border-slate-800 dark:bg-slate-900">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#2563eb]">The outcome</p>
            <h2 className="mt-3 text-2xl font-semibold">Know what needs attention.</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">The value of an assessment is not a long list of settings. It is a clear understanding of material gaps, their business relevance and what to address next.</p>
          </aside>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-[#f7f9fc] px-6 py-14 sm:px-8 lg:px-10 lg:py-16 dark:border-slate-800 dark:bg-slate-900">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-semibold">Who is it for?</h2>
          <p className="mt-4 max-w-3xl leading-8 text-slate-600 dark:text-slate-300">This is designed for small and mid-sized organisations using Microsoft 365 that want an independent view of their current security posture or need a practical starting point for improvement.</p>
          <div className="mt-7 flex flex-wrap gap-3">
            {["20–50 employees","50–100 employees","Microsoft 365 users","Hybrid and remote teams","Businesses preparing for Copilot"].map((item) => <span key={item} className="rounded-full border border-slate-300 px-4 py-2 text-sm dark:border-slate-700">{item}</span>)}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-5xl px-6 py-14 sm:px-8 lg:px-10">
          <h2 className="text-3xl font-semibold">Ready to review your Microsoft 365 environment?</h2>
          <p className="mt-4 max-w-2xl leading-7 text-slate-300">Start with a focused conversation about your current environment and security priorities.</p>
          <Link href="/contact" className="mt-7 inline-flex rounded-md bg-[#2563eb] px-6 py-3.5 text-sm font-semibold text-white hover:bg-[#1d4ed8]">Book a Free 20-Minute Review →</Link>
        </div>
      </section>
    </main>
  );
}
