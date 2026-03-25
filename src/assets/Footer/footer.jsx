import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { BsWhatsapp } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { FaYoutube } from "react-icons/fa";

const footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-emerald-300 text-base-content rounded p-10">
      <nav className="grid grid-flow-col gap-4">
        <a className="link link-hover">Home</a>
        <a className="link link-hover">About Us</a>
        <a className="link link-hover">Our Service</a>
        <a className="link link-hover">Officers</a>
        <a className="link link-hover">Notice</a>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a>
            <FaFacebookF className="footer-icon" />
          </a>
          <a>
            <BsWhatsapp className="footer-icon" />
          </a>
          <a>
            <SiGmail className="footer-icon" />
          </a>
          <a>
            <FaYoutube className="footer-icon" />
          </a>
        </div>
      </nav>
      <aside>
        <p className="momo">
          Copyright © {new Date().getFullYear()} - All right reserved by Samarra
          Tech
        </p>
      </aside>
    </footer>
  );
};

export default footer;
