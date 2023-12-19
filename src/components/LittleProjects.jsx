import React from "react";
import littleproject from "./data/littleproject";
import ProjectItem from "./ProjectItem";
const LittleProjects = () => {
  return (
    <div>
      <h3 className="text-lg md:text-md text-center mt-8 text-slate-300 mb-2 md:mb-2 font-bold">
        Other little projects & things that I've done{" "}
      </h3>
      <p className="text-sm text-center mt-2 mb-5 text-slate-400 font-normal">
        These are some repositories that I've made for fun. I keep training my
        coding abilities and learning new things this way.
      </p>
      <div className="flex flex-col max-w-full mx-auto md:flex-row items-center justify-around">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2">
          {littleproject.map((item) => (
            <ProjectItem
              name={item.name}
              imgUrl={item.imgUrl}
              stack={item.stack}
              link={item.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LittleProjects;
