import Image from "next/image";
import Link from "next/link";

const NoiseSensorWorking = () => {
  return (
    <div className="bg-blue-50 px-4 py-10 md:px-8 ">
      <div className="max-w-screen-lx mx-auto md:py-20 md:flex items-center md:gap-x-10">
        <div className="md:pt-0 text-center md:text-left">
          <h1 className="font-semibold mb-4 text-blue-500 lg:text-[40px] lg:leading-tight text-3xl md:text-4xl  ">
            Noise Sensor
          </h1>
          <div className="text-lg">Estimates Environmental Noise Level</div>
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
              <ul className="my-5 mx-3 md:mx-0 text-start space-y-3 list-disc">
                <li>
                  Auto on/off ANC according to the surrounding noise level
                </li>
                <li>
                  Noise Cancellation model which eliminates the background noise
                  for crystal clear calls
                </li>
                <li>
                  Noise sensor is Expected to have around 162K for small model
                </li>
                <li>Currently working on Data Strategy</li>
                <li>Can fit on NDP and Hifi Families</li>
                <li>Early Release is expected by the end of the june.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-screen-lx mx-auto md:py-20 md:flex items-center md:gap-x-10">
        <div className="md:pt-0 text-center md:text-left">
          <h1 className="font-semibold mb-4 text-blue-500 lg:text-[40px] lg:leading-tight text-3xl md:text-4xl  ">
            Deep Noise Suppression
          </h1>
          <div className="text-lg">Clear Calls</div>
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
              <ul className="my-5 mx-3 md:mx-0 text-start space-y-3 list-disc">
                <li>
                  Noise Cancellation model which eliminates the background noise
                  for crystal clear calls
                </li>
                <div>
                  <div>Our DNS Models:</div>
                  <div className="my-2">
                    <p className="text-sm">NDP Model small - 161K Params</p>
                    <p className="text-sm">Hifi Mini Model - 200K Params</p>
                    <p className="text-sm">NDP/Hifi 5 Model - 622K Params</p>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoiseSensorWorking;
