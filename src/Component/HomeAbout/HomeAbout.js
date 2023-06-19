import React from "react";
import "./HomeAbout.css";
const HomeAbout = () => {
  return (
    <div className="HomeAbout ">
      <div className="max-w-[1240px] mx-auto md:grid md:grid-cols-2  ">
        <div className="emptyDiv  "></div>
        <div className=" text-center md:text-left  ">
          <h1 className="textDiv text-4xl text-[#1D274E] font-bold my-14 ">
            We Produce Emotion <br /> To Quality Work
          </h1>
          <p className="text-[#7C84A6] mb-6">
            Proxity is a digital firm founded in Dhaka. Nowadays, we’re offering
            a variety of services and solutions Worldwide. At Proxity Tech, we
            understand the ever-evolving digital landscape and the importance of
            staying ahead of the competition. That's why our comprehensive
            service strategies are tailored to your unique business goals
          </p>
          <p className="text-[#7C84A6] mb-6">
            we leverage the latest tools and techniques to propel your business
            forward.Partner with Proxity Tech, and unlock the full potential of
            your digital presence. Our holistic approach, fueled by data-driven
            insights and a passion for excellence, ensures that your business
            stands out in the digital realm.
          </p>
          <ul>
            <li className="text-[#7C84A6]">
              We go beyond lead generation and offer exceptional web design and
              development, digital marketing services
            </li>
            <li className=" text-[#7C84A6] mt-3">
              We leverage diverse channels and techniques to increase brand
              growth
            </li>
            <li className="text-[#7C84A6] mt-3">
              Enhance your brand's identity and effectively communicate your
              message across various platforms
            </li>
            <li className=" text-[#7C84A6] mt-3">
              Our integrated approach ensures a cohesive and impactful digital
              presence for your business
            </li>
          </ul>

          <button className="startBtn py-2 px-9 rounded   text-white mt-10 mb-16">
            <a href="#contact_us"> Get Started</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
