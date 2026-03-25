import React from "react";
import Mahfuz from "/5.png";
import Male from "/6.png";
import Female from "/7.png";

const admin = () => {
  return (
    <div
      id="admin-div"
      className="flex flex-col justify-center items-center gap-4 mt-20"
    >
      <h1 className="font-black text-2xl">BOARD OF ADMINISTRATION</h1>
      <div
        id="admin-card"
        className="grid grid-cols-3 gap-20 justify-center items-center"
      >
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure className="px-4 pt-4">
            <img src={Mahfuz} className="rounded-xl h-90 w-full" />
          </figure>
          <div className="card-body items-center text-center">
            <h2>MD. Mahfuzul Alam</h2>
            <h1 className="card-title">Chief Technical Officer</h1>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure className="px-4 pt-4">
            <img src={Female} className="rounded-xl h-90 w-full" />
          </figure>
          <div className="card-body items-center text-center">
            <h2>MOST. Umme Habiba</h2>
            <h1 className="card-title">Chief Accounting Officer</h1>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure className="px-4 pt-4">
            <img src={Mahfuz} className="rounded-xl h-90 w-full" />
          </figure>
          <div className="card-body items-center text-center">
            <h2>MD. Mahfuzul Alam</h2>
            <h1 className="card-title">Chief Marketing Officer</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default admin;
