// Page.tsx
"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

import Profile_pic from "./image/profile.jpg";
import Hobby from "./image/hobby.png";
import DropDown from "./image/dropdown.png";
import Insta from "./image/Insta.png";
import Github from "./image/Github.png";
// import About from "./components/about";
import Contact from "./components/blog";
import Portfolio from "./components/portfolio";
import Project from "./components/project";
import Link from "next/link";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

function Main({ page }: any) {
  const [dropdown, setDropDown] = useState(false);
  const [path, setPath] = useState("About");
  const [scroll, setScroll] = useState(0);
  const router = useRouter();
  const [data, setData] = useState({});

  const handleGet = () => {
    setData(
      fetch("/api")
        .then((resonse) => {
          return resonse.json();
        })
        .then((data) => {
          console.log(data);
          return data;
        })
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navigate = (e: any) => {
    router.push("/" + e.currentTarget.getAttribute("value").toLowerCase());
    setPath(e.currentTarget.getAttribute("value"));
  };

  const handleClick = () => {
    setDropDown((prev) => !prev);
  };

  return (
    <section className="body w-[100%]">
      <div className="navbar scroll-smooth border-2 border-transparent md:sticky md:top-0  fixed bottom-0  w-[100%]">
        <ul className="nav-list-items h-10 center card-color  gap-12 md:text-[20px] text-[15px] md:mx-[24rem]  md:rounded-md rounded-t-md bg-opacity-40">
          <li onClick={navigate} value="about">
            About
          </li>
          <li onClick={navigate} value="resume">
            Resume
          </li>
          <li onClick={navigate} value="Project">
            Projects
          </li>
          <li onClick={navigate} value="Contact">
            Blogs
          </li>
          <li onClick={handleGet}>get</li>
        </ul>
      </div>
      <div className="main-content-area m-2  gap-8 md:m-5  md:flex">
        <div className="profile-card h-fit   card-color rounded-xl  border-2 border-transparent  md:w-[20%] sticky md:top-10 top-0">
          <div className="card-content  md:block flex  m-4 space-x-5 md:space-x-0 ">
            <div className="profile-image center ">
              <div className="img h-[15vh]  md:h-[25vh] w-[15vh] md:w-[25vh] br_sd   bg-white rounded-full overflow-hidden">
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

          <div className={dropdown ? "block" : "hidden"}>
            <div>
              <hr />
            </div>
            <div className={dropdown ? "contact-info" : "hidden"}>
              {/* <div>
                {Object.keys(Contact_info).map((key, index) => (
                  <div key={index}>
                    <div>
                      <Image
                        src={Contact_info[key].img}
                        alt=""
                        width={40}
                        height={40}
                      />
                    </div>
                    <div>
                      <div>
                        <div>{key.toUpperCase()}</div>
                        <div>
                          <p>{Contact_info[key].content}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div> */}
            </div>
            <div>
              <hr />
            </div>
            <div>
              <div>
                <Image src={Insta} alt="Instagram Icon" />
                <Image src={Github} alt="GitHub Icon" />
              </div>
            </div>
          </div>
        </div>

        <section className="pageComponent rounded-xl card-color relative md:w-[80%]">
          <div className="content-container    m-8">{page}</div>
        </section>
      </div>
    </section>
  );
}

export default Main; // pages/index.js
