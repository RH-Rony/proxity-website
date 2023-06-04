import React, { useState } from "react";
import { IoHomeOutline, IoCallOutline, IoMailOutline } from "react-icons/io5";
import "./ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="max-w-[1240px] mx-auto mb-10" id="contact_us">
      <div className="text-center ">
        <h1 className="welcome my-14 ">Contact Us</h1>
        <h3 className="text-4xl text-[#1D274E] font-bold">Get a Free Quote</h3>
      </div>
      <div className="md:grid md:grid-cols-2 gap-10 mt-6">
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-2 gap-x-8 self-center md:mx-1 mx-2"
        >
          <div className="self-center py-6  ">
            <label
              htmlFor="name"
              className="block text-gray-700 text-sm font-bold "
            ></label>
            <input
              placeholder="Your Name"
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="self-center py-6 ">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold "
            ></label>
            <input
              placeholder="Email Address"
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="col-span-full ">
            <label
              htmlFor="message"
              className="block text-gray-700 text-sm font-bold "
            ></label>
            <textarea
              placeholder="Write Message"
              name="message"
              id="message"
              rows="4"
              value={formData.message}
              onChange={handleInputChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className=" btnAlign py-6 col-span-full">
            <button
              type="submit"
              className="startBtn  py-2 px-9 rounded    text-white "
            >
              Submit
            </button>
          </div>
        </form>
        <div className="infoDiv">
          <div>
            <IoHomeOutline size={"3rem"}></IoHomeOutline>
          </div>
          <h1 className="text-2xl text-[#1D274E] font-bold">Address:</h1>
          <p className="mb-10 text-[#7C84A6]">
            Right now we are operating remotely
          </p>
          <div>
            <IoCallOutline size={"3rem"}></IoCallOutline>
          </div>
          <h1 className="text-2xl text-[#1D274E] font-bold">Phone:</h1>
          <p className="mb-10 text-[#7C84A6]">+880 1681536400</p>
          <div>
            <IoMailOutline size={"3rem"}></IoMailOutline>
          </div>
          <h1 className="text-2xl text-[#1D274E] font-bold">Email:</h1>

          <a href="mailto:info@proxitytech.com" className=" text-[#7C84A6]">
            info@proxitytech.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

//   /* <form onSubmit={handleSubmit} className="max-w-[1240px] mx-auto">

//         <div className="grid grid-cols-2">
//           <div>
//             <div className="flex mb-4">
//               <label
//                 htmlFor="name"
//                 className="block text-gray-700 text-sm font-bold mb-2"
//               ></label>
//               <input
//                 placeholder="Your Name"
//                 type="text"
//                 name="name"
//                 id="name"
//                 value={formData.name}
//                 onChange={handleInputChange}
//                 required
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               />
//               <label
//                 htmlFor="email"
//                 className="block text-gray-700 text-sm font-bold mb-2"
//               ></label>
//               <input
//                 placeholder="Email Address"
//                 type="email"
//                 name="email"
//                 id="email"
//                 value={formData.email}
//                 onChange={handleInputChange}
//                 required
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               />
//             </div>

//             <div className="mb-4">
//               <label
//                 htmlFor="message"
//                 className="block text-gray-700 text-sm font-bold mb-2"
//               ></label>
//               <textarea
//                 placeholder="Write Message"
//                 name="message"
//                 id="message"
//                 rows="4"
//                 value={formData.message}
//                 onChange={handleInputChange}
//                 required
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               />
//             </div>
//             <div className="flex justify-center">
//               <button
//                 type="submit"
//                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//               >
//                 Submit
//               </button>
//             </div>
//           </div>
//           <div>
//             <h1>adresss</h1>
//             <p>
//               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
//               nesciunt saepe, distinctio minus repudiandae provident!
//             </p>
//             <h1>Phone</h1>
//             <p>nasnfioaifs</p>
//           </div>
//         </div>
//       </form> */
// }
// <div className=" text-center">
//         <h1 className="welcome">Contact Us</h1>
//       </div>
//       <div className="grid grid-cols-2">
//         <div className="grid grid-cols-2">
//           <form onSubmit={handleSubmit}>
//             <div className="">
//               <label
//                 htmlFor="name"
//                 className="block text-gray-700 text-sm font-bold mb-2"
//               ></label>
//               <input
//                 placeholder="Your Name"
//                 type="text"
//                 name="name"
//                 id="name"
//                 value={formData.name}
//                 onChange={handleInputChange}
//                 required
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               />

//               <label
//                 htmlFor="email"
//                 className="block text-gray-700 text-sm font-bold mb-2"
//               ></label>
//               <input
//                 placeholder="Email Address"
//                 type="email"
//                 name="email"
//                 id="email"
//                 value={formData.email}
//                 onChange={handleInputChange}
//                 required
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               />
//             </div>
//             <div>
//               <label
//                 htmlFor="message"
//                 className="block text-gray-700 text-sm font-bold mb-2"
//               ></label>
//               <textarea
//                 placeholder="Write Message"
//                 name="message"
//                 id="message"
//                 rows="4"
//                 value={formData.message}
//                 onChange={handleInputChange}
//                 required
//                 className=" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               />
//             </div>
//             <div>
//               <button
//                 type="submit"
//                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//               >
//                 Submit
//               </button>
//             </div>
//           </form>
//         </div>

//         <div>
//           <address>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, hic
//             earum numquam ipsum omnis iusto!
//           </address>
//           <p>Phone: ahisfhifhhisfaihfas</p>
//           <a href="mailto:rhrony0@gmail.com">email</a>
//         </div>
//       </div>
