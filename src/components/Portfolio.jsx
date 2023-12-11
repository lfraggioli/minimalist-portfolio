import React from "react";
import portfolio from "./data/portfolio";
import PortfolioItem from "./PortfolioItem";
function Portfolio() {
  return (
    <>
      <div className="w-full flex flex-wrap justify-center">
        <h2 className="text-3xl font-bold mb-5 text-stone-300">
          Main projects
        </h2>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {portfolio.map((item) => (
            <PortfolioItem
              title={item.title}
              imgUrl={item.imgUrl}
              stack={item.stack}
              link={item.link}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Portfolio;
