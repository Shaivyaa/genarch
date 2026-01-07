// "use client";

// import { useState, useEffect } from "react";
// import Head from "next/head";
// import Header from "@/components/Header";
// import Projects from "@/components/Projects";
// import Loader from "@/components/Loader";
// import RahmanSlider from "@/components/RahmanSlider";
// import Footer from "@/components/Footer";

// export default function Home() {
//   const [isLoading, setIsLoading] = useState(true);
//   const [showSlider, setShowSlider] = useState(false);

//   const handleLoadingComplete = () => {
//     setIsLoading(false);
//     document.body.style.overflow = "auto";

//     // Small delay to ensure smooth transition
//     setTimeout(() => {
//       setShowSlider(true);
//     }, 100);
//   };

//   useEffect(() => {
//     if (isLoading) {
//       document.body.style.overflow = "hidden";
//     }

//     // Force scroll to top on mount
//     window.scrollTo(0, 0);

//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [isLoading]);

//   return (
//     <>
//       <Head>
//         <title>WINDSURF | Modern Web Solutions</title>
//         <meta
//           name="description"
//           content="Modern web solutions for the digital age"
//         />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       {isLoading && <Loader onComplete={handleLoadingComplete} />}

//       <div
//         className={`min-h-screen bg-[#563433] transition-opacity duration-1000 ${
//           isLoading ? "opacity-0" : "opacity-100"
//         }`}
//       >
//         <Header />

//         <main>
//           {/* SLIDER - Only render after loading complete */}
//           {showSlider && <RahmanSlider />}
//         </main>
//       </div>
//     </>
//   );
// }

"use client";

import { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import Loader from "@/components/Loader";
import RahmanSlider from "@/components/RahmanSlider";
import Footer from "@/components/Footer";

export default function Home() {
  // Check session storage before initial render
  const getInitialLoadingState = () => {
    if (typeof window === "undefined") return false;
    return !sessionStorage.getItem("loaderShown");
  };

  const [isLoading, setIsLoading] = useState(getInitialLoadingState);
  const [showSlider, setShowSlider] = useState(!getInitialLoadingState());
  const hasInitialized = useRef(false);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    document.body.style.overflow = "auto";

    // Mark that loader has been shown
    sessionStorage.setItem("loaderShown", "true");

    // Small delay to ensure smooth transition
    setTimeout(() => {
      setShowSlider(true);
    }, 100);
  };

  useEffect(() => {
    if (hasInitialized.current) return;
    hasInitialized.current = true;

    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Force scroll to top on mount
    window.scrollTo(0, 0);

    return () => {
      document.body.style.overflow = "";
    };
  }, [isLoading]);

  return (
    <>
      <Head>
        <title>WINDSURF | Modern Web Solutions</title>
        <meta
          name="description"
          content="Modern web solutions for the digital age"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {isLoading && <Loader onComplete={handleLoadingComplete} />}

      <div
        className={`min-h-screen bg-[#563433] transition-opacity duration-1000 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      >
        <Header />

        <main>
          {/* SLIDER - Only render after loading complete */}
          {showSlider && <RahmanSlider />}
        </main>
      </div>
    </>
  );
}
