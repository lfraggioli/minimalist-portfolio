import React from "react";
import image from "../assets/avatar.jpg";
import CVButtonDownload from "./cvButton/CVButtonDownload";
import ResumeButtonDownload from "./cvButton/ResumeButtonDownload";
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
            Frontend Developer | UX/UI Designer
          </h3>
          <p className="text-sm text-left font-semibold text-gray-300">
            I want to create applications that make people's lives better, with
            an accessible and pleasant interface design. That is my main goal
            when it comes to choosing a new project.
          </p>
          <p className="text-base text-left font-medium pt-1">
            Hope you enjoy what I've been doing so far.
          </p>
          <div className="columns-2 gap-2 mx-auto flex items-start">
            <CVButtonDownload />
            <ResumeButtonDownload />
          </div>
        </div>

        <div className="mx-auto">
          <Avatar />
        </div>
      </div>
    </div>
  );
}

export default Intro;
