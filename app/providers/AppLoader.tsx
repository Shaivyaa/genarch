"use client";
import { useState } from "react";
import Loader from "@/components/Loader";

export default function AppLoader({ children }: { children: React.ReactNode }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <Loader onComplete={() => setLoaded(true)} />}
      {loaded && children}
    </>
  );
}
