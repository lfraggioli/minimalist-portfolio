import React from "react";
import { images } from "./data/stackImages";
function Stack() {
  return (
    <div className="bg-gray-600/40 p-10 max-w-fit mx-auto my-10 rounded-xl columns-1 justify-center align-middle shadow-md backdrop-blur-xl">
      <div className="px-20">
        <div className="flex items-center gap-2 justify-center flex-col text-center pt-1 text-slate-100">
          <h3 className="text-3xl font-semibold">My (current) stack</h3>
          <p className="text-sm mb-2">
            It'll change with time. Stay tuned for updates!
          </p>
        </div>
        <div className="columns-7 items-center gap-4 justify-center flex-row text-center pt-7 pb-2 text-slate-100">
          {images.map((image, index) => (
            <img
              className="mt-3 mx-0"
              key={index}
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Stack;
