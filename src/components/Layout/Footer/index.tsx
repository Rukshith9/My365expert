import Link from "next/link";
import { Icon } from "@iconify/react";

const services = [
  ["M365 & Azure Security", "/services#m365-azure-security"],
  ["SharePoint Security & Optimisation", "/services#sharepoint"],
  ["Purview & Information Protection", "/services#purview"],
  ["Endpoint & Intune Security", "/services#intune"],
  ["AI & Copilot Security", "/services#ai-copilot"],
];

const Footer = () => (
  <footer className="border-t border-slate-200 bg-slate-950 text-white">
    <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
      <div className="grid gap-12 border-b border-white/10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Link href="/" className="text-2xl font-semibold tracking-[0.08em]">MY365<span className="text-blue-400">EXPERT</span></Link>
          <p className="mt-5 max-w-sm text-sm leading-6 text-slate-400">Microsoft 365, Azure and AI security consulting for organisations that want practical solutions, not unnecessary complexity.</p>
          <div className="mt-6 flex flex-col gap-3 text-sm text-slate-400">
            <span className="flex items-center gap-2"><Icon icon="weui:location-outlined" width="19" /> Wellington, New Zealand</span>
            <a href="mailto:consult@my365expert.co" className="flex items-center gap-2 hover:text-white"><Icon icon="clarity:email-line" width="19" /> consult@my365expert.co</a>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-white">Services</h3>
          <div className="mt-5 flex flex-col gap-3">{services.map(([label, href]) => <Link key={href} href={href} className="text-sm text-slate-400 transition hover:text-white">{label}</Link>)}</div>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-white">Company</h3>
          <div className="mt-5 flex flex-col gap-3">
            <Link href="/" className="text-sm text-slate-400 hover:text-white">Home</Link>
            <Link href="/blog" className="text-sm text-slate-400 hover:text-white">Insights</Link>
            <Link href="/contact" className="text-sm text-slate-400 hover:text-white">Contact</Link>
            <a href="https://www.linkedin.com/company/my365expert" target="_blank" rel="noreferrer" className="text-sm text-slate-400 hover:text-white">LinkedIn</a>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} My365Expert. All rights reserved.</p>
        <p>Microsoft 365 · Azure · Security · AI</p>
      </div>
    </div>
  </footer>
);

export default Footer;
