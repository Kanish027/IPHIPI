import React from "react";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <div className="bg-blue-50 px-4 py-10 md:px-8">
      <div className="max-w-screen-lx mx-auto md:py-20 md:flex items-center md:gap-x-10">
        <div className="md:pt-0 text-center md:text-left">
          <h1 className="font-semibold mb-4 lg:text-[60px] lg:leading-tight text-3xl md:text-4xl  ">
            AI Mic
          </h1>
          <p className="font-light mb-2 learn_more_text md:max-w-lg">
            AI mic is a low power yet powerful programmable sensor enabling
            device manufacturers to quickly launch futuristic Audio AI features
            cost effectively in all devices.
          </p>
          <Link className="" href="/#contact">
            <button
              type="button"
              className="font-medium text-white bg-blue-500 hover:bg-blue-600 rounded-lg text-sm px-7 py-4 mt-6 mb-2 "
            >
              <span className="know_more_btn">Get AI Mic for free</span>
            </button>
          </Link>
          {/* <div className="my-3">
            <p className="block text-xs-km font-medium my-1">
              <span className="pe-2 text-green-400">
                <i className="fa-solid fa-check"></i>
              </span>
              For individuals and small teams
            </p>
            <p className="block text-xs-km font-medium my-1">
              <span className="pe-2 text-green-400">
                <i className="fa-solid fa-check"></i>
              </span>
              No credit card required
            </p>
          </div> */}
        </div>

        <div className="md:w-1/2 mt-16 md:mt-0">
          <div className="relative h-0 pb-[56.25%]">
            <iframe
              className="absolute inset-0 w-full h-full rounded-md"
              src="https://www.youtube.com/embed/9E8nJroBppc?si=gGuZgq74iyjZvth9"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
