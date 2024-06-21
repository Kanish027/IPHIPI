import Image from "next/image";
import Link from "next/link";
import React from "react";

const HybridWork = () => {
  return (
    <div className="use_cases_content_inner flex md:flex-row flex-col justify-between py-8 md:px-12 px-5">
      <div className="content">
        <div className="mb-4 subtitle">Hybrid Work </div>
        <p className="font-light learn_more_text mb-4">
          Clear team communication irrespective of location. Promote
          accountability and efficient action tracking.
        </p>
        <ul>
          <li className="font-light mb-2 learn_more_text flex items-start">
            <i className="fa-regular text-blue-500 text-sm pe-2 mt-2 fa-circle-check"></i>
            Consistent clarity in team calls, regardless of environment.
          </li>
          <li className="font-light mb-2 learn_more_text flex items-start">
            <i className="fa-regular text-blue-500 text-sm pe-2 mt-2 fa-circle-check"></i>
            Detailed capture of team conversations for reference.
          </li>
          <li className="font-light mb-2 learn_more_text flex items-start">
            <i className="fa-regular text-blue-500 text-sm pe-2 mt-2 fa-circle-check"></i>
            Enhanced accountability with meeting summaries and action items.
          </li>
        </ul>
        <Link className="reviews-link text-blue-500 mt-4" href={"#"}>
          Learn More
        </Link>
      </div>
      <div>
        <Image
          alt=""
          src={"/img_use_case_hybrid.png"}
          width={432}
          height={379}
        />
      </div>
    </div>
  );
};

export default HybridWork;
