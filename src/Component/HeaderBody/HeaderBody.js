import React from "react";
import bgLogo from "../Images/sysadmin_03.jpg";
import { TypeAnimation } from "react-type-animation";
import "./HeaderBody.css";

const HeaderBody = () => {
  return (
    <div className="grid  md:grid-cols-2     max-w-[1240px] mx-auto mb-8">
      <div className="   text-center md:text-left self-center ml-5  ">
        <h4 className=" welcome text-2xl font-semibold my-3 ">
          Welcome to Proxity Tech Solution
        </h4>
        <h1 className="text-4xl text-[#1D274E] font-bold my-3">
          Empowering Your Vision: Making Your Goals a Reality
        </h1>
        <div className="my-3 text-[#7C84A6]">
          <TypeAnimation
            sequence={[
              `Maximize Your Online Presence with Our Digital Solutions.`,
              500,
            ]}
            speed={80}
          />
        </div>

        <div>
          <button className="startBtn py-2 px-9 rounded   text-white ">
            <a href="#contact_us"> Get Started</a>
          </button>
        </div>
      </div>
      <div>
        <img className="vert-move md:mt-0 mt-3 " src={bgLogo} alt="" />
      </div>
    </div>
  );
};

export default HeaderBody;
//bg-transparent bg-gradient-to-r from-[#005dc7] to-[#a100ff]
