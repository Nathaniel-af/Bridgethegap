import React from "react";
import { Link } from "react-router-dom";
import donate from "../img/donate.svg";

export default function Dropdown({ isClick }) {
  return (
    <div
      className={
        isClick
          ? "grid grid-rows-4 sticky top-0 z-10 text-center items-center  bg-amber-500 text-white "
          : "hidden"
      }
    >
      <Link to="/About" className="p-4">
        ABOUT BREAST CANCER
      </Link>
      <Link to="/findsuport" className="p-4">
        FIND SUPPORT
      </Link>
      <Link to="/getinvolved" className="p-4">
        GET INVOLVED
      </Link>
      <button className="text-blue-700 p-2 border-blue-700 transition duration-1000 ease-in-out animate-bounce">
        <img className="inline-block" src={donate} alt="doanteicon" /> DONATE
      </button>
    </div>
  );
}
