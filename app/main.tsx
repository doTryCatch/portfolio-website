// Page.tsx
"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import Profile_pic from "./image/profile.jpg";
import Hobby from "./image/hobby.png";
import DropDown from "./image/dropdown.png";
import Insta from "./image/Insta.png";
import Github from "./image/Github.png";
import Contact_info from "./data/profile.json";
import Phone from "./image/Phone.png";

const Img = Contact_info.filter((elem) => (elem.img = "./image/" + elem.img));

import { useRouter } from "next/navigation";

function Main({ page }: any) {
  const [dropdown, setDropDown] = useState(false);
  const [path, setPath] = useState("dashboard");
  const [scroll, setScroll] = useState(0);
  const router = useRouter();
  const [data, setData] = useState({});
  useEffect(() => {
    router.push("/dashboard");
    setPath("dashboard");
  }, []);

  const navigate = (e: any) => {
    router.push("/" + e.currentTarget.getAttribute("value").toLowerCase());
    setPath(e.currentTarget.getAttribute("value").toLowerCase());
  };

  const handleClick = () => {
    setDropDown((prev) => !prev);
    console.log(dropdown);
  };

  return (
    <section className="body">
      <div className="main-content-area m-1  gap-8 md:m-10  md:flex space-y-4 md:space-y-0 ">
        <div className="profile-card h-fit   card-color rounded-3xl  border-2 border-transparent  md:w-[22%] z-10 sticky md:top-10 top-0">
          <div className="card-content  md:block flex  m-4 space-x-5 md:space-x-0 ">
            <div className="profile-image center ">
              <div className="img h-[15vh]  md:h-[25vh] w-[15vh] md:w-[25vh] br_sd   bg-white rounded-3xl overflow-hidden">
                <Image
                  src={Profile_pic}
                  alt="Hobby-Image"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="my-6 space-y-2 text-center   ">
              <h1>Roshan Kumar Patel</h1>
              <div className="role card-color rounded-3xl  ">
                <h3>Developer</h3>
              </div>
            </div>
            <div className="toggle-button right-0 absolute md:hidden top-0">
              <div className="dropdown-icon m-2 rounded-bl-xl card-color rounded-tr-xl relative">
                <Image
                  src={DropDown}
                  alt="dropdown-image"
                  height={30}
                  width={30}
                  onClick={handleClick}
                />
              </div>
            </div>
          </div>

          <div className={dropdown ? "block md:block" : "hidden md:block"}>
            <div className="center py-4">
              <div className="w-[60%] color"></div>
            </div>
            <div className={"contact-info"}>
              <div className="m-2 space-y-6">
                {Contact_info.map((data: any, index: number) => (
                  <div key={index} className=" m-4 flex space-x-5 ">
                    <div className="center  rounded-xl card-style w-[15%] h-[15%] md:w-[20%] md:h-[05%] p-2 ">
                      <Image src={Phone} alt="" width={40} height={40} />
                    </div>
                    <div className="contact-content w-[75%] overflow-hidden text-ellipsis">
                      <div>
                        <div>
                          {" "}
                          <p>{data.heading.toUpperCase()}</p>
                        </div>
                        <div>
                          <a href="example.com" className="contact-link">
                            {data.value}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="center my-10">
                <div className="w-[60%] color"></div>
              </div>
            </div>
            <div className="m-4">
              <div className=" m-2 flex h-8 w-8 space-x-4">
                <Image src={Insta} alt="Instagram Icon" />
                <Link
                  href="https://github.com/doTryCatch/doTryCatch"
                  legacyBehavior
                >
                  <Image
                    src={Github}
                    alt="GitHub Icon"
                    width={30}
                    height={30}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <section className="pageComponent rounded-3xl card-color  relative md:w-[78%]">
          <div className="project-language-based-categories center">
            <div className="categories-options md:absolute md:right-0 md:top-0 color md:rounded-bl-xl md:rounded-tr-xl md:rounded-t-none rounded-t-xl z-10 fixed -bottom-1  md:h-14 md:w-auto w-full h-12">
              <ul className="flex md:gap-10 gap-7 mx-4 my-1 text-white md:p-3 p-2">
                <li
                  onClick={navigate}
                  value="Dashboard"
                  className={
                    path === "dashboard"
                      ? "underline underline-offset-2"
                      : "no-underline"
                  }
                >
                  Dashboard
                </li>
                <li
                  onClick={navigate}
                  value="resume"
                  className={
                    path === "resume"
                      ? "underline underline-offset-2"
                      : "no-underline"
                  }
                >
                  Resume
                </li>
                <li
                  onClick={navigate}
                  value="Project"
                  className={
                    path === "project"
                      ? "underline underline-offset-2"
                      : "no-underline"
                  }
                >
                  Projects
                </li>
                <li
                  onClick={navigate}
                  value="Contact"
                  className={
                    path === "contact"
                      ? "underline underline-offset-2"
                      : "no-underline"
                  }
                >
                  Blogs
                </li>
              </ul>{" "}
            </div>{" "}
          </div>{" "}
          {/* <div className="navbar scroll-smooth  border-2 border-transparent md:sticky md:top-0 z-10 fixed -bottom-1  w-[100%]  "> */}
          {/* <div className="navbar absolute right-0 top-0 color rounded-bl-xl rounded-tr-xl "> */}
          {/* <ul className="nav-list-items h-12 center bg-pink-600  gap-6 md:text-[20px] text-[15px] md:mx-[24rem]  md:rounded-md rounded-t-md bg-opacity-90 md:bg-opacity-100">
              
            </ul>
          </div> */}
          <div className="content-container page-component   md:m-8 m-4 ">
            {page}
          </div>
        </section>
      </div>
    </section>
  );
}

export default Main; // pages/index.js
