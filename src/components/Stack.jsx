import React from "react";
import { images } from "./data/stackImages";
function Stack() {
  return (
    <div className="pt-10" id="stack">
      <div className="bg-slate-600/40 p-8 max-w-fit mx-auto mt-10 mb-2 rounded-xl columns-1 justify-center align-middle shadow-md backdrop-blur-xl">
        <div className="px-20">
          <div className="flex items-center gap-2 justify-center flex-col text-center pt-1 text-slate-100">
            <div className="items-center mx-auto columns-1 gap-0 justify-center align-middle">
              <h3 className="text-3xl text-slate-200 font-bold">
                My (current) stack
              </h3>
            </div>
            <p className="text-sm mb-2">
              It'll change with time. Stay tuned for updates!
            </p>
          </div>
          <div className="columns-7 items-center gap-4 justify-center flex-row text-center pt-7 pb-2 text-slate-100">
            {images.map((image, index) => (
              <a href={image.link} target="a_blank">
                <img
                  className="pt-3 mb-3 mx-auto cursor-pointer hover:ease-in duration-75 hover:scale-110"
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stack;
