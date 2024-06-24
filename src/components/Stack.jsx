import React from "react";
import { images, favTools } from "./data/stackImages";
function Stack() {
  return (
    <div className="pt-10" id="stack">
      <div className="bg-slate-700/30 p-8 max-w-fit mx-auto mt-10 mb-2 rounded-xl columns-1 justify-center align-middle shadow-md backdrop-blur-xl">
        <div className="px-20">
          <div className="flex items-center gap-2 justify-center flex-col text-center pt-1 text-slate-100">
            <div className="items-center mx-auto columns-1 gap-0 justify-center align-middle">
              <h3 className="text-3xl text-slate-200 font-bold">Tech stack</h3>
            </div>
            <p className="text-sm mt-3">My favourites </p>
            <div className="flex items-center gap-4 justify-center flex-row text-center pt-1 pb-2 text-slate-100">
              {favTools.map((image, index) => (
                <a href={image.link} target="a_blank">
                  <img
                    className="pt-3 mb-3 mx-auto cursor-pointer hover:ease-in duration-150 hover:scale-125"
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
          <div className="text-white justify-center align-middle items-center">
            <p className="text-sm pt-3 border-t-2  border-slate-300/20 mt-2 text-center">
              Other tools I have worked with:
            </p>
            <div className="items-center gap-3 columns-5 justify-center flex-row text-center pt-2 pb-2 text-slate-100">
              {images.map((image, index) => (
                <a href={image.link} target="a_blank">
                  <img
                    className="pt-3 mb-3 mx-auto cursor-pointer hover:ease-in duration-150 hover:scale-110"
                    key={index}
                    src={image.src}
                    alt={image.alt}
                    width="50"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stack;
