import React from "react";
import "./OurClient.css";
const OurClient = () => {
  return (
    <div className="client text-center py-10 bg-black text-white">
      <h5 className="text-2xl">What Our Clients Said</h5>
      <h1 className="text-4xl w-96 mx-auto leading-normal font-bold mb-12">
        Why Partner With Us?
      </h1>
      <div className="grid md:flex justify-center md:m-5 m-2  mx-auto gap-8 group">
        <div className="md:mx-2 mx-8 bg-white/10 duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 cursor-pointer p-8 rounded-xl mix-blend-luminosity">
          <img className="h-20 mx-auto" src="" alt="" />
          <h4 className="uppercase text-xl font-bold">Thomas</h4>
          <p className="text-sm leading-7 my-3 font-light opacity-50">
            Great work as always, fast and efficient! Couldn't be happier with
            the results. Proxity is dedicated and their work was always on time
            and oftentime early
          </p>
          <button className="startBtn bg-white text-white py-2.5 px-8 rounded-full">
            <a href="#contact_us"> Get in touch</a>
          </button>
        </div>
        <div className="md:m-2 m-8 bg-white/10 duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 cursor-pointer p-8 rounded-xl mix-blend-luminosity">
          <img className="h-20 mx-auto" src="" alt="" />
          <h4 className="uppercase text-xl font-bold">Christopher</h4>
          <p className="text-sm leading-7 my-3 font-light opacity-50">
            completed 3 tasks successfully on time with good communication
            skills. They took my feedback quickly. I've worked on 1,500 lead
            generations with them in total and will do in the near future again
          </p>
          <button className="startBtn bg-white text-white py-2.5 px-8 rounded-full">
            <a href="#contact_us"> Get in touch</a>
          </button>
        </div>
        <div className="md:m-2 m-8 bg-white/10 duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 cursor-pointer p-8 rounded-xl mix-blend-luminosity">
          <img className="h-20 mx-auto" src="" alt="" />
          <h4 className="uppercase text-xl font-bold">Ehsan</h4>
          <p className="text-sm leading-7 my-3 font-light opacity-50">
            Proxity was a delight to work with. their dedication and commitment
            to finish projects on time in outstanding. they're been a great
            asset for our work. I highly recommend him
          </p>
          <button className="startBtn bg-white text-white py-2.5 px-8 rounded-full">
            <a href="#contact_us"> Get in touch</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurClient;
