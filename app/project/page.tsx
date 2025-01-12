"use client";
import Image from "next/image";
import Projects from "../../src/data/projects.json";
import Link from "next/link";
import DropDown from "../../public/image/dropdown.png";
import { useState } from "react";

function Project() {
  const [dropDown, setDropDown] = useState(false);
  const [filter, setFilter] = useState("All");

  const handleClick = () => setDropDown((prev) => !prev);

  const filteredProjects =
    filter === "All"
      ? Projects
      : Projects.filter((project) =>
          project.category.includes(filter)
        );

  const handleFilterChange = (value:string) => {
    setFilter(value);
    setDropDown(false);
  };

  return (
    <section className="project popup">
      <div className="text-[30px]">
        <h1>Projects</h1>
        <div className="yellow-line h-1 w-10 bg-yellow-500 rounded-3xl" />
      </div>

      {/* Filter Dropdown */}
      <div
        className={`select-projectCategory my-6 rounded-xl ${
          dropDown ? "card-color" : ""
        }`}
      >
        <div className="p-2 select-area flex justify-between text-slate-300 md:hidden">
          <button>Select Category</button>
          <div className={`icon ${dropDown ? "rotate-180" : "rotate-0"}`}>
            <Image
              src={DropDown}
              alt="Dropdown Icon"
              height={30}
              width={30}
              onClick={handleClick}
            />
          </div>
        </div>

        <div
          className={`md:flex projectOptions ${
            dropDown ? "block border-t-2 border-gray-500" : "hidden"
          }`}
        >
          <ul className="md:flex space-y-2 md:gap-6 md:space-y-0 block m-6 text-size-1 text-slate-400">
            {["All", "Game", "Web App", "Machine Learning", "Cyber Security"].map(
              (category) => (
                <li
                  key={category}
                  className={`projectCategory ${
                    filter === category ? "text-yellow-500" : ""
                  }`}
                  onClick={() => handleFilterChange(category)}
                >
                  {category}
                </li>
              )
            )}
          </ul>
        </div>
      </div>

      {/* Project Cards */}
      <div className="project-card-container  grid md:grid-cols-3 grid-cols-1 gap-x-10 gap-y-14 my-10">
        {filteredProjects.map((project) => (
          <div
            className="project-card  fadeOut bg-black    w-full rounded-2xl  h-auto"
            key={project.id}
          >
            <Link href={`/posts/${project.id}`}>
              <div className="img-content">
                <div className="relative w-full h-[25vh] rounded-2xl overflow-hidden">
                  <Image
                    src={"https://codewithsadee.github.io/vcard-personal-portfolio/assets/images/project-2.png"}
                    alt="thumbnail"
                    layout="fill"
                    className="hover:scale-[1.2] duration-150 ease-in-out"
                    
                    objectFit="cover"
                  />
                </div>
              </div>
              <div className="content-area m-2 ">
                <time
                  dateTime={project.post_date}
                  className="text-slate-300 text-[10px] flex justify-end mb-2"
                >
                  {project.post_date}
                </time>

                <div className="headline h-20">
                  <h1>
                    <p className="line-clamp-3">{project.headline}</p>
                  </h1>
                </div>

                <div className="techStackUse-list flex flex-wrap gap-3 text-center">
                  {project.tags.map((tag, index) => (
                    <b className="tech-tag text-sm" key={index}>
                      {tag}
                    </b>
                  ))}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;
