"use client";
import Image from "next/image";
import Blogs from "../../src/data/blog.json"; // Assume this is a JSON file with blog data
import Link from "next/link";
import DropDown from "../../public/image/dropdown.png";

import { useAuth } from "@/src/hooks/authProvider";
import BlogEntryUi from "@/src/components/Form";
import { useState } from "react";

function BlogPage() {
    const [dropDown, setDropDown] = useState(false);
    const [currentCategory, setCategory] = useState("all");

    const handleClick = () => setDropDown((prev) => !prev);
    const addBlog = () => setAddBlog((prev) => !prev);
    const filterCategory = (category: string) => setCategory(category);

    return (
        <section className="blog">
            <div className="text-[30px]">
                <h1>Tech Blogs</h1>
                <div className="yellow-line h-1 w-10 bg-yellow-500 rounded-3xl" />
            </div>

            <div
                className={`select-blogCategory my-6 rounded-xl ${dropDown ? "card-color" : ""}`}
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

                <div className="addBlog-icon rounded-3xl border-slate-500 border cursor-pointer hover:scale-125 duration-75 center w-10 absolute right-4 md:top-28 md:right-10 top-5">
                    <span className="text-[25px] text-slate-400">+</span>
                </div>

                <div
                    className={`md:flex blogOptions ${dropDown ? "block border-t-2 border-gray-500" : "hidden"}`}
                >
                    <ul className="md:flex space-y-2 md:gap-6 md:space-y-0 block m-6 text-size-1 text-slate-400">
                        <li className="blogCategory" value="All">
                            All
                        </li>
                        <li className="blogCategory" value="Bugs">
                            Bugs
                        </li>
                        <li className="blogCategory" value="Tech Stack">
                            Tech Stack
                        </li>
                        <li className="blogCategory" value="Tech Roadmaps">
                            Tech Roadmaps
                        </li>
                        <li className="blogCategory" value="Security">
                            Security
                        </li>
                        <li className="blogCategory" value="DevOps">
                            DevOps
                        </li>
                    </ul>
                </div>
            </div>

            <div className="blog-card-container grid md:grid-cols-2 grid-cols-1 grid-row-auto gap-10 my-10 page-component">
                {Blogs.map((blog, key) => (
                    <div
                        className="blog-card bg-black shadow-white shadow-sm w-full rounded-2xl p-2 h-auto"
                        key={key}
                    >
                        <Link href={`/posts/${blog.id}`}>
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
                                    dateTime={blog.post_date}
                                    className=" text-slate-300 text-[12px] flex justify-end mb-2"
                                >
                                    {blog.post_date}
                                </time>

                                <div className="headline  h-20">
                                    <h1>
                                        <p className="line-clamp-3">{blog.title}</p>
                                    </h1>
                                </div>

                                <div className="techStackUse-list flex flex-wrap  gap-3  grid-cols-1 text-center    ">
                                    {blog.tags.map((tag, key) => (
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

export default BlogPage;
