import React from "react";

function PortfolioItem({ title, imgUrl, stack, link }) {
  return (
    <div className="mx-2 hover:ease-in-out duration-200 hover:scale-105 bg-slate-300/50 rounded-md overflow-hidden">
      <img
        src={imgUrl}
        alt="portfolio project"
        className="w-full h-36 md:h-36 object-cover cursor-pointer "
      />
      <div className="w-full p-3 ">
        <h3 className="text-lg md:text-2xl text-center mb-2 md:mb-4 font-bold">
          {title}
        </h3>
        <p className="flex flex-wrap mx-auto gap-2 flex-row items-center justify-evenly text-xs md:text-sm">
          {stack.map((item) => (
            <span className="inline-block px-2 py-1 font-semibold bg-slate-300/50  rounded-lg">
              {item}
            </span>
          ))}
        </p>
        <div className="py-2">
          <a href={link}>
            <button className="flex text-[#B4A1FF] hover:font-semibold px-5 justify-start text-base py-1.5">
              code
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default PortfolioItem;
