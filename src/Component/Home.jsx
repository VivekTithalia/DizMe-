import React, { useRef } from "react";
import { TiSocialFacebook } from "react-icons/ti";
import { FaLinkedinIn } from "react-icons/fa";
import { TiSocialTwitter } from "react-icons/ti";
import SecondCard from "./SecondCard";
import Cards from "./Cards";
import BottomAroow from "../BottomAroow";
// import Portfolio from "./Portfolio";
import { motion } from "framer-motion";
import { FaAngular } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
// import Gridcontainer from "./Gridcontainer";
import { FaInstagram } from "react-icons/fa6";
import Caresol from "./Caresol";
import Blog from "./Blog";
import Contact from "./Contact";
import { useContext } from "react";
import { Darkcontext } from "../Context/Mycontext";
const Home = () => {

   const darkmode=useContext(Darkcontext)
   const {mouseenterhandler,mouseremovehandler,cursorBg} =   useContext(Darkcontext)
   

  return (
    <>
      <div className={`divfordarkandlight duration-300 transition ease-in-out  min-h-screen ${darkmode.dark ? "bg-gray-800  text-white":""}   `}>
        <div
          className={`home-container relative ${darkmode.dark ? "bg-bg-dark":"bg-bg-one " }  bg-cover bg-center h-full  md:h-screen min-h-screen flex lg:flex-row flex-col  justify-center items-center   gap-6      w-full lg:p-20 2xl:px-36`}
          id="home"
        >
          <motion.div
            className="image-container flex flex-col justify-center items-center lg:order-2  w-full     relative lg:mt-0  md:mt-20    lg:p-0   lg:pt-0 md:pt-0  "
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: 1.3, ease: "easeInOut", stiffness: 60 }}
            onMouseEnter={mouseenterhandler}
            onMouseLeave={mouseremovehandler}
          >
            <motion.div className="forhoverimg lg:p-0 md:p-9 lg:mt-0 md:mt-0  mt-14">
              <motion.img
                src=".././taghome6.png"
                className="md:rounded-full     md:w-80 2xl:w-[25rem]  myimage    lg:p-0  "
                alt=""
                srcSet=""
                // whileHover={{scale:1.1}}
                transition={{duration:1,ease:"easeInOut"}}
              />
            </motion.div>

            <div className="pslogo absolute right-14 top-20 lg:block hidden myicons z-10 ">
              {/* <img
              src="../public/pslogo.png"
              className="  w-24"
              alt=""
              srcset=""
            /> */}
              <FaReact className={` text-5xl 2xl:text-7xl ${darkmode.dark ? "text-white" :"text-blue-800  "} `} />
            </div>
            <div className="Ailogo absolute left-11 top-5 lg:block hidden myicons z-10 ">
              {/* <img src="../public/Ai.png" className="  w-10" alt="" srcset="" /> */}
              <FaAngular className={` text-5xl 2xl:text-7xl ${darkmode.dark ? "text-white " : "text-red-800 "} `} />
            </div>
          </motion.div>
          <div
            className="items mb-4   w-full     "
            
          >
            {/* <div className="fistheadings lg:text-start text-center">
            <h3 className="text-red-500 font-[600] lg:text-xl 2xl:text-3xl mb-3 font-Jost">
              Hello, I'm
            </h3>
          </div> */}
            <div className="headings mb-4 2xl:mb-10  lg:text-start text-center ">
              <motion.h2 className=" md:text-4xl text-2xl  font-Playfair    2xl:text-[3rem]      "
              initial={{opacity:0,x:-150}}
              whileInView={{opacity:1,x:0}}
              transition={{duration:1,ease:"easeInOut",stiffness:60}}
              onMouseEnter={mouseenterhandler}
              onMouseLeave={mouseremovehandler}
              
              >
                Reliable & Consistent
              </motion.h2>
            </div>
            <div className="second-heading mb-3 2xl:mb-10  lg:text-start text-center  font-Jost text-xl">
              <motion.h2
              initial={{opacity:1,x:-150}}
              whileInView={{opacity:1,x:0}}
              transition={{duration:1.2,ease:"easeInOut",stiffness:60}}
              >
                {" "}
                <span className=" text-red-500 text-xl font-bold 2xl:text-[2rem]">
                  IT-Solutions
                </span>
              </motion.h2>
            </div>
            <div className="para mb-5 2xl:mb-10 lg:text-start text-center md:p-0 p-4 2xl:text-[3rem]  ">
              <motion.p className={` 2xl:text-2xl ${darkmode.dark ? "text-white":"text-gray-700 "} font-Jost md:text-xl`}
              initial={{opacity:1,x:-150}}
              whileInView={{opacity:1,x:0}}
              transition={{duration:1.4,ease:"easeInOut",stiffness:60}}
              onMouseEnter={mouseenterhandler}
              onMouseLeave={mouseremovehandler}
              
              >
                Reliable Software technology powers digital transformation
                through services designed to reinvent your application portfolio
                and a new style of IT. <br />
                We help our clients drive growth for their business by utilizing
                our business and industry insights combined with innovative
                technology.
              </motion.p>
            </div>
            <motion.div className="forsideby flex gap-3 items-center lg:justify-start justify-center"
              initial={{opacity:1,x:-150}}
              whileInView={{opacity:1,x:0}}
              transition={{duration:1.6,ease:"easeInOut",stiffness:90}}
              onMouseEnter={mouseenterhandler}
              onMouseLeave={mouseremovehandler}
            
            >
              <div className="button-container ">
                <button className="px-7 py-3   bg-red-700 font-Jost  hover:bg-white hover:text-black duration-300 ease-linear  rounded-full text-white font-[600]">
                  About me
                </button>
              </div>
              <div className="icons-container flex gap-4">
                <FaInstagram className="text-xl cursor-pointer hover:scale-110 hover:text-blue-400 duration-300 ease-linear 2xl:text-3xl scale-125" />
                <FaLinkedinIn className="text-xl cursor-pointer 2xl:text-3xl" />
                <FaXTwitter className="text-xl  cursor-pointer 2xl:text-3xl" />
              </div>
            </motion.div>
          </div>

          {/* <div className="small-icons bg-transparent border-2 border-black relative overflow-hidden flex flex-row  text-center justify-center items-center bottom-6 rounded-full ">
            <h1 className="myicons w-5 h-9       ">.</h1>
          </div> */}

          <br />
          <br />
          <br />
          <br />
          <br />
        </div>

        {/* cards */}
        <Cards />
       
        <SecondCard   />
        <BottomAroow />
        {/* <Portfolio /> */}
        {/* <Gridcontainer /> */}
        <Caresol />
        {/* <Blog /> */}
        <Contact />
      </div>
    </>
  );
};

export default Home;
