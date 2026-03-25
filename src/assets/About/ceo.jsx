import React from "react";
import Mahfuz from "/5.png";
import Male from "/6.png";
import Female from "/7.png";

const CEO = () => {
  return (
    <div
      id="ceo-div"
      className="flex flex-col justify-center items-center gap-4 mt-20"
    >
      <h1 className="font-black text-2xl">Chief Executive Officer</h1>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure className="px-4 pt-4">
          <img src={Mahfuz} className="rounded-xl h-90 w-full" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">MD. Mahfuzul Alam</h2>
        </div>
      </div>
    </div>
  );
};

export default CEO;
