import React from "react";

function Navbar() {
  return (
    <div className="sticky flex flex-wrap p-1 border-b cursor-pointer border-slate-100/10 top-0 z-40 w-full backdrop-blur transition-colors duration-500 lg:z-50">
      <div className="flex md:flex-row items-center mx-auto gap-3">
        <div className="text-base ml-auto font-semibold py-4 ease-in duration-75 hover:text-sky-400 text-stone-300">
          <h2>Main projects</h2>
        </div>
        <div className="text-base ml-auto font-semibold py-4 ease-in duration-75 hover:text-sky-400 text-stone-300">
          <h2>My path</h2>
        </div>
        <div className="text-base ml-auto font-semibold py-4 ease-in duration-75 hover:text-sky-400 text-stone-300">
          <h2>Contact</h2>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
