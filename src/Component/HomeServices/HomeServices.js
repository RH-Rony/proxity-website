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
    <div className="max-w-[1240px] mx-auto  my-14 " id="services">
      <div className=" text-center">
        <h1 className=" welcome">Our Services</h1>
      </div>
      <div className="grid md:grid-cols-4 md:text-left text-center gap-8 mt-12 ">
        <div className=" col-span-2 self-center">
          <h3 className="reactIconsText text-4xl text-[#1D274E] font-bold">
            All the possible solutions to grow your business
          </h3>
          <p className="text-[#7C84A6] mt-3">
            We love what we do and we do it with passion
          </p>
        </div>
        <div className=" singleCard md:m-2 m-5 p-5">
          <div className="serviceIcon mr-2 ">
            <IoBarChartOutline className="serviceIcon-1" size={"3rem"} />
          </div>

          <h6 className="reactIconsText text-2xl  font-bold ml-2">
            Lead <br /> Generation
          </h6>
        </div>
        <div className=" singleCard md:m-2 m-5 p-5">
          <div className="serviceIcon mr-2">
            <IoSearchOutline className="serviceIcon-1" size={"3rem"} />
          </div>

          <h6 className="reactIconsText text-2xl  font-bold ml-2">
            List <br /> Building
          </h6>
        </div>

        <div className="singleCard md:m-2 m-5 p-5">
          <div className="serviceIcon mr-2">
            <IoMailOpenOutline className="serviceIcon-1" size={"3rem"} />
          </div>

          <h6 className="reactIconsText text-2xl  font-bold ml-2">
            Email <br /> Marketing
          </h6>
        </div>
        <div className="singleCard md:m-2 m-5 p-5">
          <div className="serviceIcon mr-2">
            <IoCodeSlashOutline className="serviceIcon-1" size={"3rem"} />
          </div>

          <h6 className="reactIconsText text-2xl  font-bold ml-2">
            Web Design <br /> Development
          </h6>
        </div>
        <div className="singleCard md:m-2 m-5 p-5">
          <div className="serviceIcon mr-2">
            <IoMegaphoneOutline className="serviceIcon-1" size={"3rem"} />
          </div>

          <h6 className=" reactIconsText text-2xl  font-bold ml-2">
            Digital <br /> Marketing
          </h6>
        </div>
        <div className="singleCard md:m-2 m-5 p-5">
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
