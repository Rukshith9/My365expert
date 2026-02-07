import React from "react";
import Image from "next/image";

const Page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-8 lg:p-12">
      <div className="w-full max-w-5xl">
        <Image
          src="/images/business-card/business-card.png"
          alt="Business Card"
          width={1200}
          height={675}
          className="w-full h-auto rounded-lg shadow-2xl"
          priority
        />
      </div>
    </div>
  );
};

export default Page;
