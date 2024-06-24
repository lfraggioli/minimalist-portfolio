import React from "react";

const ResumeButtonDownload = () => {
  return (
    <div className="justify-start">
      <button className="bg-[#fee46f] hover:bg-gradient-to-r hover:from-[#ffb13b] hover:to-[#ff925f] active:bg-violet-700  text-sm hover:scale-105 duration-300 mt-5 px-2 py-1 rounded-lg">
        <a
          href="https://drive.google.com/file/d/1OTPJbuez4nDHvTl0SU9YB2ZT0el9K1hL/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="text-center font-semibold text-black hover:text-slate-200 transition-colors drop-shadow-md"
        >
          Download resume
        </a>
      </button>
    </div>
  );
};

export default ResumeButtonDownload;
