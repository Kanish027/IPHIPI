import Image from "next/image";
import Link from "next/link";
import React from "react";

const ConversationSensorWorking = () => {
  return (
    <div className="bg-blue-50 px-4 py-10 md:px-8 ">
      <div className="max-w-screen-lx mx-auto md:py-20 md:flex items-center md:gap-x-10">
        <div className="md:pt-0 text-center md:text-left">
          <h1 className="font-semibold mb-4 text-blue-500 lg:text-[40px] lg:leading-tight text-3xl md:text-4xl  ">
            Conversation Sensor
          </h1>
          <div className="text-lg">Chat with earbuds</div>
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
                Detects the conversation and does the following
              </h1>
              <ul className="my-5 mx-3 md:mx-0 text-start space-y-3 list-disc">
                <li>Turn on ANC to reduce surrounding noise</li>
                <li>Turn on speech transparency mode, which enhances speech</li>
                <li>Lowers the music volume </li>
                <li>Conversation Sensor is Expected have around 80K params</li>
                <li>Can be supported in NDP and Hifi Families.</li>
                <li>Currently we are working on data strategy.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConversationSensorWorking;
