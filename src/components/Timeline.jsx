import React from "react";
import timeline from "./data/timeline";
import TimelineItem from "./TimelineItem";

function Timeline() {
  return (
    <div id="path">
      <div className="text-center pt-2 "> </div>
      <div className="flex flex-column md:flex-row justify-center mt-20 mb-16">
        <div className="w-full md:w-7/12 ">
          <h2 className="text-3xl font-bold text-slate-200 subpixel-antialiased mb-5 ">
            IT Education{" "}
          </h2>
          {timeline.map((item) => (
            <TimelineItem
              key={item.id}
              year={item.year}
              title={item.title}
              duration={item.duration}
              stack={item.stack}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Timeline;
