"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";

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
    <header className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-200 ${sticky ? "border-slate-200 bg-white/95 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-950/95" : "border-transparent bg-white dark:bg-slate-950"}`}>
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-10">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex">
          <Link href="/" className={`text-[15px] font-medium transition-colors ${pathUrl === "/" ? "text-[#2563eb]" : "text-slate-700 hover:text-[#2563eb] dark:text-slate-200"}`}>Home</Link>
          <Link href="/services" className={`text-[15px] font-medium transition-colors ${pathUrl.startsWith("/services") ? "text-[#2563eb]" : "text-slate-700 hover:text-[#2563eb] dark:text-slate-200"}`}>Services</Link>
          <Link href="/blog" className={`text-[15px] font-medium transition-colors ${pathUrl.startsWith("/blog") ? "text-[#2563eb]" : "text-slate-700 hover:text-[#2563eb] dark:text-slate-200"}`}>Blog</Link>
          <Link href="/contact" className={`text-[15px] font-medium transition-colors ${pathUrl.startsWith("/contact") ? "text-[#2563eb]" : "text-slate-700 hover:text-[#2563eb] dark:text-slate-200"}`}>Contact</Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/contact" className="hidden items-center gap-2 rounded-md bg-[#2563eb] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1d4ed8] lg:inline-flex">Book a consultation <span aria-hidden="true">→</span></Link>
          <button onClick={() => setNavbarOpen(true)} className="rounded-md p-2 text-slate-800 dark:text-white lg:hidden" aria-label="Open menu" aria-expanded={navbarOpen}>
            <span className="block h-0.5 w-6 bg-current" /><span className="mt-1.5 block h-0.5 w-6 bg-current" /><span className="mt-1.5 block h-0.5 w-6 bg-current" />
          </button>
        </div>
      </div>

      {navbarOpen && <div className="fixed inset-0 top-[76px] overflow-y-auto bg-white dark:bg-slate-950 lg:hidden">
        <nav className="mx-auto flex max-w-7xl flex-col px-6 py-6 sm:px-8">
          <Link href="/" className="py-3 text-lg font-medium text-slate-800 dark:text-white">Home</Link>
          <Link href="/services" className="py-3 text-lg font-medium text-slate-800 dark:text-white">Services</Link>
          <Link href="/blog" className="py-3 text-lg font-medium text-slate-800 dark:text-white">Blog</Link>
          <Link href="/contact" className="py-3 text-lg font-medium text-slate-800 dark:text-white">Contact</Link>
          <Link href="/contact" onClick={() => setNavbarOpen(false)} className="mt-5 inline-flex items-center justify-center rounded-md bg-[#2563eb] px-5 py-3.5 text-sm font-semibold text-white">Book a consultation →</Link>
        </nav>
      </div>}
    </header>
  );
};

export default Header;
