import ContactForm from "@/components/Contact/Form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact My365Expert | Microsoft 365, Azure & Security Consulting",
  description: "Talk to My365Expert about Microsoft 365, Azure, SharePoint, Intune, Purview or AI security.",
};

export default function ContactPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="border-b border-slate-200 bg-[#f7f9fc] pt-24 sm:pt-28">
        <div className="mx-auto max-w-7xl px-6 pb-14 sm:px-8 lg:px-10 lg:pb-16">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2563eb]">Get in touch</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl lg:text-6xl">Let's talk about your Microsoft environment.</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">Tell us what you are trying to solve. Whether it is security, governance, SharePoint, Intune or AI adoption, we can start with a conversation.</p>
        </div>
      </section>
      <ContactForm />
    </main>
  );
}
