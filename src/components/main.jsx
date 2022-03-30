import React from "react";
import { Link } from "react-router-dom";
import aid from "../img/aid.png";
export default function Main() {
  return (
    <>
      <div className="bg-pinky h-96 md:h-128 w-full flex justify-around  items-center ">
        <button className=" text-white border-2 p-4 rounded-full hover:scale-110 text-sm md:text-base">
          <Link to="/findsuport">FIND SUPPORT</Link>
        </button>
        <img src={aid} alt="logo" className="h-60 w-30 md:h-80 md:w-auto" />
      </div>
      <div className="mt-10 text-lg flex justify-center">
        Breast Cancer Information & Support
      </div>
    </>
  );
}
