"use client";
import React, { useState } from "react";
import BPO from "./BPO";
import Enterprise from "./Enterprise";
import UseCase from "./UseCase";
import SalesAndSuccess from "./SalesAndSuccess";
import HybridWork from "./HybridWork";
import SdkAndDevelopers from "./SdkAndDevelopers";
import IndividualAndFreelancer from "./IndividualAndFreelancer";

const UseCases = () => {
  const [tab, setTab] = useState("bpo");

  return (
    <div className="py-32 mx-auto">
      <div className="">
        <h2 className="text-center mb-8 uses-cases-heading">
          Different ways to use IPHIPI
        </h2>
        <div className="use_cases_outer mx-auto container flex">
          <div className="use_cases_nav  px-5 md:px-0">
            <ul className="flex md:flex-col overflow-auto">
              <li
                className={
                  tab === "bpo"
                    ? "bg-blue-500 rounded-lg ul-active-text ul-link cursor-pointer mt-2"
                    : "rounded-lg ul-text text-white ul-link cursor-pointer mt-2 hover:bg-gray-100"
                }
                onClick={() => setTab("bpo")}
              >
                Call Center (BPO)
              </li>
              <li
                className={
                  tab === "enterprise"
                    ? "bg-blue-500 rounded-lg ul-active-text ul-link cursor-pointer mt-2"
                    : " rounded-lg text-white ul-text ul-link cursor-pointer mt-2 hover:bg-gray-100"
                }
                onClick={() => setTab("enterprise")}
              >
                Call Center (Enterprise)
              </li>
              <li
                className={
                  tab === "professionalServices"
                    ? "bg-blue-500 rounded-lg ul-active-text ul-link cursor-pointer mt-2"
                    : " rounded-lg text-white ul-text ul-link cursor-pointer mt-2 hover:bg-gray-100"
                }
                onClick={() => setTab("professionalServices")}
              >
                Professional Services
              </li>
              <li
                className={
                  tab === "salesAndSuccess"
                    ? "bg-blue-500 rounded-lg ul-active-text ul-link cursor-pointer mt-2"
                    : " rounded-lg text-white ul-text ul-link cursor-pointer mt-2 hover:bg-gray-100"
                }
                onClick={() => setTab("salesAndSuccess")}
              >
                Sales and success
              </li>
              <li
                className={
                  tab === "hybridWork"
                    ? "bg-blue-500 rounded-lg ul-active-text ul-link cursor-pointer mt-2"
                    : " rounded-lg text-white ul-text ul-link cursor-pointer mt-2 hover:bg-gray-100"
                }
                onClick={() => setTab("hybridWork")}
              >
                Hybrid Work
              </li>
              <li
                className={
                  tab === "sdkAndDevelopers"
                    ? "bg-blue-500 rounded-lg ul-active-text ul-link cursor-pointer mt-2"
                    : "rounded-lg text-white ul-text ul-link cursor-pointer mt-2 hover:bg-gray-100"
                }
                onClick={() => setTab("sdkAndDevelopers")}
              >
                SDK and Developers
              </li>
              <li
                className={
                  tab === "individualAndFreelancer"
                    ? "bg-blue-500 rounded-lg ul-active-text ul-link cursor-pointer mt-2"
                    : "rounded-lg text-white ul-text ul-link cursor-pointer mt-2 hover:bg-gray-100"
                }
                onClick={() => setTab("individualAndFreelancer")}
              >
                Individuals and Freelancers
              </li>
            </ul>
          </div>
          <div className="use_cases_content rounded-lg shadow-lg">
            {tab === "bpo" && <BPO />}
            {tab === "enterprise" && <Enterprise />}
            {tab === "professionalServices" && <UseCase />}
            {tab === "salesAndSuccess" && <SalesAndSuccess />}
            {tab === "hybridWork" && <HybridWork />}
            {tab === "sdkAndDevelopers" && <SdkAndDevelopers />}
            {tab === "individualAndFreelancer" && <IndividualAndFreelancer />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseCases;
