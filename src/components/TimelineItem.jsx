import React from "react";

function TimelineItem({ year, title, duration, stack, description }) {
  return (
    <>
      <ol className="flex flex-col  md-flex-row relative border-l-2 border-slate-400">
        <li className="mb-5  ml-4">
          <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border border-white" />
          <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
            <span className="inline-block px-2 py-1 font-semibold text-white bg-stone-900 rounded-md">
              {year}
            </span>
            <h3 className="text-base font-semibold  text-[#9688ff]">{title}</h3>
            <div className="my-1 text-sm font-normal leading-none text-slate-300">
              {duration}
            </div>
          </p>
          <div className="flex row-auto ">
            <div className="flex">
              {stack.map((item, index) => (
                <p
                  key={index}
                  className="my-2 m-auto p-1 text-xs font-normal  text-slate-400"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        </li>
      </ol>
    </>
  );
}

export default TimelineItem;
