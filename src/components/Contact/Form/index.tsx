"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { validateEmail } from "@/utils/validateEmail";
import { toast } from "react-toastify";
import { useTheme } from "next-themes";
import Loader from "@/components/Common/Loader";
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

  const [turnstileStatus, setTurnstileStatus] = useState<
    "success" | "error" | "expired" | "required"
  >("required");
  const [error, setError] = useState<string | null>(null);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const turnstileRef = useRef<string>();

  console.log("Current theme:", theme);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const newErrors: { [key: string]: string } = {};

    if (!firstName.trim()) newErrors.firstName = "First name is required";
    if (!lastName.trim()) newErrors.lastName = "Last name is required";
    if (!email.trim()) newErrors.email = "Email is required";
    else if (!validateEmail(email)) newErrors.email = "Enter a valid email";
    if (!message.trim()) newErrors.message = "Message is required";
    // Specialist is currently commented out; validate only if enabled
    // if (!specialist) newErrors.specialist = "Please choose a specialist";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      console.warn("Form has validation errors", newErrors);
      setIsLoading(false);
      return;
    }

    const data = { firstName, lastName, email, message, turnstileToken };
    console.log("Contact form submission:", data);

    // Send to API route using Resend
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || "Failed to send email");
      }

      await res.json();
      console.log("Email sent successfully");
      toast("Email sent successfully", {
        theme: theme,
      });
    } catch (err) {
      console.error("Failed to send email", err);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <section className="dark:bg-darkmode pb-24">
        <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4">
          <div className="grid md:grid-cols-12 grid-cols-1 gap-8">
            <div className="col-span-6">
              <form
                className="flex flex-wrap w-full m-auto justify-between"
                onSubmit={handleSubmit}
              >
                <div className="sm:flex gap-3 w-full">
                  <div className="mx-0 my-2.5 flex-1">
                    <label
                      htmlFor="first-name"
                      className="pb-3 inline-block text-17"
                    >
                      First Name*
                    </label>
                    <input
                      className="w-full text-17 px-4 rounded-lg py-2.5 border-border dark:border-dark_border border-solid dark:text-white dark:bg-transparent border transition-all duration-500 focus:border-primary dark:focus:border-primary focus:border-solid focus:outline-0"
                      type="text"
                      id="first-name"
                      name="firstName"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-14 mt-2">
                        {errors.firstName}
                      </p>
                    )}
                  </div>
                  <div className="mx-0 my-2.5 flex-1">
                    <label
                      htmlFor="last-name"
                      className="pb-3 inline-block text-17"
                    >
                      Last Name*
                    </label>
                    <input
                      className="w-full text-17 px-4 py-2.5 rounded-lg border-border dark:border-dark_border border-solid dark:text-white  dark:bg-transparent border transition-all duration-500 focus:border-primary dark:focus:border-primary focus:border-solid focus:outline-0"
                      type="text"
                      id="last-name"
                      name="lastName"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                    {errors.lastName && (
                      <p className="text-red-500 text-14 mt-2">
                        {errors.lastName}
                      </p>
                    )}
                  </div>
                </div>
                <div className="sm:flex gap-3 w-full">
                  <div className="mx-0 my-2.5 flex-1">
                    <label
                      htmlFor="email"
                      className="pb-3 inline-block text-17"
                    >
                      Email address*
                    </label>
                    <input
                      type="email"
                      className="w-full text-17 px-4 py-2.5 rounded-lg border-border dark:border-dark_border border-solid dark:text-white  dark:bg-transparent border transition-all duration-500 focus:border-primary dark:focus:border-primary focus:border-solid focus:outline-0"
                      id="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-14 mt-2">
                        {errors.email}
                      </p>
                    )}
                    <label
                      htmlFor="message"
                      className="pb-3 inline-block text-17 mt-4"
                    >
                      Message*
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="w-full text-17 px-4 py-2.5 rounded-lg border-border dark:border-dark_border border-solid dark:text-white dark:bg-transparent border transition-all duration-500 focus:border-primary dark:focus:border-primary focus:border-solid focus:outline-0 min-h-[120px]"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                    {errors.message && (
                      <p className="text-red-500 text-14 mt-2">
                        {errors.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="mx-0 my-2.5 w-full">
                  <Turnstile
                    siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
                    retry="auto"
                    refreshExpired="auto"
                    sandbox={process.env.NODE_ENV === "development"}
                    onError={() => {
                      setTurnstileStatus("error");
                      setError("Security check failed. Please try again.");
                      setTurnstileToken(null);
                    }}
                    onExpire={() => {
                      setTurnstileStatus("expired");
                      setError("Security check expired. Please verify again.");
                      setTurnstileToken(null);
                    }}
                    onLoad={() => {
                      setTurnstileStatus("required");
                      setError(null);
                      setTurnstileToken(null);
                    }}
                    onVerify={(token) => {
                      setTurnstileStatus("success");
                      setError(null);
                      setTurnstileToken(token);
                    }}
                  />
                  <button
                    className="bg-primary disabled:bg-primary/50 rounded-lg text-white py-4 px-8 mt-4 inline-block hover:bg-blue-700"
                    type="submit"
                    disabled={isLoading || turnstileStatus !== "success"}
                  >
                    Send{" "}
                    {isLoading && (
                      <LoaderCircle className="w-4 h-4 animate-spin" />
                    )}
                  </button>
                </div>
              </form>
            </div>
            <div className="col-span-6">
              <Image
                src="/images/contact/contact.png"
                alt="Contact"
                width={800}
                height={0}
                quality={100}
                style={{ width: "100%", height: "auto" }}
                className="bg-no-repeat bg-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
