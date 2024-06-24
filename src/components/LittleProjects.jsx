import React from "react";
import { Carousel } from "primereact/carousel";

import littleproject from "./data/littleproject";
import ProjectItem from "./ProjectItem";
const LittleProjects = () => {
  const template = (littleproject) => {
    return (
      <ProjectItem
        key={littleproject.id}
        name={littleproject.name}
        imgUrl={littleproject.imgUrl}
        stack={littleproject.stack}
        link={littleproject.link}
      />
    );
  };
  return (
    <>
      <div>
        <div>
          <h3 className="text-lg md:text-md text-center mt-8 text-slate-300 mb-2 md:mb-2 font-bold">
            Other little projects & things that I've done{" "}
          </h3>
          <p className="text-sm text-center mt-2 mb-5 text-slate-400 font-normal">
            These are some repositories that I've made for fun. I keep training
            my coding abilities and learning new things this way.
          </p>
        </div>
        <div className="flex flex-col bg-slate-400/20 w-[800px] mx-auto md:flex-row p-3 rounded-lg items-center justify-around">
          <Carousel
            className="w-[800px] p-2"
            value={littleproject}
            numVisible={2}
            numScroll={1}
            itemTemplate={template}
            autoplayInterval={3000}
          />
        </div>
      </div>
    </>
  );
};

export default LittleProjects;
