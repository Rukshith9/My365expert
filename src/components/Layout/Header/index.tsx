"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { headerData } from "../Header/Navigation/menuData";
import Logo from "./Logo";
import MobileHeaderLink from "../Header/Navigation/MobileHeaderLink";

const Header: React.FC = () => {
  const pathUrl = usePathname();
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY > 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setNavbarOpen(false);
  }, [pathUrl]);

  useEffect(() => {
    document.body.style.overflow = navbarOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [navbarOpen]);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-200 ${sticky ? "border-slate-200 bg-white/95 shadow-sm backdrop-blur" : "border-transparent bg-white"}`}>
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-10">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex">
          {headerData.map((item) => (
            <Link key={item.label} href={item.href} className={`text-[15px] font-medium transition-colors ${pathUrl === item.href ? "text-[#2563eb]" : "text-slate-700 hover:text-[#2563eb]"}`}>
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href="/contact" className="hidden items-center gap-2 rounded-md bg-[#2563eb] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1d4ed8] lg:inline-flex">
          Book a consultation <span aria-hidden="true">→</span>
        </Link>

        <button onClick={() => setNavbarOpen(true)} className="rounded-md p-2 text-slate-800 lg:hidden" aria-label="Open menu" aria-expanded={navbarOpen}>
          <span className="block h-0.5 w-6 bg-current" /><span className="mt-1.5 block h-0.5 w-6 bg-current" /><span className="mt-1.5 block h-0.5 w-6 bg-current" />
        </button>
      </div>

      {navbarOpen && (
        <div className="fixed inset-0 top-[76px] bg-white lg:hidden">
          <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5 sm:px-8">
            <span className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">Menu</span>
            <button onClick={() => setNavbarOpen(false)} className="p-2 text-slate-700" aria-label="Close menu">
              <span className="block h-0.5 w-6 rotate-45 bg-current" /><span className="-mt-0.5 block h-0.5 w-6 -rotate-45 bg-current" />
            </button>
          </div>
          <nav className="flex flex-col px-6 py-5 sm:px-8">
            {headerData.map((item) => <MobileHeaderLink key={item.label} item={item} />)}
            <Link href="/contact" className="mt-6 inline-flex items-center justify-center gap-2 rounded-md bg-[#2563eb] px-5 py-3.5 text-sm font-semibold text-white">Book a consultation →</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
