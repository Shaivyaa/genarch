// "use client";

// import { useLayoutEffect, useRef, useState, useEffect } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Image from "next/image";
// import { useRouter } from "next/navigation";

// gsap.registerPlugin(ScrollTrigger);

// const slides = [
//   {
//     title: "WELLNESS CENTRE, NADAUN",
//     image: "/images/img5.jpg",
//     slug: "project-one",
//     hero: true,
//   },
//   {
//     title: "FARMHOUSE, GREATER NOIDA",
//     image: "/images/img1.jpg",
//     slug: "project-two",
//   },
//   {
//     title: "CORPORATE OFFICE BUILDING, GURUGRAM",
//     image: "/images/img3.jpg",
//     slug: "project-three",
//   },
//   {
//     title: "DHARAV SCHOOL – JUNIOR WING",
//     image: "/images/img4.jpeg",
//     slug: "project-four",
//   },
// ];

// export default function RahmanSlider() {
//   const pinRef = useRef<HTMLDivElement>(null);
//   const router = useRouter();
//   const [isTransitioning, setIsTransitioning] = useState(false);
//   const isInitializedRef = useRef(false);
//   const timeoutRef = useRef<NodeJS.Timeout | null>(null);

//   useLayoutEffect(() => {
//     // Prevent double initialization in React StrictMode
//     if (isInitializedRef.current) return;

//     // Force scroll to top immediately
//     window.scrollTo(0, 0);
//     if ("scrollRestoration" in window.history) {
//       window.history.scrollRestoration = "manual";
//     }

//     // Clean up any existing ScrollTriggers first
//     ScrollTrigger.getAll().forEach((t) => t.kill());
//     ScrollTrigger.clearScrollMemory();
//     gsap.killTweensOf("*");

//     // Small delay to ensure DOM is ready
//     timeoutRef.current = setTimeout(() => {
//       if (!pinRef.current) return;

//       const ctx = gsap.context(() => {
//         const panels = gsap.utils.toArray<HTMLElement>(".panel");
//         const panelWidth = window.innerWidth * 0.62;
//         const panelHeight = window.innerHeight * 0.6;
//         const gap = 80;

//         const totalWidth =
//           panelWidth * panels.length + gap * (panels.length - 1);
//         const moveDistance = totalWidth - window.innerWidth + panelWidth * 0.5;

//         // Reset panels to initial state with clearProps
//         gsap.set(panels[0], {
//           width: "100vw",
//           height: "100vh",
//           scale: 1,
//           marginRight: "-90px",
//           x: 0,
//           clearProps: "transform",
//         });

//         gsap.set(panels.slice(1), {
//           width: panelWidth,
//           height: panelHeight,
//           x: 0,
//           clearProps: "transform",
//         });

//         // Create the timeline with smoother settings
//         gsap
//           .timeline({
//             scrollTrigger: {
//               trigger: pinRef.current,
//               start: "top top",
//               end: `+=${moveDistance + window.innerHeight}`,
//               scrub: 2, // Increased for smoother scrolling
//               pin: true,
//               anticipatePin: 1,
//               invalidateOnRefresh: true,
//             },
//           })
//           .fromTo(
//             panels[0],
//             {
//               width: "100vw",
//               height: "100vh",
//               scale: 1,
//               marginRight: "-90px",
//             },
//             {
//               width: panelWidth,
//               height: panelHeight,
//               scale: 0.75,
//               ease: "power2.inOut", // Smooth easing
//               duration: 0.5, // Relative duration in the timeline
//             }
//           )
//           .to(
//             panels,
//             {
//               x: -moveDistance,
//               ease: "power1.inOut", // Smooth easing for horizontal scroll
//               duration: 1, // Relative duration
//             },
//             "-=0.2" // Slight overlap for seamless transition
//           );

//         // Mark as initialized and refresh
//         isInitializedRef.current = true;
//         ScrollTrigger.refresh();
//       }, pinRef);

//       return () => {
//         ctx.revert();
//       };
//     }, 150);

//     return () => {
//       if (timeoutRef.current) {
//         clearTimeout(timeoutRef.current);
//       }
//       isInitializedRef.current = false;
//       ScrollTrigger.getAll().forEach((t) => t.kill());
//       ScrollTrigger.clearScrollMemory();
//     };
//   }, []);

//   // Handle window resize
//   useEffect(() => {
//     const handleResize = () => {
//       ScrollTrigger.refresh();
//     };

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   // Reset on route change preparation
//   useEffect(() => {
//     const handleBeforeUnload = () => {
//       window.scrollTo(0, 0);
//     };

//     window.addEventListener("beforeunload", handleBeforeUnload);
//     return () => window.removeEventListener("beforeunload", handleBeforeUnload);
//   }, []);

//   const handleSlideClick = (
//     slug: string,
//     image: string,
//     element: HTMLElement
//   ) => {
//     setIsTransitioning(true);

//     const rect = element.getBoundingClientRect();

//     sessionStorage.setItem(
//       "projectTransition",
//       JSON.stringify({
//         image,
//         rect: {
//           top: rect.top,
//           left: rect.left,
//           width: rect.width,
//           height: rect.height,
//         },
//       })
//     );

//     ScrollTrigger.getAll().forEach((t) => t.kill());
//     ScrollTrigger.clearScrollMemory();
//     gsap.killTweensOf("*");

//     setTimeout(() => {
//       router.push(`/projects/${slug}`);
//     }, 100);
//   };

//   return (
//     <>
//       <section className="relative h-[450vh] bg-white">
//         <div
//           ref={pinRef}
//           className="sticky top-0 h-screen overflow-hidden flex items-center"
//         >
//           <div className="flex items-center gap-[80px]">
//             {slides.map((slide, index) => (
//               <Slide
//                 key={index}
//                 {...slide}
//                 onNavigate={handleSlideClick}
//                 isTransitioning={isTransitioning}
//               />
//             ))}
//           </div>
//         </div>
//       </section>

//       {isTransitioning && (
//         <div className="fixed inset-0 bg-white z-50 pointer-events-none" />
//       )}
//     </>
//   );
// }

// function Slide({
//   title,
//   image,
//   slug,
//   hero,
//   onNavigate,
//   isTransitioning,
// }: {
//   title: string;
//   image: string;
//   slug: string;
//   hero?: boolean;
//   onNavigate: (slug: string, image: string, element: HTMLElement) => void;
//   isTransitioning: boolean;
// }) {
//   const slideRef = useRef<HTMLDivElement>(null);

//   const handleClick = (e: React.MouseEvent) => {
//     e.preventDefault();
//     if (slideRef.current) {
//       onNavigate(slug, image, slideRef.current);
//     }
//   };

//   return (
//     <div
//       ref={slideRef}
//       className={`panel relative flex-shrink-0 overflow-hidden bg-black ${
//         hero ? "w-screen h-screen" : ""
//       } ${isTransitioning ? "transition-opacity duration-300" : ""}`}
//       style={{
//         minWidth: hero ? "100vw" : "62vw",
//         minHeight: hero ? "100vh" : "60vh",
//       }}
//     >
//       <Image
//         src={image}
//         alt={title}
//         fill
//         priority={hero}
//         sizes={hero ? "65vw" : "48vw"}
//         className="object-cover"
//       />

//       <div className="absolute inset-0 bg-black/40" />

//       <div className="absolute bottom-14 left-14 text-white">
//         <h2 className="text-3xl mb-4 font-light">{title}</h2>

//         <button
//           onClick={handleClick}
//           className="group cursor-pointer relative overflow-hidden border border-white px-6 py-3 text-lg"
//         >
//           <span className="relative z-10 group-hover:text-black transition-colors">
//             Read More →
//           </span>
//           <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
//         </button>
//       </div>
//     </div>
//   );
// }

// "use client";

// import { useLayoutEffect, useRef, useState, useEffect } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Image from "next/image";
// import { useRouter } from "next/navigation";

// gsap.registerPlugin(ScrollTrigger);

// const slides = [
//   {
//     title: "WELLNESS CENTRE, NADAUN",
//     image: "/images/img5.jpg",
//     slug: "project-one",
//     hero: true,
//   },
//   {
//     title: "FARMHOUSE, GREATER NOIDA",
//     image: "/images/img1.jpg",
//     slug: "project-two",
//   },
//   {
//     title: "CORPORATE OFFICE BUILDING, GURUGRAM",
//     image: "/images/img3.jpg",
//     slug: "project-three",
//   },
//   {
//     title: "DHARAV SCHOOL – JUNIOR WING",
//     image: "/images/img4.jpeg",
//     slug: "project-four",
//   },
// ];

// export default function RahmanSlider() {
//   const pinRef = useRef<HTMLDivElement>(null);
//   const router = useRouter();
//   const [isTransitioning, setIsTransitioning] = useState(false);
//   const isInitializedRef = useRef(false);
//   const timeoutRef = useRef<NodeJS.Timeout | null>(null);

//   useLayoutEffect(() => {
//     // Prevent double initialization in React StrictMode
//     if (isInitializedRef.current) return;

//     // Force scroll to top immediately
//     window.scrollTo(0, 0);
//     if ("scrollRestoration" in window.history) {
//       window.history.scrollRestoration = "manual";
//     }

//     // Clean up any existing ScrollTriggers first
//     ScrollTrigger.getAll().forEach((t) => t.kill());
//     ScrollTrigger.clearScrollMemory();
//     gsap.killTweensOf("*");

//     // Small delay to ensure DOM is ready
//     timeoutRef.current = setTimeout(() => {
//       if (!pinRef.current) return;

//       const ctx = gsap.context(() => {
//         const panels = gsap.utils.toArray<HTMLElement>(".panel");
//         const panelWidth = window.innerWidth * 0.62;
//         const panelHeight = window.innerHeight * 0.6;
//         const gap = 80;

//         const totalWidth =
//           panelWidth * panels.length + gap * (panels.length - 1);
//         const moveDistance = totalWidth - window.innerWidth + panelWidth * 0.5;

//         // Reset all panels to same dimensions initially
//         gsap.set(panels[0], {
//           width: panelWidth,
//           height: panelHeight,
//           scale: 1,
//           marginRight: "0px",
//           x: 0,
//           clearProps: "transform",
//         });

//         gsap.set(panels.slice(1), {
//           width: panelWidth,
//           height: panelHeight,
//           x: 0,
//           clearProps: "transform",
//         });

//         // Create the timeline with smoother settings
//         gsap
//           .timeline({
//             scrollTrigger: {
//               trigger: pinRef.current,
//               start: "top top",
//               end: `+=${moveDistance + window.innerHeight}`,
//               scrub: 2, // Increased for smoother scrolling
//               pin: true,
//               anticipatePin: 1,
//               invalidateOnRefresh: true,
//             },
//           })
//           .to(panels, {
//             x: -moveDistance,
//             ease: "power1.inOut", // Smooth easing for horizontal scroll
//             duration: 1, // Relative duration
//           });

//         // Mark as initialized and refresh
//         isInitializedRef.current = true;
//         ScrollTrigger.refresh();
//       }, pinRef);

//       return () => {
//         ctx.revert();
//       };
//     }, 150);

//     return () => {
//       if (timeoutRef.current) {
//         clearTimeout(timeoutRef.current);
//       }
//       isInitializedRef.current = false;
//       ScrollTrigger.getAll().forEach((t) => t.kill());
//       ScrollTrigger.clearScrollMemory();
//     };
//   }, []);

//   // Handle window resize
//   useEffect(() => {
//     const handleResize = () => {
//       ScrollTrigger.refresh();
//     };

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   // Reset on route change preparation
//   useEffect(() => {
//     const handleBeforeUnload = () => {
//       window.scrollTo(0, 0);
//     };

//     window.addEventListener("beforeunload", handleBeforeUnload);
//     return () => window.removeEventListener("beforeunload", handleBeforeUnload);
//   }, []);

//   const handleSlideClick = (
//     slug: string,
//     image: string,
//     element: HTMLElement
//   ) => {
//     setIsTransitioning(true);

//     const rect = element.getBoundingClientRect();

//     sessionStorage.setItem(
//       "projectTransition",
//       JSON.stringify({
//         image,
//         rect: {
//           top: rect.top,
//           left: rect.left,
//           width: rect.width,
//           height: rect.height,
//         },
//       })
//     );

//     ScrollTrigger.getAll().forEach((t) => t.kill());
//     ScrollTrigger.clearScrollMemory();
//     gsap.killTweensOf("*");

//     setTimeout(() => {
//       router.push(`/projects/${slug}`);
//     }, 100);
//   };

//   return (
//     <>
//       <section className="relative h-[450vh] bg-white">
//         <div
//           ref={pinRef}
//           className="sticky top-0 h-screen overflow-hidden flex items-center"
//         >
//           <div className="flex items-center gap-[80px]">
//             {slides.map((slide, index) => (
//               <Slide
//                 key={index}
//                 {...slide}
//                 onNavigate={handleSlideClick}
//                 isTransitioning={isTransitioning}
//               />
//             ))}
//           </div>
//         </div>
//       </section>

//       {isTransitioning && (
//         <div className="fixed inset-0 bg-white z-50 pointer-events-none" />
//       )}
//     </>
//   );
// }

// function Slide({
//   title,
//   image,
//   slug,
//   hero,
//   onNavigate,
//   isTransitioning,
// }: {
//   title: string;
//   image: string;
//   slug: string;
//   hero?: boolean;
//   onNavigate: (slug: string, image: string, element: HTMLElement) => void;
//   isTransitioning: boolean;
// }) {
//   const slideRef = useRef<HTMLDivElement>(null);

//   const handleClick = (e: React.MouseEvent) => {
//     e.preventDefault();
//     if (slideRef.current) {
//       onNavigate(slug, image, slideRef.current);
//     }
//   };

//   return (
//     <div
//       ref={slideRef}
//       className={`panel relative flex-shrink-0 overflow-hidden bg-black ${
//         isTransitioning ? "transition-opacity duration-300" : ""
//       }`}
//       style={{
//         minWidth: "62vw",
//         minHeight: "60vh",
//       }}
//     >
//       <Image
//         src={image}
//         alt={title}
//         fill
//         priority={hero}
//         sizes={hero ? "65vw" : "48vw"}
//         className="object-cover"
//       />

//       <div className="absolute inset-0 bg-black/40" />

//       <div className="absolute bottom-14 left-14 text-white">
//         <h2 className="text-3xl mb-4 font-light">{title}</h2>

//         <button
//           onClick={handleClick}
//           className="group cursor-pointer relative overflow-hidden border border-white px-6 py-3 text-lg"
//         >
//           <span className="relative z-10 group-hover:text-black transition-colors">
//             Read More →
//           </span>
//           <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
//         </button>
//       </div>
//     </div>
//   );
// }

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

        // Reset all panels to same dimensions initially
        gsap.set(panels[0], {
          width: panelWidth,
          height: panelHeight,
          scale: 1,
          marginRight: "0px",
          x: 0,
          clearProps: "transform",
        });

        gsap.set(panels.slice(1), {
          width: panelWidth,
          height: panelHeight,
          x: 0,
          clearProps: "transform",
        });

        // Create the timeline with smoother settings
        gsap
          .timeline({
            scrollTrigger: {
              trigger: pinRef.current,
              start: "top top",
              end: `+=${moveDistance + window.innerHeight}`,
              scrub: 2, // Increased for smoother scrolling
              pin: true,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          })
          .to(panels, {
            x: -moveDistance,
            ease: "power1.inOut", // Smooth easing for horizontal scroll
            duration: 1, // Relative duration
          });

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
