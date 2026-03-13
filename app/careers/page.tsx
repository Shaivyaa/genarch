"use client";
import Header from "@/components/Header";
import Image from "next/image";
import AboutImg from "@/public/images/career-banner.jpeg";
import { useState } from "react";
import Footer from "@/components/Footer";

const openings = [
  {
    title: "Interior Designer",
    code: "ID1",
    requirements: [
      "Must have interior site handling experience",
      "Minimum 2 years experience",
      "BOQ preparation & Tendering",
      "Minimum 2 years commitment",
      "Must possess own vehicle",
    ],
  },
  {
    title: "Senior Architect",
    code: "SA1",
    requirements: [
      "3–5 years of experience",
      "Passion for good, meticulous detailing with creativity",
      "Needs to handle drawings checking, detailing checking, give guidance",
      "Preferably experienced with a reputed design firm",
      "Minimum 2 years of commitment",
    ],
  },
  {
    title: "Draftsmen",
    code: "DM1",
    requirements: [
      "2–5 years experience",
      "High skills in 2D drafting",
      "High dedication to achieve company deadlines",
      "High level of complexity in drawings executed so far",
    ],
  },
];

export default function Careers() {
  const [activeRole, setActiveRole] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    contact: "",
    role: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Header />

      <main className="w-full bg-white">
        {/* Hero */}
        <section className="relative mt-[60px] lg:mt-[0] w-full">
          <Image
            src={AboutImg}
            alt="careers"
            width={0}
            height={0}
            sizes="100vw"
            className="md:w-full  object-cover"
          />
          {/* <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl md:text-8xl font-bold md:font-light text-white tracking-wide">
              Careers
            </h1>
          </div> */}
        </section>

        {/* Intro */}
        <div className="max-w-6xl mx-auto px-6 pt-20 pb-8">
          <p className="text-[0.65rem] font-medium tracking-[0.3em] uppercase text-[#563433] mb-8">
            Join Our Team
          </p>
          <h2
            className="text-4xl font-light text-[#563433] leading-snug mb-6 max-w-xl"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            Build a fulfilling career
            <br />
            at Genesis Architects.
          </h2>
          <div className="w-10 h-px bg-[#563433] opacity-40 mb-6" />
          <p className="text-sm font-light text-gray-500 leading-relaxed max-w-2xl">
            GENESIS ARCHITECTS Pvt. Ltd. has created distinctive, functional
            places for people to live, work, and enjoy. At GAPL you will have
            the opportunity to build a fulfilling career alongside a team driven
            by design excellence.
          </p>
        </div>

        {/* Openings + Form Grid */}
        <div className="w-full max-w-[1152px] mx-auto px-6 py-12 grid  gap-20 items-start">
          {/* LEFT — Openings */}
          <div className="w-full max-w-[1152px]">
            <p className="text-[0.65rem] font-medium tracking-[0.3em] uppercase text-gray-400 mb-8">
              Current Openings
            </p>

            <div className="flex flex-col gap-4">
              {openings.map((job) => (
                <div
                  key={job.code}
                  className="border border-[#ede8e0] bg-[#faf9f7] overflow-hidden"
                >
                  <button
                    className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer group"
                    onClick={() =>
                      setActiveRole(activeRole === job.code ? null : job.code)
                    }
                  >
                    <div>
                      <p
                        className="text-lg font-light text-[#563433]"
                        style={{
                          fontFamily: "'Cormorant Garamond', Georgia, serif",
                        }}
                      >
                        {job.title}
                      </p>
                      <p className="text-[0.6rem] tracking-[0.2em] uppercase text-gray-400 mt-0.5">
                        Job Code: {job.code}
                      </p>
                    </div>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className={`text-[#563433] transition-transform duration-300 ${
                        activeRole === job.code ? "rotate-45" : ""
                      }`}
                    >
                      <path
                        d="M8 2v12M2 8h12"
                        stroke="#563433"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>

                  {activeRole === job.code && (
                    <div className="px-6 pb-6 border-t border-[#ede8e0]">
                      <p className="text-[0.6rem] font-medium tracking-[0.2em] uppercase text-gray-400 mt-5 mb-3">
                        Requirements
                      </p>
                      <ul className="flex flex-col gap-2">
                        {job.requirements.map((req, i) => (
                          <li key={i} className="flex  items-start gap-3">
                            <span className="mt-2 w-1 h-1 rounded-full bg-[#563433] opacity-50 shrink-0" />
                            <span className="text-sm font-light text-gray-500 leading-relaxed">
                              {req}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Email note */}
            <div className="mt-10">
              <p className="text-[0.65rem] font-medium tracking-[0.25em] uppercase text-gray-400 mb-3">
                How to Apply
              </p>
              <p className="text-sm font-light text-gray-500 leading-relaxed">
                Email your resume with the{" "}
                <span className="text-[#563433]">Job Code</span> as the subject
                line to:
              </p>
              <div className="mt-3 flex flex-col gap-1">
                <a
                  href="mailto:contact@genarch.in"
                  className="text-sm font-light text-[#563433] border-b border-transparent hover:border-[#563433] transition-all duration-200 w-fit"
                >
                  contact@genarch.in
                </a>
                <a
                  href="mailto:kavita@genarch.in"
                  className="text-sm font-light text-[#563433] border-b border-transparent hover:border-[#563433] transition-all duration-200 w-fit"
                >
                  kavita@genarch.in
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT — Application Form */}
          {/* <div className="relative bg-[#faf9f7] border border-[#ede8e0] p-10 md:p-12">
            
            <div className="absolute top-0 left-10 right-10 h-0.5 bg-[#563433]" />

            {submitted ? (
              <div className="text-center py-8">
                <div className="w-12 h-12 rounded-full border border-[#563433] flex items-center justify-center mx-auto mb-6">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M4 10l4.5 4.5 8-8"
                      stroke="#563433"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3
                  className="text-3xl font-light text-[#563433] mb-3"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                >
                  Application Received
                </h3>
                <p className="text-sm font-light text-gray-500 leading-relaxed">
                  Thank you for your interest in GAPL.
                  <br />
                  We will review your application and be in touch shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3
                  className="text-3xl font-light text-[#563433] mb-1"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                >
                  Apply Now
                </h3>
                <p className="text-xs font-light text-gray-400 tracking-wide mb-8">
                  Fill in your details and we will get back to you.
                </p>

                
                <div className="mb-7">
                  <label
                    className="block text-[0.6rem] font-medium tracking-[0.25em] uppercase text-gray-400 mb-2"
                    htmlFor="name"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-0 border-b border-gray-200 focus:border-[#563433] outline-none py-2 text-sm font-light text-gray-800 placeholder-gray-300 transition-colors duration-200"
                  />
                </div>

                
                <div className="mb-7">
                  <label
                    className="block text-[0.6rem] font-medium tracking-[0.25em] uppercase text-gray-400 mb-2"
                    htmlFor="email"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-0 border-b border-gray-200 focus:border-[#563433] outline-none py-2 text-sm font-light text-gray-800 placeholder-gray-300 transition-colors duration-200"
                  />
                </div>

                
                <div className="mb-7">
                  <label
                    className="block text-[0.6rem] font-medium tracking-[0.25em] uppercase text-gray-400 mb-2"
                    htmlFor="contact"
                  >
                    Contact Number
                  </label>
                  <input
                    id="contact"
                    name="contact"
                    type="tel"
                    placeholder="XXXXX XXXXX"
                    value={form.contact}
                    onChange={handleChange}
                    className="w-full bg-transparent border-0 border-b border-gray-200 focus:border-[#563433] outline-none py-2 text-sm font-light text-gray-800 placeholder-gray-300 transition-colors duration-200"
                  />
                </div>

                
                <div className="mb-7">
                  <label
                    className="block text-[0.6rem] font-medium tracking-[0.25em] uppercase text-gray-400 mb-2"
                    htmlFor="role"
                  >
                    Position Applying For
                  </label>
                  <select
                    id="role"
                    name="role"
                    value={form.role}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-0 border-b border-gray-200 focus:border-[#563433] outline-none py-2 text-sm font-light text-gray-800 transition-colors duration-200 appearance-none cursor-pointer"
                  >
                    <option value="" disabled>
                      Select a role
                    </option>
                    {openings.map((job) => (
                      <option key={job.code} value={job.code}>
                        {job.title} ({job.code})
                      </option>
                    ))}
                  </select>
                </div>

                
                <div className="mb-7">
                  <label
                    className="block text-[0.6rem] font-medium tracking-[0.25em] uppercase text-gray-400 mb-2"
                    htmlFor="message"
                  >
                    Cover Note
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell us briefly about your experience and why you'd like to join GAPL..."
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full bg-transparent border-0 border-b border-gray-200 focus:border-[#563433] outline-none py-2 text-sm font-light text-gray-800 placeholder-gray-300 transition-colors duration-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-4 inline-flex items-center cursor-pointer gap-4 bg-[#563433] hover:bg-[#3d2524] text-white text-[0.65rem] font-medium tracking-[0.3em] uppercase px-8 py-4 transition-all duration-300 group"
                >
                  Submit Application
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <path
                      d="M2 8h12M9 3l5 5-5 5"
                      stroke="white"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </form>
            )}
          </div> */}
        </div>
      </main>
      <Footer />
    </>
  );
}
