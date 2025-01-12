import React from "react";
import resume from "../../src/data/resume.json";
import Image from "next/image";
import Book from "../../public/image/book.png";
interface ResumeItem {
  name: string;
  year: string;
  description: string;
}

const Portfolio = () => {
  return (
    <div className="about page-component-animation  space-y-10 ">
      <div className="header">
        <h1 className="h1 text-[30px]"> Resume </h1>{" "}
        <div className="yellow-line h-1 w-10 bg-yellow-500  rounded-3xl"> </div>{" "}
      </div>
      <div className="contnt text-gray-400 md:grid md:grid-cols-2  gap-6   space-y-6 page-component">
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
            <ol className="space-y-6 md:m-8 my-8 ml-8 ">
              {/* mx-2 my-4 ml-12"> */}{" "}
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
                ),
              )}{" "}
            </ol>{" "}
          </div>
        ))}{" "}
      </div>{" "}
    </div>
  );
};

export default Portfolio;
