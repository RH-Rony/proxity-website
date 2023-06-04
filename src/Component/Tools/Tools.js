import React from "react";
import logo from "../Images/qwytwg06i663738xkuej (1).png";
import logo1 from "../Images/icon.webp";
import logo2 from "../Images/mailchimp-256.png";
import logo3 from "../Images/free-hubspot-282260.webp";
import logo4 from "../Images/linkedin7.png";

const Tools = () => {
  return (
    <div className="bg-[#F3F3FF]">
      <div className="max-w-[1240px] mx-auto flex justify-between opacity-40 ">
        <div className="h-24 w-24">
          <img src={logo} alt="" />
        </div>
        <div className="h-24 w-24">
          <img src={logo1} alt="" />
        </div>
        <div className="h-24 w-24">
          <img src={logo2} alt="" />
        </div>
        <div className="h-24 w-24">
          <img src={logo3} alt="" />
        </div>
        <div className="h-24 w-24">
          <img src={logo4} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Tools;
