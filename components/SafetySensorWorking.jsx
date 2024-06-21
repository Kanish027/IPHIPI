import Image from "next/image";
import Link from "next/link";
import React from "react";

const SafetySensorWorking = () => {
  return (
    <div className="bg-blue-50 px-4 py-10 md:px-8 ">
      <div className="max-w-screen-lx mx-auto md:py-20 md:flex items-center md:gap-x-10">
        <div className="md:pt-0 text-center md:text-left">
          <h1 className="font-semibold mb-4 text-blue-500 lg:text-[40px] lg:leading-tight text-3xl md:text-4xl  ">
            Safety Sensor
          </h1>
          <div className="text-lg">for safety Alerts</div>
          <div className="md:flex justify-between gap-16 mt-12 items-center">
            <div className="">
              <Image
                src="https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_apps_new.svg"
                alt=""
                width={0}
                height={0}
                sizes={"100vw"}
                style={{ height: "100%", width: "100%" }}
              />
            </div>
            <div className="max-w-xl">
              <ul className="my-5 mx-3 md:mx-0 text-start space-y-3">
                <li className="text-center">
                  It detects fire Alarm sound in office, home, caffe or any
                  indoor environments
                </li>
                <li className="text-center">
                  It detects the siren from disaster response vehicles around
                  like Police, Fire and Ambulance.
                </li>
                <li className="text-center">
                  It detects horn sounds from vehicles, alerting pedestrians and
                  others engaged in activities.
                </li>
                <li className="text-center">
                  Detects critical sounds like gunshots or the breaking of
                  glass, plays a crucial role in alerting you about potential
                  dangers in your immediate environment
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-screen-lx mx-auto md:py-20 md:flex items-center md:gap-x-10">
        <div className="md:pt-0 text-center md:text-left">
          <h1 className="font-semibold mb-4 text-blue-500 lg:text-[40px] lg:leading-tight text-3xl md:text-4xl  ">
            Safety Sensor
          </h1>
          <div className="text-lg">Development Strategy</div>
          <div className="md:flex justify-between gap-16 mt-12 items-center">
            <div className="max-w-xl">
              <ul className="my-5 mx-3 md:mx-0 text-start space-y-3 list-square">
                <li>
                  We have develop indigenous tool to precisely mine different
                  types of data of required use case where data miners can mine
                  data efficiently and precisely.
                </li>
                <li>We have already mined around 100 hours of data.</li>
                <li>Safety sensor is expected to have 70K Params</li>
                <li>Can be supported in NDP and Hifi Families.</li>
              </ul>
            </div>
            <div className="">
              <Image
                src="https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_apps_new.svg"
                alt=""
                width={0}
                height={0}
                sizes={"100vw"}
                style={{ height: "100%", width: "100%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SafetySensorWorking;
