"use client";

import { useLayoutEffect, useRef, useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { projects } from "@/data/projects";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

export default function ProjectPage() {
  const params = useParams();
  const router = useRouter();
  const contentRef = useRef<HTMLDivElement>(null);
  const heroImageRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const [hasExplored, setHasExplored] = useState(false);
  const [isAnimating, setIsAnimating] = useState(true);
  const hasAnimatedRef = useRef(false);

  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;
  const project = projects.find((p) => p.slug === slug);

  // Smooth zoom-in animation on mount
  useLayoutEffect(() => {
    if (hasAnimatedRef.current) return;
    hasAnimatedRef.current = true;

    // Clean up any existing ScrollTriggers
    ScrollTrigger.getAll().forEach((t) => t.kill());
    ScrollTrigger.clearScrollMemory();

    window.history.scrollRestoration = "manual";
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });

    if (heroImageRef.current && imageWrapperRef.current) {
      // Set initial state - image zoomed out (small)
      gsap.set(imageWrapperRef.current, {
        scale: 0.25,
        opacity: 0,
      });

      gsap.set(heroImageRef.current, {
        opacity: 1,
      });

      // Animate in with smooth zoom IN and fade
      requestAnimationFrame(() => {
        if (!imageWrapperRef.current) return;

        // Zoom in from small to full size with fade - VERY SLOW
        gsap.to(imageWrapperRef.current, {
          scale: 1,
          opacity: 1,
          duration: 2.8,
          ease: "power2.out",
          onComplete: () => {
            requestAnimationFrame(() => {
              setIsAnimating(false);
            });
          },
        });
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
    if (!hasExplored || isAnimating) {
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
  }, [hasExplored, isAnimating]);

  const handleExploreClick = () => {
    setHasExplored(true);

    setTimeout(() => {
      contentRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 50);
  };

  const handleBackClick = () => {
    // Smooth zoom out and fade animation before navigation - VERY SLOW
    if (heroImageRef.current && imageWrapperRef.current) {
      gsap.to(imageWrapperRef.current, {
        scale: 0.9,
        opacity: 0,
        duration: 1.2,
        ease: "power2.in",
      });

      gsap.to(heroImageRef.current, {
        opacity: 0,
        duration: 1.2,
        ease: "power2.in",
        onComplete: () => {
          // Clean up everything after animation
          ScrollTrigger.getAll().forEach((t) => t.kill());
          ScrollTrigger.clearScrollMemory();
          gsap.killTweensOf("*");

          // Reset all refs and states
          hasAnimatedRef.current = false;
          setHasExplored(false);
          setIsAnimating(true);

          // Re-enable scrolling
          document.body.style.overflow = "";
          document.documentElement.style.overflow = "";

          // Clear session storage
          sessionStorage.removeItem("projectTransition");

          // Reset scroll position
          window.scrollTo(0, 0);

          // Navigate
          router.push("/");
        },
      });
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
      <div className="relative w-full h-screen overflow-hidden bg-white">
        <div
          className={`absolute top-6 left-6 z-10 transition-opacity duration-500 ${
            isAnimating ? "opacity-0" : "opacity-100"
          }`}
        >
          <button
            onClick={handleBackClick}
            className="px-5 py-2 cursor-pointer rounded-full bg-[#9da8d91a] backdrop-blur-sm text-white text-sm font-semibold hover:bg-[#9da8d930] transition-colors"
          >
            ← Back to Projects
          </button>
        </div>

        <div
          onClick={handleExploreClick}
          className={`absolute bottom-10 left-1/2 -translate-x-1/2 z-10 bg-[#9da8d91a] backdrop-blur-sm text-white px-6 py-4 rounded-full font-bold text-[18px] cursor-pointer select-none hover:scale-105 transition-all duration-500 ${
            isAnimating
              ? "opacity-0 translate-y-4"
              : "opacity-100 translate-y-0 animate-bounce"
          }`}
        >
          Explore ↓
        </div>

        <div ref={heroImageRef} className="w-full h-full">
          <div ref={imageWrapperRef} className="w-full h-full">
            <Image
              src={project.imageone || project.image}
              alt={project.title}
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <main ref={contentRef} className="min-h-screen bg-white p-8 md:p-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl text-center font-bold text-[#563433] mb-6">
            {project.title}
          </h1>

          <div className="relative w-full h-[60vh] mb-10 rounded-xl overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="max-w-3xl mx-auto text-center py-10">
            <p className="text-3xl mb-4">{project.subtitle}</p>
            <p className="text-xl">{project.description}</p>
          </div>

          <div className="flex flex-col md:flex-row gap-10 items-center mb-16">
            <div className="relative w-full md:w-1/3 h-[50vh] rounded-xl overflow-hidden">
              <Image
                src={project.imageleft || project.image}
                alt=""
                fill
                className="object-cover"
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

            <div className="relative w-full md:w-1/3 h-[50vh] rounded-xl overflow-hidden">
              <Image
                src={project.imageright || project.image}
                alt=""
                fill
                className="object-cover"
              />
            </div>
          </div>

          <p className="text-xl text-justify justify-center max-w-5xl mx-auto mb-16">
            {project.details}
          </p>

          <div className="relative w-full h-[60vh] rounded-xl overflow-hidden">
            <Image
              src={project.imagetwo || project.image}
              alt=""
              fill
              className="object-cover"
            />
          </div>
        </div>
      </main>
    </>
  );
}
