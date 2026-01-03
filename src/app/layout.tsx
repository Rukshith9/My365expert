import { DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { ThemeProvider } from "next-themes";
import ScrollToTop from "@/components/ScrollToTop";
import { ToastContainer } from "react-toastify";
import { Metadata } from "next";
const dmsans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My365Expert | Microsoft 365 Security, Compliance & AI Experts",
  description:
    "Secure, optimise, and future-proof your Microsoft 365 environment. My365Expert helps businesses improve security, compliance, and AI readiness. Free consultation available.",
  icons: {
    icon: [{ url: "/favicon.ico" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "My365Expert | Microsoft 365 Security, Compliance & AI Experts",
    description:
      "Secure, optimise, and future-proof your Microsoft 365 environment. My365Expert helps businesses improve security, compliance, and AI readiness. Free consultation available.",
    images: ["/images/social/og-image.png"],
  },
  openGraph: {
    title: "My365Expert | Microsoft 365 Security, Compliance & AI Experts",
    description:
      "Secure, optimise, and future-proof your Microsoft 365 environment. My365Expert helps businesses improve security, compliance, and AI readiness. Free consultation available.",
    images: [
      {
        url: "/images/social/og-image.png",
        width: 800,
        height: 600,
      },
      {
        url: "/images/social/og-image.png",
        width: 1800,
        height: 1600,
      },
    ],
    locale: "en-US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${dmsans.className}`}>
        <ThemeProvider
          attribute="class"
          enableSystem={false}
          defaultTheme="light"
        >
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
          <ToastContainer />
        </ThemeProvider>
      </body>
    </html>
  );
}
