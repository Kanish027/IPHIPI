"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const BikePlayerDemo = () => {
  const BikeNoiseInput = "/windNoiseInput.wav";
  const BikeNoiseOutput = "/windNoiseOutput.wav";

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [switchOn, setSwitchOn] = useState(false);
  const [now, setNow] = useState(0);
  const [activeAudio, setActiveAudio] = useState("bike");
  const audioRef = useRef(null);
  const [progress, setProgress] = useState(0);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      setCurrentTime(audio.currentTime);
      audio.pause();
    } else {
      audio.currentTime = currentTime;
      audio.play();
    }
    setIsPlaying((prev) => !prev);
  };

  const handleSwitchChange = () => {
    const audio = audioRef.current;

    const currentPlayBackTime = audio.currentTime;

    if (activeAudio === "bike") {
      audio.src = switchOn ? BikeNoiseInput : BikeNoiseOutput;
    }

    audio.onloadedmetadata = () => {
      audio.currentTime = currentPlayBackTime;
      if (isPlaying) {
        audio.play();
      }
    };

    setSwitchOn(!switchOn);
    // setIsPlaying(true);
  };

  useEffect(() => {
    const audio = audioRef.current;

    const updateProgress = () => {
      const progress = (audio.currentTime / audio.duration) * 100;
      setNow(progress);
      setProgress(progress);
    };

    audio.addEventListener("timeupdate", updateProgress);

    audio.addEventListener("ended", () => {
      setIsPlaying(false);
      setCurrentTime(0);
    });

    return () => {
      audio.removeEventListener("ended", () => {
        setIsPlaying(false);
        setCurrentTime(0);
      });
    };
  }, [audioRef]);

  return (
    <div className="player_wrapper bg-white rounded-2xl">
      <div className="player p-10 flex items-center justify-center gap-6">
        <div onClick={() => togglePlayPause()}>
          {isPlaying ? (
            <div className="circle p-6">
              <i className="fa-solid fa-pause text-xl"></i>
            </div>
          ) : (
            <div className="circle p-6">
              <i className="fa-solid fa-play text-xl"></i>
            </div>
          )}
        </div>
        <audio ref={audioRef} src={BikeNoiseInput} />
        <div className="w-full relative overflow-hidden">
          <div className="">
            <div className="demo_progress">
              <Image
                src="https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_progress_sm.svg"
                alt=""
                width={729}
                height={66}
              />
              <div className="playing_progress" style={{ width: `${now}%` }}>
                <Image
                  src="https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_progress_sm_active.svg"
                  alt=""
                  width={729}
                  height={66}
                  data-src="https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_progress_sm_active.svg"
                  data-ll-status="loaded"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className=" mx-12 border-slate-300" />
      <div className="switch_wrapper">
        <div className="flex justify-center gap-6 p-8 items-center">
          <div className="app_demo_text">Without AI Mic</div>
          <div>
            <div className=" flex items-center">
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  value=""
                  className="sr-only peer"
                  checked={switchOn}
                  onChange={handleSwitchChange}
                  // disabled={!isPlaying}
                />
                <div className="relative w-14 h-7 bg-gray-300 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-500"></div>
              </label>
            </div>
          </div>
          <div className="app_demo_text">With AI Mic</div>
        </div>
      </div>
    </div>
  );
};

export default BikePlayerDemo;
