import React from "react";

const SectionTitle = ({ hading, subHading }) => {
  return (
    <div className="flex justify-center text-center py-10">
      <div>
        <p className="text-lg">{subHading}</p>
        <h1 className="text-4xl">{hading}</h1>
      </div>
    </div>
  );
};

export default SectionTitle;
