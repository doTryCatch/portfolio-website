import React from "react";
import Link from "next/link";
import Image from "next/image";
import Insta from "../../public/image/instagram.png";
import Discord from "../../public/image/discord.png";
import GitHub from "../../public/image/github.png";
import Linkedin from "../../public/image/linkedin.png";

const Contact = () => {
    const mediaData = [
        {
            link: "https://www.instagram.com",
            alt: "Instagram",
            src: Insta,
        },
        {
            link: "https://discord.com",
            alt: "Discord",
            src: Discord,
        },
        {
            link: "https://www.linkedin.com",
            alt: "LinkedIn",
            src: Linkedin,
        },
        {
            link: "https://github.com",
            alt: "GitHub",
            src: GitHub,
        },
    ];

    return (
        <section className="fixed z-50 w-full bg-black h-full bg-opacity-80 top-0 popup flex items-center justify-center">
            <div className="relative center">
                <div className="bubble shadow-inner shadow-3xl shadow-white bg-black center p-10 md:h-[70vh] md:w-[80vh] w-[43vh] h-[50vh] mt-40 mr-4 md:mr-0 md:-mt-14 md:ml-[55vh]">
                    <div className="contact-area h-full">
                        <div className="md:h-[30vh] h-[15vh] grid grid-cols-4 grid-rows-2 md:grid-rows-auto md:-mt-5 md:gap-4 md:p-10 px-20 py-6">
                            {mediaData.map((media, index) => {
                                const rowSpan = Math.floor(Math.random() * 3) + 1;

                                return (
                                    <div
                                        key={index}
                                        className="flex justify-center items-center p-5 rounded-lg"
                                        style={{ gridRowEnd: `span ${rowSpan}` }}
                                    >
                                        <Link href={media.link}>
                                            <Image
                                                src={media.src}
                                                className={`shadow-xl shadow-white animate-float${Number(index) + 1
                                                    }`}
                                                width={70}
                                                height={70}
                                                alt={media.alt}
                                            />
                                        </Link>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="message md:-mt-10  ">
                            <h3 className="text-xl font-semibold text-gray-200 ml-16 md:ml-0">
                                Let’s Collab! 🤝
                            </h3>
                            <p className="text-slate-400 ml-20 md:ml-0 ">
                                Got ideas or feedback? Share it here! 🚀 ... Find me 👆
                            </p>
                            <label className="text-slate-400 m-6 px-14 block md:px-0">
                                I’m writing tech blogs! Got a favorite stack, bug, or topic in
                                mind? Let’s make it awesome! ✍️
                            </label>
                            <div className="flex items-center gap-3  md:max-w-sm  ml-24 mx-auto md:mt-6 md:p-4 rounded-lg shadow-md">
                                <input
                                    type="text"
                                    placeholder="Write your feedback..."
                                    className="flex-grow px-4 py-2 border border-gray-600 rounded-lg bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                                />
                                <button
                                    type="submit"
                                    className=" bg-gray-700 hover:bg-green-700 text-white font-medium py-2 px-4 mr-10 md:mr-0 rounded-lg transition duration-200"
                                >
                                    Send
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
