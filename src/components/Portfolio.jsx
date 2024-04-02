import React from "react";
import portfolio from "./data/portfolio";
import PortfolioItem from "./PortfolioItem";
function Portfolio() {
  return (
    <div className="w-full pt-15" id="projects">
      <div className="w-full flex pt-20 flex-wrap justify-center">
        <h2 className="text-3xl font-bold mb-5 text-stone-300">
          Main projects
        </h2>
      </div>
      <div className="flex flex-col max-w-full mx-auto md:flex-row items-center justify-around">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2">
          {portfolio.map((item) => (
            <PortfolioItem
              title={item.title}
              imgUrl={item.imgUrl}
              stack={item.stack}
              link={item.link}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
