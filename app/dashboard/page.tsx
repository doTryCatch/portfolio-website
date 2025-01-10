"use client";
import { useEffect, useState } from "react";
import MyResponsiveBar from "../../src/components/graph/barGraph";
import MyResponsivePie from "../../src/components/graph/pieChart";
import Data from "../../src/data/dashboard";
import Image from "next/image";
import frontend from "../../public/image/frontend.png";
const blogs = [
    {
        id: 1,
        title: "First Blog Post",
        summary:
            "This is the summary of the first blog post. this blog covers all the concept of webrtc and either it is serverless or with server gonna be discussed in brief way",
        url: "https://example.com/first-blog-post",
        date: "2024-07-18",
    },
];

function Dashboard() {
    return (
        <>
            <div className="page-component-animation">
                <div className="body-area md:my-10">
                    <div className="left-portion flex md:flex-row flex-col justify-between md:space-x-10 space-y-10">
                        <div className=" h-30 md:h-60 md:py-4  text-[25px] md:text-[40px] md:w-[60%]">
                            <p className="emoji">👋</p>
                            <div className=" my-10 ml-4 md:ml-10 md:my-14 flex  space-x-2">
                                <h1 className="">I{"'"}m</h1>
                                <h1 className="intro"> Roshan Kumar Patel</h1>
                            </div>
                        </div>
                        <div className="pie-chart-container md:w-[40%] [w-100%] md:my-10">
                            <div className="pie-chart  md:h-[40vh] h-[35vh]   ">
                                <MyResponsivePie />
                                <p className="relative ml-[48%] -mt-[48%] text-white ">%</p>
                            </div>
                        </div>
                    </div>
                    <section className="middle flex justify-between my-10 space-x-5">
                        <div className="techStacks w-[50%]">
                            <div className="frontend">
                                <div className="header flex space-x-5 ">
                                    <Image src={frontend} width={50} height={50} alt="frontend" />
                                    <h1 className="text-center">Frontend</h1>
                                </div>
                            </div>
                            <div className="backend"></div>
                            <div className="framework"></div>
                        </div>
                        <div className="recent-activities-container w-[50%]">
                            <h1>Recent Activites</h1>
                            <div className="blogs-container my-2 blogs-card rounded-lg ">
                                <div className="blog-content p-2">
                                    <b>Blogs</b>
                                    {blogs.length === 0 ? (
                                        <p>No recent blog posts.</p>
                                    ) : (
                                        <ul className="my-4 mx-2 space-y-4">
                                            {blogs.map((blog) => (
                                                <li key={blog.id}>
                                                    <div className="heading flex justify-between text-[14px]">
                                                        <h3 className=" ">{blog.title}</h3>
                                                        <small className="text-gray-300">
                                                            {new Date(blog.date).toDateString()}
                                                        </small>
                                                    </div>

                                                    <p className="text-[12px] text-gray-400 m-1">
                                                        {blog.summary}
                                                    </p>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}

export default Dashboard;
