import React from "react";
import { MdLocationPin } from "react-icons/md";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { MdOutlinePhone } from "react-icons/md";

const Contact = () => {
  return (
    <>
      <div className="forscale relative">

      <div className="contact-headings flex flex-col justify-center items-center text-center">
        <div className="items p-5">
          <h1 className=" text-xl  text-[#f75023] mb-3 font-Poppins font-semibold">Contact Me</h1>
          <h2 className=" md:text-2xl text-xl font-Poppins mb-3 font-bold">I Want to Hear From Your</h2>
          <p className=" md:text-xl mb-3 font-JosefinSans ">
            Please fill out the form on this section to contact with me. Or call
            between <br /> 9:00 a.m. and 8:00 p.m. ET, Monday through Friday
          </p>
        </div>
      </div>
      <div className="img-scale lg:block hidden absolute top-0  left-0">
        <img src="../public/scalecontact.png" alt="" />
      </div>
      </div>
     
     <div className="forimage relative">

      <div className="main-container lg:flex  justify-center  gap-x-36 p-10">
        <div className="flex-items">
          <div className="first-sdie flex gap-10  md:gap-20 items-center mb-5">
            <div className="first-icons-container bg-[#fedfd7] p-7 rounded-full">
              <MdLocationPin className=" text-3xl text-orange-400 " />
            </div>
            <div className="headings">
              <h2 className=" text-xl md:text-2xl font-Jost font-semibold  mb-1">
                Address
              </h2>
              <h2 className=" font-JosefinSans">20 somwhare in the world</h2>
            </div>
          </div>
          <div className="first-sdie flex gap-10 md:gap-20 items-center mb-5">
            <div className="first-icons-container bg-[#ddf5e6] p-7 rounded-full">
              <MdOutlineMarkEmailUnread className=" text-3xl " />
            </div>
            <div className="headings">
              <h2 className=" text-xl md:text-2xl  font-Jost font-semibold  mb-1">
                Email
              </h2>
              <h2 className=" font-JosefinSans">Hello dizme@gmail.com</h2>
            </div>
          </div>
          <div className="first-sdie flex  gap-10 md:gap-20 items-center mb-5">
            <div className="first-icons-container  bg-gray-200 p-7 rounded-full">
              <MdOutlinePhone className=" text-3xl text-blue-500 " />
            </div>
            <div className="headings">
              <h2 className=" text-xl md:text-2xl font-bold font-Jost  mb-1">
                Phone
              </h2>
              <h2 className=" font-JosefinSans">+1 959383934</h2>
            </div>
          </div>
        </div>
        <div className="form-container">
          <form action="">
            <div className="inputfields">
              <div className="forsideby lg:flex gap-x-7   mb-5">
                <div className="first-input mb-3">
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className=" w-full  px-6 py-2 rounded-lg outline-none border-2  border-gray-400 "
                  />
                </div>
                <div className="second-input mb-3">
                  <input
                    type="text"
                    placeholder=" your email"
                    className=" px-6 py-2 rounded-lg w-full outline-none border-2  border-gray-400"
                  />
                </div>
              </div>
              <div className="second-side-by-side mb-5 lg:flex gap-x-7">
                <div className="first-second-inputfield mb-3">
                  <input
                    type="text"
                    placeholder=" your phone"
                    className="w-full  px-6 py-2 rounded-lg outline-none border-2  border-gray-400"
                  />
                </div>
                <div className="first-second-inputfield mb-3">
                  <input
                    type="text"
                    placeholder=" your Subject"
                    className="w-full  px-6 py-2 rounded-lg outline-none border-2  border-gray-400"
                  />
                </div>
              </div>

              <div className="fortext-area mb-3">
                <textarea
                  name=""
                  id=""
                  cols="30"
                  className=" border-2 border-gray-400 w-full  p-6 rounded-lg"
                  placeholder="Enter some text"
                  rows="10"
                ></textarea>
              </div>

              <div className="btn-container ">
                <button className=" px-7 py-3 rounded-full font-JosefinSans bg-orange-600 font-semibold text-white ">
                  Submit Now
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="second-contact-image  lg:block hidden absolute bottom-0  right-0">
       <img src="../public/scalecontact2.png" alt="" />
      </div>
     </div>
    <br />
    <br />
      <div className="maps-container flex justify-center  items-center w-full p-4">
        <div className="items overflow-hidden rounded-lg ">
          <iframe
            className="  "
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3020.024788239557!2d-73.96801642459805!3d40.80544907137966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f63c75af2d65%3A0xf45542f6cb090cc9!2s2880%20Broadway%2C%20New%20York%2C%20NY%2010025%2C%20USA!5e0!3m2!1sen!2sin!4v1703786045902!5m2!1sen!2sin"
            allowfullscreen=""
            style={{ width: "70em", height: "300px" }}
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <br />
      <br />
      <div className="footer-container p-8 bg-cyan-50 md:text-start text-center ">
        <div className="items md:flex justify-between items-center gap-10">
            <div className="first-section">
              <h1 className=" font-Poppins">Developed with love by <span className=" text-gray-400 font-bold">Marketify </span> © 2022</h1>
            </div>
            <div className="second-section md:flex gap-9 p-8 font-Jost">
              <h1>Terms & Condition</h1>
              <h2> Privacy Policy</h2>
            </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
