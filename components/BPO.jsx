import Image from "next/image";
import Link from "next/link";
import React from "react";

const BPO = () => {
  return (
    <div className="use_cases_content_inner flex md:flex-row flex-col justify-between py-8 md:px-12 px-5">
      <div className="content">
        <div className="mb-4 subtitle">Call Center (BPO)</div>
        <p className="font-light learn_more_text mb-4">
          Krisp has teamed up with top BPOs globally to boost Call Center agent
          productivity. Leveraging Noise Cancellation, AI Accent Localization,
          and Call Center Transcription, Krisp streamlines operations efficiency
          and scalability.
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
            Improved agent retention and happiness
          </li>
        </ul>
        <Link className="reviews-link text-blue-500 mt-4" href={"#"}>
          Learn More
        </Link>
      </div>
      <div>
        <Image alt="" src={"/img_use_case_bpo.png"} width={432} height={379} />
      </div>
    </div>
  );
};

export default BPO;
