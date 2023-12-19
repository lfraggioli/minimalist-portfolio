import React from "react";
import nav from "./data/nav";
function Navbar() {
  return (
    <div className="sticky flex flex-wrap p-.5 border-b cursor-pointer border-slate-100/20 bg-slate-900/60 top-0 z-40 w-full backdrop-blur transition-colors duration-500 lg:z-50">
      <div className="flex md:flex-row items-center mx-auto gap-3">
        {nav.map((item) => (
          <div
            key={item.id}
            className="text-base ml-auto font-bold py-4 ease-in duration-75 hover:text-[#D12EFF] hover:-translate-y-0.5 text-stone-300"
          >
            <a href={item.id}>
              <h2>{item.title}</h2>
            </a>
          </div>
        ))}
        <div
          key="#contact"
          className="text-base font-semibold py-4 ease-in duration-75 hover:text-[#F2A81D] hover:-translate-y-0.5 text-stone-300"
        >
          <a href="#contact">
            <h2>contact me</h2>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
