import Image from "next/image";
import Link from "next/link";
import React from "react";

const SdkAndDevelopers = () => {
  return (
    <div className="use_cases_content_inner flex md:flex-row flex-col justify-between py-8 md:px-12 px-5">
      <div className="content">
        <div className="mb-4 subtitle">SDK and Developers </div>
        <p className="font-light learn_more_text mb-4">
          Effortlessly embed Krisp's features into your product, setting it
          apart in the market by delivering exceptional value to your users.
        </p>
        <ul>
          <li className="font-light mb-2 learn_more_text flex items-start">
            <i className="fa-regular text-blue-500 text-sm pe-2 mt-2 fa-circle-check"></i>
            Smooth integration and embedding
          </li>
          <li className="font-light mb-2 learn_more_text flex items-start">
            <i className="fa-regular text-blue-500 text-sm pe-2 mt-2 fa-circle-check"></i>
            Full API documentation and support
          </li>
          <li className="font-light mb-2 learn_more_text flex items-start">
            <i className="fa-regular text-blue-500 text-sm pe-2 mt-2 fa-circle-check"></i>
            Trusted by leading brands such as Discord, Zoho and RingCentral
          </li>
        </ul>
        <Link className="reviews-link text-blue-500 mt-4" href={"#"}>
          Learn More
        </Link>
      </div>
      <div>
        <Image src={"/img_use_case_sdk.png"} width={432} height={379} />
      </div>
    </div>
  );
};

export default SdkAndDevelopers;
