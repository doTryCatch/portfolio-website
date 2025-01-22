import React, { useState,useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Insta from "../../public/image/instagram.png";
import Discord from "../../public/image/discord.png";
import GitHub from "../../public/image/github.png";
import Linkedin from "../../public/image/linkedin.png";
import axios from "axios";

const Contact = () => {
  const mediaData = [
    {
      link: "https://www.instagram.com/raone1422g/",
      alt: "Instagram",
      src: Insta,
    },
    {
      link: "https://discord.com",
      alt: "Discord",
      src: Discord,
    },
    {
      link: "https://www.linkedin.com/in/roshan-patel-b53623289/",
      alt: "LinkedIn",
      src: Linkedin,
    },
    {
      link: "https://github.com/doTryCatch",
      alt: "GitHub",
      src: GitHub,
    },
  ];
  const [input, setInput] = useState("");
const [loading, setLoading] = useState(false); // State for loading
    const [msg,setMsg]=useState('')
useEffect(()=>{
    const timeout=setTimeout(() => {
        setMsg('')
        
    }, 2000);
    return ()=>clearTimeout(timeout)

},[msg])
  const handleSend = async () => {

    console.log(input);
    if(input==''){
setMsg('come on, An empty message? 😒')
return 

    }else{

    setLoading(true)
    } 
    try {
      const response = await axios.post(
        "/api/write-file",
        { content: input },
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      if (response.status) {
        console.log(response.status);
        setLoading(false)
        setMsg('her buddy, I got your message.👍')
        
      }
    } catch (error:any) {
        console.error(error)
    }
  };

  return (
    <section className="fixed z-50 w-full bg-black h-full bg-opacity-80 top-0 popup flex items-center justify-center">
      <div className="relative center">
      {msg!=''&& <div className="msg-popup md:w-72 w-[40vh] rounded-xl p-2  popup  bg-green-700 text-white absolute md:ml-[75vh] md:-bottom-44 mb-[70vh] md:mb-0  z-50">{msg}</div>}

        <div className="bubble shadow-inner shadow-3xl overflow-hidden flex shadow-white bg-black center p-10 md:h-[70vh] md:w-[80vh] w-[43vh] h-[55vh]  mr-4 md:mr-0 md:-mt-14 md:ml-[55vh]">
          <div className="contact-area h-full">
            <div className="md:h-[30vh] h-[25vh] grid grid-cols-4 grid-rows-2 md:grid-rows-auto md:-mt-5 md:gap-4 md:p-10 px-10 -mt-4">
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
                        className={`shadow-xl shadow-white animate-float${
                          Number(index) + 1
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
            <div className="message -mt-10  ">
              <h3 className="text-xl font-semibold text-gray-200 px-10 md:px-0">
                Let’s Collab! 🤝
              </h3>
              <p className="text-slate-400 px-10 md:px-0 ">
                Got ideas or feedback? Share it here! 🚀 ... Find me 👆
              </p>
              <label className="text-slate-400 m-2 md:m-4  px-10 block md:px-0">
                I’m writing tech blogs! Got a favorite stack, bug, or topic in
                mind? Let’s make it awesome! ✍️
              </label>
              <div className="flex items-center gap-3 ml-10   md:ml-6 mx-auto mt-6 md:p-4 rounded-lg shadow-md">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Leave your message..."
                  className="flex-grow px-4 py-2 max-w-[28vh] md:max-w-lg border  border-gray-600 rounded-lg bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                />
                <button
                  type="submit"
                  className=" flex gap-2 bg-gray-700 hover:bg-green-700 text-white font-medium py-2 px-4 mr-10 md:mr-0 rounded-lg transition duration-200"
                  onClick={handleSend}
                >
 {loading && (

          <div
            style={{
              width: '20px',
              height: '20px',
              border: '2px solid #f3f3f3',
              borderTop: '2px solid #3498db',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite',
              margin: '0 auto',
            }}
          />
        )} <h1>Send</h1>                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
