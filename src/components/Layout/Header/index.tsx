"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";
import { useTheme } from "next-themes";
import { headerData } from "../Header/Navigation/menuData";
import Logo from "./Logo";

const serviceLinks = [
  ["M365 & Azure Security", "/services#m365-azure-security"],
  ["SharePoint Security & Optimisation", "/services#sharepoint"],
  ["Purview & Information Protection", "/services#purview"],
  ["Endpoint & Intune Security", "/services#intune"],
  ["AI & Copilot Security", "/services#ai-copilot"],
];

const Header: React.FC = () => {
  const pathUrl = usePathname();
  const { theme, setTheme } = useTheme();
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY > 12);
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) setServicesOpen(false);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setNavbarOpen(false);
    setServicesOpen(false);
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
          <div ref={servicesRef} className="relative">
            <button type="button" onClick={() => setServicesOpen(!servicesOpen)} aria-expanded={servicesOpen} className={`flex items-center gap-1.5 text-[15px] font-medium transition-colors ${pathUrl.startsWith("/services") ? "text-[#2563eb]" : "text-slate-700 hover:text-[#2563eb] dark:text-slate-200"}`}>
              Services <Icon icon="solar:alt-arrow-down-linear" width="15" height="15" className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
            </button>
            {servicesOpen && <div className="absolute left-1/2 top-full mt-4 w-[320px] -translate-x-1/2 border border-slate-200 bg-white p-2 shadow-xl dark:border-slate-700 dark:bg-slate-900">
              {serviceLinks.map(([label, href]) => <Link key={href} href={href} onClick={() => setServicesOpen(false)} className="block px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-[#2563eb] dark:text-slate-200 dark:hover:bg-slate-800">{label}</Link>)}
            </div>}
          </div>
          <Link href="/blog" className={`text-[15px] font-medium transition-colors ${pathUrl.startsWith("/blog") ? "text-[#2563eb]" : "text-slate-700 hover:text-[#2563eb] dark:text-slate-200"}`}>Blog</Link>
          <Link href="/contact" className={`text-[15px] font-medium transition-colors ${pathUrl.startsWith("/contact") ? "text-[#2563eb]" : "text-slate-700 hover:text-[#2563eb] dark:text-slate-200"}`}>Contact</Link>
        </nav>

        <div className="flex items-center gap-3">
          <button aria-label="Toggle theme" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="flex h-9 w-9 items-center justify-center text-slate-800 transition hover:text-[#2563eb] dark:text-white">
            <Icon icon={theme === "dark" ? "solar:sun-2-linear" : "solar:moon-linear"} width="22" height="22" />
          </button>
          <Link href="/contact" className="hidden items-center gap-2 rounded-md bg-[#2563eb] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1d4ed8] lg:inline-flex">Book a consultation <span aria-hidden="true">→</span></Link>
          <button onClick={() => setNavbarOpen(true)} className="rounded-md p-2 text-slate-800 dark:text-white lg:hidden" aria-label="Open menu" aria-expanded={navbarOpen}>
            <span className="block h-0.5 w-6 bg-current" /><span className="mt-1.5 block h-0.5 w-6 bg-current" /><span className="mt-1.5 block h-0.5 w-6 bg-current" />
          </button>
        </div>
      </div>

      {navbarOpen && <div className="fixed inset-0 top-[76px] overflow-y-auto bg-white dark:bg-slate-950 lg:hidden">
        <nav className="mx-auto flex max-w-7xl flex-col px-6 py-6 sm:px-8">
          <Link href="/" className="py-3 text-lg font-medium text-slate-800 dark:text-white">Home</Link>
          <div className="border-y border-slate-200 py-4 dark:border-slate-800">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">Services</p>
            {serviceLinks.map(([label, href]) => <Link key={href} href={href} onClick={() => setNavbarOpen(false)} className="block py-2.5 text-sm text-slate-700 dark:text-slate-200">{label}</Link>)}
          </div>
          <Link href="/blog" className="py-3 text-lg font-medium text-slate-800 dark:text-white">Blog</Link>
          <Link href="/contact" className="py-3 text-lg font-medium text-slate-800 dark:text-white">Contact</Link>
          <Link href="/contact" onClick={() => setNavbarOpen(false)} className="mt-5 inline-flex items-center justify-center rounded-md bg-[#2563eb] px-5 py-3.5 text-sm font-semibold text-white">Book a consultation →</Link>
        </nav>
      </div>}
    </header>
  );
};

export default Header;
