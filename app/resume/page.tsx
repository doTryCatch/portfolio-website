import React from "react";
import resume from "../data/resume.json";
import Image from "next/image";
import Book from "../image/book.png";

interface ResumeItem {
  name: string;
  year: string;
  description: string;
}

const Portfolio = () => {
  return (
    <div className="about font-sans font-medium space-y-4 ">
      <h1 className="h1 text-[30px]"> Resume </h1>{" "}
      <div className="yellow-line h-1 w-10 bg-yellow-500  rounded-3xl"> </div>{" "}
      <div className="contnt text-gray-400   space-y-6">
        {" "}
        {Object.keys(resume).map((val, index) => (
          <div className="resume-body " key={index}>
            <div className="heading space-x-6 flex">
              <div className="Image  br_sd rounded-xl center h-10 w-10">
                <Image src={Book} alt="" className="w-6 h-6" />{" "}
              </div>{" "}
              <div className="title text-white text-bold text-[25px] flex items-center">
                {" "}
                {val}{" "}
              </div>{" "}
            </div>{" "}
            <ol className="space-y-6 m-8">
              {" "}
              {resume[val as keyof typeof resume].map(
                (elem: ResumeItem, Key: number) => (
                  <li key={Key}>
                    <div className="content-area space-y-1">
                      <h1 className="text-white text-bold text-[15px]">
                        {" "}
                        {elem.name}{" "}
                      </h1>{" "}
                      <h2> {elem.year} </h2> <p> {elem.description} </p>{" "}
                    </div>{" "}
                  </li>
                )
              )}{" "}
            </ol>{" "}
          </div>
        ))}{" "}
      </div>{" "}
    </div>
  );
};

export default Portfolio;
