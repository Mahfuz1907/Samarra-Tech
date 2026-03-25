import React from "react";
import Logo from "/logo.png";

const cover = () => {
  return (
    <div className="flex justify-center mt-20">
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img src={Logo} alt="logo" />
        </figure>
        <div className="card-body flex justify-center items-center">
          <h2 className="card-title text-2xl">SAMARRA TECH</h2>
        </div>
      </div>
    </div>
  );
};

export default cover;
