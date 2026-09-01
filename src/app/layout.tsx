import { DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { ThemeProvider } from "next-themes";
import ScrollToTop from "@/components/ScrollToTop";
import { ToastContainer } from "react-toastify";
import { Metadata } from "next";
import GoogleAnalytics from "@/components/Analytics/GoogleAnalytics";

const dmsans = DM_Sans({ subsets: ["latin"] });

const siteUrl = "https://www.my365expert.co";
const title = "My365Expert | Microsoft 365, Azure & AI Security Consulting";
const description =
  "Practical Microsoft 365, Azure, SharePoint, Intune, Purview and AI security consulting for businesses in New Zealand and Australia.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: title, template: "%s | My365Expert" },
  description,
  keywords: [
    "Microsoft 365 security consultant NZ",
    "Azure security consultant NZ",
    "Microsoft 365 security assessment",
    "SharePoint security consultant",
    "Microsoft Copilot security",
    "AI security consultant NZ",
  ],
  alternates: { canonical: siteUrl },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "My365Expert",
    locale: "en_NZ",
    type: "website",
    images: [{ url: "/images/social/og-image.png", width: 1800, height: 1600 }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/social/og-image.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-NZ" suppressHydrationWarning>
      <body className={dmsans.className}>
        <ThemeProvider attribute="class" enableSystem={false} defaultTheme="light">
          <GoogleAnalytics />
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
          <ToastContainer />
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "My365Expert",
              url: siteUrl,
              description,
              areaServed: ["New Zealand", "Australia"],
              serviceType: [
                "Microsoft 365 Security Consulting",
                "Azure Security Consulting",
                "SharePoint Security",
                "Microsoft Purview Consulting",
                "Microsoft Intune Security",
                "AI and Copilot Security Consulting",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
