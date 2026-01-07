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

"use client";
import { useState } from "react";

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [visible, setVisible] = useState(true);

  const handleEnd = () => {
    setVisible(false);
    onComplete();
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
      <video
        src="/videos/websitevideo.mp4"
        autoPlay
        muted
        playsInline
        preload="auto"
        onEnded={handleEnd}
        className="w-full h-full object-cover"
        suppressHydrationWarning
      />
    </div>
  );
}
