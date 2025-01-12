"use client";

import Image from "next/image";

import Blogs from "../../src/data/blog.json"; // Assume this is a JSON file with blog data

import Link from "next/link";

import DropDown from "../../public/image/dropdown.png";

import { useState } from "react";

function BlogPage() {
  const [dropDown, setDropDown] = useState(false);

  const handleClick = () => setDropDown((prev) => !prev);

  return (
    <section className="blog popup">
      <div className="text-[30px]">
        <h1>Tech Blogs</h1>

        <div className="yellow-line h-1 w-10 bg-yellow-500 rounded-3xl" />
      </div>

      <div className={`select-blogCategory my-6 rounded-xl`}>
        <div className="p-2 select-area flex justify-between text-slate-300 md:hidden">
          <button>All</button>

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
          className={`md:flex blogOptions ${
            dropDown ? "block vslide border-t-2 border-gray-500" : "hidden"
          }`}
        ></div>
      </div>

      <div className="blog-card-container grid md:grid-cols-2 md:mx-6 grid-cols-1 grid-row-auto gap-8  page-component">
        {Blogs.map((blog, key) => (
          <div
            className="blog-card bg-black  w-full rounded-2xl p-2 h-auto"
            key={key}
          >
            <Link href={`/posts/${blog.id}`}>
              <div className="img-content ">
                <div className="relative  h-[32vh] rounded-2xl overflow-hidden">
                  <Image
                    src={"https://i.ytimg.com/vi/ANE4eFdGvUg/sddefault.jpg"}
                    alt="thumbnail"
                    layout="fill"
                    objectFit="cover"
                    className="hover:scale-[1.15] duration-150 ease-in-out"
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

                            </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BlogPage;
