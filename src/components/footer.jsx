import React from "react";
import logo from "../img/logo.png";
export default function Footer() {
  return (
    <footer className="bg-gray-200 shadow-inner pt-4 pb-8 xl:pt-8 mt-5">
      <div className="max-w-screen-lg xl:max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 text-gray-400 ">
        <ul className="text-lg font-light pb-8 flex flex-wrap justify-center">
          <li className="w-1/2 md:w-1/3 lg:w-1/3">
            <div className="text-center">
              <h2 className="text-black text-md uppercase mb-4">
                Head Office Address
              </h2>
              <ul>
                <li className="mb-4 hover:text-gray-800  transition-colors duration-200">
                  House number – 1852,
                </li>
                <li className="mb-4 hover:text-gray-800  transition-colors duration-200">
                  P.O Box 2657, Adama, Ethiopia
                </li>
                <li className="mb-4 hover:text-gray-800  transition-colors duration-200">
                  <p>Phone:</p>
                  <a href="tel:+251974597459">+251974597459</a>
                  <br />
                  <a href="tel:+251913264174">+251913264174</a>
                </li>
              </ul>
            </div>
          </li>
          <li className="w-1/2 md:w-1/3 lg:w-1/3">
            <div className="text-center">
              <h2 className="text-black  text-md uppercase mb-4">
                Founder and Executive Director
              </h2>
              <ul>
                <li className="mb-4 hover:text-gray-800  transition-colors duration-200">
                  Dr Biniyam Tefera Deressa, MD (Executive Director of the NGO)
                </li>
                <li className="mb-4 hover:text-gray-800  transition-colors duration-200">
                  <p>Phone:</p>
                  <a href="tel:+251913264174">+251913264174</a>
                </li>
              </ul>
            </div>
          </li>
          <li className="w-1/2 md:w-1/3 lg:w-1/3">
            <div className="h-40 w-40">
              <img src={logo} alt="" />
            </div>
          </li>
        </ul>
        <div className="pt-8 flex border-t border-gray-200 max-w-xs mx-auto items-center justify-between">
          <a href="#">
            <svg
              width="20"
              height="20"
              fill="currentColor"
              className="text-xl hover:text-gray-800  transition-colors duration-200"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z"></path>
            </svg>
          </a>
          <a href="#">
            <svg
              width="20"
              height="20"
              fill="currentColor"
              className="text-xl hover:text-gray-800 transition-colors duration-200"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1684 408q-67 98-162 167 1 14 1 42 0 130-38 259.5t-115.5 248.5-184.5 210.5-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5t-114-159.5q33 5 61 5 43 0 85-11-112-23-185.5-111.5t-73.5-205.5v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5t371.5 99.5q-8-38-8-74 0-134 94.5-228.5t228.5-94.5q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50z"></path>
            </svg>
          </a>
          <a href="#">
            <svg
              width="20"
              height="20"
              fill="currentColor"
              className="text-xl hover:text-gray-800 transition-colors duration-200"
              viewBox="0 0 216 216"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M108 0C48.353 0 0 48.353 0 108C0 167.647 48.353 216 108 216C167.647 216 216 167.647 216 108C216 48.353 167.647 0 108 0ZM156.657 60L107.96 98.498L57.679 60H156.657ZM161.667 156H52.667V76.259L102.911 114.369C104.258 115.399 106.251 115.914 107.858 115.914C109.503 115.914 110.931 115.374 112.293 114.298L161.667 75.022V156Z" />
            </svg>
          </a>
          <a href="#">
            <svg
              width="20"
              height="20"
              viewBox="0 0 48 48"
              fill="currentColor"
              className="text-xl hover:text-gray-800 transition-colors duration-200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 24C0 37.2548 10.7452 48 24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24ZM19.6 35L20.0083 28.8823L20.008 28.882L31.1369 18.839C31.6253 18.4055 31.0303 18.1941 30.3819 18.5873L16.6473 27.2523L10.7147 25.4007C9.4335 25.0084 9.4243 24.128 11.0023 23.4951L34.1203 14.5809C35.1762 14.1015 36.1953 14.8345 35.7922 16.4505L31.8552 35.0031C31.5803 36.3215 30.7837 36.6368 29.68 36.0278L23.6827 31.5969L20.8 34.4C20.7909 34.4088 20.7819 34.4176 20.7729 34.4264C20.4505 34.7403 20.1837 35 19.6 35Z"
              />
            </svg>
          </a>
          <a href="#"></a>
        </div>
      </div>
    </footer>
  );
}
