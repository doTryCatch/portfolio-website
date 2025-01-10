"use client";
import Image from "next/image";
import Projects from "../../src/data/projects.json";
import Link from "next/link";
import DropDown from "../../public/image/dropdown.png";
import { useContext, useState } from "react";

function Project() {
    const [dropDown, setDropDown] = useState(false);
    const [pushProject, setAddProject] = useState(false);
    const [currentProject, setProject] = useState("all");

    const handleClick = () => setDropDown((prev) => !prev);
    const addProject = () => setAddProject((prev) => !prev);
    const filterProject = (projectCategory: string) =>
        setProject(projectCategory);

    return (
        <section className="project">
            <div className="text-[30px]">
                <h1>Projects</h1>
                <div className="yellow-line h-1 w-10 bg-yellow-500 rounded-3xl" />
            </div>

            <div
                className={`select-projectCategory my-6 rounded-xl ${dropDown ? "card-color" : ""}`}
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

                <div className="addProject-icon rounded-3xl border-slate-500 border cursor-pointer hover:scale-125 duration-75 center w-10 absolute right-4 md:top-28 md:right-10 top-5">
                    <span className="text-[25px] text-slate-400">+</span>
                </div>

                <div
                    className={`md:flex projectOptions ${dropDown ? "block border-t-2 border-gray-500" : "hidden"}`}
                >
                    <ul className="md:flex space-y-2 md:gap-6 md:space-y-0 block m-6 text-size-1 text-slate-400">
                        <li className="projectCategory" value="All">
                            All
                        </li>
                        <li className="projectCategory" value="Game">
                            Games
                        </li>
                        <li className="projectCategory" value="Web App">
                            Web App
                        </li>
                        <li className="projectCategory" value="Machine Learning">
                            Machine Learning
                        </li>
                        <li className="projectCategory" value="Cyber Security">
                            Cyber Security
                        </li>
                        <li className="projectCategory" value="IOT">
                            IOT
                        </li>
                    </ul>
                </div>
            </div>

            <div className="project-card-container grid md:grid-cols-3 grid-cols-1  gap-10 my-10 ">
                {Projects.map((project, key) => (
                    <div
                        className="project-card bg-black shadow-white shadow-sm w-full rounded-2xl p-2 h-auto"
                        key={key}
                    >
                        <Link href={`/posts/${project.id}`}>
                            <div className="img-content ">
                                <div className="relative w-full h-[25vh] rounded-2xl overflow-hidden">
                                    <Image
                                        src={"https://i.ytimg.com/vi/ANE4eFdGvUg/sddefault.jpg"}
                                        alt="thumbnail"
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                </div>
                            </div>
                            <div className="content-area m-2">
                                <time
                                    dateTime={project.post_date}
                                    className=" text-slate-300 text-[12px] flex justify-end mb-2"
                                >
                                    {project.post_date}
                                </time>

                                <div className="headline  h-20">
                                    <h1>
                                        <p className="line-clamp-3">{project.headline}</p>
                                    </h1>
                                </div>

                                <div className="techStackUse-list flex flex-wrap  gap-3  grid-cols-1 text-center    ">
                                    {project.tags.map((tag, key) => (
                                        <b className={"tech-tag text-sm "} key={key}>
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
