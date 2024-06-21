import Image from "next/image";
import Link from "next/link";
import React from "react";

const IndividualAndFreelancer = () => {
  return (
    <div className="use_cases_content_inner flex md:flex-row flex-col justify-between py-8 md:px-12 px-5">
      <div className="content">
        <div className="mb-4 subtitle">Individual and Freelancers </div>
        <p className="font-light learn_more_text mb-4">
          Professional calls from any location. Focus on discussions without
          missing details. Review key points efficiently.
        </p>
        <ul>
          <li className="font-light mb-2 learn_more_text flex items-start">
            <i className="fa-regular text-blue-500 text-sm pe-2 mt-2 fa-circle-check"></i>
            Distraction-free calls
          </li>
          <li className="font-light mb-2 learn_more_text flex items-start">
            <i className="fa-regular text-blue-500 text-sm pe-2 mt-2 fa-circle-check"></i>
            Complete capture of discussions
          </li>
          <li className="font-light mb-2 learn_more_text flex items-start">
            <i className="fa-regular text-blue-500 text-sm pe-2 mt-2 fa-circle-check"></i>
            Quick review of key points and summary
          </li>
        </ul>
        <Link className="reviews-link text-blue-500 mt-4" href={"#"}>
          Learn More
        </Link>
      </div>
      <div>
        <Image
          alt=""
          src={"/img_use_case_freelancer.png"}
          width={432}
          height={379}
        />
      </div>
    </div>
  );
};

export default IndividualAndFreelancer;
