import Header from "@/components/Header";

export default function About() {
  return (
    <>
      <Header />
      <main className="p-[80_80] w-full m-[0_auto] min-h-screen">
        <section className="py-20  m-[0_auto] w-full">
          <div className="container text-center w-full mx-auto px-6">
            <h1 className="text-4xl text-center md:text-6xl font-bold mb-12 text-[#563433]">
              Careers
            </h1>
            <div className="max-w-4xl w-full mx-auto text-center">
              <p className="text-lg text-gray-700 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
