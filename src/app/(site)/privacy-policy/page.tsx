import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Statement | My365Expert",
  description:
    "How My365Expert collects, uses, stores and protects personal information in accordance with New Zealand privacy requirements.",
};

const sections = [
  {
    title: "1. About this privacy statement",
    content: [
      "My365Expert (\"we\", \"us\", or \"our\") is a Microsoft 365, Azure and security consultancy based in Wellington, New Zealand.",
      "This privacy statement explains what personal information we collect, why we collect it, how we use and protect it, who may receive it, and the rights available to you under the New Zealand Privacy Act 2020.",
      "We aim to collect only information that is reasonably necessary for the purpose for which it is collected. This statement may be updated from time to time as our services or privacy practices change.",
    ],
  },
  {
    title: "2. Personal information we collect",
    content: [
      "Depending on how you interact with us, we may collect your name, work email address, phone number, company name, job title, the contents of enquiries or consultation requests, and information you choose to provide about your Microsoft environment or business requirements.",
      "When you use our website, technical information such as IP address, browser/device information, pages visited and security or diagnostic information may also be processed by our hosting, security and website service providers.",
      "We do not intentionally ask you to provide sensitive personal information through our general contact form. Please do not include passwords, credentials, security keys, financial information or other highly sensitive information in a website enquiry.",
    ],
  },
  {
    title: "3. How we collect information",
    content: [
      "We may collect personal information directly from you when you submit our contact form, email us, contact us through LinkedIn, request a consultation or assessment, or otherwise communicate with us.",
      "We may also receive information from service providers or platforms you use to contact us, such as LinkedIn lead-generation services. Where we collect personal information from another source, we will take reasonable steps to provide the information required by the Privacy Act, unless an exception applies.",
    ],
  },
  {
    title: "4. Why we collect and use your information",
    content: [
      "We collect and use personal information for purposes including responding to enquiries, arranging consultations or assessments, providing and managing our services, communicating with clients and prospective clients, maintaining business records, improving our website and services, preventing spam or abuse, and meeting legal or regulatory obligations.",
      "We will not use personal information for a materially unrelated purpose unless permitted by the Privacy Act or you have authorised the additional use.",
    ],
  },
  {
    title: "5. What happens if you do not provide information",
    content: [
      "Providing information through our contact form is voluntary. However, if you do not provide information that is reasonably necessary to respond to your enquiry, we may not be able to contact you or provide the requested service.",
    ],
  },
  {
    title: "6. Who may receive your information",
    content: [
      "We may provide personal information to people and organisations that need it to operate our business or provide services to you. This may include our authorised personnel and contractors, website and hosting providers, email delivery providers, security and anti-spam providers, CRM or scheduling providers, analytics providers where used, and professional or legal advisers where reasonably necessary.",
      "For lead generation, information may also be received or processed through platforms such as LinkedIn where you choose to submit a lead form.",
      "We do not sell your personal information.",
    ],
  },
  {
    title: "7. Overseas processing and disclosure",
    content: [
      "Some technology and service providers we use may store or process personal information outside New Zealand. This can include cloud hosting, email delivery, security, CRM, analytics and professional service providers.",
      "Where personal information is disclosed outside New Zealand, we will take reasonable steps to ensure the disclosure is handled in accordance with the Privacy Act 2020, including the requirements of Information Privacy Principle 12 where applicable.",
    ],
  },
  {
    title: "8. Security",
    content: [
      "We take reasonable technical and organisational safeguards to protect personal information against loss, unauthorised access, use, modification, disclosure and other misuse. Access to information is limited to people and providers who need it for legitimate business purposes.",
      "No internet transmission or storage system can be guaranteed to be completely secure. You should not send passwords, credentials, API keys or other secrets through our website contact form.",
    ],
  },
  {
    title: "9. How long we keep information",
    content: [
      "We keep personal information only for as long as reasonably necessary for the purpose for which it was collected, to manage our business relationship, or where we are required or permitted to retain it by law. When information is no longer required, we take reasonable steps to securely delete or de-identify it.",
    ],
  },
  {
    title: "10. Your privacy rights",
    content: [
      "Under the Privacy Act 2020, you can ask us whether we hold personal information about you and request access to that information. You can also ask us to correct information that you believe is inaccurate, incomplete or out of date.",
      "You can also contact us about concerns regarding how we have collected, used, stored or disclosed your personal information. We may need to verify your identity before responding to an access or correction request.",
    ],
  },
  {
    title: "11. Cookies, security tools and analytics",
    content: [
      "Our website may use cookies or similar technologies where needed for website functionality, security, performance or analytics. We also use Cloudflare Turnstile on our contact form to help distinguish legitimate users from automated submissions. Turnstile processes information from your browser and device to provide this security function.",
      "Where optional analytics or marketing technologies are used, we will use them in accordance with applicable privacy requirements and provide appropriate information about their use.",
    ],
  },
  {
    title: "12. Third-party websites and platforms",
    content: [
      "Our website may contain links to third-party websites or platforms, including LinkedIn. Those organisations have their own privacy practices and terms. We are not responsible for the privacy practices of third-party websites that we do not control.",
    ],
  },
  {
    title: "13. Privacy concerns and complaints",
    content: [
      "If you have a question, access or correction request, or concern about our handling of your personal information, please contact our privacy contact at consult@my365expert.co.",
      "We will aim to respond within a reasonable timeframe. If you are not satisfied with our response, you can contact the Office of the Privacy Commissioner in New Zealand about your concern.",
    ],
  },
  {
    title: "14. Changes to this statement",
    content: [
      "We may update this privacy statement when our services, technology or privacy obligations change. The latest version will be published on this page.",
      "Last updated: 31 August 2026.",
    ],
  },
];

export default function PrivacyPolicy() {
  return (
    <main className="bg-white text-slate-900">
      <section className="border-b border-slate-200 bg-[#f7f9fc] pt-24 sm:pt-28">
        <div className="mx-auto max-w-5xl px-6 pb-14 sm:px-8 lg:px-10 lg:pb-16">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2563eb]">Privacy</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl">Privacy Statement</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            How My365Expert handles personal information when you use our website or contact us.
          </p>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-5xl px-6 sm:px-8 lg:px-10">
          <div className="space-y-10 text-[15px] leading-7 text-slate-600">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-xl font-semibold tracking-[-0.015em] text-slate-950 sm:text-2xl">
                  {section.title}
                </h2>
                <div className="mt-3 space-y-3">
                  {section.content.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}

            <div className="border-t border-slate-200 pt-8">
              <p className="font-medium text-slate-800">My365Expert</p>
              <p>Wellington, New Zealand</p>
              <p>
                Privacy contact: <a href="mailto:consult@my365expert.co" className="text-[#2563eb] hover:underline">consult@my365expert.co</a>
              </p>
              <p className="mt-4">
                You can find information about your rights under the New Zealand Privacy Act 2020 on the website of the Office of the Privacy Commissioner.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
