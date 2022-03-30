import React from "react";
import logo from "../img/logo.png";
import donate from "../img/donate.svg";
import { Link } from "react-router-dom";

export default function Nav({ toggle }) {
  return (
    <nav className="sticky top-0 z-50 flex px-10 pt-3 justify-between items-center bg-white ">
      <Link to="/">
        <img className="h-16 w-16" src={logo} alt="logo" />
      </Link>
      <div className="text-amber-500 space-x-3 hidden md:block">
        <Link to="/About" className=" hover:border-b-2 pb-2">
          ABOUT BREAST CANCER
        </Link>
        <Link to="/findsuport" className=" hover:border-b-2 pb-2">
          FIND SUPPORT
        </Link>
        <Link to="/getinvolved" className=" hover:border-b-2 pb-2">
          GET INVOLVED
        </Link>
        <button className="text-blue-700 border-2 rounded-lg p-2 border-blue-700 transition duration-1000 ease-in-out animate-bounce">
          <img className="inline-block" src={donate} alt="doanteicon" /> DONATE
        </button>
      </div>
      <div className="cursor-pointer md:hidden" onClick={toggle}>
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </nav>
  );
}
