import type { Metadata } from "next";
import Link from "next/link";

const baseUrl = "https://www.my365expert.co";
const url = `${baseUrl}/microsoft-365-security-consultant-nz`;

export const metadata: Metadata = {
  title: "Microsoft 365 Security Consultant NZ | My365Expert",
  description: "Microsoft 365 security consulting for New Zealand businesses. Review Entra ID, MFA, Conditional Access, Defender, Intune, SharePoint and data protection.",
  keywords: ["Microsoft 365 security consultant NZ", "Microsoft 365 consultant New Zealand", "M365 security consultant NZ", "Microsoft security consultant NZ"],
  alternates: { canonical: "/microsoft-365-security-consultant-nz" },
  openGraph: { title: "Microsoft 365 Security Consultant NZ | My365Expert", description: "Practical Microsoft 365 security consulting for New Zealand businesses.", url, type: "website" },
};

export default function ConsultantNzPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Microsoft 365 Security Consulting in New Zealand",
    url,
    provider: { "@type": "ProfessionalService", name: "My365Expert", url: baseUrl },
    areaServed: { "@type": "Country", name: "New Zealand" },
    serviceType: "Microsoft 365 Security Consulting",
    description: "Security consulting covering Microsoft Entra ID, MFA, Conditional Access, Defender, Intune, SharePoint and Microsoft Purview.",
  };

  return (
    <main className="bg-white text-slate-900 dark:bg-slate-950 dark:text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <section className="border-b border-slate-200 bg-[#f7f9fc] px-6 pb-14 pt-32 sm:px-8 lg:px-10 lg:pb-16 dark:border-slate-800 dark:bg-slate-900">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2563eb]">Microsoft 365 Security Consultant NZ</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">Microsoft 365 security consulting for New Zealand businesses.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">My365Expert helps NZ organisations assess and improve Microsoft 365 security across identity, devices, collaboration, data protection and threat protection.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact" className="inline-flex rounded-md bg-[#2563eb] px-6 py-3.5 text-sm font-semibold text-white hover:bg-[#1d4ed8]">Book a Security Review →</Link>
            <Link href="/services/microsoft-365-azure-security" className="inline-flex rounded-md border border-slate-300 px-6 py-3.5 text-sm font-semibold hover:border-slate-400 dark:border-slate-700">M365 Security Services</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-14 sm:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <h2 className="text-3xl font-semibold">What a Microsoft 365 security consultant can review</h2>
            <p className="mt-5 leading-8 text-slate-600 dark:text-slate-300">A useful review looks at how Microsoft 365 is configured and how those controls work together. The focus is on material gaps rather than simply maximising a security score.</p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {["Microsoft Entra ID and privileged access","MFA and Conditional Access","Microsoft Defender coverage","Intune and device compliance","SharePoint and OneDrive permissions","Guest and external access","Microsoft Purview and DLP","Security monitoring and governance"].map((item) => <li key={item} className="rounded-lg border border-slate-200 px-5 py-4 text-sm font-medium dark:border-slate-800">{item}</li>)}
            </ul>
          </div>
          <aside className="h-fit rounded-xl border border-slate-200 bg-[#f7f9fc] p-7 dark:border-slate-800 dark:bg-slate-900">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#2563eb]">For NZ SMBs</p>
            <h2 className="mt-3 text-2xl font-semibold">Practical security, not enterprise complexity.</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">The aim is to establish controls that fit the organisation, its users and its Microsoft environment.</p>
          </aside>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-[#f7f9fc] px-6 py-14 sm:px-8 lg:px-10 lg:py-16 dark:border-slate-800 dark:bg-slate-900">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-semibold">Common reasons businesses engage a consultant</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              ["Before an audit", "Understand the current security position and prioritise remediation."],
              ["Before Copilot", "Review identity, permissions and data governance before wider AI adoption."],
              ["After rapid growth", "Bring consistency to Microsoft 365 security as users, devices and services increase."],
            ].map(([title, text]) => <article key={title} className="rounded-lg border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-950"><h3 className="text-lg font-semibold">{title}</h3><p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-5xl px-6 py-14 sm:px-8 lg:px-10">
          <h2 className="text-3xl font-semibold">Start with a Microsoft 365 security assessment.</h2>
          <p className="mt-4 max-w-2xl leading-7 text-slate-300">Get a clear view of the most important security gaps and the practical improvements to consider next.</p>
          <Link href="/microsoft-365-security-assessment-nz" className="mt-7 inline-flex rounded-md bg-[#2563eb] px-6 py-3.5 text-sm font-semibold text-white hover:bg-[#1d4ed8]">View the Assessment →</Link>
        </div>
      </section>
    </main>
  );
}
