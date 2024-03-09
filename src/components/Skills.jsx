import nextjs from "../assets/nextjs.6c933976.svg";
import react from "../assets/react.1d4fe787.svg";

import ts from "../assets/typescript.daf45bcc.svg";
import js from "../assets/javascript.66332293.svg";
import html from "../assets/html.c22f4351.svg";
import tailwind from "../assets/tailwind.839d95f8.svg";
import css from "../assets/css.3e26a99b.svg";
import node from "../assets/node.60773c47.svg";
import mongodb from "../assets/mongodb.e79ba628.svg";
import github from "../assets/github.48997e5f.svg";
import netlify from "../assets/netlify.18e607e4.svg";
import vercel from "../assets/vercel.4d820ebc.svg";
import firebase from "../assets/firebase.da92826a.svg";
import vsc from "../assets/vsc.0dba8ef3.svg";
import postman from "../assets/postman.8fe5b14c.svg";
import figma from "../assets/figma.7c618dd1.svg";

const Skills = () => {
  return (
    <>
      <div className="w-full justify-center flex mt-10">
        <div className="select-none text-[12px] font-bold text-[#7c7c7c] text-center px-4 sm:px-0 tracking-[0.3rem]">
          EXPLORE MY SKILLS
        </div>
      </div>
      <div className="w-full justify-center flex mt-5 flex-col items-center">
        <span className="select-none h-[100px] w-[1px] bg-gradient-to-t from-[#019ae9] to-[#000000]" />
        <div className="select-none h-[40px] w-[40px] bg-gradient-to-r from-[#019ae9] to-[#00dfd8] rounded-full flex items-center justify-center text-black text-md font-bold">
          1
        </div>
        <div className="select-none bg-gradient-to-r from-[#019ae9] to-[#00dfd8] mt-5 text-3xl font-[700] text-clip text-transparent bg-clip-text font-dancing">
          My Skills
        </div>
        <div className="mt-6 font-[700] text-[2rem] sm:text-[3rem] tracking-[-0.1rem] leading-tight text-center">
          Gateway to endless innovation
        </div>
        <div className="mt-5 text-[#cccccc] text-2xl sm:text-4xl font-dancing">
          Known Languages
        </div>
        <div className="mt-10 w-full">
          <div className="w-full px-[16px] md:px-[50px] lg:px-[250px] flex justify-center">
            <div className="flex w-fit justify-center  flex-wrap gap-4 md:gap-6">
              <div className="group select-none relative">
                <div className="z-20 duration-200 relative p-[1px] bg-[#ffffff27] rounded-xl bg-gradient-to-r from-[#cbcccc] to-[#797979]">
                  <div className="h-[80px] w-full bg-black rounded-t-xl flex items-center justify-center">
                    <img
                      draggable="false"
                      alt="logo"
                      loading="lazy"
                      width={40}
                      height={40}
                      decoding="async"
                      data-nimg={1}
                      style={{ color: "transparent" }}
                      src={nextjs}
                      className="object-cover"
                    />
                  </div>
                  <div className="w-[95px] h-[30px] rounded-b-xl bg-[#cbcccc] to-[#797979] flex items-center justify-center text-sm font-semibold">
                    Next.js
                  </div>
                </div>
                <div className="absolute duration-200 top-10 h-[50px] w-full bg-gradient-to-r from-[#cbcccc] to-[#797979] blur-3xl rounded-xl"></div>
              </div>

              <div className="group select-none relative">
                <div className="z-20 duration-200 relative p-[1px] bg-[#ffffff27] rounded-xl bg-gradient-to-r from-[#019ae9] to-[#00dfd8]">
                  <div className="h-[80px] w-full bg-black rounded-t-xl flex items-center justify-center">
                    <img
                      draggable="false"
                      alt="logo"
                      loading="lazy"
                      width={40}
                      height={40}
                      decoding="async"
                      data-nimg={1}
                      style={{ color: "transparent" }}
                      src={react}
                    />
                  </div>
                  <div className="w-[95px] h-[30px] rounded-b-xl">
                    <div className="flex items-center justify-center h-full duration-100 text-sm font-semibold">
                      React
                    </div>
                  </div>
                </div>
                <div className="absolute duration-200 top-10 h-[50px] w-full bg-gradient-to-r from-[#019ae9] to-[#00dfd8] blur-3xl"/> 
              </div>

              <div className="group select-none relative">
                <div className="z-20 duration-200 relative p-[1px] bg-[#ffffff27] rounded-xl bg-gradient-to-r from-[#3178c6] to-[#008bd3]">
                  <div className="h-[80px] w-full bg-black rounded-t-xl flex items-center justify-center">
                    <img
                      draggable="false"
                      alt="logo"
                      loading="lazy"
                      width={40}
                      height={40}
                      decoding="async"
                      data-nimg={1}
                      style={{ color: "transparent" }}
                      src={ts}
                    />
                  </div>
                  <div className="w-[95px] h-[30px] rounded-b-xl">
                    <div className="flex items-center justify-center h-full duration-100 text-sm font-semibold">
                      Typescript
                    </div>
                  </div>
                </div>
                <div className="absolute duration-200 top-10 h-[50px] w-full bg-gradient-to-r from-[#3178c6] to-[#008bd3] blur-3xl"></div>
              </div>

              <div className="group select-none relative">
                <div className="z-20 duration-200 relative p-[1px] bg-[#ffffff27] rounded-xl bg-gradient-to-r from-[#f7df1e] to-[#c3b017]">
                  <div className="h-[80px] w-full bg-black rounded-t-xl flex items-center justify-center">
                    <img
                      draggable="false"
                      alt="logo"
                      loading="lazy"
                      width={40}
                      height={40}
                      decoding="async"
                      data-nimg={1}
                      style={{ color: "transparent" }}
                      src={js}
                    />
                  </div>
                  <div className="w-[95px] h-[30px] rounded-b-xl">
                    <div className="flex items-center justify-center h-full duration-100 text-sm font-semibold">
                      Javascript
                    </div>
                  </div>
                </div>
                <div className="absolute duration-200 top-10 h-[50px] w-full bg-gradient-to-r from-[#f7df1e] to-[#c3b017] blur-3xl"></div>
              </div>

              <div>
                <div className="group select-none relative">
                  <div className="z-20 duration-200 relative p-[1px] bg-[#ffffff27] rounded-xl bg-gradient-to-r from-[#e44f26] to-[#ff872c]">
                    <div className="h-[80px] w-full bg-black rounded-t-xl flex items-center justify-center">
                      <img
                        draggable="false"
                        alt="logo"
                        loading="lazy"
                        width={40}
                        height={40}
                        decoding="async"
                        data-nimg={1}
                        style={{ color: "transparent" }}
                        src={html}
                      />
                    </div>
                    <div className="w-[95px] h-[30px] rounded-b-xl">
                      <div className="flex items-center justify-center h-full duration-100 text-sm font-semibold">
                        HTML
                      </div>
                    </div>
                  </div>
                  <div className="absolute duration-200 top-10 h-[50px] w-full bg-gradient-to-r from-[#e44f26] to-[#ff872c] blur-3xl"></div>
                </div>
              </div>
              <div>
                <div className="group select-none relative">
                  <div className="z-20 duration-200 relative p-[1px] bg-[#ffffff27] rounded-xl bg-gradient-to-r from-[#1fa3bc] to-[#13c9b7]">
                    <div className="h-[80px] w-full bg-black rounded-t-xl flex items-center justify-center">
                      <img
                        draggable="false"
                        alt="logo"
                        loading="lazy"
                        width={40}
                        height={40}
                        decoding="async"
                        data-nimg={1}
                        style={{ color: "transparent" }}
                        src={tailwind}
                      />
                    </div>
                    <div className="w-[95px] h-[30px] rounded-b-xl">
                      <div className="flex items-center justify-center h-full duration-100 text-sm font-semibold">
                        Tailwind
                      </div>
                    </div>
                  </div>
                  <div className="absolute duration-200 top-10 h-[50px] w-full bg-gradient-to-r from-[#1fa3bc] to-[#13c9b7] blur-3xl"></div>
                </div>
              </div>
              <div>
                <div className="group select-none relative">
                  <div className="z-20 duration-200 relative p-[1px] bg-[#ffffff27] rounded-xl bg-gradient-to-r from-[#1572b6] to-[#33a9dc]">
                    <div className="h-[80px] w-full bg-black rounded-t-xl flex items-center justify-center">
                      <img
                        draggable="false"
                        alt="logo"
                        loading="lazy"
                        width={40}
                        height={40}
                        decoding="async"
                        data-nimg={1}
                        style={{ color: "transparent" }}
                        src={css}
                      />
                    </div>
                    <div className="w-[95px] h-[30px] rounded-b-xl">
                      <div className="flex items-center justify-center h-full duration-100 text-sm font-semibold">
                        Css
                      </div>
                    </div>
                  </div>
                  <div className="absolute duration-200 top-10 h-[50px] w-full bg-gradient-to-r from-[#1572b6] to-[#33a9dc] blur-3xl"></div>
                </div>
              </div>
              <div>
                <div className="group select-none relative">
                  <div className="z-20 duration-200 relative p-[1px] bg-[#ffffff27] rounded-xl bg-gradient-to-r from-[#63975e] to-[#7cc327]">
                    <div className="h-[80px] w-full bg-black rounded-t-xl flex items-center justify-center">
                      <img
                        draggable="false"
                        alt="logo"
                        loading="lazy"
                        width={40}
                        height={40}
                        decoding="async"
                        data-nimg={1}
                        style={{ color: "transparent" }}
                        src={node}
                      />
                    </div>
                    <div className="w-[95px] h-[30px] rounded-b-xl">
                      <div className="flex items-center justify-center h-full duration-100 text-sm font-semibold">
                        NodeJs
                      </div>
                    </div>
                  </div>
                  <div className="absolute duration-200 top-10 h-[50px] w-full bg-gradient-to-r from-[#63975e] to-[#7cc327] blur-3xl"></div>
                </div>
              </div>

              <div>
                <div className="group select-none relative">
                  <div className="z-20 duration-200 relative p-[1px] bg-[#ffffff27] rounded-xl bg-gradient-to-r from-[#00af42] to-[#009546]">
                    <div className="h-[80px] w-full bg-black rounded-t-xl flex items-center justify-center">
                      <img
                        draggable="false"
                        alt="logo"
                        loading="lazy"
                        width={40}
                        height={40}
                        decoding="async"
                        data-nimg={1}
                        style={{ color: "transparent" }}
                        src={mongodb}
                      />
                    </div>
                    <div className="w-[95px] h-[30px] rounded-b-xl">
                      <div className="flex items-center justify-center h-full duration-100 text-sm font-semibold">
                        MongoDB
                      </div>
                    </div>
                  </div>
                  <div className="absolute duration-200 top-10 h-[50px] w-full bg-gradient-to-r from-[#00af42] to-[#009546] blur-3xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 text-[#cccccc] text-2xl sm:text-4xl font-dancing">
          Hosting Platforms
        </div>
        <div className="mt-10 w-full">
          <div className="w-full px-[16px] md:px-[50px] lg:px-[200px] flex justify-center">
            <div className="flex w-fit justify-center flex-wrap gap-4 md:gap-6">
              <div>
                <div className="group select-none relative">
                  <div className="z-20 duration-200 relative p-[1px] bg-[#ffffff27] rounded-xl bg-gradient-to-tr from-[#cbcccc] to-[#797979]">
                    <div className="h-[80px] w-full bg-black rounded-t-xl flex items-center justify-center">
                      <img
                        draggable="false"
                        alt="logo"
                        loading="lazy"
                        width={40}
                        height={40}
                        decoding="async"
                        data-nimg={1}
                        style={{ color: "transparent" }}
                        src={github}
                      />
                    </div>
                    <div className="w-[95px] h-[30px] rounded-b-xl">
                      <div className="flex items-center justify-center h-full duration-100 text-sm  font-semibold">
                        Github
                      </div>
                    </div>
                  </div>
                  <div className="absolute duration-200 top-10 h-[50px] w-full bg-gradient-to-tr from-[#cbcccc] to-[#797979] blur-3xl"></div>
                </div>
              </div>

              <div>
                <div className="group select-none relative">
                  <div className="z-20 duration-200 relative p-[1px] bg-[#ffffff27] rounded-xl bg-gradient-to-tr from-[#34b2ba] to-[#39adbb]">
                    <div className="h-[80px] w-full bg-black rounded-t-xl flex items-center justify-center">
                      <img
                        draggable="false"
                        alt="logo"
                        loading="lazy"
                        width={40}
                        height={40}
                        decoding="async"
                        data-nimg={1}
                        style={{ color: "transparent" }}
                        src={netlify}
                      />
                    </div>
                    <div className="w-[95px] h-[30px] rounded-b-xl">
                      <div className="flex items-center justify-center h-full duration-100 text-sm  font-semibold">
                        Netlify
                      </div>
                    </div>
                  </div>
                  <div className="absolute duration-200 top-10 h-[50px] w-full bg-gradient-to-tr from-[#34b2ba] to-[#39adbb] blur-3xl"></div>
                </div>
              </div>
              <div>
                <div className="group select-none relative">
                  <div className="z-20 duration-200 relative p-[1px] bg-[#ffffff27] rounded-xl bg-gradient-to-tr from-[#cbcccc] to-[#797979]">
                    <div className="h-[80px] w-full bg-black rounded-t-xl flex items-center justify-center">
                      <img
                        draggable="false"
                        alt="logo"
                        loading="lazy"
                        width={40}
                        height={40}
                        decoding="async"
                        data-nimg={1}
                        style={{ color: "transparent" }}
                        src={vercel}
                      />
                    </div>
                    <div className="w-[95px] h-[30px] rounded-b-xl">
                      <div className="flex items-center justify-center h-full duration-100 text-sm  font-semibold">
                        Vercel
                      </div>
                    </div>
                  </div>
                  <div className="absolute duration-200 top-10 h-[50px] w-full bg-gradient-to-tr from-[#cbcccc] to-[#797979] blur-3xl"></div>
                </div>
              </div>

              <div>
                <div className="group select-none relative">
                  <div className="z-20 duration-200 relative p-[1px] bg-[#ffffff27] rounded-xl bg-gradient-to-tr from-[#ffa712] via-[#f6820c] to-[#fcca3f]">
                    <div className="h-[80px] w-full bg-black rounded-t-xl flex items-center justify-center">
                      <img
                        draggable="false"
                        alt="logo"
                        loading="lazy"
                        width={40}
                        height={40}
                        decoding="async"
                        data-nimg={1}
                        style={{ color: "transparent" }}
                        src={firebase}
                      />
                    </div>
                    <div className="w-[95px] h-[30px] rounded-b-xl">
                      <div className="flex items-center justify-center h-full duration-100 text-sm  font-semibold">
                        Firebase
                      </div>
                    </div>
                  </div>
                  <div className="absolute duration-200 top-10 h-[50px] w-full bg-gradient-to-tr from-[#ffa712] via-[#f6820c] to-[#fcca3f] blur-3xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 text-[#cccccc] text-2xl sm:text-4xl font-dancing">
          Tools
        </div>
        <div className="mt-10 w-full">
          <div className="w-full px-[16px] md:px-[50px] lg:px-[200px] flex justify-center">
            <div className="flex w-fit justify-center flex-wrap gap-4 md:gap-6">
              <div>
                <div className="group select-none relative">
                  <div className="z-20 duration-200 relative p-[1px] bg-[#ffffff27] rounded-xl bg-gradient-to-tr from-[#24abf2] to-[#0075b7]">
                    <div className="h-[80px] w-full bg-black rounded-t-xl flex items-center justify-center">
                      <img
                        draggable="false"
                        alt="logo"
                        loading="lazy"
                        width={40}
                        height={40}
                        decoding="async"
                        data-nimg={1}
                        style={{ color: "transparent" }}
                        src={vsc}
                      />
                    </div>
                    <div className="w-[95px] h-[30px] rounded-b-xl">
                      <div className="flex items-center justify-center h-full duration-100 text-sm  font-semibold">
                        Visual Code
                      </div>
                    </div>
                  </div>
                  <div className="absolute duration-200 top-10 h-[50px] w-full bg-gradient-to-tr from-[#24abf2] to-[#0075b7] blur-3xl"></div>
                </div>
              </div>
              <div>
                <div className="group select-none relative">
                  <div className="z-20 duration-200 relative p-[1px] bg-[#ffffff27] rounded-xl bg-gradient-to-tr from-[#f58536] to-[#9d5025]">
                    <div className="h-[80px] w-full bg-black rounded-t-xl flex items-center justify-center">
                      <img
                        draggable="false"
                        alt="logo"
                        loading="lazy"
                        width={40}
                        height={40}
                        decoding="async"
                        data-nimg={1}
                        style={{ color: "transparent" }}
                        src={postman}
                      />
                    </div>
                    <div className="w-[95px] h-[30px] rounded-b-xl">
                      <div className="flex items-center justify-center h-full duration-100 text-sm  font-semibold">
                        Postman
                      </div>
                    </div>
                  </div>
                  <div className="absolute duration-200 top-10 h-[50px] w-full bg-gradient-to-tr from-[#f58536] to-[#9d5025] blur-3xl"></div>
                </div>
              </div>

              <div>
                <div className="group select-none relative">
                  <div className="z-20 duration-200 relative p-[1px] bg-[#ffffff27] rounded-xl bg-gradient-to-tr from-[#7928ca] to-[#ff0080]">
                    <div className="h-[80px] w-full bg-black rounded-t-xl flex items-center justify-center">
                      <img
                        draggable="false"
                        alt="logo"
                        loading="lazy"
                        width={40}
                        height={40}
                        decoding="async"
                        data-nimg={1}
                        style={{ color: "transparent" }}
                        src={figma}
                      />
                    </div>
                    <div className="w-[95px] h-[30px] rounded-b-xl">
                      <div className="flex items-center justify-center h-full duration-100 text-sm  font-semibold">
                        Figma
                      </div>
                    </div>
                  </div>
                  <div className="absolute duration-200 top-10 h-[50px] w-full bg-gradient-to-tr from-[#7928ca] to-[#ff0080] blur-3xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
