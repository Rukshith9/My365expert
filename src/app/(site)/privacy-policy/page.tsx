import React from "react";
import { Metadata } from "next";
import HeroSub from "@/components/SharedComponents/HeroSub";

export const metadata: Metadata = {
  title: "Privacy Policy | MY365EXPERT",
};

const PrivacyPolicy = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/services", text: "Services" },
  ];

  return (
    <>
      <HeroSub
        title="Privacy Policy"
        description="Discover a wealth of insightful materials meticulously crafted to provide you with a comprehensive understanding of the latest trends."
        breadcrumbLinks={breadcrumbLinks}
      />

      <section className="pb-10  dark:bg-dark  dark:bg-darkmode">
        <div className="container lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) mx-auto px-4">
          <div className="max-w-5xl">
            <div className="space-y-8 text-black dark:text-white">
              <div className="space-y-3">
                <h3 className="text-midnight_text dark:text-white text-2xl font-bold">
                  1. Introduction
                </h3>
                <p className="text-base leading-relaxed">
                  My365Expert (“we”, “our”, “us”) respects your privacy and is
                  committed to protecting your personal information. This
                  Privacy Policy explains how we collect, use, store, and
                  protect your information when you interact with us through our
                  website, LinkedIn ads, lead forms, or other services. By using
                  our services or submitting your information, you agree to this
                  Privacy Policy.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-midnight_text dark:text-white text-2xl font-bold">
                  2. Information We Collect
                </h3>
                <p className="text-base leading-relaxed">
                  We may collect the following personal information:
                </p>
                <ul className="space-y-2">
                  <li className="list-none">• Full name</li>
                  <li className="list-none">• Email address (Work/personal)</li>
                  <li className="list-none">• Phone number</li>
                  <li className="list-none">• Company name</li>
                  <li className="list-none">• Job title</li>
                  <li className="list-none">
                    • Any information you voluntarily submit through forms,
                    messages, or consultations
                  </li>
                </ul>
                <p className="text-base leading-relaxed">
                  We do not intentionally collect sensitive personal
                  information.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-midnight_text dark:text-white text-2xl font-bold">
                  3. How We Collect Information
                </h3>
                <p className="text-base leading-relaxed">
                  We collect information when you:
                </p>
                <ul className="space-y-2">
                  <li className="list-none">• Fill out forms on our website</li>
                  <li className="list-none">
                    • Submit a LinkedIn Lead Gen Form
                  </li>
                  <li className="list-none">
                    • Contact us via email, LinkedIn, or other platforms
                  </li>
                  <li className="list-none">
                    • Request a consultation, assessment, or service
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="text-midnight_text dark:text-white text-2xl font-bold">
                  4. How We Use Your Information
                </h3>
                <p className="text-base leading-relaxed">
                  We use your information to:
                </p>
                <ul className="space-y-2">
                  <li className="list-none">
                    • Contact you about our services
                  </li>
                  <li className="list-none">
                    • Provide Microsoft 365 security, compliance, and AI-related
                    consultations
                  </li>
                  <li className="list-none">
                    • Respond to enquiries and provide support
                  </li>
                  <li className="list-none">
                    • Send relevant business communications (you may opt out
                    anytime)
                  </li>
                  <li className="list-none">
                    • Improve our services and marketing effectiveness
                  </li>
                </ul>
                <p className="text-base leading-relaxed">
                  We do not sell your personal information to third parties.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-midnight_text dark:text-white text-2xl font-bold">
                  5. Legal Basis for Processing
                </h3>
                <p className="text-base leading-relaxed">
                  We process personal information based on:
                </p>
                <ul className="space-y-2">
                  <li className="list-none">• Your consent</li>
                  <li className="list-none">• Legitimate business interests</li>
                  <li className="list-none">
                    • Contractual necessity (where applicable)
                  </li>
                  <li className="list-none">
                    • Compliance with legal obligations
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="text-midnight_text dark:text-white text-2xl font-bold">
                  6. Sharing of Information
                </h3>
                <p className="text-base leading-relaxed">
                  We may share your information only with:
                </p>
                <ul className="space-y-2">
                  <li className="list-none">
                    • Trusted service providers (e.g., CRM, email, scheduling
                    tools)
                  </li>
                  <li className="list-none">
                    • Platforms used for lead collection such as LinkedIn
                  </li>
                </ul>
                <p className="text-base leading-relaxed">
                  All third parties are required to protect your data and use it
                  only for intended purposes.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-midnight_text dark:text-white text-2xl font-bold">
                  7. Data Storage and Security
                </h3>
                <p className="text-base leading-relaxed">
                  We take reasonable technical and organizational measures to
                  protect your personal information from loss, misuse,
                  unauthorized access, or disclosure. Your information is stored
                  securely and accessed only by authorized personnel.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-midnight_text dark:text-white text-2xl font-bold">
                  8. Data Retention
                </h3>
                <p className="text-base leading-relaxed">
                  We retain your personal information only as long as necessary
                  to fulfill the purposes outlined in this policy or as required
                  by law.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-midnight_text dark:text-white text-2xl font-bold">
                  9. Your Rights
                </h3>
                <p className="text-base leading-relaxed">
                  Depending on your location, you may have the right to:
                </p>
                <ul className="space-y-2">
                  <li className="list-none">
                    • Access your personal information
                  </li>
                  <li className="list-none">
                    • Request correction of inaccurate information
                  </li>
                  <li className="list-none">• Request deletion of your data</li>
                  <li className="list-none">
                    • Withdraw consent for marketing communications
                  </li>
                </ul>
                <p className="text-base leading-relaxed">
                  To exercise your rights, contact us using the details below.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-midnight_text dark:text-white text-2xl font-bold">
                  10. Cookies and Tracking
                </h3>
                <p className="text-base leading-relaxed">
                  Our website may use cookies or tracking tools to improve user
                  experience and analyze traffic. You can control cookies
                  through your browser settings.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-midnight_text dark:text-white text-2xl font-bold">
                  11. Third-Party Links
                </h3>
                <p className="text-base leading-relaxed">
                  Our website or ads may contain links to third-party websites.
                  We are not responsible for their privacy practices.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-midnight_text dark:text-white text-2xl font-bold">
                  12. Changes to This Policy
                </h3>
                <p className="text-base leading-relaxed">
                  We may update this Privacy Policy from time to time. Any
                  changes will be posted on this page with an updated date.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-midnight_text dark:text-white text-2xl font-bold">
                  13. Contact Us
                </h3>
                <p className="text-base leading-relaxed">
                  If you have any questions about this Privacy Policy or how we
                  handle your personal information
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
