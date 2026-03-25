import React from "react";
import Logo from "/logo-bg-removed.png";
import { IoIosLogIn } from "react-icons/io";
import { Link } from "react-router-dom";

const navbar = () => {
  return (
    <nav className="bg-zinc-800 px-10 py-6 flex justify-between items-center">
      <div className="flex gap-2">
        <Link to="/">
          <img
            className="w-16 h-16 hover:w-20 hover:h-20 cursor-pointer"
            src={Logo}
            alt=""
          />
        </Link>
        <h1 className="items-center flex justify-center momo text-xl text-green-400 font-bold hover:text-2xl cursor-pointer">
          <Link to="/">SAMARRA TECH</Link>
        </h1>
      </div>
      <div className="flex justify-between items-center gap-4 uppercase momo">
        <button className="navbar-options">
          <Link to="/">Home</Link>
        </button>
        <button className="navbar-options">
          <Link to="/about">About Us</Link>
        </button>
        <button className="navbar-options">
          <Link to="/services">Our Services</Link>
        </button>
        <button className="navbar-options">
          <Link to="/officer">Officers</Link>
        </button>
        <button className="navbar-options">
          <Link to="/notice">Notice</Link>
        </button>
      </div>
      <div>
        <IoIosLogIn className="w-12 h-10 navbar-options" />
      </div>
    </nav>
  );
};

export default navbar;
