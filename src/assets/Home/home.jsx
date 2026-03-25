import React from "react";
import Logo from "/logo-bg-removed.png";

const cover = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <img src={Logo} className="max-w-sm rounded-full" />
        <div>
          <h1 className="text-5xl font-bold momo">SAMARRA TECH (سامراء تك)</h1>
          <p className="py-6 momo text-lg">
            <b>Samarra Tech</b> is the creative fusion of modern technology and
            historical heritage. We believe technology is not only a solution
            but also a carrier of culture. Our vision is to deliver innovations
            that connect the beauty of the past with the possibilities of the
            future, serving both local and global communities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default cover;
