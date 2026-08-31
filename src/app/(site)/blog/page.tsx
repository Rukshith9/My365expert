import React from "react";
import BlogList from "@/components/Blog/BlogList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Microsoft 365, Azure & AI Security Insights | My365Expert",
  description:
    "Practical Microsoft 365, Azure, SharePoint, Intune, Purview and Copilot security insights for businesses.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Microsoft 365, Azure & AI Security Insights | My365Expert",
    description: "Practical guidance on Microsoft security, cloud, data protection, endpoints and AI adoption.",
    type: "website",
  },
};

export default function Page() {
  return (
    <main className="bg-white dark:bg-slate-950">
      <section className="border-b border-slate-200 bg-[#f7f9fc] px-6 pb-14 pt-32 sm:px-8 lg:px-10 lg:pb-16 dark:border-slate-800 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2563eb]">Insights</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-5xl dark:text-white">Microsoft security, explained simply.</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">Practical guidance on Microsoft 365, Azure, SharePoint, Intune, Purview and AI security — written for people who need to make sensible decisions, not just learn another product.</p>
        </div>
      </section>
      <BlogList />
    </main>
  );
}
