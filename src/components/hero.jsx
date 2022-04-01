import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../img/img1.png";
import img2 from "../img/img2.png";
import img3 from "../img/img3.png";
import AHMC from "../img/AHMC.png";
import AFRICA2030 from "../img/AFRICA2030.png";
import bfo from "../img/bfo.png";
import dear from "../img/dear.png";
import MOH from "../img/MOH.png";
// Import Swiper style
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function Hero() {
  return (
    <div className="sm:flex flex-wrap justify-center items-center text-center gap-8 p-4">
      <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 bg-white mt-6  shadow-lg rounded-lg ">
        <div className="flex-shrink-0">
          <div className="flex items-center mx-auto justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20V20ZM11 15H13V17H11V15ZM13 13.355V14H11V12.5C11 12.2348 11.1054 11.9804 11.2929 11.7929C11.4804 11.6054 11.7348 11.5 12 11.5C12.2841 11.5 12.5623 11.4193 12.8023 11.2673C13.0423 11.1154 13.2343 10.8984 13.3558 10.6416C13.4773 10.3848 13.5234 10.0988 13.4887 9.81684C13.454 9.53489 13.34 9.26858 13.1598 9.04891C12.9797 8.82924 12.7409 8.66523 12.4712 8.57597C12.2015 8.48671 11.912 8.47587 11.6364 8.54471C11.3608 8.61354 11.1104 8.75923 10.9144 8.96482C10.7183 9.1704 10.5847 9.42743 10.529 9.706L8.567 9.313C8.68863 8.70508 8.96951 8.14037 9.38092 7.67659C9.79233 7.2128 10.3195 6.86658 10.9086 6.67332C11.4977 6.48006 12.1275 6.44669 12.7337 6.57661C13.3399 6.70654 13.9007 6.99511 14.3588 7.41282C14.8169 7.83054 15.1559 8.36241 15.3411 8.95406C15.5263 9.54572 15.5511 10.1759 15.4129 10.7803C15.2747 11.3847 14.9785 11.9415 14.5545 12.3939C14.1306 12.8462 13.5941 13.1779 13 13.355V13.355Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
        <h3 className="text-2xl sm:text-xl text-gray-700 font-semibold ">
          Looking For Answers?
        </h3>
        <p className="text-md  text-gray-500 py-4">
          Not knowing is scary. Start your research here and get help along the
          way.
        </p>
        <button className="bg-gray-400 p-4 text-white rounded-md">
          <Link to="/About">ABOUT BREAST CANCER</Link>
        </button>
      </div>
      <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 mt-6 sm:mt-16 md:mt-20 lg:mt-24 bg-white shadow-lg rounded-lg ">
        <div className="flex-shrink-0">
          <div className="flex items-center mx-auto justify-center h-12 w-12 rounded-md bg-amber-500 text-white">
            <svg
              width="40"
              height="40"
              viewBox="0 0 128 128"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M61.4884 47.0112C65.7664 47.0112 69.2344 43.5432 69.2344 39.2653C69.2344 34.9873 65.7664 31.5193 61.4884 31.5193C57.2104 31.5193 53.7424 34.9873 53.7424 39.2653C53.7424 43.5432 57.2104 47.0112 61.4884 47.0112Z"
                fill="#FFFFFFFF"
              />
              <path
                d="M56.4164 53.9543C55.3512 54.1433 54.3865 54.7014 53.6915 55.5306C52.9966 56.3598 52.6158 57.4072 52.6159 58.4891C52.6158 59.0939 52.7348 59.6927 52.9661 60.2514C53.1975 60.8102 53.5366 61.3178 53.9643 61.7454C54.3919 62.173 54.8995 62.5122 55.4583 62.7436C56.017 62.9749 56.6158 63.0939 57.2206 63.0938H57.6769V88.6004H55.2135C54.1686 88.6004 53.1664 89.0156 52.4275 89.7545C51.6886 90.4934 51.2734 91.4956 51.2734 92.5405V92.5405C51.2734 93.5855 51.6886 94.5877 52.4275 95.3266C53.1664 96.0655 54.1686 96.4807 55.2135 96.4807H72.7863C73.8313 96.4807 74.8335 96.0655 75.5724 95.3266C76.3113 94.5877 76.7264 93.5855 76.7264 92.5405V92.5405C76.7264 91.4956 76.3113 90.4934 75.5724 89.7545C74.8335 89.0156 73.8313 88.6004 72.7863 88.6004H70.3498V56.0402C70.3498 55.4526 70.2195 54.8723 69.9684 54.341C69.7173 53.8098 69.3516 53.3408 68.8975 52.9678C68.4435 52.5949 67.9124 52.3272 67.3425 52.184C66.7726 52.0409 66.1781 52.0258 65.6017 52.1399C61.6262 52.927 56.5741 53.9266 56.4164 53.9543Z"
                fill="#FFFFFFFF"
              />
            </svg>
          </div>
        </div>
        <h3 className="text-2xl sm:text-xl text-gray-700 font-semibold ">
          Get Help Now
        </h3>
        <p className="text-md text-gray-500  py-4">
          Everyone should have access to diagnostic services.
        </p>
        <button className="bg-gray-400 p-4 text-white rounded-md">
          <Link to="/findsuport">GET SUPPORT</Link>
        </button>
      </div>
      <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 mt-6  px-4 py-4 bg-white shadow-lg rounded-lg ">
        <div className="flex-shrink-0">
          <div className="flex items-center mx-auto justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
            <svg
              width="20"
              height="20"
              fill="currentColor"
              className="h-6 w-6"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
            </svg>
          </div>
        </div>
        <h3 className="text-2xl sm:text-xl text-gray-700 font-semibold  py-4">
          Support The Cause
        </h3>
        <p className="text-md  text-gray-500  py-4">
          We need your help. From donations to volunteering, everyone can make
          an impact
        </p>
        <button className="bg-gray-400 p-4 text-white rounded-md">
          <Link to="/getinvolved">GET INVOLVED</Link>
        </button>
      </div>
      <Swiper
        slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="h-full mt-5 bg-gray-100"
      >
        <SwiperSlide className="pb-10">
          <img className="mx-auto" src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="mx-auto" src={img2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="mx-auto" src={img3} alt="" />
        </SwiperSlide>
      </Swiper>
      <div className="flex flex-wrap justify-around text-gray-500 p-5 mt-5">
        <div className="border-2 shadow-lg  md:w-1/3 rounded-xl p-10 mt-2 text-center flex flex-col justify-center">
          <p className="text-blue-700">VISION</p>
          See women, children, and youths in Ethiopia have access to better
          opportunities.
        </div>
        <div className="border-2 shadow-lg  md:w-1/3 rounded-xl p-10 mt-2 text-center flex flex-col justify-center">
          <p className="text-blue-700">MISSION</p>
          To contribute towards the improvement of public health, and the social
          and economic development of our country; to initiate community based,
          women’s oriented and value adding interventions in the areas of
          health, education, women empowerment & youth development.
        </div>
        <div className="border-2 shadow-lg  md:w-1/2 rounded-xl p-10 mt-4 text-center flex flex-col justify-center">
          <p className="text-blue-700">VALUES</p>
          We work together in harmony regardless of differences in ethnicity,
          culture, language, religion, and political views. We value diversity
          and respect the perspectives of the members of the community we serve,
          as well as those of our partners and donors. We are sensitive to the
          existing gaps in our community.We strive with enthusiasm, desire and
          commitment to fill the gaps in the community.We always see hope, even
          in times of uncertainty. We keep our promises to partners, donors, and
          participants. We use all the resources available to us for the
          betterment of the community.
        </div>
      </div>
      <div>
        <p>OUR PARTNERS</p>
        <div className="flex flex-row flex-wrap h-50 md:h-28 my-5 md:my-10 justify-center">
          <img
            className="mx-10 h-20 md:h-28 "
            src={AFRICA2030}
            alt="afica2030"
          />
          <img
            className="mx-5 md:mx-10 mb-5 h-20 md:h-28 "
            src={AHMC}
            alt="ahmc"
          />
          <img
            className="mx-5 md:mx-10 mb-5 h-20 md:h-28 "
            src={bfo}
            alt="bfo"
          />
          <img
            className="mx-5 md:mx-10 mb-5 h-20 md:h-28 "
            src={dear}
            alt="dear"
          />
          <img
            className="mx-5 md:mx-10 mb-5 h-20 md:h-28 "
            src={MOH}
            alt="MOH"
          />
        </div>
      </div>
    </div>
  );
}
