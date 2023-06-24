import React from "react";
import "./Footer.css";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <div className="bg-[#0D0421] ">
      <div className="footer  max-w-[1240px] mx-auto mb-12">
        <div className="md:grid md:grid-cols-3 gap-x-6 text-white md:p-10 p-10">
          <div className="my-8">
            <h1 className="text-2xl mb-8">About Us</h1>
            <p className="text-gray-400">
              In the fast-paced digital landscape, businesses require a
              competitive edge to thrive and succeed. Proxity Tech, a leading
              agency specializing in Lead Generation, Web Development & Design,
              Graphics Design and Digital Marketing empowers companies to unlock
              their digital potential
            </p>
          </div>
          <div className="my-8 md:text-center">
            <h4 className="text-2xl mb-8">Quick Links</h4>
            <ul className="list-unstyled text-gray-400">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>

              <li>
                <a href="#contact_us">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="my-8 md:text-center">
            <h4 className="text-2xl mb-8">Contact Us</h4>
            <ul className="list-unstyled text-gray-400">
              <li>Remote Office</li>
              <li>
                Email:{" "}
                <a href="mailto:info@proxitytech.com">info@proxitytech.com</a>{" "}
              </li>
              <li>Phone: +8801681536400</li>
            </ul>
            <div className="mt-3">
              <SocialIcon
                className="m-1"
                style={{ height: 40, width: 40 }}
                url="https://www.facebook.com/proxitytech"
              />
              <SocialIcon
                className="m-1"
                style={{ height: 40, width: 40 }}
                url="https://www.linkedin.com/company/proxitytech"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <p className="text-center text-gray-400">
          &copy; 2023 Proxity Tech Solution. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
