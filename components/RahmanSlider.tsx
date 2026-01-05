"use client";

import { useLayoutEffect, useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRouter } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

const slides = [
  {
    title: "WELLNESS CENTRE, NADAUN",
    image: "/images/img5.jpg",
    slug: "project-one",
    hero: true,
  },
  {
    title: "FARMHOUSE, GREATER NOIDA",
    image: "/images/img1.jpg",
    slug: "project-two",
  },
  {
    title: "CORPORATE OFFICE BUILDING, GURUGRAM",
    image: "/images/img3.jpg",
    slug: "project-three",
  },
  {
    title: "DHARAV SCHOOL – JUNIOR WING",
    image: "/images/img4.jpeg",
    slug: "project-four",
  },
];

export default function RahmanSlider() {
  const pinRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const isInitializedRef = useRef(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useLayoutEffect(() => {
    // Prevent double initialization in React StrictMode
    if (isInitializedRef.current) return;

    // Force scroll to top immediately
    window.scrollTo(0, 0);
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // Clean up any existing ScrollTriggers first
    ScrollTrigger.getAll().forEach((t) => t.kill());
    ScrollTrigger.clearScrollMemory();
    gsap.killTweensOf("*");

    // Small delay to ensure DOM is ready
    timeoutRef.current = setTimeout(() => {
      if (!pinRef.current) return;

      const ctx = gsap.context(() => {
        const panels = gsap.utils.toArray<HTMLElement>(".panel");
        const panelWidth = window.innerWidth * 0.62;
        const panelHeight = window.innerHeight * 0.6;
        const gap = 80;

        const totalWidth =
          panelWidth * panels.length + gap * (panels.length - 1);
        const moveDistance = totalWidth - window.innerWidth;

        // Set initial zoom state for first panel - full width
        gsap.set(panels[0], {
          width: window.innerWidth,
          height: window.innerHeight,
          scale: 1,
          marginRight: "0px",
          x: 0,
        });

        gsap.set(panels.slice(1), {
          width: panelWidth,
          height: panelHeight,
          x: 0,
          clearProps: "transform",
        });

        // Create the main timeline
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: pinRef.current,
            start: "top top",
            end: `+=${moveDistance + window.innerHeight}`,
            scrub: 2,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        // Add zoom out animation for first panel (happens early in scroll)
        tl.to(panels[0], {
          width: panelWidth,
          height: panelHeight,
          duration: 0.3, // Takes 30% of total scroll
          ease: "power2.out",
        });

        // Add horizontal scroll for all panels
        tl.to(
          panels,
          {
            x: -moveDistance,
            ease: "power1.inOut",
            duration: 1,
          },
          0.1 // Start slightly after zoom begins for smooth transition
        );

        // Mark as initialized and refresh
        isInitializedRef.current = true;
        ScrollTrigger.refresh();
      }, pinRef);

      return () => {
        ctx.revert();
      };
    }, 150);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      isInitializedRef.current = false;
      ScrollTrigger.getAll().forEach((t) => t.kill());
      ScrollTrigger.clearScrollMemory();
    };
  }, []);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Reset on route change preparation
  useEffect(() => {
    const handleBeforeUnload = () => {
      window.scrollTo(0, 0);
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, []);

  const handleSlideClick = (
    slug: string,
    image: string,
    element: HTMLElement
  ) => {
    setIsTransitioning(true);

    const rect = element.getBoundingClientRect();

    sessionStorage.setItem(
      "projectTransition",
      JSON.stringify({
        image,
        rect: {
          top: rect.top,
          left: rect.left,
          width: rect.width,
          height: rect.height,
        },
      })
    );

    ScrollTrigger.getAll().forEach((t) => t.kill());
    ScrollTrigger.clearScrollMemory();
    gsap.killTweensOf("*");

    setTimeout(() => {
      router.push(`/projects/${slug}`);
    }, 100);
  };

  return (
    <>
      <section className="relative h-[450vh] bg-white">
        <div
          ref={pinRef}
          className="sticky top-0 h-screen overflow-hidden flex items-center"
        >
          <div className="flex items-center gap-[80px]">
            {slides.map((slide, index) => (
              <Slide
                key={index}
                {...slide}
                onNavigate={handleSlideClick}
                isTransitioning={isTransitioning}
              />
            ))}
          </div>
        </div>
      </section>

      {isTransitioning && (
        <div className="fixed inset-0 bg-white z-50 pointer-events-none" />
      )}
    </>
  );
}

function Slide({
  title,
  image,
  slug,
  hero,
  onNavigate,
  isTransitioning,
}: {
  title: string;
  image: string;
  slug: string;
  hero?: boolean;
  onNavigate: (slug: string, image: string, element: HTMLElement) => void;
  isTransitioning: boolean;
}) {
  const slideRef = useRef<HTMLDivElement>(null);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (slideRef.current) {
      onNavigate(slug, image, slideRef.current);
    }
  };

  return (
    <div
      ref={slideRef}
      className={`panel relative flex-shrink-0 overflow-hidden bg-black ${
        isTransitioning ? "transition-opacity duration-300" : ""
      }`}
      style={{
        minWidth: "62vw",
        minHeight: "60vh",
      }}
    >
      <Image
        src={image}
        alt={title}
        fill
        priority={hero}
        sizes={hero ? "65vw" : "48vw"}
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="absolute bottom-14 left-14 text-white">
        <h2 className="text-3xl mb-4 font-light">{title}</h2>

        <button
          onClick={handleClick}
          className="group cursor-pointer relative overflow-hidden border border-white px-6 py-3 text-lg"
        >
          <span className="relative z-10 group-hover:text-black transition-colors">
            Read More →
          </span>
          <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
        </button>
      </div>
    </div>
  );
}
