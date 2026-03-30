"use client";

import { useLayoutEffect, useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRouter } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

const slides = [
  {
    title: "PVR at Elan Miracle Mall",
    image: "/services-images/pvr-ggn-out-new.jpg",
    slug: "project-one",
  },
  // {
  //   title: "PVR at DLF Midtown Plaza",
  //   image: "/services-images/dharav-senior.jpg",
  //   slug: "project-two",
  // },

  {
    title: "Absolute Barbeque",
    image: "/services-images/bbq-out-neww.jpg",
    slug: "project-three",
  },
  {
    title: "Clubhouse",
    image: "/services-images/clubhouse-out-neww.jpg",
    slug: "project-four",
  },
  {
    title: "Chaayos Outlet Design Adaptation",
    image: "/services-images/chaayos-out.jpg",
    slug: "project-five",
  },
  {
    title: "Chilli’s Restaurant Interior",
    image: "/services-images/chillis-blr-out.jpg",
    slug: "project-six",
  },
  {
    title: "Cinnabon Café",
    image: "/services-images/cinnabon-out.jpg",
    slug: "project-seven",
  },
  {
    title: "Haldiram’s Restaurant Interior",
    image: "/services-images/haldiram-out.jpg",
    slug: "project-eight",
  },
  {
    title: "Popeyes Louisiana Kitchen",
    image: "/services-images/popyes-out.jpg",
    slug: "project-nine",
  },
  {
    title: "Farzi Café – Airport Terminal",
    image: "/services-images/farzi-out.jpg",
    slug: "project-ten",
  },
  {
    title: "Naivedyam Restaurant",
    image: "/services-images/naivedyam-out.jpg",
    slug: "project-eleven",
  },
  {
    title: "TGI Fridays – Outlet Design Adaptation",
    image: "/services-images/tgi-out.jpg",
    slug: "project-twelve",
  },
  {
    title: "Third Wave Coffee – Lucknow Airport",
    image: "/services-images/thirdwave-out.jpg",
    slug: "project-thirteen",
  },
  {
    title: "Costa Coffee",
    image: "/services-images/costa-goa-neww.jpg",
    slug: "project-fourteen",
  },
  {
    title: "Wellness Center, Nadaun",
    image: "/images/img5.jpg",
    slug: "project-fifteen",
    hero: true,
  },
  {
    title: "Farmhouse, Greater Noida",
    image: "/images/farmhouse-out-new.jpg",
    slug: "project-sixteen",
  },
  {
    title: "Corporate Office Building, Gurugram",
    image: "/images/img3.jpg",
    slug: "project-seventeen",
  },
  {
    title: "Dharav School, Junior Wing",
    image: "/images/dharav-school-out.jpg",
    slug: "project-eighteen",
  },
  {
    title: "Dubai Villa",
    image: "/services-images/dubai-villa.jpg",
    slug: "project-nineteen",
  },

  {
    title: "Dharav School, Senior Wing",
    image: "/services-images/dharav-senior.jpg",
    slug: "project-twenty",
  },
  {
    title: "Kindergarten",
    image: "/services-images/kindergarten.jpg",
    slug: "project-twentyone",
  },
  {
    title: "Corporate Office Interior – Medical Equipment Company",
    image: "/services-images/medical-out.jpg",
    slug: "project-twentytwo",
  },
  {
    title: "Airport Lounge – Trivandrum Airport",
    image: "/services-images/airport-tri-out.jpg",
    slug: "project-twentythree",
  },
];

export default function RahmanSlider() {
  const pinRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [zoomedProject, setZoomedProject] = useState<{
    title: string;
    image: string;
    slug: string;
    rect: DOMRect;
  } | null>(null);

  const isInitializedRef = useRef(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // typeof window check makes this SSR-safe; lazy initializer runs once on client
  const [isMobile] = useState<boolean | null>(() => {
    if (typeof window === "undefined") return null;
    return window.innerWidth < 768;
  });

  useLayoutEffect(() => {
    if (isMobile || isInitializedRef.current) return;

    window.scrollTo(0, 0);
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    ScrollTrigger.getAll().forEach((t) => t.kill());
    ScrollTrigger.clearScrollMemory();
    gsap.killTweensOf("*");

    let ctx: gsap.Context | null = null;

    timeoutRef.current = setTimeout(() => {
      if (!pinRef.current) return;

      ctx = gsap.context(() => {
        const panels = gsap.utils.toArray<HTMLElement>(".panel");

        const panelWidth = window.innerWidth * 0.62;
        const panelHeight = window.innerHeight * 0.6;
        const gap = 80;

        const totalWidth =
          panelWidth * panels.length + gap * (panels.length - 1);

        const moveDistance = totalWidth - window.innerWidth;

        gsap.set(panels[0], {
          width: window.innerWidth,
          height: window.innerHeight,
          x: 0,
        });

        gsap.set(panels.slice(1), {
          width: panelWidth,
          height: panelHeight,
          x: 0,
        });

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

        tl.to(panels[0], {
          width: panelWidth,
          height: panelHeight,
          duration: 0.3,
          ease: "power2.out",
        });

        tl.to(
          panels,
          {
            x: -moveDistance,
            ease: "power1.inOut",
            duration: 1,
          },
          0.1,
        );

        isInitializedRef.current = true;
        ScrollTrigger.refresh();
      }, pinRef);
    }, 200);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      isInitializedRef.current = false;
      ctx?.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
      ScrollTrigger.clearScrollMemory();
    };
  }, [isMobile]);

  useEffect(() => {
    if (isMobile) return;
    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobile]);

  const handleSlideClick = (
    slug: string,
    image: string,
    title: string,
    element: HTMLElement,
  ) => {
    const rect = element.getBoundingClientRect();
    setZoomedProject({ title, image, slug, rect });
  };

  const handleZoomedReadMore = () => {
    if (!zoomedProject) return;

    setIsTransitioning(true);

    sessionStorage.setItem(
      "projectTransition",
      JSON.stringify({
        image: zoomedProject.image,
        rect: {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        },
      }),
    );

    ScrollTrigger.getAll().forEach((t) => t.kill());
    ScrollTrigger.clearScrollMemory();
    gsap.killTweensOf("*");

    setTimeout(() => {
      router.push(`/projects/${zoomedProject.slug}`);
    }, 100);
  };

  // Render nothing until we know the viewport (null = SSR, not yet hydrated)
  if (isMobile === null) return null;

  // ── MOBILE: plain vertical list, no GSAP ──────────────────────────────────
  if (isMobile) {
    return (
      <>
        <section className="bg-white py-8 px-4 flex flex-col gap-6">
          {slides.map((slide, index) => (
            <MobileSlide key={index} {...slide} />
          ))}
        </section>

        {zoomedProject && (
          <ZoomedView
            title={zoomedProject.title}
            image={zoomedProject.image}
            rect={zoomedProject.rect}
            onReadMore={handleZoomedReadMore}
            onClose={() => setZoomedProject(null)}
          />
        )}

        {isTransitioning && (
          <div className="fixed inset-0 bg-white z-50 pointer-events-none" />
        )}
      </>
    );
  }

  // ── DESKTOP: original horizontal GSAP slider ───────────────────────────────
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
                isHidden={!!zoomedProject}
              />
            ))}
          </div>
        </div>
      </section>

      {zoomedProject && (
        <ZoomedView
          title={zoomedProject.title}
          image={zoomedProject.image}
          rect={zoomedProject.rect}
          onReadMore={handleZoomedReadMore}
          onClose={() => setZoomedProject(null)}
        />
      )}

      {isTransitioning && (
        <div className="fixed inset-0 bg-white z-50 pointer-events-none" />
      )}
    </>
  );
}

// ── Mobile card (no GSAP, just a static clickable card) ───────────────────────
function MobileSlide({
  title,
  image,
  slug,
  hero,
}: {
  title: string;
  image: string;
  slug: string;
  hero?: boolean;
}) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/projects/${slug}`)}
      className="relative w-full cursor-pointer overflow-hidden bg-black"
      style={{ height: "55vw", minHeight: "200px" }}
    >
      <Image
        src={image}
        alt={title}
        fill
        priority={hero}
        sizes="100vw"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="absolute bottom-2 left-6 text-white">
        <h2 className="text-xl font-light">{title}</h2>
      </div>
    </div>
  );
}

// ── Desktop slide (unchanged) ──────────────────────────────────────────────────
function Slide({
  title,
  image,
  slug,
  hero,
  onNavigate,
  isTransitioning,
  isHidden,
}: {
  title: string;
  image: string;
  slug: string;
  hero?: boolean;
  onNavigate: (
    slug: string,
    image: string,
    title: string,
    element: HTMLElement,
  ) => void;
  isTransitioning: boolean;
  isHidden: boolean;
}) {
  const slideRef = useRef<HTMLDivElement>(null);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (slideRef.current) {
      onNavigate(slug, image, title, slideRef.current);
    }
  };

  return (
    <div
      onClick={handleClick}
      ref={slideRef}
      className={`panel relative cursor-pointer flex-shrink-0 overflow-hidden bg-black ${
        isTransitioning ? "transition-opacity duration-300" : ""
      } ${isHidden ? "opacity-0" : ""}`}
    >
      <Image
        src={image}
        alt={title}
        fill
        priority={hero}
        sizes={hero ? "100vw" : "62vw"}
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="absolute bottom-4 left-14 text-white">
        <h2 className="text-3xl mb-4 font-light">{title}</h2>
      </div>
    </div>
  );
}

// ── ZoomedView (unchanged) ─────────────────────────────────────────────────────
function ZoomedView({
  title,
  image,
  rect,
  onReadMore,
  onClose,
}: {
  title: string;
  image: string;
  rect: DOMRect;
  onReadMore: () => void;
  onClose: () => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    gsap.set(containerRef.current, {
      position: "fixed",
      top: rect.top,
      left: rect.left,
      width: rect.width,
      height: rect.height,
      zIndex: 60,
    });

    gsap.to(containerRef.current, {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
      duration: 2.5,
      ease: "power2.inOut",
    });
  }, [rect]);

  const handleBackClick = () => {
    if (!containerRef.current) return;

    gsap.to(containerRef.current, {
      top: rect.top,
      left: rect.left,
      width: rect.width,
      height: rect.height,
      duration: 2.5,
      ease: "power2.inOut",
      onComplete: onClose,
    });
  };

  return (
    <div ref={containerRef} className="relative overflow-hidden bg-black">
      <Image
        src={image}
        alt={title}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/40" />

      <button
        onClick={handleBackClick}
        className="absolute top-8 right-8 z-10 text-white text-4xl hover:scale-110 transition-transform"
      >
        ×
      </button>

      <div className="absolute bottom-14 left-14 text-white">
        <h2 className="text-3xl mb-4 font-light">{title}</h2>

        <button
          onClick={onReadMore}
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
