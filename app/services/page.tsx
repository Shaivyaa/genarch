"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import Image from "next/image";
import AboutImg from "@/public/images/about-img1.jpg";

const projectsData = [
  {
    id: 5,
    title: "Dubai Villa",
    slug: "project-five",
    category: ["Residential & Lifestyle"],
    image: "/services-images/dubai-villa.jpg",
  },
  {
    id: 6,
    title: "Costa Coffee",
    slug: "project-six",
    category: ["Hospitaility & Entertainment"],
    image: "/services-images/costa-goa.jpg",
  },
  {
    id: 7,
    title: "Dharav School – Senior Wing~",
    slug: "project-seven",
    category: ["Commercial"],
    image: "/services-images/dharav-senior.jpg",
  },
];

const categories = [
  "All",
  "Commercial",
  "Hospitaility & Entertainment",
  "Residential & Lifestyle",
];

export default function Projects() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((project) =>
          project.category.includes(selectedCategory),
        );

  const handleViewProject = (slug: string) => {
    router.push(`/services-details/${slug}`);
  };

  const handleViewFirstProject = () => {
    if (projectsData.length > 0) {
      router.push(`/projects/${projectsData[0].slug}`);
    }
  };

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        {/* <section className="pt-32 pb-12 px-6">
          <div className="container mx-auto max-w-7xl">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
              <h1 className="text-5xl md:text-7xl font-bold text-[#563433]">
                Our Work
              </h1>
              <button
                onClick={handleViewFirstProject}
                className="group cursor-pointer relative overflow-hidden bg-[#563433] rounded-lg border-2 border-[#563433] hover:border-[#563433] px-6 py-3 text-base w-fit"
              >
                <span className="relative text-white z-10 group-hover:text-[#563433] transition-colors">
                  View Featured Project →
                </span>
                <span className="absolute inset-0 bg-white translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
              </button>
            </div>
            <p className="text-lg text-gray-700 max-w-3xl">
              Explore our portfolio of architectural projects spanning
              residential, commercial, and institutional spaces. Each project
              reflects our commitment to innovative design and sustainable
              practices.
            </p>
          </div>
              </section> */}

        <section className="relative h-[70vh] bg-gray-100">
          {/* IMAGE PLACEHOLDER - Hero Image */}
          <div className="absolute overflow-hidden inset-0 flex items-center justify-center text-gray-400 text-sm">
            <Image src={AboutImg} alt="about" />
          </div>
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
            <h1 className="text-6xl md:text-8xl font-light text-white tracking-wide">
              Our Services
            </h1>
          </div>
        </section>

        {/* Category Filter */}
        <section className="sticky text-center my-[30px] mx-auto w-[100%]">
          <div className="container">
            {/* <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="text-[#563433] font-medium text-lg mb-4"
            >
              Category Filter
              {isFilterOpen ? "−" : "+"}
            </button> */}

            <div className="flex flex-wrap items-center justify-center gap-3 mb-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 cursor-pointer rounded-full transition-all ${
                    selectedCategory === category
                      ? "bg-[#563433] text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="pb-20 px-6">
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="group cursor-pointer"
                  onClick={() => handleViewProject(project.slug)}
                >
                  {/* Project Image */}
                  <div className="relative overflow-hidden aspect-[4/3] mb-4 bg-gray-100">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button className="relative overflow-hidden backdrop-blur-sm px-6 py-3 text-base">
                        <span className="relative z-10 font-bold group-hover:text-[#e5e5e5] transition-colors">
                          Read More →
                        </span>
                      </button>
                    </div>
                    <div className="absolute inset-0 bg-[#563433] opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                  </div>

                  {/* Project Info */}
                  <div className="space-y-2 text-center">
                    <div className="flex flex-wrap items-center justify-center gap-2 text-[20px] text-[#8e5353] uppercase tracking-wide">
                      {/* {project.category.map((cat, index) => (
                        <span key={index}>
                          {cat}
                          {index < project.category.length - 1 && " •"}
                        </span>
                      ))} */}
                      {project.title}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="text-center py-20">
                <p className="text-gray-500 text-lg">
                  No projects found in this category.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8 px-6">
        <div className="container mx-auto max-w-7xl text-center text-sm text-gray-600">
          <p>Copyright © 2026 All rights reserved</p>
        </div>
      </footer>
    </>
  );
}
