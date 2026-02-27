"use client";

import { useLayoutEffect, useRef, useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { projects } from "@/data/projects";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import Footer from "@/components/Footer";

export default function ProjectPage() {
  const params = useParams();
  const router = useRouter();
  const contentRef = useRef<HTMLDivElement>(null);
  const heroImageRef = useRef<HTMLDivElement>(null);
  const topCoverRef = useRef<HTMLDivElement>(null);
  const bottomCoverRef = useRef<HTMLDivElement>(null);
  const [isAnimating, setIsAnimating] = useState(true);
  const hasAnimatedRef = useRef(false);

  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;
  const project = projects.find((p) => p.slug === slug);

  // Unfold animation from top and bottom
  useLayoutEffect(() => {
    if (hasAnimatedRef.current) return;
    hasAnimatedRef.current = true;

    // Clean up any existing ScrollTriggers
    ScrollTrigger.getAll().forEach((t) => t.kill());
    ScrollTrigger.clearScrollMemory();

    window.history.scrollRestoration = "manual";
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });

    if (heroImageRef.current && topCoverRef.current && bottomCoverRef.current) {
      // Set initial state - covers fully closed
      gsap.set([topCoverRef.current, bottomCoverRef.current], {
        scaleY: 1,
      });

      gsap.set(heroImageRef.current, {
        opacity: 1,
      });

      // Animate unfold - covers slide away from center
      requestAnimationFrame(() => {
        if (!topCoverRef.current || !bottomCoverRef.current) return;

        const tl = gsap.timeline({
          onComplete: () => {
            requestAnimationFrame(() => {
              setIsAnimating(false);
            });
          },
        });

        // Unfold from center - top cover goes up, bottom cover goes down
        tl.to(
          topCoverRef.current,
          {
            scaleY: 0,
            transformOrigin: "top center",
            duration: 2.2,
            ease: "power3.inOut",
          },
          0,
        ).to(
          bottomCoverRef.current,
          {
            scaleY: 0,
            transformOrigin: "bottom center",
            duration: 2.2,
            ease: "power3.inOut",
          },
          0,
        );
      });
    } else {
      requestAnimationFrame(() => {
        setIsAnimating(false);
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      ScrollTrigger.clearScrollMemory();
    };
  }, []);

  useEffect(() => {
    if (isAnimating) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [isAnimating]);

  const handleBackClick = () => {
    // Set flag to skip loader on home page
    sessionStorage.setItem("projectTransition", "true");

    // Fold back animation - covers close from top and bottom
    if (heroImageRef.current && topCoverRef.current && bottomCoverRef.current) {
      const tl = gsap.timeline({
        onComplete: () => {
          // Clean up everything after animation
          ScrollTrigger.getAll().forEach((t) => t.kill());
          ScrollTrigger.clearScrollMemory();
          gsap.killTweensOf("*");

          // Reset all refs and states
          hasAnimatedRef.current = false;
          setIsAnimating(true);

          // Re-enable scrolling
          document.body.style.overflow = "";
          document.documentElement.style.overflow = "";

          // Reset scroll position
          window.scrollTo(0, 0);

          // Navigate
          router.push("/");
        },
      });

      // Fold back - covers close from edges to center
      tl.to(
        topCoverRef.current,
        {
          scaleY: 1,
          transformOrigin: "top center",
          duration: 1.2,
          ease: "power2.inOut",
        },
        0,
      ).to(
        bottomCoverRef.current,
        {
          scaleY: 1,
          transformOrigin: "bottom center",
          duration: 1.2,
          ease: "power2.inOut",
        },
        0,
      );
    } else {
      router.push("/");
    }
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
      {/* HERO SECTION */}
      <div className="relative w-full lg:h-screen overflow-hidden bg-white">
        <div
          className={`absolute top-6 left-6 z-10 transition-opacity duration-500 ${
            isAnimating ? "opacity-0" : "opacity-100"
          }`}
        >
          <button
            onClick={handleBackClick}
            className="group cursor-pointer bg-[#563433] border border-[#e5e5e5] text-[#e5e5e5] relative overflow-hidden rounded-4xl p-[12px] text-[12px]"
          >
            <span className="relative z-10 group-hover:text-[#563433] transition-colors duration-300">
              ← Back to Projects
            </span>
            <span className="absolute inset-0 bg-[#563433] group-hover:bg-[#ffffff] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>
        </div>

        {/* Image Container */}
        <div ref={heroImageRef} className="w-full ">
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
        <div
          ref={topCoverRef}
          className="absolute top-0 left-0 w-full h-1/2 bg-white z-[5] origin-top"
        />

        {/* Bottom Cover - unfolds downward */}
        <div
          ref={bottomCoverRef}
          className="absolute bottom-0 left-0 w-full h-1/2 bg-white z-[5] origin-bottom"
        />
      </div>

      {/* MAIN CONTENT */}
      <main ref={contentRef} className="min-h-screen bg-white p-8 md:p-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl text-center font-bold text-[#563433] mb-6">
            {project.title}
          </h1>

          {/* <div className="relative w-full h-auto  mb-10 rounded-xl overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover w-full h-auto"
            />
          </div> */}

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
                className="w-full h-auto min-h-[427px] object-cover rounded-xl"
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
                className="w-full h-auto min-h-[427px] object-cover rounded-xl"
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
