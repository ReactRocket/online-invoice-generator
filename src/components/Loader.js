import React from "react";
import "./Loader.css"

const Loader = () => {
  return (
    <div className="absolute h-full w-full flex justify-center items-center bg-white z-50">
      <div class="loader"></div>
    </div>
  );
};

export default Loader;
