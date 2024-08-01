"use client";
import Image from "next/image";
// import Comment from "../public/comment.svg";
import Projects from "../data/projects.json";
import Link from "next/link";
function Porject() {
  return (
    <section className="project   ">
      <div className="project-language-based-categories flex justify-between ">
        <div className="header-part">
          <h1> Projects </h1>{" "}
          <div className="yellow-line h-1 w-10 bg-yellow-500  rounded-3xl">
            {" "}
          </div>{" "}
        </div>{" "}
        <div className="categories-options absolute right-0 top-0 color rounded-bl-xl rounded-tr-xl ">
          <ul className="flex gap-5 mx-4 my-1 text-white">
            <li> webApp </li> <li> c / c++ </li> <li> python </li>{" "}
            <li> java </li>{" "}
          </ul>{" "}
        </div>{" "}
      </div>{" "}
      <div className="project-card-container grid md:grid-cols-3 grid-cols-1 grid-row-auto gap-10 my-10">
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
                        <span className="tech-tag text-sm">{tags}</span>
                      </>
                    );
                  })}
                </div>{" "}
                <div className="post-date flex mx-4 text-slate-300 text-[12px]">
                  <time dateTime="1995-05-15" className=" center">
                    {project.post_date}
                  </time>
                  <span>.</span>
                  <span>{project.watch_time}</span>
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
