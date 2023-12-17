import React from "react";
import image from "../assets/avatar.jpg";
function Avatar() {
  return (
    <img
      src={image}
      alt="Avatar"
      className="h-96 rounded-br-3xl rounded-se-3xl backdrop-blur-lg shadow-sm"
    />
  );
}
function Intro() {
  return (
    <div id="home">
      <div className="flex columns-2 gap-0 items-start justify-center pt-16 pb-5 text-slate-100">
        <div className="text-center max-w-xl ml-auto">
          <h1 className="text-6xl md:text-7xl mb-1 md:mb-5 pb-3 text-left font-black ">
            Hi, I'm Lucas Fraggioli
          </h1>
          <h3 className="text-base text-left md:text-2xl mb-3 font-semibold text-[#9568ff] ">
            Full-Stack Developer / Web Artisan
          </h3>
          <p className="text-sm text-left pt-3 font-normal text-gray-300">
            I took my first steps in programming by delving into more
            challenging languages such as JAVA and C++, laying the groundwork
            for a solid foundation in my coding journey.
          </p>
          <p className="text-sm text-left font-normal text-gray-300">
            I'm building my version of the world crafted with code, where each
            line creates a piece of the digital tapestry.
          </p>
          <p className="text-base text-left font-medium pt-1">
            Hope you enjoy what I've been doing so far.
          </p>
        </div>

        <div className="mx-auto">
          <Avatar />
        </div>
      </div>
    </div>
  );
}

export default Intro;
