"use client";

import Header from "@/components/Header";
import AboutImg from "@/public/images/about-us-banner.jpeg";
import Image, { StaticImageData } from "next/image";
import StudioImg from "@/public/images/contact.jpg";
import TeamImg from "@/public/images/aboutUs-team.jpg";
import OfficeImg from "@/public/images/office.jpg";
import AtulImg from "@/public/images/atulSharma.jpg";
import NavjotImg from "@/public/images/navjyot.jpg";
import services1 from "@/public/services-images/kindergarten1-new.jpg";
import services2 from "@/public/images/service-img2.jpg";
import services3 from "@/public/images/service-img3.jpg";
import services4 from "@/public/services-images/farzi-out.jpg";
import services5 from "@/public/images/hero-img1.jpg";
import services6 from "@/public/images/office1.jpg";
import JourneyImg from "@/public/images/journey-image-new.jpg";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Img1 from "@/public/images/1.svg";
import Img2 from "@/public/images/2.svg";
import Img3 from "@/public/images/3.svg";
import Img4 from "@/public/images/4.svg";
import Img5 from "@/public/images/5.svg";
import Img6 from "@/public/images/6.svg";
import Img7 from "@/public/images/7.svg";
import Img8 from "@/public/images/8.svg";
import Img9 from "@/public/images/9.svg";
import Img10 from "@/public/images/10.svg";
import Img11 from "@/public/images/11.svg";
import Img12 from "@/public/images/12.svg";
import Img13 from "@/public/images/13.svg";
import Img14 from "@/public/images/14.svg";
import Img15 from "@/public/images/15.svg";
import Img16 from "@/public/images/16.svg";
import Img17 from "@/public/images/17.svg";
import Img18 from "@/public/images/18.svg";
import Img19 from "@/public/images/19.svg";
import Img20 from "@/public/images/20.svg";
import Img21 from "@/public/images/21.svg";

import balance from "@/public/images/balance.svg";
import movement from "@/public/images/movement.svg";
import rhythm from "@/public/images/rhythm.svg";
import emphasis from "@/public/images/Emphasis.svg";
import contrast from "@/public/images/Contrast.svg";
import proportion from "@/public/images/Proportion.svg";
import unity from "@/public/images/Unity.svg";

import Footer from "@/components/Footer";

export default function About() {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname]);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    });
  }, []);

  const clientLogos = [
    Img1,
    Img2,
    Img3,
    Img4,
    Img5,
    Img6,
    Img7,
    Img8,
    Img9,
    Img10,
    Img11,
    Img12,
    Img13,
    Img14,
    Img15,
    Img16,
    Img17,
    Img18,
    Img19,
    Img20,
    Img21,
  ];

  return (
    <>
      <Header />
      <main className="w-full bg-white">
        {/* Hero Section */}
        <section className="relative mt-[60px] lg:mt-[100] w-full">
          <Image
            src={AboutImg}
            alt="about"
            width={0}
            height={0}
            sizes="100vw"
            className="md:w-full object-cover"
          />
        </section>

        <section className="max-w-6xl flex flex-col md:flex-row items-center md:items-start justify-around bg-[#e5e5e5] mx-auto my-[80px] rounded-[20px] p-[24px] md:p-[45px] gap-8 md:gap-0">
          <div className="flex flex-col gap-[15px]  p-[28px] rounded-[20px] z-10 bg-[#563433] w-full max-w-[500px] md:mr-[-300px] border-2 border-[#563433] items-center">
            <h2 className="text-3xl font-light text-[#ffffff]  leading-tight">
              A multidisciplinary design practice rooted in experience,
              creativity, and thoughtful architecture.
            </h2>
            <p className="text-[#ffffff] text-[14px] leading-relaxed">
              Genarch Genesis Architects Pvt. Ltd. is an architecture and design
              practice working across institutional, commercial, hospitality,
              residential, and experiential projects. Each space is shaped by
              context, materials, and the way people experience it.
            </p>
          </div>
          <div className="w-full md:w-auto">
            <Image
              className="rounded-[20px] object-cover w-full md:w-[700px]"
              width={700}
              height={500}
              src={StudioImg}
              alt="studio"
              style={{ height: "500px" }}
            />
          </div>
        </section>

        <section className="max-w-6xl flex flex-col md:flex-row items-center justify-between gap-[20px] mx-auto my-[80px] px-4 md:px-0">
          <div className="w-full md:w-auto">
            <Image
              className="rounded-[20px] object-cover w-full md:w-[800px]"
              width={800}
              height={400}
              src={TeamImg}
              alt="studio"
              style={{ height: "400px" }}
            />
          </div>
          <div className="w-full flex flex-col items-left justify-center gap-[20px]  md:max-w-[352px] min-h-[400px] rounded-[20px] p-[10px]">
            <div className="flex flex-col gap-0">
              {" "}
              <div className="text-[42px] font-light text-left text-[#8e5353]">
                WHO WE ARE
              </div>
            </div>
            <div className="text-[14px] mt-[30px] text-left text-[#8e5353] leading-relaxed">
              Genarch is a team of architects and designers creating spaces that
              balance creativity and functionality. The practice focuses on
              thoughtful design that responds to context, people, and the way
              spaces are experienced.
            </div>
          </div>
        </section>

        <section className="py-24 rounded-[38px] bg-[#e5e5e5]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12">
              {[
                {
                  name: "Atul Sharma",
                  role: "Architectural consultant with 24+ years of experience in design and concept strategy for retail, hospitality, offices and F&B projects. An alumnus of Chandigarh College of Architecture, he co-founded Genesis Architects Pvt. Ltd. in 2001.",
                  img: AtulImg,
                },
                {
                  name: "Navjot Paul Singh",
                  role: "Practising architect with 24+ years of experience across diverse projects in India and overseas. A Chandigarh College of Architecture graduate, he co-founded GAPL with Atul Sharma, focusing on architecture and interiors that exceed client expectations.",
                  img: NavjotImg,
                },
              ].map((member) => (
                <div key={member.name}>
                  <Image
                    src={member.img}
                    alt={member.name}
                    width={600}
                    height={400}
                    className="w-full object-cover rounded-[28px] mb-4"
                  />
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-[22px] text-[#563433] font-semibold">
                        {member.name}
                      </h3>
                      <p className="text-[14px] text-[#8e5353] mt-1">
                        {member.role}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <a
                        href="#"
                        className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-[#7B2D2D] transition-colors"
                      >
                        <svg
                          className="w-3.5 h-3.5 text-gray-500"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                          <circle cx="4" cy="4" r="2" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 py-[45px]">
          <div className="grid md:grid-cols-2 gap-[16px] items-center">
            <div className="h-auto flex items-center justify-center text-gray-400 order-2 md:order-1">
              <Image
                className="h-auto rounded-[28px]"
                src={JourneyImg}
                alt="studio"
              />
            </div>
            <div className="order-1 p-[28px] rounded-[28px] bg-[#e5e5e5] md:order-2">
              <h2 className="text-5xl font-light text-[#563433] mb-8">
                Our Journey
              </h2>
              <p className="text-[#563433] leading-relaxed mb-6">
                Founded by Atul Sharma, an alumnus of Chandigarh College of
                Architecture, the practice brings decades of architectural
                experience. Alongside Navjot Paul Singh, the firm continues to
                shape diverse projects across India and overseas.
              </p>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto py-[45px] px-4">
          <h2 className="text-5xl font-light text-[#563433] mb-16 text-center">
            Our Projects
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-[20px]">
            <div className="w-full md:w-[calc(33.333%-14px)] flex flex-col gap-[20px] items-center justify-between">
              <div className="w-full md:max-w-[360px] flex items-end justify-center min-h-[220px] md:min-h-[300px] bg-[#e5e5e5] rounded-[20px_20px_0_0]">
                <Image
                  className="h-[180px] md:h-[260px] w-full max-w-[360px] rounded-[20px_20px_0_0] object-cover"
                  src={services1}
                  alt="studio"
                />
              </div>
              <div className="w-full flex flex-col items-start justify-start">
                <div>
                  <h3 className="text-[20px] text-[#563433]">Educational</h3>
                </div>
                <Link
                  className="flex w-[100%] max-w-[170px] items-center gap-2 group"
                  href={"/services"}
                >
                  <h3 className="text-[15px] font-light text-[#563433]">
                    View More
                  </h3>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      <path
                        d="M2 8h12M9 3l5 5-5 5"
                        stroke="black"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>

            <div className="w-full md:w-[calc(33.333%-14px)] flex flex-col gap-[20px] items-center justify-between">
              <div className="w-full md:max-w-[360px] flex items-end justify-center min-h-[220px] md:min-h-[300px] bg-[#e5e5e5] rounded-[20px_20px_0_0]">
                <Image
                  className="h-[180px] md:h-[260px] w-full max-w-[360px] rounded-[20px_20px_0_0] object-cover"
                  src={services2}
                  alt="studio"
                />
              </div>
              <div className="w-full flex flex-col items-start justify-start ">
                <div>
                  <h3 className="text-[20px] text-[#563433]">Infrastructure</h3>
                </div>
                <Link
                  className="flex w-[100%] max-w-[170px] items-center gap-2 group"
                  href={"/services"}
                >
                  <h3 className="text-[15px] font-light text-[#563433]">
                    View More
                  </h3>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      <path
                        d="M2 8h12M9 3l5 5-5 5"
                        stroke="black"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>

            <div className="w-full md:w-[calc(33.333%-14px)] flex flex-col gap-[20px] items-center justify-between">
              <div className="w-full md:max-w-[360px] flex items-end justify-center min-h-[220px] md:min-h-[300px] bg-[#e5e5e5] rounded-[20px_20px_0_0]">
                <Image
                  className="h-[180px] md:h-[260px] w-full max-w-[360px] rounded-[20px_20px_0_0] object-cover"
                  src={services3}
                  alt="studio"
                />
              </div>
              <div className="w-full flex flex-col items-start justify-start ">
                <div>
                  <h3 className="text-[20px] text-[#563433]">Residential</h3>
                </div>
                <Link
                  className="flex w-[100%] max-w-[170px] items-center gap-2 group"
                  href={"/services"}
                >
                  <h3 className="text-[15px] font-light text-[#563433]">
                    View More
                  </h3>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      <path
                        d="M2 8h12M9 3l5 5-5 5"
                        stroke="black"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>

            <div className="w-full md:w-[calc(33.333%-14px)] flex flex-col gap-[20px] items-center justify-between">
              <div className="w-full md:max-w-[360px] flex items-end justify-center min-h-[220px] md:min-h-[300px] bg-[#e5e5e5] rounded-[20px_20px_0_0]">
                <Image
                  className="h-[180px] md:h-[260px] w-full max-w-[360px] rounded-[20px_20px_0_0] object-cover"
                  src={services4}
                  alt="studio"
                />
              </div>
              <div className="w-full flex flex-col items-start justify-start">
                <div>
                  <h3 className="text-[20px] text-[#563433]">
                    Hospitality and Entertainment
                  </h3>
                </div>
                <Link
                  className="flex w-[100%] max-w-[170px] items-center gap-2 group"
                  href={"/services"}
                >
                  <h3 className="text-[15px] font-light text-[#563433]">
                    View More
                  </h3>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      <path
                        d="M2 8h12M9 3l5 5-5 5"
                        stroke="black"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>

            <div className="w-full md:w-[calc(33.333%-14px)] flex flex-col gap-[20px] items-center justify-between">
              <div className="w-full md:max-w-[360px] flex items-end justify-center min-h-[220px] md:min-h-[300px] bg-[#e5e5e5] rounded-[20px_20px_0_0]">
                <Image
                  className="h-[180px] md:h-[260px] w-full max-w-[360px] rounded-[20px_20px_0_0] object-cover"
                  src={services5}
                  alt="studio"
                />
              </div>
              <div className="w-full flex flex-col items-start justify-start ">
                <div>
                  <h3 className="text-[20px] text-[#563433]">Institutional</h3>
                </div>
                <Link
                  className="flex w-[100%] max-w-[170px] items-center gap-2 group"
                  href={"/services"}
                >
                  <h3 className="text-[15px] font-light text-[#563433]">
                    View More
                  </h3>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      <path
                        d="M2 8h12M9 3l5 5-5 5"
                        stroke="black"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>

            <div className="w-full md:w-[calc(33.333%-14px)] flex flex-col gap-[20px] items-center justify-between">
              <div className="w-full md:max-w-[360px] flex items-end justify-center min-h-[220px] md:min-h-[300px] bg-[#e5e5e5] rounded-[20px_20px_0_0]">
                <Image
                  className="h-[180px] md:h-[260px] w-full max-w-[360px] rounded-[20px_20px_0_0] object-cover"
                  src={services6}
                  alt="studio"
                />
              </div>
              <div className="w-full flex flex-col items-start justify-start">
                <div>
                  <h3 className="text-[20px] text-[#563433]">Commercial</h3>
                </div>
                <Link
                  className="flex w-[100%] max-w-[170px] items-center gap-2 group"
                  href={"/services"}
                >
                  <h3 className="text-[15px] font-light text-[#563433]">
                    View More
                  </h3>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      <path
                        d="M2 8h12M9 3l5 5-5 5"
                        stroke="black"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#8e5353] w-full my-[50px] py-[40px] mx-auto overflow-hidden">
          <div className="text-5xl font-light text-[#ffffff] mb-16 text-center">
            Our Design Philosophy
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap items-center justify-center gap-5">
              {[
                {
                  label: "Balance",
                  bg: "#563433",
                  textColor: "#ffffff",
                  image: balance,
                },
                {
                  label: "Movement",
                  bg: "#ffffff",
                  textColor: "#563433",
                  image: movement,
                },
                {
                  label: "Rhythm",
                  bg: "#563433",
                  textColor: "#ffffff",
                  image: rhythm,
                },
                {
                  label: "Emphasis",
                  bg: "#ffffff",
                  textColor: "#563433",
                  image: emphasis,
                },
                {
                  label: "Contrast",
                  bg: "#563433",
                  textColor: "#ffffff",
                  image: contrast,
                },
                {
                  label: "Proportion",
                  bg: "#ffffff",
                  textColor: "#563433",
                  image: proportion,
                },
                {
                  label: "Unity",
                  bg: "#563433",
                  textColor: "#ffffff",
                  image: unity,
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col items-center justify-around w-full max-w-[250px] p-[10px] h-full min-h-[250px] rounded-[30px] group  transition-transform duration-300 hover:-translate-y-2"
                  style={{ backgroundColor: item.bg }}
                >
                  <div className="flex items-center justify-center h-[140px]">
                    <div className="relative flex items-center justify-center h-[140px] w-full">
                      <Image
                        src={item.image}
                        alt={item.label}
                        width={100}
                        height={100}
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div className="text-center flex flex-col gap-3">
                    <p
                      className="tracking-[0.2em] text-xs font-semibold uppercase opacity-80"
                      style={{ color: item.textColor }}
                    >
                      {item.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Clients & Collaborations — Marquee Slider */}
        <section className="bg-[#ffffff] text-[#563433] py-[45px] overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 text-center mb-12">
            <h2 className="text-5xl font-light mb-12">
              Clients & Collaborations
            </h2>
            <p className="text-[15px] opacity-90 leading-relaxed">
              Over the years, Genarch has partnered with leading brands,
              institutions, and clients across sectors — ranging from corporate
              entities to private patrons.
            </p>
          </div>

          {/* Marquee track */}
          <div className="relative w-full overflow-hidden">
            {/* Left fade */}
            <div className=" absolute left-0 top-0 h-full w-24 z-10 bg-gradient-to-r from-white to-transparent" />
            {/* Right fade */}
            <div className=" absolute right-0 top-0 h-full w-24 z-10 bg-gradient-to-l from-white to-transparent" />

            <div
              className="flex gap-[20px] w-max"
              style={{
                animation: "marquee 45s linear infinite",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLDivElement).style.animationPlayState =
                  "paused")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLDivElement).style.animationPlayState =
                  "running")
              }
            >
              {/* First set */}
              {clientLogos.map((img, i) => (
                <div
                  key={`a-${i}`}
                  className="flex items-center justify-center w-[140px] h-[140px] flex-shrink-0"
                >
                  <Image
                    height={140}
                    width={140}
                    src={img}
                    alt={`client-${i + 1}`}
                  />
                </div>
              ))}
              {/* Duplicate for seamless loop */}
              {clientLogos.map((img, i) => (
                <div
                  key={`b-${i}`}
                  className="flex items-center justify-center w-[140px] h-[140px] flex-shrink-0"
                >
                  <Image
                    height={140}
                    width={140}
                    src={img}
                    alt={`client-${i + 1}`}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Inline keyframes — no tailwind config change needed */}
          <style jsx>{`
            @keyframes marquee {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
          `}</style>
        </section>
      </main>
      <Footer />
    </>
  );
}
