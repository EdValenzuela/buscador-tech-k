import React from "react";
import { ReactSVG } from "react-svg";

const Illustrations = ({ source }) => {
  return (
    <div className="hidden md:flex flex-col justify-center items-center md:h-full relative">
      <div className="block p-10">
        <ReactSVG
          wrapper="div"
          className="w-4/6 h-auto m-auto"
          beforeInjection={(svg) => {
            svg.setAttribute("style", "width: 100%");
          }}
          src={source}
          alt="svg_ilustration"
        />
      </div>
    </div>
  );
};

export default Illustrations;
