// Page.tsx
"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import Profile_pic from "../public/image/profile.jpg";
import DropDown from "../public/image/dropdown.png";
import Insta from "../public/image/Insta.png";
import Github from "../public/image/Github.png";
import Contact_info from "../src/data/profile.json";
import Phone from "../public/image/Phone.png";

import { useRouter } from "next/navigation";

function Page({ page }: any) {
  const [dropdown, setDropDown] = useState(false);
  const [path, setPath] = useState("dashboard");

  const router = useRouter();
  // seting dashboard as landing page
  useEffect(() => {
    router.push("/dashboard");
    setPath("dashboard");
  }, [router]);

  const navigate = (e: any) => {
    router.push("/" + e.currentTarget.getAttribute("value").toLowerCase());
    setPath(e.currentTarget.getAttribute("value").toLowerCase());
  };
  var roshan;
  const handleClick = () => {
    setDropDown((prev) => !prev);
    console.log(dropdown);
  };

  return (
    <section className="profile-section">
      <div className="profile-container m-1 gap-8 md:m-10 md:flex md:space-y-0 space-y-4">
        <div className="profile-card h-fit card-color rounded-3xl border-2 border-transparent md:w-[22%] z-10 sticky md:top-10 top-0">
          <div className="profile-card-content flex md:block md:mx-4 m-4 md:my-10 md:space-x-0 space-x-5">
            <div className="profile-image-container center">
              <div className="profile-image h-[15vh] md:h-[22vh] w-[15vh] md:w-[22vh] br_sd bg-white rounded-3xl overflow-hidden">
                <Image
                  src={Profile_pic}
                  alt="Profile Picture"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="profile-info my-6 text-center space-y-2">
              <h1 className="text-md font-semibold text-gray-200">
                Roshan Kumar Patel
              </h1>
              <div className="profile-role  card-color rounded-3xl ">
                <h3 className="text-md  text-gray-400">Developer</h3>
              </div>
            </div>

            <div className="dropdown-button absolute top-0 right-0 md:hidden">
              <div className="dropdown-icon m-2 rounded-bl-xl card-color rounded-tr-xl relative">
                <Image
                  src={DropDown}
                  alt="Dropdown Icon"
                  height={30}
                  width={30}
                  onClick={handleClick}
                />
              </div>
            </div>
          </div>

          <div
            className={
              dropdown
                ? "contact-info-block block md:block"
                : "contact-info-block hidden md:block"
            }
          >
            <div className="divider center py-4">
              <div className="w-[60%] color"></div>
            </div>
            <div className="contact-info">
              <div className="contact-list m-2 space-y-6">
                {Contact_info.map((data, index) => (
                  <div key={index} className="contact-item m-4 flex space-x-5">
                    <div className="contact-icon center rounded-xl card-style w-[15%] h-[15%] md:w-[20%] md:h-[5%] p-2">
                      <Image
                        src={Phone}
                        alt="Phone Icon"
                        width={40}
                        height={40}
                      />
                    </div>
                    <div className="contact-details w-[75%] overflow-hidden text-ellipsis">
                      <p className="text-sm font-medium text-gray-800">
                        {data.heading.toUpperCase()}
                      </p>
                      <a
                        href="example.com"
                        className="contact-link text-blue-500"
                      >
                        {data.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="divider center my-10">
              <div className="w-[60%] color"></div>
            </div>
            <div className="social-links m-4">
              <div className="social-icons m-2 flex h-8 w-8 space-x-4">
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

        <section className="page-section rounded-3xl card-color relative md:w-[78%]">
          <div className="category-menu-container center">
            <div className="category-menu fixed md:absolute md:right-0 md:top-0 md:rounded-bl-xl md:rounded-tr-xl md:rounded-t-none rounded-t-xl z-10 -bottom-1 md:h-14 md:w-auto w-full h-12 card-color">
              <ul className="category-list flex md:gap-8 gap-7 mx-4 my-1 text-white md:p-3 p-2 center">
                <li
                  onClick={navigate}
                  value="Dashboard"
                  className={
                    path === "dashboard"
                      ? "underline underline-offset-4 text-yellow-500 decoration-red-400"
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
                      ? "underline underline-offset-4 text-yellow-500 decoration-red-400"
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
                      ? "underline underline-offset-4 text-yellow-500 decoration-red-400"
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
                      ? "underline underline-offset-4 text-yellow-500 decoration-red-400"
                      : "no-underline"
                  }
                >
                  Blogs
                </li>
              </ul>
            </div>
          </div>
          <div className="page-content-container md:m-8 m-4">{page}</div>
        </section>
      </div>
    </section>
  );
}

export default Page; // pages/index.js
