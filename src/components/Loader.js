import React from "react";
import "./Loader.css"

const Loader = () => {
  return (
    <div className="fixed h-screen w-screen flex justify-center items-center bg-white z-50">
      <div class="loader"></div>
    </div>
  );
};

export default Loader;
