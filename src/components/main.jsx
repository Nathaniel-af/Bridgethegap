import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import aid from "../img/aid.png";
import breastpic from "../img/breastpic.png";
import breastpic2 from "../img/breastpic2.png";
import breastpic3 from "../img/breastpic3.svg";
export default function Main() {
  // const [image] = useState([aid, breastpic3, breastpic, breastpic2]);
  // const [currentimg, setCurrent] = useState(0);
  // function switchImage() {
  //   if (currentimg < image.length - 1) {
  //     setTimeout(
  //       setCurrent((data) => data + 1),
  //       3000
  //     );
  //   } else {
  //     setCurrent(0);
  //   }
  //   return currentimg;
  // }
  // switchImage();
  return (
    <>
      <div className="bg-pinky h-96 md:h-128 w-full flex justify-around  items-center">
        <button className=" text-white border-2 px-2 py-4 md:p-4  rounded-full hover:scale-110 text-xs md:text-base">
          <Link to="/findsuport">FIND SUPPORT</Link>
        </button>
        <img
          src={aid}
          alt="logo"
          className="h-60 w-30 rounded-lg md:h-auto md:w-auto"
        />
      </div>
      <div className="mt-10 text-lg flex justify-center">
        Breast Cancer Information & Support
      </div>
    </>
  );
}
