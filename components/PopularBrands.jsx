import React from "react";

const data = [
  {
    Feature: "Adaptive ANC",
    Apple: "yes",
    Sony: "yes",
    Bose: "yes",
    Samsung: "yes",
    Boat: "yes",
    TWS: "yes",
  },
  {
    Feature: "Spatial audio ",
    Apple: "yes",
    Sony: "",
    Bose: "",
    Samsung: "yes",
    Boat: "",
    TWS: "",
  },
  {
    Feature: "Clear call",
    Apple: "yes",
    Sony: "yes",
    Bose: "",
    Samsung: "yes",
    Boat: "yes",
    TWS: "yes",
  },
  {
    Feature: "Transparency mode",
    Apple: "yes",
    Sony: "",
    Bose: "",
    Samsung: "",
    Boat: "",
    TWS: "yes",
  },
  {
    Feature: "Conversation awareness",
    Apple: "yes",
    Sony: "",
    Bose: "",
    Samsung: "",
    Boat: "",
    TWS: "yes",
  },
  {
    Feature: "Handsfree",
    Apple: "With siri",
    Sony: "",
    Bose: "",
    Samsung: "",
    Boat: "",
    TWS: "yes",
  },
  {
    Feature: "Customizable EQ",
    Apple: "",
    Sony: "",
    Bose: "yes",
    Samsung: "",
    Boat: "",
    TWS: "",
  },
  {
    Feature: "Name Alert",
    Apple: "",
    Sony: "",
    Bose: "",
    Samsung: "",
    Boat: "",
    TWS: "yes",
  },
  {
    Feature: "Custom wake word",
    Apple: "",
    Sony: "",
    Bose: "",
    Samsung: "",
    Boat: "",
    TWS: "yes",
  },

  {
    Feature: "Safety alert",
    Apple: "",
    Sony: "",
    Bose: "",
    Samsung: "",
    Boat: "",
    TWS: "yes",
  },

  {
    Feature: "Voice Print Secure",
    Apple: "",
    Sony: "",
    Bose: "",
    Samsung: "",
    Boat: "",
    TWS: "yes",
  },
];

const PopularBrands = () => {
  return (
    <div className="max-w-screen-lx mx-auto md:pb-20">
      <div className="text-center md:text-left">
        <h1 className="font-semibold text-blue-500 mb-4 lg:text-[40px] lg:leading-tight text-3xl md:text-4xl">
          Comparison chart of Earbuds features of popular brands with AI Mic
          Enabled Earbuds
        </h1>
        <div className="overflow-x-auto my-5">
          <table className="w-full border text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr className="border">
                <th
                  scope="col"
                  className="px-6 text-sm text-center border py-3"
                >
                  Feature
                </th>
                <th
                  scope="col"
                  className="px-6 text-sm text-center border py-3"
                >
                  Apple (23590)
                </th>
                <th
                  scope="col"
                  className="px-6 text-sm text-center border py-3"
                >
                  Sony (24990)
                </th>
                <th
                  scope="col"
                  className="px-6 text-sm text-center border py-3"
                >
                  Bose (25900)
                </th>
                <th
                  scope="col"
                  className="px-6 text-sm text-center border py-3"
                >
                  Samsung (17999)
                </th>
                <th
                  scope="col"
                  className="px-6 text-sm text-center border py-3"
                >
                  Boat airdopes 601 anc (5999/-)Samsung (17999)
                </th>
                <th
                  scope="col"
                  className="px-6 text-sm text-center border py-3"
                >
                  AI Mic enabled TWS
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0
                      ? "odd:bg-white odd:dark:bg-gray-900"
                      : "even:bg-gray-50 even:dark:bg-gray-800"
                  } text-center border-b dark:border-gray-700`}
                >
                  <td
                    scope="row"
                    className="px-6 py-4 border font-medium whitespace-nowrap dark:text-white"
                  >
                    {item.Feature}
                  </td>
                  <td className="px-6 text-center border py-4">{item.Apple}</td>
                  <td className="px-6 text-center border py-4">{item.Sony}</td>
                  <td className="px-6 text-center border py-4">{item.Bose}</td>
                  <td className="px-6 text-center py-4">{item.Samsung}</td>
                  <td className="px-6 text-center py-4">{item.Boat}</td>
                  <td className="px-6 text-center py-4">{item.TWS}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PopularBrands;
