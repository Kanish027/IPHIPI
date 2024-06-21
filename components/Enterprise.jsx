import React from "react";
import Image from "next/image";
import Link from "next/link";

const Enterprise = () => {
  return (
    <div className="use_cases_content_inner flex md:flex-row flex-col justify-between py-8 md:px-12 px-5">
      <div className="content">
        <div className="mb-4 subtitle">Call Center (Enterprise) </div>
        <p className="font-light learn_more_text mb-4">
          Krisp offers a set of features including Noise Cancellation, Call
          Transcription and AI Accent Localization allowing call centers to
          easily expand the operations while maintaining happy customers.
        </p>
        <ul>
          <li className="font-light mb-2 learn_more_text flex items-start">
            <i className="fa-regular text-blue-500 text-sm pe-2 mt-2 fa-circle-check"></i>
            Improve CSAT
          </li>
          <li className="font-light mb-2 learn_more_text flex items-start">
            <i className="fa-regular text-blue-500 text-sm pe-2 mt-2 fa-circle-check"></i>
            Imporved AHT and Call Resoultion Time
          </li>
          <li className="font-light mb-2 learn_more_text flex items-start">
            <i className="fa-regular text-blue-500 text-sm pe-2 mt-2 fa-circle-check"></i>
            <div>Improved agent retention and happiness</div>
          </li>
        </ul>
        <Link className="reviews-link text-blue-500 mt-4" href={"#"}>
          Learn More
        </Link>
      </div>
      <div>
        <Image
          alt=""
          src={"/img_use_case_enterprise.png"}
          width={432}
          height={379}
        />
      </div>
    </div>
  );
};

export default Enterprise;
