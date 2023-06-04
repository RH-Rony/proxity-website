import React from "react";
import "./WhyUs.css";
import {
  IoPricetagsOutline,
  IoGiftOutline,
  IoMailUnreadOutline,
} from "react-icons/io5";

const WhyUs = () => {
  return (
    <div className="bg-[#F3F3FF]" id="about">
      <div className="max-w-[1240px] mx-auto  ">
        <div className="grid md:grid-cols-3 gap-x-8 mx-10">
          <div className="md:col-span-full text-center my-14">
            <h1 className="welcome">Why choose Us</h1>
          </div>
          <div className="singleCard mb-12">
            <div className="reactIcons py-4 mt-12">
              <IoPricetagsOutline size={"3rem"} />
            </div>

            <h3 className=" reactIconsText text-2xl  font-bold text-center mb-8">
              Competitive Price
            </h3>
            <p className="text-center text-[#7C84A6] px-10 mb-12 hover:text-white">
              We believe in providing our clients with clear and competitive
              pricing structures that align with the value we deliver.With our
              comparative pricing model, Proxity offer tailored solutions that
              cater to your specific needs and budget.
            </p>
          </div>
          <div className="singleCard mb-12">
            <div className="reactIcons py-4 mt-12">
              <IoGiftOutline size={"3rem"} />
            </div>
            <h3 className=" reactIconsText text-2xl font-bold text-center mb-8">
              Quality Over Quantity
            </h3>
            <p className="text-center text-[#7C84A6] px-10 mb-12 hover:text-white">
              At Proxity, we firmly believe that quality triumphs over quantity
              in the digital realm. In a world inundated with content and
              fast-paced consumption, we stand out by prioritizing excellence
              and delivering meaningful experiences. We invite you to join us on
              a journey where quality takes center stage.
            </p>
          </div>
          <div className="singleCard mb-12">
            <div className="reactIcons py-4 mt-12 ">
              <IoMailUnreadOutline size={"3rem"} />
            </div>
            <h3 className=" reactIconsText text-2xl  font-bold text-center mb-8">
              24/7 Support
            </h3>
            <p className="text-center text-[#7C84A6] px-10 mb-12 hover:text-white">
              We understand the importance of providing exceptional customer
              support that goes beyond standard business hours.With our 24/7
              support, you can have peace of mind knowing that a dedicated team
              is ready to assist you, promptly address any concerns, and
              minimize potential downtime.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
