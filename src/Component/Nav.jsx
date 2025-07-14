import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";
import { motion } from "framer-motion";
import { MdOutlineDarkMode } from "react-icons/md";
import { useContext } from "react";
import { Darkcontext } from "../Context/Mycontext";
import { Link } from "react-scroll";
const Nav = ({ openmodel, model }) => {
  const [toggle, setToggle] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const darkmode = useContext(Darkcontext);
  const { mouseenterhandler, mouseremovehandler } = useContext(Darkcontext);

  console.log(darkmode);
  const change = () => {
    if (toggle === false) {
      setToggle(true);
    } else if (toggle === true) {
      setToggle(false);
    }
  };
  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);



  // const changetoggle=()=>{
  //   mycontext.setdark(true)
  //  }

  const toggledarkmode = () => {
    darkmode.setdark(!darkmode.dark);
  };

  return (
    <>
      {/* <header
        className={`  lg:p-0  top-0  p-4 fixed z-20 duration-200  ease-linear bg-transparent  w-full ${
          scrolling  ? "bg-white text-black" : " " 
        } ${(darkmode.dark && scrolling) ? "bg-gray-800 text-white":" bg-transparent"}  `}
      > */}
      <header
        className={`lg:p-0 top-0 p-4 fixed z-20 duration-200 ease-linear w-full ${
          scrolling && !darkmode.dark ? "bg-white text-black" : ""
        } ${darkmode.dark && scrolling ? "bg-gray-800 text-white" : ""}`}
      >
        <div className="  flex     justify-between  lg:px-12   items-center  ">
          <div
            className="logo "
            onMouseEnter={mouseenterhandler}
            onMouseLeave={mouseremovehandler}
           
          >
            {darkmode.dark ? (
              <img src="./T97.png" className="w-20 " alt="" />
            ) : (
              <img src="./T97white.png" className="w-20 " alt="" />
            )}

            {/* <h1 className=" text-2xl  font-serif">Tag <span className=" text-red-700">97</span></h1> */}
          </div>
          <div className="links hidden lg:block ">
            <ul className="flex  gap-10 p-4 items-center ">
              <motion.li
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeInOut", stiffness: 90 }}
                onMouseEnter={mouseenterhandler}
                onMouseLeave={mouseremovehandler}
              >
                <Link
                  className="font-Jost   font-[600] cursor-pointer"
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={1000}
                >
                  Home
                </Link>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeInOut", stiffness: 90 }}
                onMouseEnter={mouseenterhandler}
                onMouseLeave={mouseremovehandler}
              >
                <Link
                  className="font-Jost font-[600]   cursor-pointer"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={1000}
                >
                  About
                </Link>
              </motion.li>
              {/* <motion.li
                initial={{opacity:0,y:50}}
                whileInView={{opacity:1,y:0}}
                transition={{duration:1.4,ease:"easeInOut",stiffness:90}}
              
              >
                <Link className=" font-Jost font-[600] cursor-pointer" to="portfolio"
                 spy={true}
                 smooth={true}
                 offset={-100}
                 duration={1000}
                
                >
                  Portfolio
                </Link>
              </motion.li> */}
              <motion.li
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.6, ease: "easeInOut", stiffness: 90 }}
                onMouseEnter={mouseenterhandler}
                onMouseLeave={mouseremovehandler}
              >
                <Link
                  className=" font-Jost font-[600]   cursor-pointer"
                  to="services"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={1000}
                >
                  Services
                </Link>
              </motion.li>

              <motion.li
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.9, ease: "easeInOut", stiffness: 90 }}
                onMouseEnter={mouseenterhandler}
                onMouseLeave={mouseremovehandler}
              >
                <Link
                  className=" font-Jost font-[600]   cursor-pointer"
                  to="Contact"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={1000}
                >
                  Contact
                </Link>
              </motion.li>
              <div className="btn">
                <button
                  className="border-solid border-2 border-red-700 font-Jost font-medium px-4 py-2 rounded-full"
                  onClick={() => openmodel(!model)}
                >
                  Download Cv
                </button>
              </div>
              <div className="darkmode">
                <MdOutlineDarkMode
                  className=" text-2xl cursor-pointer"
                  onClick={toggledarkmode}
                  onMouseEnter={mouseenterhandler}
                  onMouseLeave={mouseremovehandler}
                />
              </div>
            </ul>
          </div>
          <div className="burgermenulogo lg:hidden block">
            {toggle ? (
              <IoCloseSharp className="text-2xl" onClick={change} />
            ) : (
              <GiHamburgerMenu className="text-2xl" onClick={change} />
            )}
          </div>
          {/* sidebar */}
          <div
            className={`links block lg:hidden fixed transition duration-300 ease-linear ${
              darkmode.dark
                ? "bg-gray-800 duration-300 ease-linear transition-all  text-white"
                : " bg-white text-black transition-all  duration-300 ease-linear"
            }   top-14 ${toggle ? "left-0" : "left-[-100%]"}  h-72 z-20 w-full`}
          >
            <ul className="flex flex-col  gap-5 p-4 items-center ">
              <li>
                <Link
                  className="font-Jost font-[600] cursor-pointer"
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={1000}
                  onClick={() => setToggle(!toggle)}
                >
                  Home
                </Link>
              </li>
              <li onClick={() => setToggle(false)}>
                <Link
                  className="font-Jost font-[600] cursor-pointer"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={1000}
                  onClick={() => setToggle(!toggle)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className=" font-Jost font-[600] cursor-pointer"
                  to="services"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={1000}
                  onClick={() => setToggle(!toggle)}
                >
                  Services
                </Link>
              </li>
        
              <div className="btn" onClick={() => setToggle(!toggle)}>
                <button
                  className="border-solid border-2 border-red-400 hover:bg-white hover:text-black duration-300 ease-linear px-4 py-2 rounded-full"
                  onClick={() => openmodel(!model)}
                >
                  Download Cv
                </button>
              </div>
              <div className="darkmode">
                <MdOutlineDarkMode
                  className=" text-2xl cursor-pointer"
                  onClick={toggledarkmode}
                />
              </div>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Nav;
