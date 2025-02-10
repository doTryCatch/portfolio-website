"use client";

import Image from "next/image";

import Blogs from "../../src/data/blog.json"; // Assume this is a JSON file with blog data

import Link from "next/link";

import Img from "../../src/components/imageData"
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

        <div
          className={`md:flex blogOptions ${
            dropDown ? "block vslide border-t-2 border-gray-500" : "hidden"
          }`}
        ></div>
      </div>

      <div className="blog-card-container grid md:grid-cols-2 md:mx-6 grid-cols-1 grid-row-auto gap-8  page-component">
        {Blogs.sort((a, b) =>Number(new Date(b.post_date)) - Number(new Date(a.post_date))).map((blog, key) => (
          <div
            className="blog-card bg-black  w-full rounded-2xl p-2 h-auto"
            key={key}
          >

            <Link href={`/posts/${blog.id}`}>
              <div className="img-content ">
                <div className="relative  h-[32vh] rounded-2xl overflow-hidden">
                  <Image
                    src={Img[blog.thumbnail_url]}
                    alt="thumbnail"
                    layout="fill"
                    objectFit="cover"
                    className="hover:scale-[1.15] duration-150 ease-in-out"
                  />
                </div>
              </div>

              <div className="content-area m-2">
              <div className="flex justify-between items-center">
  <time
                  dateTime={blog.read_time}
                  className=" text-slate-300 text-[12px] flex justify-end mb-2"
                >
                  {blog.read_time}
                </time>


                <time
                  dateTime={blog.post_date}
                  className=" text-slate-300 text-[12px] flex justify-end mb-2"
                >
                  {blog.post_date}
                </time>

              </div>
                <div className="headline  h-20">
                  <h1>
                    <p className="line-clamp-3">{blog.title}</p>
                  </h1>

                <div className="techStackUse-list flex flex-wrap gap-3 text-center">
                  {blog.tags.map((tag, index) => (
                    <b className="tech-tag text-sm" key={index}>
                      {tag}
                    </b>
                  ))}
                </div>

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
