"use client";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";

const Reviews = () => {
  return (
    <div id="" className="">
      <div className="mx-auto py-20">
        <div className="p-6">
          <h1 className="reviews-heading text-center mb-8">
            Trusted by the world&apos;s best professionals
          </h1>
          <div className="reviews">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="bg-blue-100 carousel_bg_color flex items-center p-16 rounded-2xl">
                  <div className="md:flex-none flex justify-center">
                    <div className="review_img w-full p-4 rounded-full">
                      <Image
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "100%", height: "auto" }}
                        src="/img_chad.png"
                        alt="Review by Kanish Mohariya"
                      />
                    </div>
                    <div className="mt-4 md:hidden ps-5 md:ps-0 review-author">
                      <strong>Kanish Mohariya</strong>
                      <br />
                      <span className="learn_more_text ">
                        Head of Workplace Collaboration
                      </span>
                    </div>
                  </div>
                  <div className="review_content">
                    <div className="review_content-text">
                      &ldquo;Atlassian staff working at home have benefitted
                      from the Krisp service since early in the pandemic. Since
                      our Team Anywhere announcement, we have sought ways to
                      make remote and hybrid working more effective, and
                      Krisp&apos;s ability to screen background noise from calls
                      and recordings has been invaluable to many staff.&rdquo;
                    </div>
                    <div className="mt-4 md:block hidden">
                      <strong>Kanish Mohariya</strong>
                      <br />
                      <span className="learn_more_text">
                        Head of Workplace Collaboration
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-blue-100 carousel_bg_color flex items-center p-16 rounded-2xl">
                  <div className="md:flex-none flex justify-center">
                    <div className="review_img w-full p-4 rounded-full">
                      <Image
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "100%", height: "auto" }}
                        src="/img_chad.png"
                        alt="Review by Kanish Mohariya"
                      />
                    </div>
                    <div className="mt-4 md:hidden ps-5 md:ps-0 review-author">
                      <strong>Kanish Mohariya</strong>
                      <br />
                      <span className="learn_more_text ">
                        Head of Workplace Collaboration
                      </span>
                    </div>
                  </div>
                  <div className="review_content">
                    <div className="review_content-text">
                      &ldquo;Atlassian staff working at home have benefitted
                      from the Krisp service since early in the pandemic. Since
                      our Team Anywhere announcement, we have sought ways to
                      make remote and hybrid working more effective, and
                      Krisp&apos;s ability to screen background noise from calls
                      and recordings has been invaluable to many staff.&rdquo;
                    </div>
                    <div className="mt-4 md:block hidden">
                      <strong>Kanish Mohariya</strong>
                      <br />
                      <span className="learn_more_text">
                        Head of Workplace Collaboration
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-blue-100 carousel_bg_color flex items-center p-16 rounded-2xl">
                  <div className="md:flex-none flex justify-center">
                    <div className="review_img w-full p-4 rounded-full">
                      <Image
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "100%", height: "auto" }}
                        src="/img_chad.png"
                        alt="Review by Kanish Mohariya"
                      />
                    </div>
                    <div className="mt-4 md:hidden ps-5 md:ps-0 review-author">
                      <strong>Kanish Mohariya</strong>
                      <br />
                      <span className="learn_more_text ">
                        Head of Workplace Collaboration
                      </span>
                    </div>
                  </div>
                  <div className="review_content">
                    <div className="review_content-text">
                      &ldquo;Atlassian staff working at home have benefitted
                      from the Krisp service since early in the pandemic. Since
                      our Team Anywhere announcement, we have sought ways to
                      make remote and hybrid working more effective, and
                      Krisp&apos;s ability to screen background noise from calls
                      and recordings has been invaluable to many staff.&rdquo;
                    </div>
                    <div className="mt-4 md:block hidden">
                      <strong>Kanish Mohariya</strong>
                      <br />
                      <span className="learn_more_text">
                        Head of Workplace Collaboration
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-blue-100 carousel_bg_color flex items-center p-16 rounded-2xl">
                  <div className="md:flex-none flex justify-center">
                    <div className="review_img w-full p-4 rounded-full">
                      <Image
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "100%", height: "auto" }}
                        src="/img_chad.png"
                        alt="Review by Kanish Mohariya"
                      />
                    </div>
                    <div className="mt-4 md:hidden ps-5 md:ps-0 review-author">
                      <strong>Kanish Mohariya</strong>
                      <br />
                      <span className="learn_more_text ">
                        Head of Workplace Collaboration
                      </span>
                    </div>
                  </div>
                  <div className="review_content">
                    <div className="review_content-text">
                      &ldquo;Atlassian staff working at home have benefitted
                      from the Krisp service since early in the pandemic. Since
                      our Team Anywhere announcement, we have sought ways to
                      make remote and hybrid working more effective, and
                      Krisp&apos;s ability to screen background noise from calls
                      and recordings has been invaluable to many staff.&rdquo;
                    </div>
                    <div className="mt-4 md:block hidden">
                      <strong>Kanish Mohariya</strong>
                      <br />
                      <span className="learn_more_text">
                        Head of Workplace Collaboration
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-blue-100 carousel_bg_color flex items-center p-16 rounded-2xl">
                  <div className="md:flex-none flex justify-center">
                    <div className="review_img w-full p-4 rounded-full">
                      <Image
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "100%", height: "auto" }}
                        src="/img_chad.png"
                        alt="Review by Kanish Mohariya"
                      />
                    </div>
                    <div className="mt-4 md:hidden ps-5 md:ps-0 review-author">
                      <strong>Kanish Mohariya</strong>
                      <br />
                      <span className="learn_more_text ">
                        Head of Workplace Collaboration
                      </span>
                    </div>
                  </div>
                  <div className="review_content">
                    <div className="review_content-text">
                      &ldquo;Atlassian staff working at home have benefitted
                      from the Krisp service since early in the pandemic. Since
                      our Team Anywhere announcement, we have sought ways to
                      make remote and hybrid working more effective, and
                      Krisp&apos;s ability to screen background noise from calls
                      and recordings has been invaluable to many staff.&rdquo;
                    </div>
                    <div className="mt-4 md:block hidden">
                      <strong>Kanish Mohariya</strong>
                      <br />
                      <span className="learn_more_text">
                        Head of Workplace Collaboration
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="reviews_scores max-w-screen-lg md:px-4 mx-auto mt-32 md:flex items-center justify-between">
            <div className="ratings flex md:items-start flex-col items-center">
              <h4 className="mb-4 reviews-subheading text-blue-500">
                Customers love Krisp
              </h4>
              <Image
                width={154}
                height={43}
                sizes="100vw"
                src="https://krisp.ai/wp-content/themes/krisp-v4/imgs/logo_g2_lg.svg"
                alt="G2 logo"
              />
              <div className="rating_stars mt-4">
                <Image
                  width={195}
                  height={33}
                  sizes="100vw"
                  src="https://krisp.ai/wp-content/themes/krisp-v4/imgs/img_rating.svg"
                  alt="Rating stars"
                />
                <div className="number-of-reviews-text mt-1">
                  543 reviews (4.8 out of 5)
                </div>
              </div>
            </div>
            <div className="scores md:flex-row flex flex-col">
              <div className="score">
                <div className="score_number mb-5 mx-auto">
                  <strong className="text-blue-500 rating-number-text">
                    9.4
                  </strong>
                  <br />
                </div>
                <div className="ratings-text text-center">Ease of use</div>
              </div>
              <div className="score">
                <div className="score_number mb-5 mx-auto">
                  <strong className="text-blue-500 rating-number-text">
                    9.4
                  </strong>
                  <br />
                </div>
                <div className="ratings-text text-center">
                  Quality of support
                </div>
              </div>
              <div className="score">
                <div className="score_number mb-5 mx-auto">
                  <strong className="text-blue-500 rating-number-text">
                    9.4
                  </strong>
                  <br />
                </div>
                <div className="ratings-text text-center">Ease of setup</div>
              </div>
            </div>
          </div>
          <div className="text-center reviews-link text-blue-500 mt-12">
            <Link href="#">Read more user reviews</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
