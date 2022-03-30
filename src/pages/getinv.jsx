import React from "react";
import logo2 from "../img/Group 1.png";
function Getinvolved() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-col">
          <div className="lg:w-4/6 mx-auto">
            <div className="rounded-lg h-64 overflow-hidden">
              <img alt="logo" className=" h-full w-full" src={logo2} />
            </div>
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                    Bridge the Gap
                  </h2>
                  <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <div className="leading-relaxed text-lg mb-4">
                  <p className="text-amber-500">
                    Swift Code of the Organization:
                  </p>
                  Bank: United Bank S.C <br />
                  Country: Ethiopia City: Addis Ababa Branch: Bole Medhanialem{" "}
                  <br />
                  Branch SWIFT Code: UNTDETAA
                  <br />
                  Organization's Name: BRIDGE THE GAP ETHIOPIA
                  <br />
                  Account No. 1181111771338012
                </div>
                <a className="text-indigo-500 inline-flex items-center">
                  Thank you for your support
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Getinvolved;
