// "use client";
// import { useState } from "react";

// export default function Loader({ onComplete }: { onComplete: () => void }) {
//   const [visible, setVisible] = useState(true);

//   const handleEnd = () => {
//     setVisible(false);
//     onComplete();
//   };

//   if (!visible) return null;

//   return (
//     <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
//       <video
//         src="/videos/websitevideo.mp4"
//         autoPlay
//         muted
//         playsInline
//         preload="auto"
//         onEnded={handleEnd}
//         className="w-full h-full object-cover"
//       />
//     </div>
//   );
// }

// "use client";
// import { useState } from "react";

// export default function Loader({ onComplete }: { onComplete: () => void }) {
//   const [visible, setVisible] = useState(true);

//   const handleEnd = () => {
//     setVisible(false);
//     onComplete();
//   };

//   if (!visible) return null;

//   return (
//     <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
//       <video
//         src="/videos/websitevideo.mp4"
//         autoPlay
//         muted
//         playsInline
//         preload="auto"
//         onEnded={handleEnd}
//         className="w-full  h-full object-cover"
//         suppressHydrationWarning
//       />
//     </div>
//   );
// }


"use client";
import { useEffect, useState } from "react";

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [visible, setVisible] = useState(true);
  const [animateOut, setAnimateOut] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const handleEnd = () => {
    setAnimateOut(true);

    setTimeout(() => {
      setVisible(false);
      onComplete();
    }, 600);
  };

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 bg-black flex items-center justify-center transition-all duration-700 ${
        animateOut ? "opacity-0 scale-105" : "opacity-100 scale-100"
      }`}
    >
      <video
        key={isMobile ? "mobile" : "desktop"} // forces reload on switch
        src={isMobile ? "/videos/mobile-logo.mp4" : "/videos/websitevideo.mp4"}
        autoPlay
        muted
        playsInline
        preload="auto"
        onEnded={handleEnd}
        className="w-full h-full object-cover"
      />
    </div>
  );
}