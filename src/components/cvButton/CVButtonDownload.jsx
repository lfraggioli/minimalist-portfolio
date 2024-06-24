import React from "react";

const CVButtonDownload = () => {
  return (
    <div className="justify-start">
      <button className="bg-[#8E6FFE] hover:bg-gradient-to-r hover:from-[#B93BFF] hover:to-[#9C5FFF] active:bg-violet-700 text-sm hover:scale-105 duration-300 mt-5 px-2 py-1 rounded-lg">
        <a
          href="https://drive.google.com/file/d/14J8gOSGFuMm3C-kUz0sZSDLbDtpWQNvM/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="text-center font-semibold text-slate-200 drop-shadow-md"
        >
          Descargar CV
        </a>
      </button>
    </div>
  );
};

export default CVButtonDownload;
