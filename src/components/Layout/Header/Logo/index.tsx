import Image from "next/image";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href="/">
      <Image
        src="/images/logo/logo.svg"
        alt="logo"
        width={250}
        height={70}
        quality={100}
        className="dark:hidden"
      />

      <Image
        src="/images/footer/footer-logo-transparent-2.png"
        alt="logo"
        width={250}
        height={70}
        quality={100}
        className="hidden dark:block "
      />
    </Link>
  );
};

export default Logo;
