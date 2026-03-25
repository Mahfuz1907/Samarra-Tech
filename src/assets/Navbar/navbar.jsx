import React from "react";
import Logo from "/logo-bg-removed.png";
import { IoIosLogIn } from "react-icons/io";

const navbar = () => {
  return (
    <div className="bg-white px-10 py-6 flex justify-between items-center">
      <div className="flex gap-2">
        <img className="w-16 h-16" src={Logo} alt="" />
        <h1 className="items-center flex justify-center momo text-xl text-green-400 font-bold">
          SAMARRA TECH
        </h1>
      </div>
      <div className="flex justify-between items-center gap-4 uppercase momo">
        <h1 className="navbar-options">Home</h1>
        <h1 className="navbar-options">About Us</h1>
        <h1 className="navbar-options">Our Services</h1>
        <h1 className="navbar-options">Officers</h1>
        <h1 className="navbar-options">Notice</h1>
      </div>
      <div>
        <IoIosLogIn className="w-12 h-10 cursor-pointer text-green-400" />
      </div>
    </div>
  );
};

export default navbar;
