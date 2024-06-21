import Image from "next/image";
import Link from "next/link";
import React from "react";

const UseCase = () => {
  return (
    <div className="use_cases_content_inner flex md:flex-row flex-col justify-between py-8 md:px-12 px-5">
      <div className="content">
        <div className="mb-4 subtitle">Professional Services</div>
        <p className="font-light learn_more_text mb-4">
          Experience professional consultations with utmost clarity and
          security. Benefit from comprehensive call transcriptions and derive
          actionable insights from every interaction.
        </p>
        <ul>
          <li className="font-light mb-2 learn_more_text flex items-start">
            <i className="fa-regular text-blue-500 text-sm pe-2 mt-2 fa-circle-check"></i>
            Professional and clear consultations
          </li>
          <li className="font-light mb-2 learn_more_text flex items-start">
            <i className="fa-regular text-blue-500 text-sm pe-2 mt-2 fa-circle-check"></i>
            Comprehensive capture of details
          </li>
          <li className="font-light mb-2 learn_more_text flex items-start">
            <i className="fa-regular text-blue-500 text-sm pe-2 mt-2 fa-circle-check"></i>
            Actionable insights from meetings
          </li>
        </ul>
        <Link className="reviews-link text-blue-500 mt-4" href={"#"}>
          Learn More
        </Link>
      </div>
      <div>
        <Image
          src={"/img_use_case_professional.png"}
          width={432}
          height={379}
        />
      </div>
    </div>
  );
};

export default UseCase;
