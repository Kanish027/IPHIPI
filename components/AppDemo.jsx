"use client";
import { useState } from "react";
import BikePlayerDemo from "./BikePlayerDemo";
import BabblePlayerDemo from "./BabblePlayerDemo";
import ClickPlayerDemo from "./ClickPlayerDemo";
import BabyPlayerDemo from "./BabyPlayerDemo";
import SirenPlayerDemo from "./SirenPlayerDemo";

const AppDemo = () => {
  const [activeAudio, setActiveAudio] = useState("bike");

  const handlePlayBikeAudio = () => {
    setActiveAudio("bike");
  };

  const handlePlayBabbleAudio = () => {
    setActiveAudio("babble");
  };

  const handlePlaySirenAudio = () => {
    setActiveAudio("siren");
  };

  const handlePlayBabyAudio = () => {
    setActiveAudio("baby");
  };

  const handlePlayClickAudio = () => {
    setActiveAudio("click");
  };

  return (
    <div className="bg-blue-100 px-4 py-10 md:px-8 ">
      <div className="max-w-screen-lx mx-auto md:py-20">
        <h1 className="benefits-heading text-center font-bold pb-8">
          IPHIPI Noise Cancelling app demo
        </h1>
        <div className="demo_outer mx-auto">
          <div className="mb-6">
            <h6 className="text-center benefit_subtitle">
              Play and toggle Krisp on and off
            </h6>
          </div>
          {activeAudio === "bike" && <BikePlayerDemo />}
          {activeAudio === "babble" && <BabblePlayerDemo />}
          {activeAudio === "click" && <ClickPlayerDemo />}
          {activeAudio === "baby" && <BabyPlayerDemo />}
          {activeAudio === "siren" && <SirenPlayerDemo />}
          <div className="list_wrapper mt-12">
            <div className="mb-6 text-center">
              <strong className="app_demo_subtitle">
                Try different noise types
              </strong>
            </div>
            <ul className="flex md:flex-row flex-col gap-y-4 justify-between gap-4 items-center app_demo_audio_list">
              <li
                className={
                  activeAudio === "bike"
                    ? "bg-blue-500 text-white text-center w-full px-8 py-3 rounded-md cursor-pointer"
                    : "bg-gray-50 text-center px-8 py-3 w-full rounded-md cursor-pointer"
                }
                onClick={handlePlayBikeAudio}
              >
                <span className="text-center app_demo_list_text">
                  Wind Voice
                </span>
              </li>
              <li
                className={
                  activeAudio === "babble"
                    ? "bg-blue-500 text-white text-center px-8 py-3 w-full rounded-md cursor-pointer"
                    : "bg-gray-50 text-center px-8 py-3 w-full rounded-md cursor-pointer"
                }
                onClick={handlePlayBabbleAudio}
              >
                <span className="text-center app_demo_list_text">
                  Babble Voice
                </span>
              </li>
              <li
                className={
                  activeAudio === "click"
                    ? "bg-blue-500 text-white text-center px-8 py-3 w-full rounded-md cursor-pointer"
                    : "bg-gray-50 text-center px-8 py-3 w-full rounded-md cursor-pointer"
                }
                onClick={handlePlayClickAudio}
              >
                <span className="text-center app_demo_list_text">
                  Click Voice
                </span>
              </li>
              <li
                className={
                  activeAudio === "baby"
                    ? "bg-blue-500 text-white text-center px-8 py-3 w-full rounded-md cursor-pointer"
                    : "bg-gray-50 text-center px-8 py-3 w-full rounded-md cursor-pointer"
                }
                onClick={handlePlayBabyAudio}
              >
                <span className="text-center app_demo_list_text">
                  Baby Voice
                </span>
              </li>
              <li
                className={
                  activeAudio === "siren"
                    ? "bg-blue-500 text-white text-center px-8 py-3 w-full rounded-md cursor-pointer"
                    : "bg-gray-50 text-center px-8 py-3 w-full rounded-md cursor-pointer"
                }
                onClick={handlePlaySirenAudio}
              >
                <span className="text-center app_demo_list_text">
                  Siren Voice
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDemo;
