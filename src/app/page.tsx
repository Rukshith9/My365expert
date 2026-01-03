import React from "react";
import { Metadata } from "next";
import Hero from "@/components/Home/Hero";
import Spend from "@/components/Home/Spend";
import Method from "@/components/Home/Method";
import Services from "@/components/Home/Custome/Services";

export const metadata: Metadata = {
  title: "My365Expert | Microsoft 365 Security, Compliance & AI Experts",
  description:
    "Secure, optimise, and future-proof your Microsoft 365 environment. My365Expert helps businesses improve security, compliance, and AI readiness. Free consultation available.",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Spend />
      <Method />
      <Services />
    </main>
  );
}
