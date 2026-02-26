"use client";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { servicesdata } from "@/services-data/services-data";
import Footer from "@/components/Footer";
import { useRef } from "react";

export default function ProjectPage() {
  const params = useParams();
  const router = useRouter();
  const heroImageRef = useRef<HTMLDivElement>(null);

  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;
  const project = servicesdata.find((p) => p.slug === slug);

  const handleBackClick = () => {
    router.push("/services");
  };

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl">Project not found</h1>
      </div>
    );
  }

  return (
    <>
      <div className="relative w-full lg:h-screen overflow-hidden bg-white">
        <div className="absolute top-6 left-6 z-10 transition-opacity duration-500 ">
          <button
            onClick={handleBackClick}
            className="group cursor-pointer bg-[#563433] text-[#e5e5e5] relative overflow-hidden rounded-4xl p-[12px] text-[12px]"
          >
            <span className="relative z-10 group-hover:text-[#563433] transition-colors duration-300">
              ← Back to Projects
            </span>
            <span className="absolute inset-0 bg-[#563433] group-hover:bg-[#ffffff] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>
        </div>

        {/* Image Container */}
        <div ref={heroImageRef} className="w-full">
          <Image
            src={project.image}
            alt={project.title}
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto "
          />
        </div>

        {/* Top Cover - unfolds upward */}
      </div>

      {/* MAIN CONTENT */}
      <main className="min-h-screen bg-white p-8 md:p-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl text-center font-bold text-[#563433] mb-6">
            {project.title}
          </h1>

          <div className="relative w-full rounded-xl overflow-hidden">
            <Image
              src={project.imageone}
              alt={project.title}
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto rounded-xl"
            />
          </div>

          <div className="max-w-3xl mx-auto text-center py-10">
            <p className="text-3xl mb-4">{project.subtitle}</p>
            <p className="text-xl">{project.description}</p>
          </div>

          <div className="flex flex-col md:flex-row mx-auto justify-center text-center gap-10 items-center mb-16">
            <div className="relative w-full max-w-[358px] mx-auto rounded-xl overflow-hidden">
              <Image
                src={project.imageleft}
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto min-h-[315px] object-cover rounded-xl"
              />
            </div>

            <div className="w-full md:w-1/3 text-center space-y-6">
              <p>
                <strong>Client</strong>
                <br />
                {project.client}
              </p>
              <p>
                <strong>Area</strong>
                <br />
                {project.area}
              </p>
              <p>
                <strong>Status</strong>
                <br />
                {project.status}
              </p>
              <p>
                <strong>Team</strong>
                <br />
                {project.team}
              </p>
            </div>

            <div className="relative w-full max-w-[358px] mx-auto rounded-xl overflow-hidden">
              <Image
                src={project.imageright}
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto min-h-[315px] object-cover rounded-xl"
              />
            </div>
          </div>

          <p className="text-xl text-justify justify-center max-w-5xl mx-auto mb-16">
            {project.details}
          </p>

          <div className="relative w-full rounded-xl overflow-hidden">
            <Image
              src={project.imagetwo}
              alt={project.title}
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto rounded-xl"
            />
          </div>
        </div>
      </main>

      <div className="flex justify-end m-[16px]">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="group cursor-pointer relative overflow-hidden bg-[#563433] rounded-4xl border-2 border-[#563433] hover:border-[#563433] px-4 py-2 text-[12px]"
        >
          <span className="relative text-[#ffffff] text-[15px] hover:border-white z-10 group-hover:text-[#563433] transition-colors">
            ↑
          </span>
          <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
        </button>
      </div>

      <Footer />
    </>
  );
}
