"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { validateEmail } from "@/utils/validateEmail";

const ContactForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [specialist, setSpecialist] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

    if (!firstName.trim()) newErrors.firstName = "First name is required";
    if (!lastName.trim()) newErrors.lastName = "Last name is required";
    if (!email.trim()) newErrors.email = "Email is required";
    else if (!validateEmail(email)) newErrors.email = "Enter a valid email";
    if (!message.trim()) newErrors.message = "Message is required";
    // Specialist is currently commented out; validate only if enabled
    // if (!specialist) newErrors.specialist = "Please choose a specialist";
    if (!date) newErrors.date = "Date is required";
    if (!time) newErrors.time = "Time is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      console.warn("Form has validation errors", newErrors);
      return;
    }

    const data = {
      firstName,
      lastName,
      email,
      message,
      specialist,
      date,
      time,
    };
    console.log("Contact form submission:", data);
  };
  return (
    <>
      <section className="dark:bg-darkmode pb-24">
        <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4">
          <div className="grid md:grid-cols-12 grid-cols-1 gap-8">
            <div className="col-span-6">
              <h2 className="max-w-72 text-40 font-bold mb-9">
                Get Online Consultation
              </h2>
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
                  {/* <div className="mx-0 my-2.5 flex-1">
                    <label
                      htmlFor="Specialist"
                      className="pb-3 inline-block text-17"
                    >
                      Specialist*
                    </label>
                    <select
                      className="w-full text-17 px-4 py-2.5 rounded-lg border-border dark:text-white border-solid dark:bg-transparent border transition-all duration-500 focus:border-primary dark:focus:border-primary dark:border-dark_border focus:border-solid focus:outline-0"
                      id="specialist"
                      name="specialist"
                      value={specialist}
                      onChange={(e) => setSpecialist(e.target.value)}
                    >
                      <option value="">Choose a specialist</option>
                      <option value="Baking &amp; Pastry">
                        Baking &amp; Pastry
                      </option>
                      <option value="Exotic Cuisine">Exotic Cuisine</option>
                      <option value="French Desserts">French Desserts</option>
                      <option value="Seafood &amp; Wine">
                        Seafood &amp; Wine
                      </option>
                    </select>
                  </div> */}
                </div>
                <div className="sm:flex gap-3 w-full">
                  <div className="mx-0 my-2.5 flex-1">
                    <label htmlFor="date" className="pb-3 inline-block text-17">
                      Date*
                    </label>
                    <input
                      className="w-full text-17 px-4 rounded-lg  py-2.5 outline-hidden dark:text-white dark:bg-transparent border-border border-solid border transition-all duration-500 focus:border-primary dark:focus:border-primary dark:border-dark_border focus:border-solid focus:outline-0"
                      type="date"
                      id="date"
                      name="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                    />
                    {errors.date && (
                      <p className="text-red-500 text-14 mt-2">{errors.date}</p>
                    )}
                  </div>
                  <div className="mx-0 my-2.5 flex-1">
                    <label htmlFor="time" className="pb-3 inline-block text-17">
                      Time*
                    </label>
                    <input
                      className="w-full text-17 px-4 rounded-lg py-2.5 border-border outline-hidden dark:text-white dark:bg-transparent border-solid border transition-all duration-500 focus:border-primary dark:focus:border-primary dark:border-dark_border focus:border-solid focus:outline-0"
                      type="time"
                      id="time"
                      name="time"
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                    />
                    {errors.time && (
                      <p className="text-red-500 text-14 mt-2">{errors.time}</p>
                    )}
                  </div>
                </div>
                <div className="mx-0 my-2.5 w-full">
                  <button
                    className="bg-primary rounded-lg text-white py-4 px-8 mt-4 inline-block hover:bg-blue-700"
                    type="submit"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
            <div className="col-span-6">
              <Image
                src="/images/contact-page/contact.jpg"
                alt="Contact"
                width={1300}
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
