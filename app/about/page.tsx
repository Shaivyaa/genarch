"use client";

import Header from "@/components/Header";
import AboutImg from "@/public/images/about-img1.jpg";
import Image from "next/image";
import StudioImg from "@/public/images/contact.jpg";
import TeamImg from "@/public/images/aboutUs-team.jpg";
import OfficeImg from "@/public/images/office.jpg";
import AtulImg from "@/public/images/atulSharma.jpg";
import NavjotImg from "@/public/images/navjyot.jpg";
import services1 from "@/public/services-images/kindergarten.jpg";
import services2 from "@/public/services-images/costa-goa.jpg";
import services3 from "@/public/services-images/dubai-villa.jpg";
import JourneyImg from "@/public/images/journey.jpg";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import costaImg from "@/public/images/Costa.svg";
import Footer from "@/components/Footer";

export default function About() {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  const pathname = usePathname();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname]);

  useEffect(() => {
    // Scroll to top immediately when component mounts
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    // Force scroll after render
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    });
  }, []);

  return (
    <>
      <Header />
      <main className="w-full  bg-white">
        {/* Hero Section */}
        <section className="relative w-full ">
          <Image
            src={AboutImg}
            alt="about"
            width={0}
            height={0}
            sizes="100vw"
            className="md:w-full h-[50vh]  md:h-[60vh] object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl md:text-8xl font-bold md:font-light text-white tracking-wide">
              About Us
            </h1>
          </div>
        </section>

        {/* Introduction */}
        <section className="max-w-6xl mx-auto px-6 py-24">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-light text-[#563433] mb-8 leading-tight">
                A multidisciplinary design practice rooted in experience,
                creativity, and architectural rigor.
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Genarch is a multidisciplinary design practice rooted in
                experience, creativity, and architectural rigor. Founded in 2001
                as Genesis Architects in New Delhi, the firm has evolved into a
                sophisticated architectural and design institution with
                expertise across commercial, institutional, hospitality,
                residential, and experiential environments.
              </p>
              <p className="text-gray-600 leading-relaxed">
                For over two decades, Genarch has upheld a philosophy of craft,
                precision, and collaboration ensuring that every project is
                conceived with clarity, thoughtfully resolved through
                discipline, and realized with a deep respect for context,
                function, and human experience.
              </p>
            </div>
            <div className=" h-[500px] overflow-hidden fit-content object-cover flex items-center justify-center text-gray-400">
              <Image src={StudioImg} alt="studio" />
            </div>
          </div>
        </section>

        {/* Who We Are Content */}
        <section className="max-w-4xl mx-auto px-6 py-24 text-center">
          <h2 className="text-5xl font-light text-[#563433] mb-12">
            Who We Are
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Genarch combines diverse design sensibilities with a strong
            technical foundation. Our teams bring together talents from across
            India, enriching the practice with varied cultural and regional
            perspectives. This diversity empowers us to work confidently across
            typologies, scales, and geographies — from dynamic corporate
            headquarters to serene wellness retreats, vibrant hospitality spaces
            to thoughtful educational environments.
          </p>
        </section>

        {/* Who We Are - Full Width Image */}
        <section className=" w-full flex items-center justify-center text-gray-400">
          <Image src={TeamImg} alt="studio" />
        </section>

        {/* Leadership */}
        <section className="bg-gray-50 py-24">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-5xl font-light text-[#563433] mb-16 text-center">
              Leadership
            </h2>
            <div className="grid md:grid-cols-2 gap-16">
              <div className="text-center">
                <div className="mb-6 flex items-center justify-center text-gray-400">
                  <Image
                    src={NavjotImg}
                    alt="studio"
                    height={400}
                    width={400}
                  />
                </div>
                <h3 className="text-3xl font-light text-[#563433] mb-4">
                  Navjot Paul Singh
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  With over 20 years in the field, Navjot brings wide-ranging
                  expertise across architecture and interiors, leading Genarchs
                  design culture with curiosity and conviction.
                </p>
              </div>
              <div className="text-center">
                <div className=" mb-6 flex items-center justify-center text-gray-400">
                  <Image src={AtulImg} alt="studio" height={400} width={400} />
                </div>
                <h3 className="text-3xl font-light text-[#563433] mb-4">
                  Atul Sharma
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  As a director with deep strategic design experience, Atul
                  champions solutions that balance creativity with
                  functionality, shaping architecture that resonates with both
                  users and context.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Location */}
        <section className="max-w-4xl mx-auto px-6 py-24 text-center">
          <h2 className="text-5xl font-light text-[#563433] mb-12">
            Where We Work
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-16">
            Headquartered in New Delhi, Genarch operates nationally across
            residential, commercial, institutional, and leisure sectors — and
            collaborates with clients both in India and internationally.
          </p>
          <div className="flex items-center justify-center text-gray-400">
            <Image src={OfficeImg} alt="studio" />
          </div>
        </section>

        {/* Our Journey */}
        <section className="max-w-6xl mx-auto px-6 py-24">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="h-auto flex items-center justify-center text-gray-400 order-2 md:order-1">
              <Image className="h-auto" src={JourneyImg} alt="studio" />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-5xl font-light text-[#563433] mb-8">
                Our Journey
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Started as Genesis Architects in 2001 by Navjot Paul Singh and
                Atul Sharma, the practice quickly built a reputation for
                attention to detail, client partnership, and design excellence.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Navjots broad range of work and Atuls strategic thinking helped
                shape a studio that looks beyond the ordinary, delivering
                outcomes that consistently go beyond the brief. While the name
                has evolved to Genarch to reflect a more cohesive identity, our
                core values remain unchanged: integrity in design, clarity of
                process, and dedication to creative outcomes.
              </p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="max-w-6xl mx-auto px-6 py-24">
          <h2 className="text-5xl font-light text-[#563433] mb-16 text-center">
            Our Services
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="bg-gray-100 h-64 flex items-center object-cover justify-center text-gray-400 mb-4">
                <Image
                  className="h-64 object-cover"
                  src={services1}
                  alt="studio"
                />
              </div>
              <Link
                className="flex w-[100%] max-w-[170px] items-center gap-2 group"
                href={"/services"}
              >
                <h3 className="text-[22px] font-light text-[#563433]">
                  Commercial
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
              {/* <p className="text-gray-600">
                Commercial, Residential, Institutional
              </p> */}
            </div>
            <div className="space-y-4">
              <div className="bg-gray-100 h-64 flex items-center justify-center text-gray-400 mb-4">
                <Image
                  src={services2}
                  className="h-64 object-cover"
                  alt="studio"
                />
              </div>
              <Link
                className="flex w-[100%] items-center gap-2 group"
                href={"/services"}
              >
                <h3 className="text-[22px] font-light text-[#563433]">
                  Hospitality & Entertainment
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
              {/* <p className="text-gray-600">Hospitality and Entertainment</p> */}
            </div>
            <div className="space-y-4">
              <div className="bg-gray-100 h-64 flex items-center justify-center text-gray-400 mb-4">
                <Image
                  className="h-64 object-cover"
                  src={services3}
                  alt="studio"
                />
              </div>
              <Link
                className="flex w-[100%]  items-center gap-2 group"
                href={"/services"}
              >
                <h3 className="text-[22px] font-light text-[#563433]">
                  Residential & Lifestyle
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
              {/* <p className="text-gray-600">
                Spatial strategy, Design consulting, Concept development
              </p> */}
            </div>
          </div>
        </section>

        {/* Design Philosophy */}
        <section className="bg-[#e5e5e5] text-[#563433] py-24">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-5xl font-light mb-16">Our Design Philosophy</h2>
            <div className="space-y-8 text-lg leading-relaxed">
              <p className="opacity-90">
                At Genarch, architecture is a disciplined yet creative pursuit.
              </p>
              <div className="grid md:grid-cols-2 gap-8 pt-8">
                <div className="text-left">
                  <p className="opacity-80">
                    Design begins with context — understanding place, program,
                    and people.
                  </p>
                </div>
                <div className="text-left">
                  <p className="opacity-80">
                    Good architecture is informed by invisible decisions — the
                    ones that ensure comfort, performance, and longevity.
                  </p>
                </div>
                <div className="text-left">
                  <p className="opacity-80">
                    Materials are chosen with intent — not for decoration, but
                    for meaning and durability.
                  </p>
                </div>
                <div className="text-left">
                  <p className="opacity-80">
                    Form is a result of a thoughtful process — not the starting
                    point.
                  </p>
                </div>
              </div>
              <p className="opacity-90 pt-8">
                This design mindset shapes how we approach every project,
                ensuring solutions that are thoughtful, responsible, and
                enduring.
              </p>
            </div>
          </div>
        </section>

        {/* Clients */}
        <section className="bg-[#ffffff] text-[#563433] py-24">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-5xl font-light mb-12">
              Clients & Collaborations
            </h2>
            <p className="text-xl opacity-90 leading-relaxed">
              Over the years, Genarch has partnered with leading brands,
              institutions, and clients across sectors — ranging from corporate
              entities to private patrons.
            </p>
          </div>
          <div className="flex max-w-4xl m-[50_auto_0_auto] flex-wrap items-center justify-center gap-[20px]">
            <Image height={140} width={140} src={costaImg} alt="costa" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
