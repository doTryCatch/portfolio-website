"use client";
import { useState,useEffect } from "react";
import MyResponsiveBar from "../../src/components/graph/barGraph";
import MyResponsivePie from "../../src/components/graph/pieChart";
import GithubStat from "../components/github_cal_heat_map";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import frontend from "../../public/image/frontend.png";
import TechStack from "../components/tech_stack"


const blogs = [
  {
    id: 1,
    title: "First Blog Post",
    summary:
      "This is the summary of the first blog post. This blog covers all the concepts of WebRTC and discusses whether it is serverless or server-based in a detailed way.",
    url: "https://example.com/first-blog-post",
    date: "2024-07-18",
  },
 {
    id: 2,
    title: "second Blog Post",
    summary:
      "This is the summary of the first blog post. This blog covers all the concepts of WebRTC and discusses whether it is serverless or server-based in a detailed way.",
    url: "https://example.com/first-blog-post",
    date: "2024-07-18",
  },
];

function Dashboard() {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  
  const handleYearClick = (year:number) => {
    setSelectedYear(year);
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    autoplaySpeed:2500,
    autoplay:true
  };

  return (

      <div className="page-component-animation">
        <div className="body-area md:my-10">
          <div className="left-portion flex md:flex-row flex-col justify-between md:space-x-10 space-y-10">
            <div className="text-section h-30 md:h-60 md:py-4 text-[25px] md:text-[40px] md:w-[60%]">
              <p className="emoji">👋</p>
              <div className="intro-section my-10 ml-4 md:ml-10 md:my-14 flex space-x-2">
                <h1>I{"'"}m</h1>
                <h1 className="intro">Roshan Kumar Patel</h1>
              </div>
            </div>
            <div className="pie-chart-container md:w-[40%] w-full md:my-10">
              <div className="pie-chart md:h-[40vh] md:my-10 h-[35vh]">
                <MyResponsivePie />
                <p className="relative ml-[48%] -mt-[48%] text-white">%</p>
              </div>
            </div>
          </div>

          <section className="middle center  ">
            <div className="content-wrapper md:w-[90%]  w-full mx-auto">
              <div className="recent-activities-container ">
              <div className="heading mb-4">

                <h1 className="text-lg font-bold ">Recent Activities</h1>
  <div className="yellow-line h-1 w-10 bg-yellow-500 rounded-3xl" />
        </div>

                      <div className="blogs-container md:mx-32 md:w-[75%]  rounded-lg p-4 ">
                  {blogs.length === 0 ? (
                    <p className="text-gray-400 mt-2">No recent blog posts.</p>
                  ) : (
                    <Slider className="text-white md:mt-4  " {...settings}>
                      {blogs.map((blog) => (
                        <div key={blog.id} className="space-x-5">
                          <div className="blog-card bg-gray-900 p-4 rounded-lg">
                            <div className="heading flex justify-between text-sm">
                              <h3 className="font-semibold">{blog.title}</h3>
                              <small className="text-gray-400">
                                {new Date(blog.date).toDateString()}
                              </small>
                            </div>
                            <p className="text-sm text-gray-400 mt-2">
                              {blog.summary}
                            </p>
                          </div>
                        </div>
                      ))}
                    </Slider>
                  )}
                </div>
              </div>
         
              <div className="heat-map  my-20">
              <div className="flex md:gap-10 justify-between md:justify-start text-slate-400">

                <h1 className="text-lg font-bold ">My Work proof</h1>
<div className="year w-40 overflow-hidden">
<div className="year-container  cursor-grab  flex gap-4">
        {[2023,2024,2025].map((year) => (
          <div
            key={year}
            className={`year-item ${selectedYear === year ? 'selected' : ''}`}
            onClick={() => handleYearClick(year)}
          >
            {year}
          </div>
        ))}
      </div>
</div>

              </div>

               <div className="yellow-line h-1 w-10 bg-yellow-500 rounded-3xl" />

<GithubStat date={selectedYear}/>
              </div>

              <TechStack/>
            </div>
          </section>
        </div>
      </div>

  );
}

export default Dashboard;
