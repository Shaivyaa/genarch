// "use client";

// import { useLayoutEffect, useRef, useState, useEffect } from "react";
// // import { ChevronLeft, ChevronRight } from "lucide-react";
// import Image from "next/image";
// import Header from "@/components/Header";

// const services = [
//   {
//     title: "ARCHITECTURE DESIGN",
//     image:
//       "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&fit=crop",
//     description: "Creating innovative and functional architectural solutions",
//   },
//   {
//     title: "INTERIOR DESIGN",
//     image:
//       "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=600&fit=crop",
//     description: "Transforming spaces with elegant interior solutions",
//   },
//   {
//     title: "PROJECT MANAGEMENT",
//     image:
//       "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
//     description: "End-to-end project execution and management",
//   },
//   {
//     title: "SUSTAINABLE DESIGN",
//     image:
//       "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
//     description: "Eco-friendly and sustainable building practices",
//   },
//   {
//     title: "RENOVATION & RESTORATION",
//     image:
//       "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop",
//     description: "Breathing new life into existing structures",
//   },
// ];

// export default function ServicesSlider() {
//   const pinRef = useRef<HTMLDivElement>(null);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isDragging, setIsDragging] = useState(false);
//   const [startX, setStartX] = useState(0);
//   const [scrollLeft, setScrollLeft] = useState(0);
//   const containerRef = useRef<HTMLDivElement>(null);

//   const panelWidth =
//     typeof window !== "undefined" ? window.innerWidth * 0.62 : 800;
//   const gap = 80;

//   useLayoutEffect(() => {
//     window.scrollTo(0, 0);
//     if ("scrollRestoration" in window.history) {
//       window.history.scrollRestoration = "manual";
//     }
//   }, []);

//   const scrollToIndex = (index: number) => {
//     if (!containerRef.current) return;
//     const scrollAmount = index * (panelWidth + gap);
//     containerRef.current.scrollTo({
//       left: scrollAmount,
//       behavior: "smooth",
//     });
//     setCurrentIndex(index);
//   };

//   const handlePrev = () => {
//     if (currentIndex > 0) {
//       scrollToIndex(currentIndex - 1);
//     }
//   };

//   const handleNext = () => {
//     if (currentIndex < services.length - 1) {
//       scrollToIndex(currentIndex + 1);
//     }
//   };

//   const handleMouseDown = (e: React.MouseEvent) => {
//     if (!containerRef.current) return;
//     setIsDragging(true);
//     setStartX(e.pageX - containerRef.current.offsetLeft);
//     setScrollLeft(containerRef.current.scrollLeft);
//   };

//   const handleMouseMove = (e: React.MouseEvent) => {
//     if (!isDragging || !containerRef.current) return;
//     e.preventDefault();
//     const x = e.pageX - containerRef.current.offsetLeft;
//     const walk = (x - startX) * 2;
//     containerRef.current.scrollLeft = scrollLeft - walk;
//   };

//   const handleMouseUp = () => {
//     setIsDragging(false);
//   };

//   const handleScroll = () => {
//     if (!containerRef.current || isDragging) return;
//     const scrollPos = containerRef.current.scrollLeft;
//     const newIndex = Math.round(scrollPos / (panelWidth + gap));
//     setCurrentIndex(newIndex);
//   };

//   return (
//     <div className="relative min-h-screen bg-white">
//       {/* Header */}
//       <Header />

//       {/* Main Content */}
//       <main className="pt-20">
//         {/* Intro Section */}
//         <section className="py-12 px-6">
//           <div className="max-w-4xl mx-auto text-center">
//             {/* <h2 className="text-4xl md:text-6xl font-bold mb-8 text-[#563433]">
//               Our Services
//             </h2> */}
//             {/* <div className="text-lg text-gray-700">
//               We offer comprehensive architectural and design services tailored
//               to bring your vision to life. From initial concept to final
//               execution, our team is dedicated to creating spaces that inspire
//               and endure.
//             </div> */}
//           </div>
//         </section>

//         {/* Slider Section */}
//         <section className="relative h-[80vh] bg-white py-12">
//           <div
//             ref={pinRef}
//             className="relative h-full overflow-hidden flex items-center"
//           >
//             <div
//               ref={containerRef}
//               onMouseDown={handleMouseDown}
//               onMouseMove={handleMouseMove}
//               onMouseUp={handleMouseUp}
//               onMouseLeave={handleMouseUp}
//               onScroll={handleScroll}
//               className="flex items-center gap-[80px] overflow-x-auto scrollbar-hide px-[19vw] cursor-grab active:cursor-grabbing"
//               style={{
//                 scrollSnapType: "x mandatory",
//                 WebkitOverflowScrolling: "touch",
//               }}
//             >
//               {services.map((service, index) => (
//                 <ServiceSlide
//                   key={index}
//                   {...service}
//                   panelWidth={panelWidth}
//                 />
//               ))}
//             </div>

//             {/* Navigation Arrows */}
//             <button
//               onClick={handlePrev}
//               disabled={currentIndex === 0}
//               className={`absolute left-8 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm p-4 rounded-full shadow-lg transition-all ${
//                 currentIndex === 0
//                   ? "opacity-50 cursor-not-allowed"
//                   : "hover:bg-white hover:scale-110"
//               }`}
//             >
//               Left
//             </button>

//             <button
//               onClick={handleNext}
//               disabled={currentIndex === services.length - 1}
//               className={`absolute right-8 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm p-4 rounded-full shadow-lg transition-all ${
//                 currentIndex === services.length - 1
//                   ? "opacity-50 cursor-not-allowed"
//                   : "hover:bg-white hover:scale-110"
//               }`}
//             >
//               Right
//             </button>
//           </div>

//           {/* Dots Indicator */}
//           <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
//             {services.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => scrollToIndex(index)}
//                 className={`w-3 h-3 rounded-full transition-all ${
//                   currentIndex === index
//                     ? "bg-[#563433] w-8"
//                     : "bg-gray-300 hover:bg-gray-400"
//                 }`}
//               />
//             ))}
//           </div>
//         </section>

//         {/* Bottom Content */}
//         <section className="py-16 px-6 bg-gray-50">
//           <div className="max-w-4xl mx-auto">
//             <h3 className="text-3xl font-bold mb-6 text-[#563433]">
//               Why Choose Us?
//             </h3>
//             <p className="text-lg text-gray-700 mb-4">
//               With years of experience and a passion for excellence, we deliver
//               architectural solutions that exceed expectations. Our
//               collaborative approach ensures that every project reflects your
//               unique vision while maintaining the highest standards of design
//               and functionality.
//             </p>
//             <p className="text-lg text-gray-700">
//               From concept development to construction oversight, we are with
//               you every step of the way, ensuring a seamless journey from
//               imagination to reality.
//             </p>
//           </div>
//         </section>
//       </main>

//       <style jsx global>{`
//         .scrollbar-hide {
//           -ms-overflow-style: none;
//           scrollbar-width: none;
//         }
//         .scrollbar-hide::-webkit-scrollbar {
//           display: none;
//         }
//       `}</style>
//     </div>
//   );
// }

// function ServiceSlide({
//   title,
//   image,
//   description,
//   panelWidth,
// }: {
//   title: string;
//   image: string;
//   description: string;
//   panelWidth: number;
// }) {
//   return (
//     <div
//       className="relative flex-shrink-0 overflow-hidden bg-black group"
//       style={{
//         width: `${panelWidth}px`,
//         height: "60vh",
//         scrollSnapAlign: "center",
//       }}
//     >
//       {/* <Image
//         src={image}
//         alt={title}
//         width={100}
//         height={100}
//         className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//       /> */}

//       <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

//       <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform transition-transform duration-300">
//         <h3 className="text-2xl md:text-3xl mb-3 font-light">{title}</h3>
//         <p className="text-sm md:text-base text-gray-200 opacity-90">
//           {description}
//         </p>
//       </div>
//     </div>
//   );
// }

// // app/contact/page.tsx
// import Header from "@/components/Header";

// export default function Contact() {
//   return (
//     <>
//       <Header />
//       <main className="pt-20 min-h-screen">
//         <section className="py-20">
//           <div className="container mx-auto px-6">
//             <h1 className="text-4xl md:text-6xl font-bold mb-12">Contact Us</h1>
//             <div className="max-w-2xl">
//               <form className="space-y-6">
//                 <div>
//                   <label
//                     htmlFor="name"
//                     className="block text-sm font-medium text-gray-700"
//                   >
//                     Name
//                   </label>
//                   <input
//                     type="text"
//                     id="name"
//                     className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
//                   />
//                 </div>
//                 <div>
//                   <label
//                     htmlFor="email"
//                     className="block text-sm font-medium text-gray-700"
//                   >
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
//                   />
//                 </div>
//                 <div>
//                   <label
//                     htmlFor="message"
//                     className="block text-sm font-medium text-gray-700"
//                   >
//                     Message
//                   </label>
//                   <textarea
//                     id="message"
//                     rows={4}
//                     className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
//                   ></textarea>
//                 </div>
//                 <button
//                   type="submit"
//                   className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
//                 >
//                   Send Message
//                 </button>
//               </form>
//             </div>
//           </div>
//         </section>
//       </main>
//     </>
//   );
// }

import Header from "@/components/Header";

export default function About() {
  return (
    <>
      <Header />
      <main className="p-[80_80] w-full m-[0_auto] min-h-screen">
        <section className="py-20  m-[0_auto] w-full">
          <div className="container text-center w-full mx-auto px-6">
            <h1 className="text-4xl text-center md:text-6xl font-bold mb-12 text-[#563433]">
              Services
            </h1>
            <div className="max-w-4xl w-full mx-auto text-center">
              <p className="text-lg text-gray-700 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est
                laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
