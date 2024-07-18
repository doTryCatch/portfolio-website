"use client";
import { useEffect, useState } from "react";
import MyResponsiveBar from "../components/graph/barGraph";
import MyResponsivePie from "../components/graph/pieChart";
import Data from "../data/dashboard";

const blogs = [
  {
    id: 1,
    title: "First Blog Post",
    summary:
      "This is the summary of the first blog post. this blog covers all the concept of webrtc and either it is serverless or with server gonna be discussed in brief way",
    url: "https://example.com/first-blog-post",
    date: "2024-07-18",
  },
  {
    id: 2,
    title: "Second Blog Post",
    summary: "This is the summary of the second blog post.",
    url: "https://example.com/second-blog-post",
    date: "2024-07-15",
  },
];

function Dashboard() {
  return (
    <>
      <div className="md:flex justify-between">
        <div className="left-portion ">
          <div className=" h-48 py-4 text-[25px] md:text-[45px]">
            <h1>👋,</h1>
            <div className="name flex gap-4">
              <h1 className="">I{"'"}m</h1>
              <h1 className="intro"> Roshan Kumar Patel</h1>
            </div>
          </div>
          <div className="recent-activities-container">
            <h1>Recent Activites</h1>
            <div className="blogs-container my-2 blogs-card rounded-lg ">
              <div className="blog-content p-2">
                <span>Blogs</span>
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
        </div>
        <div className="right-portion">
          <h1>Statistics</h1>
          <div className="yellow-line h-1 w-10 bg-yellow-500  rounded-3xl"></div>
          <div className="graph-container  h-[30vh] w-[50vh] ">
            <MyResponsivePie />
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
