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
              Contact Us
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
