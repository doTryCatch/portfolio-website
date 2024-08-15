"use client";
import Image from "next/image";
// import Comment from "../public/comment.svg";
import Projects from "../../src/data/projects.json";
import Link from "next/link";
function Porject() {
  return (
    <section className="project   ">
      <div className="text-[30px]">
        <h1> Projects </h1>{" "}
        <div className="yellow-line h-1 w-10 bg-yellow-500  rounded-3xl"> </div>{" "}
      </div>{" "}
      <div className="categories-options flex justify-between  color my-6">
        <div className="filterOption md:hidden">
          <select name="project type" id="projectType">
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
          </select>
          <div className="dropDown-icon"></div>
        </div>
        <ul className="flex gap-5 mx-4 my-1 text-white">
          <li> webApp </li> <li> c / c++ </li> <li> python </li> <li> java </li>{" "}
        </ul>{" "}
        <div className="addProject-icon rounded-3xl border-slate-500 border center w-10">
          <b className="text-[25px] text-slate-400">+</b>
        </div>
      </div>{" "}
      <div className="project-card-container grid md:grid-cols-3 grid-cols-1 grid-row-auto gap-10 my-10 page-component">
        {Projects.map((project, key) => (
          <>
            <Link href={`/posts/${project.id}`}>
              <div
                className="project-card card-style w-full  rounded-2xl p-2"
                key={key}
              >
                <div className="icon rounded-full m-4">
                  <Image
                    src={project.icon_url}
                    alt="logo-icon"
                    height={30}
                    width={30}
                  />
                </div>{" "}
                <div className="headline mx-4 h-20 ">
                  <h1>
                    <p className=" line-clamp-3 ">{project.headline}</p>
                  </h1>
                </div>{" "}
                <div className="techStackUse-list mx-4 flex flex-grow-2 gap-3  ">
                  {project.tags.map((tags, key) => {
                    return (
                      <>
                        <b className="tech-tag text-sm">{tags}</b>
                      </>
                    );
                  })}
                </div>{" "}
                <div className="post-date flex mx-4 text-slate-300 text-[12px]">
                  <time dateTime="1995-05-15" className=" center">
                    {project.post_date}
                  </time>
                  <b>.</b>
                  <b>{project.watch_time}</b>
                </div>{" "}
                <div className="img-content m-2">
                  <div className=" relative  w-full h-[25vh] rounded-2xl overflow-hidden">
                    <Image
                      src={"https://i.ytimg.com/vi/ANE4eFdGvUg/sddefault.jpg"}
                      alt="thumbnail"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </div>
                <div className="stat-attributes flex flex-grow item-center justify-between">
                  <div className="star-icon">
                    <Image src={""} alt="" />
                  </div>
                  <div className="comment-icon">
                    <Image src={""} alt="" />
                  </div>
                  <div className="views">
                    <Image src={""} alt="" />
                  </div>
                  {/* <Comment width={100} height={100} /> */}
                </div>{" "}
              </div>{" "}
            </Link>
          </>
        ))}
      </div>{" "}
    </section>
  );
}

export default Porject;
