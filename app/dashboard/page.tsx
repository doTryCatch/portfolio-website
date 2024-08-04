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
];

function Dashboard() {
  return (
    <>
      <div className=" page-component">
        <div className="body-area md:flex justify-between md:space-x-5 md:my-10">
          <div className="left-portion  md:w-[60%]">
            <div className=" h-60 py-4 text-[25px] md:text-[40px]">
              <p className="emoji">👋</p>
              <div className=" my-10 ml-4 md:ml-10 md:my-14 flex  space-x-2">
                <h1 className="">I{"'"}m</h1>
                <h1 className="intro "> Roshan Kumar Patel</h1>
              </div>
            </div>
            <div className="recent-activities-container md:my-14">
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
          </div>
          <div className="right-portion md:w-[35%] my-10 ">
            <div className="graph-container  md:h-[40vh] h-[30vh]   ">
              <MyResponsivePie />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
