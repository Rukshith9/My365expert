import type { Metadata } from "next";
import Link from "next/link";

const baseUrl = "https://www.my365expert.co";
const url = `${baseUrl}/microsoft-365-security-for-smb`;

export const metadata: Metadata = {
  title: "Microsoft 365 Security for SMBs | NZ & Australia | My365Expert",
  description: "Practical Microsoft 365 security for small and mid-sized businesses in New Zealand and Australia. Protect identity, devices, data, SharePoint and Microsoft 365 access.",
  keywords: ["Microsoft 365 security SMB", "Microsoft 365 security small business", "Microsoft 365 security NZ SMB", "Microsoft 365 security Australia SMB"],
  alternates: { canonical: "/microsoft-365-security-for-smb" },
  openGraph: { title: "Microsoft 365 Security for SMBs | My365Expert", description: "Practical Microsoft 365 security for small and mid-sized businesses.", url, type: "website" },
};

export default function SmbSecurityPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Microsoft 365 Security for SMBs",
    url,
    provider: { "@type": "ProfessionalService", name: "My365Expert", url: baseUrl },
    areaServed: ["New Zealand", "Australia"],
    serviceType: "Microsoft 365 Security Consulting for Small and Mid-Sized Businesses",
    description: "Practical Microsoft 365 security assessment and improvement for small and mid-sized businesses.",
  };

  return (
    <main className="bg-white text-slate-900 dark:bg-slate-950 dark:text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <section className="border-b border-slate-200 bg-[#f7f9fc] px-6 pb-14 pt-32 sm:px-8 lg:px-10 lg:pb-16 dark:border-slate-800 dark:bg-slate-900">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2563eb]">Microsoft 365 Security for SMBs</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">Microsoft 365 security without unnecessary enterprise complexity.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">Small and mid-sized businesses need practical security controls that protect users and data while keeping day-to-day work straightforward.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact" className="inline-flex rounded-md bg-[#2563eb] px-6 py-3.5 text-sm font-semibold text-white hover:bg-[#1d4ed8]">Book a Security Review →</Link>
            <Link href="/microsoft-365-security-assessment-nz" className="inline-flex rounded-md border border-slate-300 px-6 py-3.5 text-sm font-semibold dark:border-slate-700">See the Assessment</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-14 sm:px-8 lg:py-20">
        <h2 className="text-3xl font-semibold">What should an SMB secure first?</h2>
        <p className="mt-5 max-w-3xl leading-8 text-slate-600 dark:text-slate-300">For most Microsoft 365 environments, security improvements should begin with the controls that protect identity and access, then expand into devices, data, collaboration and monitoring.</p>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {[
            ["1. Identity", "Protect administrator accounts, enforce strong authentication and reduce unnecessary privilege."],
            ["2. Conditional Access", "Control access based on identity, device, application and risk."],
            ["3. Devices", "Manage business devices with Intune and use endpoint protection where appropriate."],
            ["4. Data", "Understand sensitive information and apply sensible sharing, DLP and classification controls."],
            ["5. SharePoint", "Review permissions, guests, external sharing and information architecture."],
            ["6. Threat protection", "Check Defender coverage, alerts and visibility across the Microsoft environment."],
          ].map(([title, text]) => <article key={title} className="rounded-lg border border-slate-200 p-6 dark:border-slate-800"><h3 className="text-lg font-semibold">{title}</h3><p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{text}</p></article>)}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-[#f7f9fc] px-6 py-14 sm:px-8 lg:px-10 lg:py-16 dark:border-slate-800 dark:bg-slate-900">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-semibold">Why Microsoft 365 security matters more as the business grows</h2>
          <div className="mt-7 grid gap-6 md:grid-cols-3">
            <article><h3 className="font-semibold">More users</h3><p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">More identities and devices create more access paths that need to be managed.</p></article>
            <article><h3 className="font-semibold">More data</h3><p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">Collaboration creates more business information across SharePoint, OneDrive and other services.</p></article>
            <article><h3 className="font-semibold">More AI</h3><p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">Copilot and AI tools increase the importance of good permissions and data governance.</p></article>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-5xl px-6 py-14 sm:px-8 lg:px-10">
          <h2 className="text-3xl font-semibold">Build a practical Microsoft 365 security baseline.</h2>
          <p className="mt-4 max-w-2xl leading-7 text-slate-300">Start by understanding your current environment, then prioritise the security improvements that matter most to your business.</p>
          <Link href="/microsoft-365-security-assessment-nz" className="mt-7 inline-flex rounded-md bg-[#2563eb] px-6 py-3.5 text-sm font-semibold text-white hover:bg-[#1d4ed8]">Start with an Assessment →</Link>
        </div>
      </section>
    </main>
  );
}
