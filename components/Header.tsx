// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";
// import { useState } from "react";
// import logo from "../public/images/logo.svg";

// const navItems = [
//   { name: "About Us", path: "/about" },
//   { name: "Careers", path: "/careers" },
//   { name: "Contact Us", path: "/contact" },
// ];

// export default function Header() {
//   const pathname = usePathname();
//   const [open, setOpen] = useState(false);

//   return (
//     <>
//       {/* HEADER */}
//       <header className="fixed pt-[20px] pb-[20px] bg-[white] top-0 left-0 right-0 z-50 ">
//         <div className="px-5 flex justify-between items-center">
//           {/* Logo */}
//           <Link href="/">
//             <Image src={logo} alt="Logo" width={150} height={70} />
//           </Link>

//           {/* Hamburger */}
//           <button
//             onClick={() => setOpen(!open)}
//             className="relative cursor-pointer z-[60] w-8 h-8 flex flex-col justify-center gap-1"
//           >
//             <motion.span
//               animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
//               className="block h-[2] bg-[#8e5353]"
//             />
//             <motion.span
//               animate={open ? { opacity: 0 } : { opacity: 1 }}
//               className="block h-[2] bg-[#8e5353]"
//             />
//             <motion.span
//               animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
//               className="block h-[2] bg-[#8e5353]"
//             />
//           </button>
//         </div>
//       </header>

//       {/* FULLSCREEN MENU */}
//       <AnimatePresence>
//         {open && (
//           <motion.div
//             initial={{ y: "-100%" }}
//             animate={{ y: 0 }}
//             exit={{ y: "-100%" }}
//             transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
//             className="fixed inset-0 z-40 bg-black flex items-center justify-center"
//           >
//             <motion.nav
//               initial="hidden"
//               animate="show"
//               exit="hidden"
//               variants={{
//                 hidden: {},
//                 show: {
//                   transition: {
//                     staggerChildren: 0.15,
//                   },
//                 },
//               }}
//               className="flex flex-col gap-8 text-center"
//             >
//               {navItems.map((item) => (
//                 <motion.div
//                   key={item.path}
//                   variants={{
//                     hidden: { opacity: 0, y: 40 },
//                     show: { opacity: 1, y: 0 },
//                   }}
//                 >
//                   <Link
//                     href={item.path}
//                     onClick={() => setOpen(false)}
//                     className={`text-2xl font-light tracking-wide transition-colors ${
//                       pathname === item.path
//                         ? "text-[#8e5353]"
//                         : "text-white hover:text-[#8e5353]"
//                     }`}
//                   >
//                     {item.name}
//                   </Link>
//                 </motion.div>
//               ))}
//             </motion.nav>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import logo from "../public/images/logo.svg";
import "../app/globals.css";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Our Projects", path: "/services" },
  { name: "About Us", path: "/about" },
  { name: "Contact Us", path: "/contact" },
  { name: "Careers", path: "/careers" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* HEADER */}
      <header className="fixed p-[20px_0] bg-[white] top-0 left-0 right-0 z-50">
        <div className="px-5 flex justify-between items-center">
          {/* Logo */}
          <Link href="/">
            <div className="container">
              <h1 className="logo-heading">Genarch</h1>
            </div>
          </Link>

          {/* Chocolate Bar Button */}
          <button
            onClick={() => setOpen(!open)}
            className="relative cursor-pointer z-[60] w-10 h-10 flex items-center justify-center"
          >
            <motion.div
              animate={open ? { rotate: 90 } : { rotate: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-6 h-7"
            >
              {/* Chocolate bar grid (3x3) */}
              <div className="grid grid-cols-3 gap-[2px] w-full h-full">
                {[...Array(9)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={
                      open
                        ? { scale: 0.8, backgroundColor: "#5c3317" }
                        : { scale: 1, backgroundColor: "#8e5353" }
                    }
                    transition={{ duration: 0.3, delay: i * 0.02 }}
                    // className="rounded-sm"
                  />
                ))}
              </div>
            </motion.div>
          </button>
        </div>
      </header>

      {/* FULLSCREEN MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 bg-black flex items-center justify-center"
          >
            <motion.nav
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={{
                hidden: {},
                show: {
                  transition: {
                    staggerChildren: 0.15,
                  },
                },
              }}
              className="flex flex-col gap-8 text-center"
            >
              {navItems.map((item) => (
                <motion.div
                  key={item.path}
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    show: { opacity: 1, y: 0 },
                  }}
                >
                  <Link
                    href={item.path}
                    onClick={() => setOpen(false)}
                    className={`text-2xl font-light tracking-wide transition-colors ${
                      pathname === item.path
                        ? "text-[#8e5353]"
                        : "text-white hover:text-[#8e5353]"
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
