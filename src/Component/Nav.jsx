import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";


const Nav = () => {
  const [toggle, setToggle] = useState(false);
  const [scrolling, setScrolling] = useState(false);

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

  return (
    <>
      <header className={`  md:p-0  top-0  p-4 fixed z-20 duration-200  ease-linear bg-white w-full ${scrolling ? "bg-white shadow-md":"md:bg-transparent "}  ` }>
        <div className="  flex    justify-between  md:px-16  items-center  ">
          <div className="logo">
            <img src="../public/logo.png" className=" w-20" alt="" />
          </div>
          <div className="links hidden md:block ">
            <ul className="flex  gap-10 p-4 items-center ">
              <li>
                <NavLink className="font-Jost  font-[600]" to="/">Home</NavLink>
              </li>
              <li>
                <NavLink className="font-Jost font-[600]" to="/about" >About</NavLink>
              </li>
              <li>
                <NavLink className=" font-Jost font-[600]" to="/services">Services</NavLink>
              </li>
              <li className=" font-Jost font-[600]"> Blog</li>
              <div className="btn">
                <button className="border-solid border-2 border-red-700 font-Jost font-medium px-4 py-2 rounded-full">
                  Download Cv
                </button>
              </div>
            </ul>
          </div>
          <div className="burgermenulogo md:hidden block">
            {toggle ? (
              <IoCloseSharp className="text-2xl" onClick={change} />
            ) : (
              <GiHamburgerMenu className="text-2xl" onClick={change} />
            )}
          </div>
          {/* sidebar */}
          <div
            className={`links block md:hidden fixed bg-white text-black duration-300 ease-linear   top-14 ${
              toggle ? "left-0" : "left-[-100%]"
            }  h-72 z-20 w-full`}
          >
            <ul className="flex flex-col  gap-5 p-4 items-center ">
              <li>
                <NavLink to="/" onClick={() => setToggle(false)}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" onClick={() => setToggle(false)}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/services">Services</NavLink>
              </li>
              <li>Blog</li>
              <div className="btn">
                <button className="border-solid border-2 border-red-400 hover:bg-white hover:text-black duration-300 ease-linear px-4 py-2 rounded-full">
                  Download Cv
                </button>
              </div>
            </ul>
          </div>
        </div>
      </header>
     
      
     
    </>
  );
};

export default Nav;
