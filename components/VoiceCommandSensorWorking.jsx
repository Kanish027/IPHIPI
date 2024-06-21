import Image from "next/image";
import Link from "next/link";
import React from "react";

const VoiceCommandSensorWorking = () => {
  return (
    <div className="bg-blue-50 px-4 py-10 md:px-8 ">
      <div className="max-w-screen-lx mx-auto md:py-20 md:flex items-center md:gap-x-10">
        <div className="md:pt-0 text-center md:text-left">
          <h1 className="font-semibold mb-4 text-blue-500 lg:text-[40px] lg:leading-tight text-3xl md:text-4xl  ">
            Speaker Verification & Command Classification
          </h1>
          <ul className="my-5 mx-3 md:mx-0 text-start space-y-3 list-disc">
            <li>
              Registered user will be verified every time a command is processed
            </li>
            <li>
              If Speaker is verified, command is classified for Predefined
              Action.
            </li>
            <li>
              Speaker Verification Model is Expected to have around 250k params.
            </li>
            <li>
              Command Classification Model is Expected to have around 100k
              params.
            </li>
            <li>Can be supported in NDP and Hifi Families</li>
          </ul>
          <h1 className="font-semibold my-10 mb-4 text-blue-500 lg:text-[40px] lg:leading-tight text-3xl md:text-4xl  ">
            Speaker Verification
          </h1>
          <div className="md:flex justify-between gap-16 mt-12 items-center">
            <div className="">
              <Image
                src="https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_apps_new.svg"
                alt=""
                width={408}
                height={244}
              />
            </div>
            <div className="max-w-2xl">
              <h1 className="text-xl text-blue-500 font-medium">
                India Specific ECAPA TDNN
              </h1>
              <ul className="my-5 mx-3 md:mx-0 text-start space-y-3 list-disc">
                <li>
                  ECAPA TDNN Model is Trained on Indian Dataset Achieved EER as
                  low as 1.7%.
                </li>
                <li>
                  Trained on various Indian Languages covering various Accents
                </li>
                <li>
                  The implementation is now live.{" "}
                  <Link className="text-gray-500" href={"#"}>
                    Click here
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoiceCommandSensorWorking;
