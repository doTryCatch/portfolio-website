// Page.tsx
"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
// import Link from "next/link";
import Profile_pic from "../public/image/profile.png";
import DropDown from "../public/image/dropdown.png";
// import Insta from "../public/image/Insta.png";
// import Github from "../public/image/Github.png";
import Contact_info from "../src/data/profile.json";
import Contact from "./components/contact";
const navItems = [
  { name: "Dashboard" },
  { name: "resume" },
  { name: "project" },
  { name: "blog" },
];
import { useRouter } from "next/navigation";

function Page({ page }: any) {
  const [dropdown, setDropDown] = useState(false);
  const [path, setPath] = useState("dashboard");
  const [contact, setContact] = useState(false);

  const router = useRouter();
  // seting dashboard as landing page
 

  const navigate = (e: any) => {
      let path= e.currentTarget.getAttribute("value").toLowerCase();
      if(path=="dashboard") path=""
    router.push("/" + path);
    setPath(e.currentTarget.getAttribute("value").toLowerCase());
  };
  const handleClick = () => {
    setDropDown((prev) => !prev);
    console.log(dropdown);
  };

  return (
    <section className="profile-section">

      {contact && <Contact />}
      <div
        className="contact-btn  rounded-2xl cursor-pointer fixed bottom-0  right-0 p-3 md:py-5 md:px-10 bg-green-700 my-14 mx-4 md:mx-10 md:my-3   z-50"
        onClick={() => setContact((prev) => !prev)}
      >
      <h1 className=" font-bold">Contact me</h1>
      </div>
      <div className="profile-container mx-1 gap-8 md:m-10 md:flex  md:space-y-0 space-y-4">
        <div className="md:w-[22%] z-10 sticky md:top-10 top-0 bg-black h-fit">
          <div className="profile-card profile-card-animation  rounded-3xl border-2 border-transparent bg-black ">
            <div className="profile-card-content  flex md:block md:mx-4  md:my-10 md:space-x-0 space-x-5">
              <div className="profile-image-container center">
                <div className="profile-image h-[16vh] md:h-[30vh] w-[16vh] md:w-[28vh]   rounded-3xl overflow-hidden ">
                  <Image
                    src={Profile_pic}
                    alt="Profile Picture"
                    className="md:w-full md:h-full object-cover mt-2"
                  />
                </div>
              </div>

              <div className="profile-info my-8 w-48 md:w-auto space-y-4">
                <h1
                  className={
                    " name  md:text-[30px] text-[25px] font-semibold text-gray-200 " +
                    (path == "dashboard" ? "hidden" : "")
                  }
                >
                  Roshan kr Patel
                </h1>
                <div
                  className={
                    "profile-role center " +
                    (path == "dashboard" ? " pt-4" : "")
                  }
                >
                  <h3 className="text-md py-1   bg-gradient-to-br from-[hsl(240,1%,25%)] to-[hsl(0,0%,19%)] text-gray-300 rounded-lg md:w-40 center w-full  ">
                    Web Developer
                  </h3>
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
              <div
                className={
                  dropdown ? "contact-info-animation ease-in " : "ease-out  "
                }
              >
                <div className="contact-list mx-6 mb-6 pt-8 space-y-6  border-t-[1px] border-gray-500">
                  {Contact_info.map((data, index) => (
                    <div key={index} className="contact-item  flex space-x-5">
                      <div className="contact-icon center rounded-xl card-style w-[15%] h-[15%] md:w-[20%] md:h-[5%] p-2">
                        <span className="material-symbols-outlined text-yellow-400">
                          {data.heading}
                        </span>
                      </div>
                      <div className="contact-details w-[75%] overflow-hidden text-ellipsis">
                        <p className="text-sm font-medium text-gray-500">
                          {data.heading}
                        </p>
                        <p className="text-[12px] text-white">
                          {data.link ? (
                            <a href={data.link}>{data.value}</a>
                          ) : (
                            <>{data.value}</>
                          )}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="page-section rounded-3xl relative md:w-[78%]">
          <div className="category-menu-container center">
            <div className="category-menu fixed md:absolute md:right-0 md:top-0 md:rounded-bl-xl md:rounded-tr-xl md:rounded-t-none rounded-t-xl z-10 -bottom-1 md:h-14 md:w-auto w-full h-12 card-color">
              <ul className="category-list flex md:gap-8 gap-7 mx-4 my-1 text-white md:p-3 p-2 center">
                {navItems.map((navItem, id) => (
                  <div className="list-items" key={id}>
                    <li
                      key={id}
                      onClick={navigate}
                      value={navItem.name}
                      className={" text-yellow-500 h-auto  decoration-red-400"}
                    >
                      {navItem.name}
                      <div
                        className={
                          "underliner bg-white" +
                          (path == navItem.name.toLowerCase()
                            ? " center"
                            : " hidden")
                        }
                      ></div>
                    </li>
                  </div>
                ))}
              </ul>
            </div>
          </div>

          <div className=" md:m-8 m-4 ">{page}</div>
        </section>
      </div>
    </section>
  );
}

export default Page; // pages/index.js
