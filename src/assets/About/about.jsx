import React from "react";
import Directors from "./directors.jsx";
import Admin from "./admin.jsx";
import CEO from "./ceo.jsx";

const About = () => {
  return (
    <div className="px-10 py-10">
      <Directors />
      <CEO />
      <Admin />
    </div>
  );
};

export default About;
