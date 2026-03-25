import React from "react";
import Mahfuz from "/5.png";
import Male from "/6.png";
import Female from "/7.png";

const directors = () => {
  return (
    <div
      id="directors-div"
      className="flex flex-col justify-center items-center gap-4"
    >
      <h1 className="font-black text-2xl">BOARD OF DIRECTORS</h1>
      <div
        id="direcors-card"
        className="grid grid-cols-3 gap-20 justify-center items-center"
      >
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure className="px-4 pt-4">
            <img src={Mahfuz} className="rounded-xl h-90 w-full" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">MD. Mahfuzul Alam</h2>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure className="px-4 pt-4">
            <img src={Male} className="rounded-xl h-90 w-full" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">MD. Monzurul Alam</h2>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure className="px-4 pt-4">
            <img src={Female} className="rounded-xl h-90 w-full" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">MOST. Fahmida Yesmin</h2>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure className="px-4 pt-4">
            <img src={Female} className="rounded-xl h-90 w-full" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">MOST. Umme Habiba</h2>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure className="px-4 pt-4">
            <img src={Female} className="rounded-xl h-90 w-full" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">MOST. Jannatul Ferdous</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default directors;
