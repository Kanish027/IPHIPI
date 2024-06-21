"use client";

import ConversationSensorWorking from "./ConversationSensorWorking";
import NameSensorWorking from "./NameSensorWorking";
import NoiseSensorWorking from "./NoiseSensorWorking";
import SafetySensorWorking from "./SafetySensorWorking";
import VoiceCommandSensorWorking from "./VoiceCommandSensorWorking";

const benefit = [
  {
    iframeSrc: "https://www.youtube.com/embed/9E8nJroBppc?si=gGuZgq74iyjZvth9",
    subTitle: "Custom Sensor For Every User",
    title: "Name sensor",
    description:
      "Imagine your friend listening to music and you calling him from behind. Usually they will fail to respond. With Name sensor, your earbuds will recognize your name and will nudge you when someone speaks it.",
    working: <NameSensorWorking />,
  },
  {
    iframeSrc: "https://www.youtube.com/embed/9E8nJroBppc?si=gGuZgq74iyjZvth9",
    subTitle: "Authenticate user for Every Command",
    title: "Voice command & Voice Print Sensor",
    description:
      "Touch based device control are clumsy at best and start misfiring with age. With voice command, one can use wakeup word followed by command. In addition, speaker verification is integrated so that no one else can control it.",
    working: <VoiceCommandSensorWorking />,
  },
  {
    iframeSrc: "https://www.youtube.com/embed/1j-XIDPvE2E?si=5Slb2Mx5Ks5up8xv",
    subTitle: "for safety Alerts",
    title: "Safety Sensor",
    description:
      "Imagine a person cycling or riding a bike with earbuds playing music. Many accidents happen when they fail to hear a horn. With AI Mic, it will automatically alert you of horns by passing them through so that you are aware of your surroundings. Similarly it can pass through gun shot, glass break, ambulance siren, fire alarms so that you can be safe while using your earbuds.",
    working: <SafetySensorWorking />,
  },
  {
    iframeSrc: "https://www.youtube.com/embed/9E8nJroBppc?si=gGuZgq74iyjZvth9",
    subTitle: "Chat with earbuds on",
    title: "Conversation Sensor",
    description:
      "Conversation sensor detects when a you are speaking with someone with earbuds. It will automatically cancel noise and boost speech and play it for you. So that you don’t have to remove your earbuds for speaking with someone. It’s a convenience feature.",
    working: <ConversationSensorWorking />,
  },
  {
    iframeSrc: "https://www.youtube.com/embed/CxuoaIGJGPM?si=2Y3iTWO1QsAYRWmq",
    subTitle: "Detect Noisy Environment Environment Noise Suppression",
    title: "Noise sensor",
    description:
      "Imagine you are in a noisy environment and your earbuds is smart enough to turn on your ANC and turn it off when you are in silent zone. If in a call, it ensures clear calls by reducing wind, traffic, babble, etc.s",
    working: <NoiseSensorWorking />,
  },
];

const Benefits = () => {
  return (
    <div id="" className="">
      <div className="mx-auto py-20">
        <div className="">
          <h1 className="benefits-heading text-center font-bold pb-12">
            AI Mic for TWS & Earbuds
          </h1>
          <div className=" space-y-24 mt-5">
            {benefit.map((item, index) => (
              <div className="space-y-24">
                <div className="p-6">
                  <div
                    className={`md:flex items-center md:px-12 md:gap-x-10 ${
                      index % 2 === 0 ? "md:flex-row-reverse " : ""
                    }`}
                    key={item.subTitle}
                  >
                    <div className="relative w-full md:w-1/2 mb-8 md:mb-0 rounded-md aspect-video">
                      <iframe
                        className="absolute inset-0 w-full h-full rounded-md"
                        src={item.iframeSrc}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                        allowFullScreen
                        referrerPolicy="strict-origin-when-cross-origin"
                      ></iframe>
                    </div>
                    <div className="space-y-4 md:w-1/2">
                      <h4 className="font-semibold text-center text-blue-500 md:text-start benefits-subtitle">
                        {item.title}
                      </h4>
                      <h6 className="font-semibold text-xl text-gray-400 text-center md:text-start">
                        {item.subTitle}
                      </h6>
                      <p className="text-gray-700 benefit_text">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
                <div>{item.working}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
