// "use client";

// import Header from "@/components/Header";
// import AboutImg from "@/public/images/about-us-banner.jpeg";
// import Image from "next/image";
// import StudioImg from "@/public/images/contact.jpg";
// import TeamImg from "@/public/images/aboutUs-team.jpg";
// import OfficeImg from "@/public/images/office.jpg";
// import AtulImg from "@/public/images/atulSharma.jpg";
// import NavjotImg from "@/public/images/navjyot.jpg";
// import services1 from "@/public/services-images/kindergarten.jpg";
// import services2 from "@/public/services-images/costa-goa.jpg";
// import services3 from "@/public/services-images/dubai-villa.jpg";
// import JourneyImg from "@/public/images/journey.jpg";
// import { useEffect } from "react";
// import { usePathname } from "next/navigation";
// import Link from "next/link";
// import Img1 from "@/public/images/1.svg";
// import Img2 from "@/public/images/2.svg";
// import Img3 from "@/public/images/3.svg";
// import Img4 from "@/public/images/4.svg";
// import Img5 from "@/public/images/5.svg";
// import Img6 from "@/public/images/6.svg";
// import Img7 from "@/public/images/7.svg";
// import Img8 from "@/public/images/8.svg";
// import Img9 from "@/public/images/9.svg";

// import Footer from "@/components/Footer";

// export default function About() {
//   // useEffect(() => {
//   //   window.scrollTo(0, 0);
//   // }, []);

//   const pathname = usePathname();

//   // Scroll to top on route change
//   useEffect(() => {
//     window.scrollTo(0, 0);
//     document.documentElement.scrollTop = 0;
//     document.body.scrollTop = 0;
//   }, [pathname]);

//   useEffect(() => {
//     // Scroll to top immediately when component mounts
//     window.scrollTo(0, 0);
//     document.documentElement.scrollTop = 0;
//     document.body.scrollTop = 0;

//     // Force scroll after render
//     requestAnimationFrame(() => {
//       window.scrollTo(0, 0);
//       document.documentElement.scrollTop = 0;
//       document.body.scrollTop = 0;
//     });
//   }, []);

//   return (
//     <>
//       <Header />
//       <main className="w-full  bg-white">
//         {/* Hero Section */}
//         <section className="relative mt-[60px] lg:mt-[0] w-full">
//           <Image
//             src={AboutImg}
//             alt="about"
//             width={0}
//             height={0}
//             sizes="100vw"
//             className="md:w-full object-cover"
//           />
//           {/* <div className="absolute inset-0 flex items-center justify-center">
//             <h1 className="text-4xl md:text-8xl font-bold md:font-light text-white tracking-wide">
//               About Us
//             </h1>
//           </div> */}
//         </section>

//         <section className="max-w-6xl flex flex-col md:flex-row items-center md:items-start justify-around bg-[#e5e5e5] mx-auto my-[80px] rounded-[20px] p-[24px] md:p-[45px] gap-8 md:gap-0">
//           <div className="flex flex-col gap-[16px] p-[28px] rounded-[20px] z-10 bg-[#563433] w-full max-w-[500px] md:mr-[-300px] border-2 border-[#563433] items-center">
//             <h2 className="text-3xl font-light text-[#ffffff] mb-8 leading-tight">
//               A multidisciplinary design practice rooted in experience,
//               creativity, and architectural rigor.
//             </h2>
//             <p className="text-[#ffffff] text-[14px] leading-relaxed mb-6">
//               Genarch is a multidisciplinary design practice rooted in
//               experience, creativity, and architectural rigor. Founded in 2001
//               as Genesis Architects in New Delhi, the firm has evolved into a
//               sophisticated architectural and design institution with expertise
//               across commercial, institutional, hospitality, residential, and
//               experiential environments.
//             </p>
//             <p className="text-[#ffffff] text-[14px] leading-relaxed">
//               For over two decades, Genarch has upheld a philosophy of craft,
//               precision, and collaboration ensuring that every project is
//               conceived with clarity, thoughtfully resolved through discipline,
//               and realized with a deep respect for context, function, and human
//               experience.
//             </p>
//           </div>
//           <div className="w-full md:w-auto">
//             <Image
//               className="rounded-[20px] object-cover w-full md:w-[700px]"
//               width={700}
//               height={500}
//               src={StudioImg}
//               alt="studio"
//               style={{ height: "500px" }}
//             />
//           </div>
//         </section>

//         <section className="max-w-6xl flex flex-col md:flex-row items-center justify-between gap-[20px] mx-auto my-[80px] px-4 md:px-0">
//           <div className="w-full md:w-auto">
//             <Image
//               className="rounded-[20px] object-cover w-full md:w-[700px]"
//               width={700}
//               height={400}
//               src={TeamImg}
//               alt="studio"
//               style={{ height: "400px" }}
//             />
//           </div>
//           <div className="w-full flex flex-col items-center justify-center gap-[20px] bg-[#8e5353] md:max-w-[452px] min-h-[400px] rounded-[20px] p-[20px]">
//             <div className="text-[48px] text-center text-[#ffffff]">
//               Who We Are
//             </div>
//             <div className="text-[14px] text-center text-[#ffffff] leading-relaxed">
//               Genarch combines diverse design sensibilities with a strong
//               technical foundation. Our teams bring together talents from across
//               India, enriching the practice with varied cultural and regional
//               perspectives. This diversity empowers us to work confidently
//               across typologies, scales, and geographies — from dynamic
//               corporate headquarters to serene wellness retreats, vibrant
//               hospitality spaces to thoughtful educational environments.
//             </div>
//           </div>
//         </section>

//         <section className="py-24 rounded-[38px] bg-[#e5e5e5]">
//           <div className="max-w-6xl mx-auto px-6">
//             <div className="grid md:grid-cols-2 gap-12">
//               {[
//                 {
//                   name: "Navjot Paul Singh",
//                   role: "Tax Expert",
//                   img: NavjotImg,
//                 },
//                 { name: "Atul Sharma", role: "Tax Expert", img: AtulImg },
//               ].map((member) => (
//                 <div key={member.name}>
//                   <Image
//                     src={member.img}
//                     alt={member.name}
//                     width={600}
//                     height={400}
//                     className="w-full object-cover rounded-[28px] mb-4"
//                   />
//                   <div className="flex items-center justify-between">
//                     <div>
//                       <h3 className="text-[28px] text-[#563433] font-semibold">
//                         {member.name}
//                       </h3>
//                       <p className="text-[18px] text-[#8e5353] mt-1">
//                         {member.role}
//                       </p>
//                     </div>
//                     <div className="flex gap-2">
//                       <a
//                         href="#"
//                         className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-[#7B2D2D] transition-colors"
//                       >
//                         <svg
//                           className="w-3.5 h-3.5 text-gray-500"
//                           fill="currentColor"
//                           viewBox="0 0 24 24"
//                         >
//                           <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
//                           <circle cx="4" cy="4" r="2" />
//                         </svg>
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         <section className="max-w-6xl mx-auto px-6 py-[45px]">
//           <div className="grid md:grid-cols-2 gap-[16px] items-center">
//             <div className="h-auto flex items-center justify-center text-gray-400 order-2 md:order-1">
//               <Image
//                 className="h-auto rounded-[28px]"
//                 src={JourneyImg}
//                 alt="studio"
//               />
//             </div>
//             <div className="order-1 p-[28px] rounded-[28px] bg-[#e5e5e5] md:order-2">
//               <h2 className="text-5xl font-light text-[#563433] mb-8">
//                 Our Journey
//               </h2>
//               <p className="text-[#563433] leading-relaxed mb-6">
//                 Started as Genesis Architects in 2001 by Navjot Paul Singh and
//                 Atul Sharma, the practice quickly built a reputation for
//                 attention to detail, client partnership, and design excellence.
//               </p>
//               <p className="text-[#563433] leading-relaxed">
//                 Navjots broad range of work and Atuls strategic thinking helped
//                 shape a studio that looks beyond the ordinary, delivering
//                 outcomes that consistently go beyond the brief. While the name
//                 has evolved to Genarch to reflect a more cohesive identity, our
//                 core values remain unchanged: integrity in design, clarity of
//                 process, and dedication to creative outcomes.
//               </p>
//             </div>
//           </div>
//         </section>

//         <section className="max-w-6xl mx-auto py-[45px] px-4">
//           <h2 className="text-5xl font-light text-[#563433] mb-16 text-center">
//             Our Services
//           </h2>

//           <div className="flex flex-col md:flex-row items-center justify-center gap-[20px]">
//             <div className="w-full flex flex-col gap-[20px]  items-center justify-between">
//               <div className="w-full md:max-w-[452px] flex items-end justify-center min-h-[300px] md:min-h-[400px] bg-[#e5e5e5] rounded-[28px_28px_0_0]">
//                 <Image
//                   className="h-[250px] md:h-[350px] w-full max-w-[452px] rounded-[28px_28px_0_0] object-cover"
//                   src={services1}
//                   alt="studio"
//                 />
//               </div>
//               <div className="w-full flex flex-col items-start justify-start gap-[20px]">
//                 <div>
//                   <h3 className="text-[28px] text-[#563433]">Commercial</h3>
//                 </div>

//                 <Link
//                   className="flex w-[100%] max-w-[170px] items-center gap-2 group"
//                   href={"/services"}
//                 >
//                   <h3 className="text-[22px] font-light text-[#563433]">
//                     View More
//                   </h3>
//                   <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                     <svg
//                       width="16"
//                       height="16"
//                       viewBox="0 0 16 16"
//                       fill="none"
//                       className="transition-transform duration-300 group-hover:translate-x-1"
//                     >
//                       <path
//                         d="M2 8h12M9 3l5 5-5 5"
//                         stroke="black"
//                         strokeWidth="1.2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                       />
//                     </svg>
//                   </span>
//                 </Link>
//               </div>
//             </div>

//             <div className="w-full flex flex-col gap-[20px]  items-center justify-between">
//               <div className="w-full md:max-w-[452px] flex items-end justify-center min-h-[300px] md:min-h-[400px] bg-[#e5e5e5] rounded-[28px_28px_0_0]">
//                 <Image
//                   className="h-[250px] md:h-[350px] w-full max-w-[452px] rounded-[28px_28px_0_0] object-cover"
//                   src={services2}
//                   alt="studio"
//                 />
//               </div>
//               <div className="w-full flex flex-col items-start justify-start gap-[20px]">
//                 <div>
//                   <h3 className="text-[28px] text-[#563433]">
//                     Hospitality & Entertainment
//                   </h3>
//                 </div>

//                 <Link
//                   className="flex w-[100%] max-w-[170px] items-center gap-2 group"
//                   href={"/services"}
//                 >
//                   <h3 className="text-[22px] font-light text-[#563433]">
//                     View More
//                   </h3>
//                   <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                     <svg
//                       width="16"
//                       height="16"
//                       viewBox="0 0 16 16"
//                       fill="none"
//                       className="transition-transform duration-300 group-hover:translate-x-1"
//                     >
//                       <path
//                         d="M2 8h12M9 3l5 5-5 5"
//                         stroke="black"
//                         strokeWidth="1.2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                       />
//                     </svg>
//                   </span>
//                 </Link>
//               </div>
//             </div>

//             <div className="w-full flex flex-col gap-[20px]  items-center justify-between">
//               <div className="w-full md:max-w-[452px] flex items-end justify-center min-h-[300px] md:min-h-[400px] bg-[#e5e5e5] rounded-[28px_28px_0_0]">
//                 <Image
//                   className="h-[250px] md:h-[350px] w-full max-w-[452px] rounded-[28px_28px_0_0] object-cover"
//                   src={services3}
//                   alt="studio"
//                 />
//               </div>
//               <div className="w-full flex flex-col items-start justify-start gap-[20px]">
//                 <div>
//                   <h3 className="text-[28px] text-[#563433]">
//                     Residential & Lifestyle
//                   </h3>
//                 </div>

//                 <Link
//                   className="flex w-[100%] max-w-[170px] items-center gap-2 group"
//                   href={"/services"}
//                 >
//                   <h3 className="text-[22px] font-light text-[#563433]">
//                     View More
//                   </h3>
//                   <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                     <svg
//                       width="16"
//                       height="16"
//                       viewBox="0 0 16 16"
//                       fill="none"
//                       className="transition-transform duration-300 group-hover:translate-x-1"
//                     >
//                       <path
//                         d="M2 8h12M9 3l5 5-5 5"
//                         stroke="black"
//                         strokeWidth="1.2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                       />
//                     </svg>
//                   </span>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </section>

//         <section className="bg-[#8e5353] w-full my-[50px] py-[40px]  mx-auto  overflow-hidden">
//           <h2 className="text-5xl font-light text-[#ffffff] mb-16 text-center">
//             Our Design Philosophy
//           </h2>

//           <div className="max-w-6xl mx-auto">
//             <div className="flex flex-wrap items-center justify-center gap-5">
//               {/* Card 1 — Red / Featured */}
//               <div className=" bg-[#563433]  flex flex-col items-center justify-around text-white w-full max-w-[250px] p-[10px] h-full min-h-[300px] rounded-[30px] group cursor-pointer transition-transform duration-300 hover:-translate-y-2">
//                 {/* 3D Triangle Shape */}
//                 <div className="flex items-center justify-center h-[140px]">
//                   <svg
//                     width="100"
//                     height="110"
//                     viewBox="0 0 100 110"
//                     fill="none"
//                   >
//                     <polygon points="50,5 95,95 5,95" fill="#555" />
//                     <polygon points="50,5 95,95 50,70" fill="#888" />
//                     <polygon points="50,5 5,95 50,70" fill="#333" />
//                   </svg>
//                 </div>
//                 <div className="text-center flex flex-col gap-3">
//                   <p className="tracking-[0.2em] text-xs font-semibold uppercase opacity-80">
//                     Balance
//                   </p>
//                 </div>
//               </div>

//               <div className=" bg-[#ffffff]  flex flex-col items-center justify-around text-white w-full max-w-[250px] p-[10px] h-full min-h-[300px] rounded-[30px] group cursor-pointer transition-transform duration-300 hover:-translate-y-2">
//                 {/* 3D Triangle Shape */}
//                 <div className="flex items-center justify-center h-[140px]">
//                   <svg
//                     width="100"
//                     height="110"
//                     viewBox="0 0 100 110"
//                     fill="none"
//                   >
//                     <polygon points="50,5 95,95 5,95" fill="#555" />
//                     <polygon points="50,5 95,95 50,70" fill="#888" />
//                     <polygon points="50,5 5,95 50,70" fill="#333" />
//                   </svg>
//                 </div>
//                 <div className="text-center flex flex-col gap-3">
//                   <p className="tracking-[0.2em] text-xs font-semibold uppercase text-[#563433] opacity-80">
//                     Movement
//                   </p>
//                 </div>
//               </div>

//               <div className=" bg-[#563433]  flex flex-col items-center justify-around text-white w-full max-w-[250px] p-[10px] h-full min-h-[300px] rounded-[30px] group cursor-pointer transition-transform duration-300 hover:-translate-y-2">
//                 {/* 3D Triangle Shape */}
//                 <div className="flex items-center justify-center h-[140px]">
//                   <svg
//                     width="100"
//                     height="110"
//                     viewBox="0 0 100 110"
//                     fill="none"
//                   >
//                     <polygon points="50,5 95,95 5,95" fill="#555" />
//                     <polygon points="50,5 95,95 50,70" fill="#888" />
//                     <polygon points="50,5 5,95 50,70" fill="#333" />
//                   </svg>
//                 </div>
//                 <div className="text-center flex flex-col gap-3">
//                   <p className="tracking-[0.2em] text-xs font-semibold uppercase opacity-80">
//                     Rhythm
//                   </p>
//                 </div>
//               </div>

//               <div className=" bg-[#ffffff]  flex flex-col items-center justify-around text-white w-full max-w-[250px] p-[10px] h-full min-h-[300px] rounded-[30px] group cursor-pointer transition-transform duration-300 hover:-translate-y-2">
//                 {/* 3D Triangle Shape */}
//                 <div className="flex items-center justify-center h-[140px]">
//                   <svg
//                     width="100"
//                     height="110"
//                     viewBox="0 0 100 110"
//                     fill="none"
//                   >
//                     <polygon points="50,5 95,95 5,95" fill="#555" />
//                     <polygon points="50,5 95,95 50,70" fill="#888" />
//                     <polygon points="50,5 5,95 50,70" fill="#333" />
//                   </svg>
//                 </div>
//                 <div className="text-center flex flex-col gap-3">
//                   <p className="tracking-[0.2em] text-xs font-semibold uppercase text-[#563433] opacity-80">
//                     Emphasis
//                   </p>
//                 </div>
//               </div>

//               <div className=" bg-[#563433]  flex flex-col items-center justify-around text-white w-full max-w-[250px] p-[10px] h-full min-h-[300px] rounded-[30px] group cursor-pointer transition-transform duration-300 hover:-translate-y-2">
//                 {/* 3D Triangle Shape */}
//                 <div className="flex items-center justify-center h-[140px]">
//                   <svg
//                     width="100"
//                     height="110"
//                     viewBox="0 0 100 110"
//                     fill="none"
//                   >
//                     <polygon points="50,5 95,95 5,95" fill="#555" />
//                     <polygon points="50,5 95,95 50,70" fill="#888" />
//                     <polygon points="50,5 5,95 50,70" fill="#333" />
//                   </svg>
//                 </div>
//                 <div className="text-center flex flex-col gap-3">
//                   <p className="tracking-[0.2em] text-xs font-semibold uppercase opacity-80">
//                     Contrast
//                   </p>
//                 </div>
//               </div>

//               <div className=" bg-[#ffffff]  flex flex-col items-center justify-around text-white w-full max-w-[250px] p-[10px] h-full min-h-[300px] rounded-[30px] group cursor-pointer transition-transform duration-300 hover:-translate-y-2">
//                 {/* 3D Triangle Shape */}
//                 <div className="flex items-center justify-center h-[140px]">
//                   <svg
//                     width="100"
//                     height="110"
//                     viewBox="0 0 100 110"
//                     fill="none"
//                   >
//                     <polygon points="50,5 95,95 5,95" fill="#555" />
//                     <polygon points="50,5 95,95 50,70" fill="#888" />
//                     <polygon points="50,5 5,95 50,70" fill="#333" />
//                   </svg>
//                 </div>
//                 <div className="text-center flex flex-col gap-3">
//                   <p className="tracking-[0.2em] text-xs font-semibold uppercase text-[#563433] opacity-80">
//                     Proportion
//                   </p>
//                 </div>
//               </div>

//               <div className=" bg-[#563433]  flex flex-col items-center justify-around text-white w-full max-w-[250px] p-[10px] h-full min-h-[300px] rounded-[30px] group cursor-pointer transition-transform duration-300 hover:-translate-y-2">
//                 {/* 3D Triangle Shape */}
//                 <div className="flex items-center justify-center h-[140px]">
//                   <svg
//                     width="100"
//                     height="110"
//                     viewBox="0 0 100 110"
//                     fill="none"
//                   >
//                     <polygon points="50,5 95,95 5,95" fill="#555" />
//                     <polygon points="50,5 95,95 50,70" fill="#888" />
//                     <polygon points="50,5 5,95 50,70" fill="#333" />
//                   </svg>
//                 </div>
//                 <div className="text-center flex flex-col gap-3">
//                   <p className="tracking-[0.2em] text-xs font-semibold uppercase opacity-80">
//                     Unity
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         <section className="bg-[#ffffff] text-[#563433] py-[45px]">
//           <div className="max-w-4xl mx-auto px-6 text-center">
//             <h2 className="text-5xl font-light mb-12">
//               Clients & Collaborations
//             </h2>
//             <p className="text-xl opacity-90 leading-relaxed">
//               Over the years, Genarch has partnered with leading brands,
//               institutions, and clients across sectors — ranging from corporate
//               entities to private patrons.
//             </p>
//           </div>
//           <div className="flex max-w-4xl m-[50_auto_0_auto] flex-wrap items-center justify-center gap-[20px]">
//             <Image height={140} width={140} src={Img1} alt="img" />
//             <Image height={140} width={140} src={Img2} alt="img" />
//             <Image height={140} width={140} src={Img3} alt="img" />
//             <Image height={140} width={140} src={Img4} alt="img" />
//             <Image height={140} width={140} src={Img5} alt="img" />
//             <Image height={140} width={140} src={Img6} alt="img" />
//             <Image height={140} width={140} src={Img7} alt="img" />
//             <Image height={140} width={140} src={Img8} alt="img" />
//             <Image height={140} width={140} src={Img9} alt="img" />
//           </div>
//         </section>

//         {/* Introduction */}
//         {/* <section className="max-w-6xl mx-auto px-6 py-24">
//           <div className="grid md:grid-cols-2 gap-16 items-center">
//             <div>
//               <h2 className="text-4xl font-light text-[#563433] mb-8 leading-tight">
//                 A multidisciplinary design practice rooted in experience,
//                 creativity, and architectural rigor.
//               </h2>
//               <p className="text-gray-600 leading-relaxed mb-6">
//                 Genarch is a multidisciplinary design practice rooted in
//                 experience, creativity, and architectural rigor. Founded in 2001
//                 as Genesis Architects in New Delhi, the firm has evolved into a
//                 sophisticated architectural and design institution with
//                 expertise across commercial, institutional, hospitality,
//                 residential, and experiential environments.
//               </p>
//               <p className="text-gray-600 leading-relaxed">
//                 For over two decades, Genarch has upheld a philosophy of craft,
//                 precision, and collaboration ensuring that every project is
//                 conceived with clarity, thoughtfully resolved through
//                 discipline, and realized with a deep respect for context,
//                 function, and human experience.
//               </p>
//             </div>
//             <div className=" h-[500px] overflow-hidden fit-content object-cover flex items-center justify-center text-gray-400">
//               <Image src={StudioImg} alt="studio" />
//             </div>
//           </div>
//         </section> */}

//         {/* Who We Are Content */}
//         {/* <section className="max-w-4xl mx-auto px-6 py-24 text-center">
//           <h2 className="text-5xl font-light text-[#563433] mb-12">
//             Who We Are
//           </h2>
//           <p className="text-xl text-gray-600 leading-relaxed">
//             Genarch combines diverse design sensibilities with a strong
//             technical foundation. Our teams bring together talents from across
//             India, enriching the practice with varied cultural and regional
//             perspectives. This diversity empowers us to work confidently across
//             typologies, scales, and geographies — from dynamic corporate
//             headquarters to serene wellness retreats, vibrant hospitality spaces
//             to thoughtful educational environments.
//           </p>
//         </section> */}

//         {/* Who We Are - Full Width Image */}
//         {/* <section className=" w-full flex items-center justify-center text-gray-400">
//           <Image src={TeamImg} alt="studio" />
//         </section> */}

//         {/* Leadership */}
//         {/* <section className="bg-gray-50 py-24">
//           <div className="max-w-6xl mx-auto px-6">
//             <h2 className="text-5xl font-light text-[#563433] mb-16 text-center">
//               Leadership
//             </h2>
//             <div className="grid md:grid-cols-2 gap-16">
//               <div className="text-center">
//                 <div className="mb-6 flex items-center justify-center text-gray-400">
//                   <Image
//                     src={NavjotImg}
//                     alt="studio"
//                     height={400}
//                     width={400}
//                   />
//                 </div>
//                 <h3 className="text-3xl font-light text-[#563433] mb-4">
//                   Navjot Paul Singh
//                 </h3>
//                 <p className="text-gray-600 leading-relaxed">
//                   With over 20 years in the field, Navjot brings wide-ranging
//                   expertise across architecture and interiors, leading Genarchs
//                   design culture with curiosity and conviction.
//                 </p>
//               </div>
//               <div className="text-center">
//                 <div className=" mb-6 flex items-center justify-center text-gray-400">
//                   <Image src={AtulImg} alt="studio" height={400} width={400} />
//                 </div>
//                 <h3 className="text-3xl font-light text-[#563433] mb-4">
//                   Atul Sharma
//                 </h3>
//                 <p className="text-gray-600 leading-relaxed">
//                   As a director with deep strategic design experience, Atul
//                   champions solutions that balance creativity with
//                   functionality, shaping architecture that resonates with both
//                   users and context.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section> */}

//         {/* Location */}
//         {/* <section className="max-w-4xl mx-auto px-6 py-24 text-center">
//           <h2 className="text-5xl font-light text-[#563433] mb-12">
//             Where We Work
//           </h2>
//           <p className="text-xl text-gray-600 leading-relaxed mb-16">
//             Headquartered in New Delhi, Genarch operates nationally across
//             residential, commercial, institutional, and leisure sectors — and
//             collaborates with clients both in India and internationally.
//           </p>
//           <div className="flex items-center justify-center text-gray-400">
//             <Image src={OfficeImg} alt="studio" />
//           </div>
//         </section> */}

//         {/* Our Journey */}
//         {/* <section className="max-w-6xl mx-auto px-6 py-24">
//           <div className="grid md:grid-cols-2 gap-16 items-center">
//             <div className="h-auto flex items-center justify-center text-gray-400 order-2 md:order-1">
//               <Image className="h-auto" src={JourneyImg} alt="studio" />
//             </div>
//             <div className="order-1 md:order-2">
//               <h2 className="text-5xl font-light text-[#563433] mb-8">
//                 Our Journey
//               </h2>
//               <p className="text-gray-600 leading-relaxed mb-6">
//                 Started as Genesis Architects in 2001 by Navjot Paul Singh and
//                 Atul Sharma, the practice quickly built a reputation for
//                 attention to detail, client partnership, and design excellence.
//               </p>
//               <p className="text-gray-600 leading-relaxed">
//                 Navjots broad range of work and Atuls strategic thinking helped
//                 shape a studio that looks beyond the ordinary, delivering
//                 outcomes that consistently go beyond the brief. While the name
//                 has evolved to Genarch to reflect a more cohesive identity, our
//                 core values remain unchanged: integrity in design, clarity of
//                 process, and dedication to creative outcomes.
//               </p>
//             </div>
//           </div>
//         </section> */}

//         {/* Services */}
//         {/* <section className="max-w-6xl mx-auto px-6 py-24">
//           <h2 className="text-5xl font-light text-[#563433] mb-16 text-center">
//             Our Services
//           </h2>
//           <div className="grid md:grid-cols-3 gap-12">
//             <div className="space-y-4">
//               <div className="bg-gray-100 h-64 flex items-center object-cover justify-center text-gray-400 mb-4">
//                 <Image
//                   className="h-64 object-cover"
//                   src={services1}
//                   alt="studio"
//                 />
//               </div>
//               <Link
//                 className="flex w-[100%] max-w-[170px] items-center gap-2 group"
//                 href={"/services"}
//               >
//                 <h3 className="text-[22px] font-light text-[#563433]">
//                   Commercial
//                 </h3>
//                 <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                   <svg
//                     width="16"
//                     height="16"
//                     viewBox="0 0 16 16"
//                     fill="none"
//                     className="transition-transform duration-300 group-hover:translate-x-1"
//                   >
//                     <path
//                       d="M2 8h12M9 3l5 5-5 5"
//                       stroke="black"
//                       strokeWidth="1.2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                   </svg>
//                 </span>
//               </Link>

//             </div>
//             <div className="space-y-4">
//               <div className="bg-gray-100 h-64 flex items-center justify-center text-gray-400 mb-4">
//                 <Image
//                   src={services2}
//                   className="h-64 object-cover"
//                   alt="studio"
//                 />
//               </div>
//               <Link
//                 className="flex w-[100%] items-center gap-2 group"
//                 href={"/services"}
//               >
//                 <h3 className="text-[22px] font-light text-[#563433]">
//                   Hospitality & Entertainment
//                 </h3>
//                 <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                   <svg
//                     width="16"
//                     height="16"
//                     viewBox="0 0 16 16"
//                     fill="none"
//                     className="transition-transform duration-300 group-hover:translate-x-1"
//                   >
//                     <path
//                       d="M2 8h12M9 3l5 5-5 5"
//                       stroke="black"
//                       strokeWidth="1.2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                   </svg>
//                 </span>
//               </Link>
//             </div>
//             <div className="space-y-4">
//               <div className="bg-gray-100 h-64 flex items-center justify-center text-gray-400 mb-4">
//                 <Image
//                   className="h-64 object-cover"
//                   src={services3}
//                   alt="studio"
//                 />
//               </div>
//               <Link
//                 className="flex w-[100%]  items-center gap-2 group"
//                 href={"/services"}
//               >
//                 <h3 className="text-[22px] font-light text-[#563433]">
//                   Residential & Lifestyle
//                 </h3>
//                 <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                   <svg
//                     width="16"
//                     height="16"
//                     viewBox="0 0 16 16"
//                     fill="none"
//                     className="transition-transform duration-300 group-hover:translate-x-1"
//                   >
//                     <path
//                       d="M2 8h12M9 3l5 5-5 5"
//                       stroke="black"
//                       strokeWidth="1.2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                   </svg>
//                 </span>
//               </Link>

//             </div>
//           </div>
//         </section> */}

//         {/* Design Philosophy */}
//         {/* <section className="bg-[#e5e5e5] text-[#563433] py-24">
//           <div className="max-w-4xl mx-auto px-6 text-center">
//             <h2 className="text-5xl font-light mb-16">Our Design Philosophy</h2>
//             <div className="space-y-8 text-lg leading-relaxed">
//               <p className="opacity-90">
//                 At Genarch, architecture is a disciplined yet creative pursuit.
//               </p>
//               <div className="grid md:grid-cols-2 gap-8 pt-8">
//                 <div className="text-left">
//                   <p className="opacity-80">
//                     Design begins with context — understanding place, program,
//                     and people.
//                   </p>
//                 </div>
//                 <div className="text-left">
//                   <p className="opacity-80">
//                     Good architecture is informed by invisible decisions — the
//                     ones that ensure comfort, performance, and longevity.
//                   </p>
//                 </div>
//                 <div className="text-left">
//                   <p className="opacity-80">
//                     Materials are chosen with intent — not for decoration, but
//                     for meaning and durability.
//                   </p>
//                 </div>
//                 <div className="text-left">
//                   <p className="opacity-80">
//                     Form is a result of a thoughtful process — not the starting
//                     point.
//                   </p>
//                 </div>
//               </div>
//               <p className="opacity-90 pt-8">
//                 This design mindset shapes how we approach every project,
//                 ensuring solutions that are thoughtful, responsible, and
//                 enduring.
//               </p>
//             </div>
//           </div>
//         </section> */}

//         {/* Clients */}
//         {/* <section className="bg-[#ffffff] text-[#563433] py-24">
//           <div className="max-w-4xl mx-auto px-6 text-center">
//             <h2 className="text-5xl font-light mb-12">
//               Clients & Collaborations
//             </h2>
//             <p className="text-xl opacity-90 leading-relaxed">
//               Over the years, Genarch has partnered with leading brands,
//               institutions, and clients across sectors — ranging from corporate
//               entities to private patrons.
//             </p>
//           </div>
//           <div className="flex max-w-4xl m-[50_auto_0_auto] flex-wrap items-center justify-center gap-[20px]">
//             <Image height={140} width={140} src={Img1} alt="img" />
//             <Image height={140} width={140} src={Img2} alt="img" />
//             <Image height={140} width={140} src={Img3} alt="img" />
//             <Image height={140} width={140} src={Img4} alt="img" />
//             <Image height={140} width={140} src={Img5} alt="img" />
//             <Image height={140} width={140} src={Img6} alt="img" />
//             <Image height={140} width={140} src={Img7} alt="img" />
//             <Image height={140} width={140} src={Img8} alt="img" />
//             <Image height={140} width={140} src={Img9} alt="img" />
//           </div>
//         </section> */}
//       </main>
//       <Footer />
//     </>
//   );
// }

"use client";

import Header from "@/components/Header";
import AboutImg from "@/public/images/about-us-banner.jpeg";
import Image, { StaticImageData } from "next/image";
import StudioImg from "@/public/images/contact.jpg";
import TeamImg from "@/public/images/aboutUs-team.jpg";
import OfficeImg from "@/public/images/office.jpg";
import AtulImg from "@/public/images/atulSharma.jpg";
import NavjotImg from "@/public/images/navjyot.jpg";
import services1 from "@/public/services-images/kindergarten.jpg";
import services2 from "@/public/services-images/costa-goa.jpg";
import services3 from "@/public/services-images/dubai-villa.jpg";
import JourneyImg from "@/public/images/journey.jpg";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Img1 from "@/public/images/1.svg";
import Img2 from "@/public/images/2.svg";
import Img3 from "@/public/images/3.svg";
import Img4 from "@/public/images/4.svg";
import Img5 from "@/public/images/5.svg";
import Img6 from "@/public/images/6.svg";
import Img7 from "@/public/images/7.svg";
import Img8 from "@/public/images/8.svg";
import Img9 from "@/public/images/9.svg";
import balance from "@/public/images/balance.svg";
import movement from "@/public/images/movement.svg";
import rhythm from "@/public/images/rhythm.svg";
import emphasis from "@/public/images/Emphasis.svg";
import contrast from "@/public/images/Contrast.svg";
import proportion from "@/public/images/Proportion.svg";
import unity from "@/public/images/Unity.svg";

import Footer from "@/components/Footer";

export default function About() {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname]);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    });
  }, []);

  const clientLogos = [Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9];

  return (
    <>
      <Header />
      <main className="w-full bg-white">
        {/* Hero Section */}
        <section className="relative mt-[60px] lg:mt-[100] w-full">
          <Image
            src={AboutImg}
            alt="about"
            width={0}
            height={0}
            sizes="100vw"
            className="md:w-full object-cover"
          />
        </section>

        <section className="max-w-6xl flex flex-col md:flex-row items-center md:items-start justify-around bg-[#e5e5e5] mx-auto my-[80px] rounded-[20px] p-[24px] md:p-[45px] gap-8 md:gap-0">
          <div className="flex flex-col gap-[16px] p-[28px] rounded-[20px] z-10 bg-[#563433] w-full max-w-[500px] md:mr-[-300px] border-2 border-[#563433] items-center">
            <h2 className="text-3xl font-light text-[#ffffff] mb-8 leading-tight">
              A multidisciplinary design practice rooted in experience,
              creativity, and thoughtful architecture.
            </h2>
            <p className="text-[#ffffff] text-[14px] leading-relaxed mb-6">
              Genarch Genesis Architects Pvt. Ltd. is an architecture and design
              practice working across institutional, commercial, hospitality,
              residential, and experiential projects. Each space is shaped by
              context, materials, and the way people experience it.
            </p>
          </div>
          <div className="w-full md:w-auto">
            <Image
              className="rounded-[20px] object-cover w-full md:w-[700px]"
              width={700}
              height={500}
              src={StudioImg}
              alt="studio"
              style={{ height: "500px" }}
            />
          </div>
        </section>

        <section className="max-w-6xl flex flex-col md:flex-row items-center justify-between gap-[20px] mx-auto my-[80px] px-4 md:px-0">
          <div className="w-full md:w-auto">
            <Image
              className="rounded-[20px] object-cover w-full md:w-[700px]"
              width={700}
              height={400}
              src={TeamImg}
              alt="studio"
              style={{ height: "400px" }}
            />
          </div>
          <div className="w-full flex flex-col items-center justify-center gap-[20px] bg-[#8e5353] md:max-w-[452px] min-h-[400px] rounded-[20px] p-[20px]">
            <div className="text-[48px] text-center text-[#ffffff]">
              Who We Are
            </div>
            <div className="text-[14px] text-center text-[#ffffff] leading-relaxed">
              Genarch is a team of architects and designers creating spaces that
              balance creativity and functionality. The practice focuses on
              thoughtful design that responds to context, people, and the way
              spaces are experienced.
            </div>
          </div>
        </section>

        <section className="py-24 rounded-[38px] bg-[#e5e5e5]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12">
              {[
                {
                  name: "Navjot Paul Singh",
                  role: "",
                  img: NavjotImg,
                },
                { name: "Atul Sharma", role: "", img: AtulImg },
              ].map((member) => (
                <div key={member.name}>
                  <Image
                    src={member.img}
                    alt={member.name}
                    width={600}
                    height={400}
                    className="w-full object-cover rounded-[28px] mb-4"
                  />
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-[28px] text-[#563433] font-semibold">
                        {member.name}
                      </h3>
                      <p className="text-[18px] text-[#8e5353] mt-1">
                        {member.role}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <a
                        href="#"
                        className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-[#7B2D2D] transition-colors"
                      >
                        <svg
                          className="w-3.5 h-3.5 text-gray-500"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                          <circle cx="4" cy="4" r="2" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 py-[45px]">
          <div className="grid md:grid-cols-2 gap-[16px] items-center">
            <div className="h-auto flex items-center justify-center text-gray-400 order-2 md:order-1">
              <Image
                className="h-auto rounded-[28px]"
                src={JourneyImg}
                alt="studio"
              />
            </div>
            <div className="order-1 p-[28px] rounded-[28px] bg-[#e5e5e5] md:order-2">
              <h2 className="text-5xl font-light text-[#563433] mb-8">
                Our Journey
              </h2>
              <p className="text-[#563433] leading-relaxed mb-6">
                Founded by Atul Sharma, an alumnus of Chandigarh College of
                Architecture, the practice brings decades of architectural
                experience. Alongside Navjot Pail Singh, the firm continues to
                shape diverse projects across India and overseas.
              </p>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto py-[45px] px-4">
          <h2 className="text-5xl font-light text-[#563433] mb-16 text-center">
            Our Services
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-center gap-[20px]">
            <div className="w-full flex flex-col gap-[20px] items-center justify-between">
              <div className="w-full md:max-w-[452px] flex items-end justify-center min-h-[300px] md:min-h-[400px] bg-[#e5e5e5] rounded-[28px_28px_0_0]">
                <Image
                  className="h-[250px] md:h-[350px] w-full max-w-[452px] rounded-[28px_28px_0_0] object-cover"
                  src={services1}
                  alt="studio"
                />
              </div>
              <div className="w-full flex flex-col items-start justify-start gap-[20px]">
                <div>
                  <h3 className="text-[28px] text-[#563433]">Commercial</h3>
                </div>
                <Link
                  className="flex w-[100%] max-w-[170px] items-center gap-2 group"
                  href={"/services"}
                >
                  <h3 className="text-[22px] font-light text-[#563433]">
                    View More
                  </h3>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      <path
                        d="M2 8h12M9 3l5 5-5 5"
                        stroke="black"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>

            <div className="w-full flex flex-col gap-[20px] items-center justify-between">
              <div className="w-full md:max-w-[452px] flex items-end justify-center min-h-[300px] md:min-h-[400px] bg-[#e5e5e5] rounded-[28px_28px_0_0]">
                <Image
                  className="h-[250px] md:h-[350px] w-full max-w-[452px] rounded-[28px_28px_0_0] object-cover"
                  src={services2}
                  alt="studio"
                />
              </div>
              <div className="w-full flex flex-col items-start justify-start gap-[20px]">
                <div>
                  <h3 className="text-[28px] text-[#563433]">
                    Hospitality & Entertainment
                  </h3>
                </div>
                <Link
                  className="flex w-[100%] max-w-[170px] items-center gap-2 group"
                  href={"/services"}
                >
                  <h3 className="text-[22px] font-light text-[#563433]">
                    View More
                  </h3>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      <path
                        d="M2 8h12M9 3l5 5-5 5"
                        stroke="black"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>

            <div className="w-full flex flex-col gap-[20px] items-center justify-between">
              <div className="w-full md:max-w-[452px] flex items-end justify-center min-h-[300px] md:min-h-[400px] bg-[#e5e5e5] rounded-[28px_28px_0_0]">
                <Image
                  className="h-[250px] md:h-[350px] w-full max-w-[452px] rounded-[28px_28px_0_0] object-cover"
                  src={services3}
                  alt="studio"
                />
              </div>
              <div className="w-full flex flex-col items-start justify-start gap-[20px]">
                <div>
                  <h3 className="text-[28px] text-[#563433]">
                    Residential & Lifestyle
                  </h3>
                </div>
                <Link
                  className="flex w-[100%] max-w-[170px] items-center gap-2 group"
                  href={"/services"}
                >
                  <h3 className="text-[22px] font-light text-[#563433]">
                    View More
                  </h3>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      <path
                        d="M2 8h12M9 3l5 5-5 5"
                        stroke="black"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#8e5353] w-full my-[50px] py-[40px] mx-auto overflow-hidden">
          <div className="text-5xl font-light text-[#ffffff] mb-16 text-center">
            Our Design Philosophy
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap items-center justify-center gap-5">
              {[
                {
                  label: "Balance",
                  bg: "#563433",
                  textColor: "#ffffff",
                  image: balance,
                },
                {
                  label: "Movement",
                  bg: "#ffffff",
                  textColor: "#563433",
                  image: movement,
                },
                {
                  label: "Rhythm",
                  bg: "#563433",
                  textColor: "#ffffff",
                  image: rhythm,
                },
                {
                  label: "Emphasis",
                  bg: "#ffffff",
                  textColor: "#563433",
                  image: emphasis,
                },
                {
                  label: "Contrast",
                  bg: "#563433",
                  textColor: "#ffffff",
                  image: contrast,
                },
                {
                  label: "Proportion",
                  bg: "#ffffff",
                  textColor: "#563433",
                  image: proportion,
                },
                {
                  label: "Unity",
                  bg: "#563433",
                  textColor: "#ffffff",
                  image: unity,
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col items-center justify-around w-full max-w-[250px] p-[10px] h-full min-h-[250px] rounded-[30px] group  transition-transform duration-300 hover:-translate-y-2"
                  style={{ backgroundColor: item.bg }}
                >
                  <div className="flex items-center justify-center h-[140px]">
                    <div className="relative flex items-center justify-center h-[140px] w-full">
                      <Image
                        src={item.image}
                        alt={item.label}
                        width={100}
                        height={100}
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div className="text-center flex flex-col gap-3">
                    <p
                      className="tracking-[0.2em] text-xs font-semibold uppercase opacity-80"
                      style={{ color: item.textColor }}
                    >
                      {item.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Clients & Collaborations — Marquee Slider */}
        <section className="bg-[#ffffff] text-[#563433] py-[45px] overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 text-center mb-12">
            <h2 className="text-5xl font-light mb-12">
              Clients & Collaborations
            </h2>
            <p className="text-xl opacity-90 leading-relaxed">
              Over the years, Genarch has partnered with leading brands,
              institutions, and clients across sectors — ranging from corporate
              entities to private patrons.
            </p>
          </div>

          {/* Marquee track */}
          <div className="relative w-full overflow-hidden">
            {/* Left fade */}
            <div className=" absolute left-0 top-0 h-full w-24 z-10 bg-gradient-to-r from-white to-transparent" />
            {/* Right fade */}
            <div className=" absolute right-0 top-0 h-full w-24 z-10 bg-gradient-to-l from-white to-transparent" />

            <div
              className="flex gap-[20px] w-max"
              style={{
                animation: "marquee 25s linear infinite",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLDivElement).style.animationPlayState =
                  "paused")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLDivElement).style.animationPlayState =
                  "running")
              }
            >
              {/* First set */}
              {clientLogos.map((img, i) => (
                <div
                  key={`a-${i}`}
                  className="flex items-center justify-center w-[140px] h-[140px] flex-shrink-0"
                >
                  <Image
                    height={140}
                    width={140}
                    src={img}
                    alt={`client-${i + 1}`}
                  />
                </div>
              ))}
              {/* Duplicate for seamless loop */}
              {clientLogos.map((img, i) => (
                <div
                  key={`b-${i}`}
                  className="flex items-center justify-center w-[140px] h-[140px] flex-shrink-0"
                >
                  <Image
                    height={140}
                    width={140}
                    src={img}
                    alt={`client-${i + 1}`}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Inline keyframes — no tailwind config change needed */}
          <style jsx>{`
            @keyframes marquee {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
          `}</style>
        </section>
      </main>
      <Footer />
    </>
  );
}
