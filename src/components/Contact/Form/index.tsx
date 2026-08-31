"use client";

import React, { useRef, useState } from "react";
import { validateEmail } from "@/utils/validateEmail";
import { toast } from "react-toastify";
import { useTheme } from "next-themes";
import { LoaderCircle } from "lucide-react";
import { Turnstile } from "next-turnstile";

const ContactForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const { theme } = useTheme();
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [turnstileStatus, setTurnstileStatus] = useState<"success" | "error" | "expired" | "required">("required");
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const turnstileRef = useRef<string>();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const newErrors: { [key: string]: string } = {};
    if (!firstName.trim()) newErrors.firstName = "First name is required";
    if (!lastName.trim()) newErrors.lastName = "Last name is required";
    if (!email.trim()) newErrors.email = "Email is required";
    else if (!validateEmail(email)) newErrors.email = "Enter a valid email";
    if (!message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) { setIsLoading(false); return; }

    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ firstName, lastName, email, message, turnstileToken }) });
      if (!res.ok) throw new Error((await res.text()) || "Failed to send email");
      await res.json();
      toast("Message sent successfully", { theme });
      setSubmitted(true);
    } catch (err) {
      console.error("Failed to send email", err);
      toast("We couldn't send your message. Please try again.", { theme });
    } finally { setIsLoading(false); }
  };

  return (
    <section className="bg-white pb-16 pt-10 sm:pb-20 sm:pt-12">
      <div className="mx-auto max-w-4xl px-6 sm:px-8 lg:px-10">
        {submitted ? (
          <div className="border border-slate-200 bg-[#f7f9fc] p-10 text-center sm:p-14">
            <h2 className="text-2xl font-semibold text-slate-950">Thank you.</h2>
            <p className="mt-3 text-slate-600">Your message has been sent successfully. We'll get back to you shortly.</p>
          </div>
        ) : (
          <form className="border border-slate-200 p-6 sm:p-8 lg:p-10" onSubmit={handleSubmit}>
            <div className="grid gap-5 sm:grid-cols-2">
              <div><label htmlFor="first-name" className="mb-2 block text-sm font-medium text-slate-700">First name*</label><input className="w-full border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#2563eb]" type="text" id="first-name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />{errors.firstName && <p className="mt-2 text-sm text-red-500">{errors.firstName}</p>}</div>
              <div><label htmlFor="last-name" className="mb-2 block text-sm font-medium text-slate-700">Last name*</label><input className="w-full border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#2563eb]" type="text" id="last-name" value={lastName} onChange={(e) => setLastName(e.target.value)} />{errors.lastName && <p className="mt-2 text-sm text-red-500">{errors.lastName}</p>}</div>
            </div>
            <div className="mt-5"><label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">Work email*</label><input type="email" className="w-full border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#2563eb]" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />{errors.email && <p className="mt-2 text-sm text-red-500">{errors.email}</p>}</div>
            <div className="mt-5"><label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-700">How can we help?*</label><textarea id="message" className="min-h-[150px] w-full border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#2563eb]" value={message} onChange={(e) => setMessage(e.target.value)} />{errors.message && <p className="mt-2 text-sm text-red-500">{errors.message}</p>}</div>
            <div className="mt-6"><Turnstile siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!} retry="auto" refreshExpired="auto" sandbox={process.env.NODE_ENV === "development"} onError={() => { setTurnstileStatus("error"); setTurnstileToken(null); }} onExpire={() => { setTurnstileStatus("expired"); setTurnstileToken(null); }} onLoad={() => { setTurnstileStatus("required"); setTurnstileToken(null); }} onVerify={(token) => { setTurnstileStatus("success"); setTurnstileToken(token); }} /><button className="mt-4 inline-flex items-center gap-2 bg-[#2563eb] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#1d4ed8] disabled:cursor-not-allowed disabled:opacity-50" type="submit" disabled={isLoading || turnstileStatus !== "success"}>Send message {isLoading && <LoaderCircle className="h-4 w-4 animate-spin" />}</button></div>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactForm;
