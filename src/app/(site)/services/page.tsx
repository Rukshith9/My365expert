import HeroSub from "@/components/SharedComponents/HeroSub";
import Payment from "@/components/Home/Payment";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Microsoft 365 Security & Compliance Services | My365Expert",
  description:
    "Expert Microsoft 365 security assessments, compliance setup, and risk mitigation. Protect your data and users with My365Expert.",
};

const Services = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/services", text: "Services" },
  ];
  return (
    <>
      <HeroSub
        title="Services"
        description="Discover a wealth of insightful materials meticulously crafted to provide you with a comprehensive understanding of the latest trends."
        breadcrumbLinks={breadcrumbLinks}
      />
      <Payment />
    </>
  );
};

export default Services;
