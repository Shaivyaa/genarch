"use client";
import Header from "@/components/Header";
import Image from "next/image";
import AboutImg from "@/public/images/contact-us-banner.jpeg";
import { useState } from "react";
import Footer from "@/components/Footer";

export default function Contact() {
  // Form state type
  const [form, setForm] = useState<{
    name: string;
    email: string;
    contact: string;
    feedback: string;
  }>({
    name: "",
    email: "",
    contact: "",
    feedback: "",
  });
  const [submitted, setSubmitted] = useState(false);

  // Change handler
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Submit handler
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Header />

      <main className="w-full bg-white">
        {/* Hero */}
        <section className="relative mt-[60px] lg:mt-[90] w-full ">
          <Image
            src={AboutImg}
            alt="about"
            width={0}
            height={0}
            sizes="100vw"
            className="md:w-full  object-cover"
          />
          {/* <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl md:text-8xl font-bold md:font-light text-white tracking-wide">
              Contact Us
            </h1>
          </div> */}
        </section>

        {/* Main Grid */}
        <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-[1fr_1.4fr] gap-20 items-start">
          {/* LEFT — Info */}
          <div>
            <p className="text-[18px] font-bold tracking-[0.3em] uppercase text-[#563433] mb-8">
              Get in Touch
            </p>
            <h2
              className="text-4xl font-light text-[#563433] leading-snug mb-8"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              Lets build something
              <br />
              remarkable together.
            </h2>
            <div className="w-10 h-px bg-[#563433] opacity-40 mb-10" />

            {/* Address */}
            <div className="mb-8">
              <p className="text-[15px] font-bold tracking-[0.25em] uppercase text-[#563433] mb-2">
                Our Studio
              </p>
              <p className="text-sm font-light text-[#563433] leading-relaxed">
                371, First Floor, Rangpuri
                <br />
                Adjacent to Celebration Garden
                <br />
                New Delhi – 110037
              </p>
            </div>

            {/* Email */}
            <div className="mb-8">
              <p className="text-[15px] font-bold tracking-[0.25em] uppercase text-[#563433] mb-2">
                Email
              </p>
              <a
                href="mailto:contact@genarch.in"
                className="text-sm underline font-light text-[#563433]  transition-all duration-200"
              >
                contact@genarch.in
              </a>
            </div>

            {/* Tel */}
            <div className="mb-8">
              <p className="text-[15px] font-bold tracking-[0.25em] uppercase text-[#563433] mb-2">
                Tel / Fax
              </p>
              <a
                href="tel:+911125062077"
                className="text-sm font-light text-[#563433] border-b border-transparent hover:border-gray-400 transition-all duration-200"
              >
                +91 11 2506 2077–79
              </a>
            </div>

            {/* Direct Contact */}
            <div>
              <p className="text-[15px] font-bold tracking-[0.25em] uppercase text-[#563433] mb-3">
                Or Call Directly
              </p>
              <div className="flex flex-col gap-3">
                <div>
                  <p className="text-sm font-normal text-[#563433]">
                    Naresh Pareek
                  </p>
                  <p className="text-sm font-light text-[#563433]">
                    <a
                      href="tel:+919310098551"
                      className="hover:text-[#563433] transition-colors"
                    >
                      93100-98551
                    </a>
                    <span className="mx-2 text-[#563433]">·</span>
                    <a
                      href="tel:+919811698551"
                      className="hover:text-[#563433] transition-colors"
                    >
                      98116-98551
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — Form */}
          <div className="relative bg-[#563433] border border-[#6b4a48] p-10 md:p-12 text-[#e5e5e5]">
            {/* top accent bar */}
            <div className="absolute top-0 left-10 right-10 h-0.5 bg-[#e5e5e5]" />

            {submitted ? (
              <div className="text-center py-8">
                <div className="w-12 h-12 rounded-full border border-[#e5e5e5] flex items-center justify-center mx-auto mb-6">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M4 10l4.5 4.5 8-8"
                      stroke="#e5e5e5"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <h3
                  className="text-3xl font-light text-[#e5e5e5] mb-3"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                >
                  Message Received
                </h3>

                <p className="text-sm font-light text-gray-300 leading-relaxed">
                  Thank you for reaching out.
                  <br />
                  We will be in touch with you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3
                  className="text-3xl font-light text-[#e5e5e5] mb-1"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                >
                  Send a Message
                </h3>

                {/* Name */}
                <div className="mb-7 mt-[40px]">
                  <label
                    className="block text-[12px] font-medium tracking-[0.25em] uppercase text-gray-300 mb-2"
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
                    className="w-full bg-transparent border-0 border-b border-gray-500 focus:border-[#e5e5e5] outline-none py-2 text-sm font-light text-[#e5e5e5] placeholder-gray-400 transition-colors duration-200"
                  />
                </div>

                {/* Email */}
                <div className="mb-7">
                  <label
                    className="block text-[12px] font-medium tracking-[0.25em] uppercase text-gray-300 mb-2"
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
                    className="w-full bg-transparent border-0 border-b border-gray-500 focus:border-[#e5e5e5] outline-none py-2 text-sm font-light text-[#e5e5e5] placeholder-gray-400 transition-colors duration-200"
                  />
                </div>

                {/* Contact */}
                <div className="mb-7">
                  <label
                    className="block text-[12px] font-medium tracking-[0.25em] uppercase text-gray-300 mb-2"
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
                    className="w-full bg-transparent border-0 border-b border-gray-500 focus:border-[#e5e5e5] outline-none py-2 text-sm font-light text-[#e5e5e5] placeholder-gray-400 transition-colors duration-200"
                  />
                </div>

                {/* Message */}
                <div className="mb-7">
                  <label
                    className="block text-[12px] font-medium tracking-[0.25em] uppercase text-gray-300 mb-2"
                    htmlFor="feedback"
                  >
                    Your Message
                  </label>

                  <textarea
                    id="feedback"
                    name="feedback"
                    placeholder="Tell us about your project or enquiry..."
                    value={form.feedback}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full bg-transparent border-0 border-b border-gray-500 focus:border-[#e5e5e5] outline-none py-2 text-sm font-light text-[#e5e5e5] placeholder-gray-400 transition-colors duration-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-4 inline-flex items-center cursor-pointer gap-4 bg-[#e5e5e5] hover:bg-white text-[#563433] text-[0.65rem] font-medium tracking-[0.3em] uppercase px-8 py-4 transition-all duration-300 group"
                >
                  Send Message
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <path
                      d="M2 8h12M9 3l5 5-5 5"
                      stroke="#563433"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Strip */}
        {/* <div className="bg-[#563433] py-5 flex items-center justify-center">
          <p className="text-[0.7rem] font-light tracking-[0.2em] text-white/50 text-center">
            Genarch &nbsp;·&nbsp; New Delhi, India &nbsp;·&nbsp;
            contact@genarch.in
          </p>
        </div> */}
      </main>
      <Footer />
    </>
  );
}



// for google sheet integration

// "use client";
// import Header from "@/components/Header";
// import Image from "next/image";
// import AboutImg from "@/public/images/about-img1.jpg";
// import { useState } from "react";
// import Footer from "@/components/Footer";

// export default function Contact() {
//   const [form, setForm] = useState<{
//     name: string;
//     email: string;
//     contact: string;
//     feedback: string;
//   }>({
//     name: "",
//     email: "",
//     contact: "",
//     feedback: "",
//   });
//   const [submitted, setSubmitted] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
//   ) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);

//     try {
//       const res = await fetch("/api/contact", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(form),
//       });

//       if (!res.ok) {
//         const data = await res.json();
//         throw new Error(
//           data.error || "Something went wrong. Please try again.",
//         );
//       }

//       setSubmitted(true);
//     } catch (err: unknown) {
//       setError(err instanceof Error ? err.message : "Something went wrong.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <Header />

//       <main className="w-full bg-white">
//         {/* Hero */}
//         <section className="relative w-full ">
//           <Image
//             src={AboutImg}
//             alt="about"
//             width={0}
//             height={0}
//             sizes="100vw"
//             className="md:w-full h-[50vh]  md:h-[60vh] object-cover"
//           />
//           <div className="absolute inset-0 flex items-center justify-center">
//             <h1 className="text-4xl md:text-8xl font-bold md:font-light text-white tracking-wide">
//               Contact Us
//             </h1>
//           </div>
//         </section>

//         {/* Main Grid */}
//         <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-[1fr_1.4fr] gap-20 items-start">
//           {/* LEFT — Info */}
//           <div>
//             <p className="text-[0.65rem] font-medium tracking-[0.3em] uppercase text-[#563433] mb-8">
//               Get in Touch
//             </p>
//             <h2
//               className="text-4xl font-light text-[#563433] leading-snug mb-8"
//               style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
//             >
//               Lets build something
//               <br />
//               remarkable together.
//             </h2>
//             <div className="w-10 h-px bg-[#563433] opacity-40 mb-10" />

//             {/* Address */}
//             <div className="mb-8">
//               <p className="text-[0.65rem] font-medium tracking-[0.25em] uppercase text-gray-400 mb-2">
//                 Our Studio
//               </p>
//               <p className="text-sm font-light text-gray-500 leading-relaxed">
//                 371, First Floor, Rangpuri
//                 <br />
//                 Adjacent to Celebration Garden
//                 <br />
//                 New Delhi – 110037
//               </p>
//             </div>

//             {/* Email */}
//             <div className="mb-8">
//               <p className="text-[0.65rem] font-medium tracking-[0.25em] uppercase text-gray-400 mb-2">
//                 Email
//               </p>
//               <a
//                 href="mailto:contact@genarch.in"
//                 className="text-sm underline font-light text-[#563433]  transition-all duration-200"
//               >
//                 contact@genarch.in
//               </a>
//             </div>

//             {/* Tel */}
//             <div className="mb-8">
//               <p className="text-[0.65rem] font-medium tracking-[0.25em] uppercase text-gray-400 mb-2">
//                 Tel / Fax
//               </p>
//               <a
//                 href="tel:+911125062077"
//                 className="text-sm font-light text-gray-500 border-b border-transparent hover:border-gray-400 transition-all duration-200"
//               >
//                 +91 11 2506 2077–79
//               </a>
//             </div>

//             {/* Direct Contact */}
//             <div>
//               <p className="text-[0.65rem] font-medium tracking-[0.25em] uppercase text-gray-400 mb-3">
//                 Or Call Directly
//               </p>
//               <div className="flex flex-col gap-3">
//                 <div>
//                   <p className="text-sm font-normal text-[#563433]">
//                     Naresh Pareek
//                   </p>
//                   <p className="text-sm font-light text-gray-500">
//                     <a
//                       href="tel:+919310098551"
//                       className="hover:text-[#563433] transition-colors"
//                     >
//                       93100-98551
//                     </a>
//                     <span className="mx-2 text-gray-300">·</span>
//                     <a
//                       href="tel:+919811698551"
//                       className="hover:text-[#563433] transition-colors"
//                     >
//                       98116-98551
//                     </a>
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* RIGHT — Form */}
//           <div className="relative bg-[#faf9f7] border border-[#ede8e0] p-10 md:p-12">
//             {/* top accent bar */}
//             <div className="absolute top-0 left-10 right-10 h-0.5 bg-[#563433]" />

//             {submitted ? (
//               <div className="text-center py-8">
//                 <div className="w-12 h-12 rounded-full border border-[#563433] flex items-center justify-center mx-auto mb-6">
//                   <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
//                     <path
//                       d="M4 10l4.5 4.5 8-8"
//                       stroke="#563433"
//                       strokeWidth="1.5"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                   </svg>
//                 </div>
//                 <h3
//                   className="text-3xl font-light text-[#563433] mb-3"
//                   style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
//                 >
//                   Message Received
//                 </h3>
//                 <p className="text-sm font-light text-gray-500 leading-relaxed">
//                   Thank you for reaching out.
//                   <br />
//                   We will be in touch with you shortly.
//                 </p>
//               </div>
//             ) : (
//               <form onSubmit={handleSubmit}>
//                 <h3
//                   className="text-3xl font-light text-[#563433] mb-1"
//                   style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
//                 >
//                   Send a Message
//                 </h3>
//                 <p className="text-xs font-light text-gray-400 tracking-wide mb-8">
//                   We respond to all enquiries within 1–2 business days.
//                 </p>

//                 {/* Name */}
//                 <div className="mb-7">
//                   <label
//                     className="block text-[0.6rem] font-medium tracking-[0.25em] uppercase text-gray-400 mb-2"
//                     htmlFor="name"
//                   >
//                     Full Name
//                   </label>
//                   <input
//                     id="name"
//                     name="name"
//                     type="text"
//                     placeholder="Your name"
//                     value={form.name}
//                     onChange={handleChange}
//                     required
//                     className="w-full bg-transparent border-0 border-b border-gray-200 focus:border-[#563433] outline-none py-2 text-sm font-light text-gray-800 placeholder-gray-300 transition-colors duration-200"
//                   />
//                 </div>

//                 {/* Email */}
//                 <div className="mb-7">
//                   <label
//                     className="block text-[0.6rem] font-medium tracking-[0.25em] uppercase text-gray-400 mb-2"
//                     htmlFor="email"
//                   >
//                     Email Address
//                   </label>
//                   <input
//                     id="email"
//                     name="email"
//                     type="email"
//                     placeholder="your@email.com"
//                     value={form.email}
//                     onChange={handleChange}
//                     required
//                     className="w-full bg-transparent border-0 border-b border-gray-200 focus:border-[#563433] outline-none py-2 text-sm font-light text-gray-800 placeholder-gray-300 transition-colors duration-200"
//                   />
//                 </div>

//                 {/* Contact */}
//                 <div className="mb-7">
//                   <label
//                     className="block text-[0.6rem] font-medium tracking-[0.25em] uppercase text-gray-400 mb-2"
//                     htmlFor="contact"
//                   >
//                     Contact Number
//                   </label>
//                   <input
//                     id="contact"
//                     name="contact"
//                     type="tel"
//                     placeholder="XXXXX XXXXX"
//                     value={form.contact}
//                     onChange={handleChange}
//                     className="w-full bg-transparent border-0 border-b border-gray-200 focus:border-[#563433] outline-none py-2 text-sm font-light text-gray-800 placeholder-gray-300 transition-colors duration-200"
//                   />
//                 </div>

//                 {/* Feedback */}
//                 <div className="mb-7">
//                   <label
//                     className="block text-[0.6rem] font-medium tracking-[0.25em] uppercase text-gray-400 mb-2"
//                     htmlFor="feedback"
//                   >
//                     Your Message
//                   </label>
//                   <textarea
//                     id="feedback"
//                     name="feedback"
//                     placeholder="Tell us about your project or enquiry..."
//                     value={form.feedback}
//                     onChange={handleChange}
//                     required
//                     rows={4}
//                     className="w-full bg-transparent border-0 border-b border-gray-200 focus:border-[#563433] outline-none py-2 text-sm font-light text-gray-800 placeholder-gray-300 transition-colors duration-200 resize-none"
//                   />
//                 </div>

//                 {/* Error message */}
//                 {error && (
//                   <p className="text-xs text-red-500 mb-4 tracking-wide">
//                     {error}
//                   </p>
//                 )}

//                 <button
//                   type="submit"
//                   disabled={loading}
//                   className="mt-4 inline-flex items-center cursor-pointer gap-4 bg-[#563433] hover:bg-[#3d2524] disabled:opacity-60 disabled:cursor-not-allowed text-white text-[0.65rem] font-medium tracking-[0.3em] uppercase px-8 py-4 transition-all duration-300 group"
//                 >
//                   {loading ? "Sending..." : "Send Message"}
//                   {!loading && (
//                     <svg
//                       width="16"
//                       height="16"
//                       viewBox="0 0 16 16"
//                       fill="none"
//                       className="transition-transform duration-300 group-hover:translate-x-1"
//                     >
//                       <path
//                         d="M2 8h12M9 3l5 5-5 5"
//                         stroke="white"
//                         strokeWidth="1.2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                       />
//                     </svg>
//                   )}
//                 </button>
//               </form>
//             )}
//           </div>
//         </div>
//       </main>
//       <Footer />
//     </>
//   );
// }
