import React from "react";
import timeline from "./data/timeline";
import TimelineItem from "./TimelineItem";

function Timeline() {
  return (
    <>
      <div className="text-center pt-20"> </div>

      <div className="flex flex-column md:flex-row justify-center my-20">
        <div className="w-full md:w-7/12">
          <h2 className="text-2xl font-bold underline underline-offset-8 decoration-4 mb-5 text-stone-900">
            Mi aprendizaje en el desarrollo web
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
    </>
  );
}

export default Timeline;
