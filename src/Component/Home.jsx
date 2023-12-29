import React, { useRef } from "react";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import SecondCard from "./SecondCard";
import Cards from "./Cards";
import BottomAroow from "../BottomAroow";
import Portfolio from "./Portfolio";
import { motion } from "framer-motion";
import Gridcontainer from "./Gridcontainer";
import Caresol from "./Caresol";
import Blog from "./Blog";
import Contact from "./Contact";
const Home = () => {
  return (
    <>
      <div className="home-container   bg-one bg-cover bg-center min-h-[500px]   w-full p-10">
        <br />
        <br />
        <br />
        <br />
        <br />

        <div className="main-container   lg:flex   justify-around  gap-12  place-content-center   items-center overflow-hidden">
          <motion.div
            className="items mb-4     "
            initial={{ opacity: 0, y: "-50%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-50%" }}
            transition={{ duration: "1.2", ease: "easeIn" }}
          >
            <div className="fistheadings lg:text-start text-center">
              <h3 className="text-red-500 font-[600] text-xl mb-3 font-Jost">
                Hello, I'm
              </h3>
            </div>
            <div className="headings mb-4 lg:text-start text-center ">
              <h2 className=" md:text-6xl text-3xl font-Jost  ">James Smith</h2>
            </div>
            <div className="second-heading mb-3 lg:text-start text-center  font-Jost text-xl">
              <h2>
                {" "}
                A <span className=" text-green-500">
                  Creative Designer
                </span>{" "}
                From <span className=" text-purple-600">New York</span>{" "}
              </h2>
            </div>
            <div className="para mb-5 lg:text-start text-center md:p-0 p-4">
              <p className="text-xl text-gray-500 font-JosefinSans">
                I'm creative designer based in New York, and I'm very passionate
                and <br /> dedicated to my work.
              </p>
            </div>
            <div className="forsideby flex gap-3 items-center lg:justify-start justify-center">
              <div className="button-container ">
                <button className="px-7 py-3  bg-red-700 font-Jost  hover:bg-white hover:text-black duration-300 ease-linear  rounded-full text-white font-[600]">
                  About me
                </button>
              </div>
              <div className="icons-container flex gap-4">
                <TiSocialFacebook className="text-xl cursor-pointer hover:scale-110 hover:text-blue-400 duration-300 ease-linear" />
                <TiSocialLinkedin className="text-xl cursor-pointer" />
                <TiSocialTwitter className="text-xl  cursor-pointer" />
              </div>
            </div>
          </motion.div>
          <motion.div
            className="image-container flex flex-col justify-center items-center md:order-last order-first relative  "
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: "1.2", ease: "easeIn" }}
          >
            <motion.div
              className="forhoverimg"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: "1.1", ease: "linear" }}
            >
              <img
                src="../public/avatar.png"
                className=" w-72 "
                alt=""
                srcset=""
              />
            </motion.div>

            <div className="pslogo absolute right-0 top-20 lg:block hidden animate-bounce ">
              <img
                src="../public/pslogo.png"
                className="  w-24"
                alt=""
                srcset=""
              />
            </div>
            <div className="Ailogo absolute left-0 top-5 lg:block hidden animate-bounce ">
              <img src="../public/Ai.png" className="  w-10" alt="" srcset="" />
            </div>
          </motion.div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>

      {/* cards */}
      <Cards />
      <br />
      <SecondCard />
      <BottomAroow />
      <Portfolio />
      <Gridcontainer />
      <Caresol />
      <Blog />
      <Contact />
    </>
  );
};

export default Home;
