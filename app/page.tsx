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
        <title>Genarch </title>
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
