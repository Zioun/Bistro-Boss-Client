import React from "react";
import { Parallax, Background } from "react-parallax";

const Cover = ({ image, title, paragraph }) => {
  return (
    <Parallax
      blur={{ min: -50, max: 50 }}
      bgImage={image}
      bgImageAlt="the dog"
      strength={-200}
    >
      <div className="hero h-[500px]">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className=" bg-slate-900 bg-opacity-60 py-10 px-52">
            <h1 className="mb-5 text-5xl font-bold">{title}</h1>
            <p className="mb-5">{paragraph}</p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
