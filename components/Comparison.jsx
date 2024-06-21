"use client";
import React, { useState, useEffect } from "react";

const Comparison = () => {
  const BabbleNoiseInput = "/babbleInput.wav";
  const BabbleNoiseOutput = "/babbleOutput.wav";

  const Input1Audio = "/babbleInput.wav";
  const Input2Audio = "/babbleInput.wav";
  const Input4Audio = "/babbleInput.wav";
  const Input5Audio = "/babbleInput.wav";

  const Output1Audio = "/babbleOutput.wav";
  const Output2Audio = "/babbleOutput.wav";
  const Output4Audio = "/babbleOutput.wav";
  const Output5Audio = "/babbleOutput.wav";

  const [isInput3Playing, setIsInput3Playing] = useState(false);
  const [isOutput3Playing, setIsOutput3playing] = useState(false);

  const [isInput2Playing, setIsInput2Playing] = useState(false);
  const [isOutput2Playing, setIsOutput2playing] = useState(false);

  const [isInput1Playing, setIsInput1Playing] = useState(false);
  const [isOutput1Playing, setIsOutput1playing] = useState(false);

  const [isInput5Playing, setIsInput5Playing] = useState(false);
  const [isOutput5Playing, setIsOutput5playing] = useState(false);

  const [isInput4Playing, setIsInput4Playing] = useState(false);
  const [isOutput4Playing, setIsOutput4playing] = useState(false);

  const [input3Audio, setInput3Audio] = useState(null);
  const [output3Audio, setOutput3Audio] = useState(null);

  const [input1Audio, setInput1Audio] = useState(null);
  const [output1Audio, setOutput1Audio] = useState(null);

  const [input2Audio, setInput2Audio] = useState(null);
  const [output2Audio, setOutput2Audio] = useState(null);

  const [input4Audio, setInput4Audio] = useState(null);
  const [output4Audio, setOutput4Audio] = useState(null);

  const [input5Audio, setInput5Audio] = useState(null);
  const [output5Audio, setOutput5Audio] = useState(null);

  useEffect(() => {
    const inputAudio = new Audio(BabbleNoiseInput);
    const outputAudio = new Audio(BabbleNoiseOutput);

    const inputAudio1 = new Audio(Input1Audio);
    const outputAudio1 = new Audio(Output1Audio);

    const inputAudio2 = new Audio(Input2Audio);
    const outputAudio2 = new Audio(Output2Audio);

    const inputAudio4 = new Audio(Input4Audio);
    const outputAudio4 = new Audio(Output4Audio);

    const inputAudio5 = new Audio(Input5Audio);
    const outputAudio5 = new Audio(Output5Audio);

    inputAudio.addEventListener("ended", () => {
      setIsInput3Playing(false);
    });

    inputAudio1.addEventListener("ended", () => {
      setIsInput1Playing(false);
    });

    inputAudio2.addEventListener("ended", () => {
      setIsInput2Playing(false);
    });

    inputAudio4.addEventListener("ended", () => {
      setIsInput4Playing(false);
    });

    inputAudio5.addEventListener("ended", () => {
      setIsInput5Playing(false);
    });

    outputAudio.addEventListener("ended", () => {
      setIsOutput3playing(false);
    });

    outputAudio1.addEventListener("ended", () => {
      setIsOutput1playing(false);
    });

    outputAudio2.addEventListener("ended", () => {
      setIsOutput2playing(false);
    });

    outputAudio4.addEventListener("ended", () => {
      setIsOutput4playing(false);
    });

    outputAudio5.addEventListener("ended", () => {
      setIsOutput5playing(false);
    });

    setInput3Audio(inputAudio);
    setOutput3Audio(outputAudio);

    setInput1Audio(inputAudio1);
    setOutput1Audio(outputAudio1);

    setInput2Audio(inputAudio2);
    setOutput2Audio(outputAudio2);

    setInput4Audio(inputAudio4);
    setOutput4Audio(outputAudio4);

    setInput5Audio(inputAudio5);
    setOutput5Audio(outputAudio5);

    return () => {
      inputAudio.removeEventListener("ended", () => {
        setIsInput3Playing(false);
      });
      outputAudio.removeEventListener("ended", () => {
        setIsOutput3playing(false);
      });

      inputAudio1.removeEventListener("ended", () => {
        setIsInput1Playing(false);
      });
      outputAudio1.removeEventListener("ended", () => {
        setIsOutput1playing(false);
      });

      inputAudio2.removeEventListener("ended", () => {
        setIsInput2Playing(false);
      });
      outputAudio2.removeEventListener("ended", () => {
        setIsOutput2playing(false);
      });

      inputAudio4.removeEventListener("ended", () => {
        setIsInput4Playing(false);
      });
      outputAudio4.removeEventListener("ended", () => {
        setIsOutput4playing(false);
      });

      inputAudio5.removeEventListener("ended", () => {
        setIsInput5Playing(false);
      });
      outputAudio5.removeEventListener("ended", () => {
        setIsOutput5playing(false);
      });
    };
  }, []);

  // Play Input 1 Audio
  const handlePlayInput1 = () => {
    if (isInput1Playing) {
      input1Audio.pause();
      setIsInput1Playing(false);
      if (isOutput1Playing) {
        output1Audio.pause();
        setIsOutput1playing(false);
      }
    } else {
      pauseAllAudiosExcept(input1Audio);
      input1Audio.play();
      setIsInput1Playing(true);
      if (isOutput1Playing) {
        output1Audio.pause();
        setIsOutput1playing(false);
      }
    }
  };

  // Play Output 1 Audio
  const handlePlayOutput1 = () => {
    if (isOutput1Playing) {
      output1Audio.pause();
      setIsOutput1playing(false);
      if (isInput1Playing) {
        input1Audio.pause();
        setIsInput1Playing(false);
      }
    } else {
      pauseAllAudiosExcept(output1Audio);
      output1Audio.play();
      setIsOutput1playing(true);
      if (isInput1Playing) {
        input1Audio.pause();
        setIsInput1Playing(false);
      }
    }
  };

  // Play Input 2 Audio
  const handlePlayInput2 = () => {
    if (isInput2Playing) {
      input2Audio.pause();
      setIsInput2Playing(false);
      if (isOutput2Playing) {
        output2Audio.pause();
        setIsOutput2playing(false);
      }
    } else {
      pauseAllAudiosExcept(input2Audio);
      input2Audio.play();
      setIsInput2Playing(true);
      if (isOutput2Playing) {
        output2Audio.pause();
        setIsOutput2playing(false);
      }
    }
  };

  // Play Output 2 Audio
  const handlePlayOutput2 = () => {
    if (isOutput2Playing) {
      output2Audio.pause();
      setIsOutput2playing(false);
      if (isInput2Playing) {
        input2Audio.pause();
        setIsInput2Playing(false);
      }
    } else {
      pauseAllAudiosExcept(output2Audio);
      output2Audio.play();
      setIsOutput2playing(true);
      if (isInput2Playing) {
        input2Audio.pause();
        setIsInput2Playing(false);
      }
    }
  };

  // Play Input 3 Audio
  const handlePlayInput3 = () => {
    if (isInput3Playing) {
      input3Audio.pause();
      setIsInput3Playing(false);
      if (isOutput3Playing) {
        output3Audio.pause();
        setIsOutput3playing(false);
      }
    } else {
      pauseAllAudiosExcept(input3Audio);
      input3Audio.play();
      setIsInput3Playing(true);
      if (isOutput3Playing) {
        output3Audio.pause();
        setIsOutput3playing(false);
      }
    }
  };

  // Play Output 3 Audio
  const handlePlayOutput3 = () => {
    if (isOutput3Playing) {
      output3Audio.pause();
      setIsOutput3playing(false);
      if (isInput3Playing) {
        input3Audio.pause();
        setIsInput3Playing(false);
      }
    } else {
      pauseAllAudiosExcept(output3Audio);
      output3Audio.play();
      setIsOutput3playing(true);
      if (isInput3Playing) {
        input3Audio.pause();
        setIsInput3Playing(false);
      }
    }
  };

  // Play Input 4 Audio
  const handlePlayInput4 = () => {
    if (isInput4Playing) {
      input4Audio.pause();
      setIsInput4Playing(false);
      if (isOutput4Playing) {
        output4Audio.pause();
        setIsOutput4playing(false);
      }
    } else {
      pauseAllAudiosExcept(input4Audio);
      input4Audio.play();
      setIsInput4Playing(true);
      if (isOutput4Playing) {
        output4Audio.pause();
        setIsOutput4playing(false);
      }
    }
  };

  // Play Output 4 Audio
  const handlePlayOutput4 = () => {
    if (isOutput4Playing) {
      output4Audio.pause();
      setIsOutput4playing(false);
      if (isInput4Playing) {
        input4Audio.pause();
        setIsInput4Playing(false);
      }
    } else {
      pauseAllAudiosExcept(output4Audio);
      output4Audio.play();
      setIsOutput4playing(true);
      if (isInput4Playing) {
        input4Audio.pause();
        setIsInput4Playing(false);
      }
    }
  };

  // Play Input 5 Audio
  const handlePlayInput5 = () => {
    if (isInput5Playing) {
      input5Audio.pause();
      setIsInput5Playing(false);
      if (isOutput5Playing) {
        output5Audio.pause();
        setIsOutput5playing(false);
      }
    } else {
      pauseAllAudiosExcept(input5Audio);
      input5Audio.play();
      setIsInput5Playing(true);
      if (isOutput5Playing) {
        output5Audio.pause();
        setIsOutput5playing(false);
      }
    }
  };

  // Play Output 5 Audio
  const handlePlayOutput5 = () => {
    if (isOutput5Playing) {
      output5Audio.pause();
      setIsOutput5playing(false);
      if (isInput5Playing) {
        input5Audio.pause();
        setIsInput5Playing(false);
      }
    } else {
      pauseAllAudiosExcept(output5Audio);
      output5Audio.play();
      setIsOutput5playing(true);
      if (isInput5Playing) {
        input5Audio.pause();
        setIsInput5Playing(false);
      }
    }
  };

  // Function to pause all audios except the current one
  const pauseAllAudiosExcept = (currentAudio) => {
    const allAudios = [
      input1Audio,
      input2Audio,
      input3Audio,
      input4Audio,
      input5Audio,
      output1Audio,
      output2Audio,
      output3Audio,
      output4Audio,
      output5Audio,
    ];

    allAudios.forEach((audio) => {
      if (audio !== currentAudio && audio !== null && !audio.paused) {
        audio.pause();
        // Reset playing state for the paused audio
        switch (audio) {
          case input1Audio:
            setIsInput1Playing(false);
            break;
          case input2Audio:
            setIsInput2Playing(false);
            break;
          case input3Audio:
            setIsInput3Playing(false);
            break;
          case input4Audio:
            setIsInput4Playing(false);
            break;
          case input5Audio:
            setIsInput5Playing(false);
            break;
          case output1Audio:
            setIsOutput1playing(false);
            break;
          case output2Audio:
            setIsOutput2playing(false);
            break;
          case output3Audio:
            setIsOutput3playing(false);
            break;
          case output4Audio:
            setIsOutput4playing(false);
            break;
          case output5Audio:
            setIsOutput5playing(false);
            break;
          default:
            break;
        }
      }
    });
  };

  return (
    <div>
      <div className="max-w-screen-lx mx-auto md:pb-20">
        <div className="text-center md:text-left">
          <h1 className="font-semibold text-blue-500 mb-10 lg:text-[40px] lg:leading-tight text-3xl md:text-4xl">
            Comparison with Competitors in Indian Traffic noise
          </h1>
          <div className="overflow-x-auto my-5">
            <table className="w-full border text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr className="border">
                  <th
                    scope="col"
                    className="w-1/3 px-6 text-sm text-center border py-3"
                  >
                    Competitors vs Ours
                  </th>
                  <th
                    scope="col"
                    className="w-1/3 px-6 text-sm text-center border py-3"
                  >
                    Input Indian Traffic Noise
                  </th>
                  <th
                    scope="col"
                    className="w-1/3 px-6 text-sm text-center border py-3"
                  >
                    Output
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="odd:bg-white odd:dark:bg-gray-900 text-center even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  <td
                    scope="row"
                    className="w-1/3 px-6 py-4 border font-medium whitespace-nowrap dark:text-white"
                  >
                    Oppo AI 2mic NS
                  </td>
                  <td className="w-1/3 px-6 text-center border py-4">
                    <div className="flex justify-center">
                      <div
                        onClick={handlePlayInput3}
                        className="bg-gray-300 p-2 rounded-full cursor-pointer"
                      >
                        {isInput3Playing ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M15.75 5.25v13.5m-7.5-13.5v13.5"
                            />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
                            />
                          </svg>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="w-1/3 px-6 text-center border py-4">
                    <div className="flex justify-center">
                      <div
                        onClick={handlePlayOutput3}
                        className="bg-gray-300 p-2 rounded-full cursor-pointer"
                      >
                        {isOutput3Playing ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M15.75 5.25v13.5m-7.5-13.5v13.5"
                            />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
                            />
                          </svg>
                        )}
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="odd:bg-white odd:dark:bg-gray-900 text-center even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  <td
                    scope="row"
                    className="w-1/3 px-6 py-4 border font-medium whitespace-nowrap dark:text-white"
                  >
                    Apple Airpods Gen3
                  </td>
                  <td className="w-1/3 px-6 text-center border py-4">
                    <div className="flex justify-center">
                      <div
                        onClick={handlePlayInput1}
                        className="bg-gray-300 p-2 rounded-full cursor-pointer"
                      >
                        {isInput1Playing ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M15.75 5.25v13.5m-7.5-13.5v13.5"
                            />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
                            />
                          </svg>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="w-1/3 px-6 text-center border py-4">
                    <div className="flex justify-center">
                      <div
                        onClick={handlePlayOutput1}
                        className="bg-gray-300 p-2 rounded-full cursor-pointer"
                      >
                        {isOutput1Playing ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M15.75 5.25v13.5m-7.5-13.5v13.5"
                            />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
                            />
                          </svg>
                        )}
                      </div>
                      <div></div>
                    </div>
                  </td>
                </tr>
                <tr className="odd:bg-white odd:dark:bg-gray-900 text-center even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  <td
                    scope="row"
                    className="w-1/3 px-6 py-4 border font-medium whitespace-nowrap dark:text-white"
                  >
                    OnePlus Buds Pro
                  </td>
                  <td className="w-1/3 px-6 text-center border py-4">
                    <div className="flex justify-center">
                      <div
                        onClick={handlePlayInput2}
                        className="bg-gray-300 p-2 rounded-full cursor-pointer"
                      >
                        {isInput2Playing ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M15.75 5.25v13.5m-7.5-13.5v13.5"
                            />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
                            />
                          </svg>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="w-1/3 px-6 text-center border py-4">
                    <div className="flex justify-center">
                      <div
                        onClick={handlePlayOutput2}
                        className="bg-gray-300 p-2 rounded-full cursor-pointer"
                      >
                        {isOutput2Playing ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M15.75 5.25v13.5m-7.5-13.5v13.5"
                            />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
                            />
                          </svg>
                        )}
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="odd:bg-white odd:dark:bg-gray-900 text-center even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  <td
                    scope="row"
                    className="w-1/3 px-6 py-4 border font-medium whitespace-nowrap dark:text-white"
                  >
                    Noise Quad Mic ENC
                  </td>
                  <td className="w-1/3 px-6 text-center border py-4">
                    <div className="flex justify-center">
                      <div
                        onClick={handlePlayInput4}
                        className="bg-gray-300 p-2 rounded-full cursor-pointer"
                      >
                        {isInput4Playing ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M15.75 5.25v13.5m-7.5-13.5v13.5"
                            />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
                            />
                          </svg>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="w-1/3 px-6 text-center border py-4">
                    <div className="flex justify-center">
                      <div></div>
                      <div
                        onClick={handlePlayOutput4}
                        className="bg-gray-300 p-2 rounded-full cursor-pointer"
                      >
                        {isOutput4Playing ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M15.75 5.25v13.5m-7.5-13.5v13.5"
                            />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
                            />
                          </svg>
                        )}
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="odd:bg-white odd:dark:bg-gray-900 text-center even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  <td
                    scope="row"
                    className="w-1/3 px-6 py-4 border font-medium whitespace-nowrap dark:text-white"
                  >
                    Our Solution
                  </td>
                  <td className="w-1/3 px-6 text-center border py-4">
                    <div className="flex justify-center">
                      <div
                        onClick={handlePlayInput5}
                        className="bg-gray-300 p-2 rounded-full cursor-pointer"
                      >
                        {isInput5Playing ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M15.75 5.25v13.5m-7.5-13.5v13.5"
                            />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
                            />
                          </svg>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="w-1/3 px-6 text-center border py-4">
                    <div className="flex justify-center">
                      <div
                        onClick={handlePlayOutput5}
                        className="bg-gray-300 p-2 rounded-full cursor-pointer"
                      >
                        {isOutput5Playing ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M15.75 5.25v13.5m-7.5-13.5v13.5"
                            />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
                            />
                          </svg>
                        )}
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comparison;
