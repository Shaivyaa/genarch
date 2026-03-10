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

import { useState, useEffect } from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Loader from "@/components/Loader";
import RahmanSlider from "@/components/RahmanSlider";
import Footer from "@/components/Footer";

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean | null>(null);
  const [showSlider, setShowSlider] = useState(false);

  useEffect(() => {
    const hasLoaded = sessionStorage.getItem("hasLoaded");

    if (!hasLoaded) {
      // Defer state update to avoid cascading renders
      requestAnimationFrame(() => {
        setIsLoading(true);
        document.body.style.overflow = "hidden";
        sessionStorage.setItem("hasLoaded", "true");
      });
    } else {
      requestAnimationFrame(() => {
        setIsLoading(false);
        setShowSlider(true);
      });
    }

    window.scrollTo(0, 0);

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    document.body.style.overflow = "auto";

    requestAnimationFrame(() => {
      setShowSlider(true);
    });
  };

  // Prevent flicker before init
  if (isLoading === null) return null;

  return (
    <>
      <Head>
        <title>WINDSURF | Modern Web Solutions</title>
        <meta
          name="description"
          content="Modern web solutions for the digital age"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/cdv2fku.css" />
      </Head>

      {isLoading && <Loader onComplete={handleLoadingComplete} />}

      <div
        className={`min-h-screen bg-[#563433] transition-opacity duration-1000 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      >
        <Header />

        <main>{showSlider && <RahmanSlider />}</main>

        {/* <Footer /> */}
      </div>
    </>
  );
}