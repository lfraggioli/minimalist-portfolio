import React from "react";

function PortfolioItem({ title, imgUrl, stack, link }) {
  return (
    <div className="m-4 border-none hover:ease-in duration-300 hover:scale-105 bg-slate-300 rounded-md overflow-hidden shadow-lg backdrop-blur">
      <img
        src={imgUrl}
        alt="portfolio project"
        className="w-full h-36 md:h-36 object-cover cursor-pointer "
      />
      <div className="w-full p-3">
        <h3 className="text-lg md:text-2xl text-center mb-2 md:mb-4 font-bold">
          {title}
        </h3>
        <p className="flex flex-wrap gap-1 flex-row items-center justify-start text-xs md:text-sm">
          {stack.map((item) => (
            <span className="inline-block px-2 py-.5 font-semibold bg-slate-300 rounded-md">
              {item}
            </span>
          ))}
        </p>
        <div className="py-2">
          <a href={link}>
            <button className="flex text-slate-900 hover:font-bold px-2 justify-start text-sm py-0.5">
              Code
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default PortfolioItem;
