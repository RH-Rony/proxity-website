import React from "react";

const ShortIntro = () => {
  return (
    <div className="max-w-[1240px] mx-auto md:px-4 md:py-20  ">
      <div className="ml-5 grid  my-10 md:grid-cols-2">
        <div>
          <h1 className="md:text-right mr-4 text-4xl text-[#1D274E] font-bold text-center ">
            We Are Here <br /> For Made Your Idea
          </h1>
        </div>

        <div>
          <h5 className="text-[#7C84A6] text-lg md:border-l-2 px-3 md:border-black md:text-center">
            With over a decade of experience, we’ve established ourselves as one
            of the pioneering agencies in the region. Our small, flexible, agile
            and design-led structures and processes allow us to highly
            responsive.
          </h5>
        </div>
      </div>
    </div>
  );
};

export default ShortIntro;
