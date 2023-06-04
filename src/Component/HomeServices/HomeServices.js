import React from "react";
import {
  IoBarChartOutline,
  IoSearchOutline,
  IoMailOpenOutline,
  IoCodeSlashOutline,
  IoPencilOutline,
  IoMegaphoneOutline,
} from "react-icons/io5";
import "./HomeServices.css";

const HomeServices = () => {
  return (
    <div className="max-w-[1240px] mx-auto    " id="services">
      <div className=" text-center">
        <h1 className=" welcome">Our Services</h1>
      </div>
      <div className="md:grid md:grid-cols-4  gap-8 mt-12 ">
        <div className=" col-span-2 ">
          <h3 className="reactIconsText text-4xl text-[#1D274E] font-bold md:mx-2 mx-5">
            All the possible solutions to grow your business
          </h3>
          <p className="text-[#7C84A6] mt-3 md:mx-2 mx-5">
            We love what we do and we do it with passion
          </p>
        </div>
        <div className=" singleCard  p-5">
          <div className="serviceIcon mr-2 ">
            <IoBarChartOutline className="serviceIcon-1" size={"3rem"} />
          </div>

          <h6 className="reactIconsText text-2xl  font-bold ml-2">
            Lead <br /> Generation
          </h6>
        </div>
        <div className=" singleCard  p-5">
          <div className="serviceIcon mr-2">
            <IoSearchOutline className="serviceIcon-1" size={"3rem"} />
          </div>

          <h6 className="reactIconsText text-2xl  font-bold ml-2">
            List <br /> Building
          </h6>
        </div>

        <div className="singleCard  p-5">
          <div className="serviceIcon mr-2">
            <IoMailOpenOutline className="serviceIcon-1" size={"3rem"} />
          </div>

          <h6 className="reactIconsText text-2xl  font-bold ml-2">
            Email <br /> Marketing
          </h6>
        </div>
        <div className="singleCard  p-5">
          <div className="serviceIcon mr-2">
            <IoCodeSlashOutline className="serviceIcon-1" size={"3rem"} />
          </div>

          <h6 className="reactIconsText text-2xl  font-bold ml-2">
            Web Design <br /> Development
          </h6>
        </div>
        <div className="singleCard  p-5">
          <div className="serviceIcon mr-2">
            <IoMegaphoneOutline className="serviceIcon-1" size={"3rem"} />
          </div>

          <h6 className=" reactIconsText text-2xl  font-bold ml-2">
            Digital <br /> Marketing
          </h6>
        </div>
        <div className="singleCard  p-5">
          <div className="serviceIcon mr-2">
            <IoPencilOutline className="serviceIcon-1" size={"3rem"} />
          </div>

          <h6 className=" reactIconsText text-2xl  font-bold ml-2">
            Graphics <br /> Design
          </h6>
        </div>
      </div>
    </div>
  );
};

export default HomeServices;
