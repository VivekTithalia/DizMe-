import React from "react";
import { PiTarget } from "react-icons/pi";
import { LuPaintbrush2 } from "react-icons/lu";
import { MdLightbulbOutline } from "react-icons/md";
import { easeIn, motion } from "framer-motion";
import { Darkcontext } from "../Context/Mycontext";
import { useContext } from "react";

const Cards = () => {
  const {mouseenterhandler,mouseremovehandler} =   useContext(Darkcontext)
  const yourdarkmode=useContext(Darkcontext)

  console.log(yourdarkmode);
  return (
    <>
     

      <div className={`main-container grid lg:grid-cols-3 ${yourdarkmode.dark ? " bg-gray-800" :"bg-white"}  md:grid-cols-1 lg:max-w-[1200px]  xl:max-w-[1300px] 2xl:max-w-[1800px] 3xl:max-w-[2500px] gap-8 mx-auto text-center place-items-center  p-8 overflow-hidden`}>
        <motion.div className="items container"
        initial={{opacity:0,x:180}}
        whileInView={{opacity:1, x:0}}
        exit={{opacity:0,x:50}}
        transition={{duration:1, ease:"easeInOut"}}
        onMouseEnter={mouseenterhandler}
        onMouseLeave={mouseremovehandler}
        
        >
          <div className="icons flex justify-center mb-3 2xl:mb-6 w-full ">
            <PiTarget className=" text-3xl 2xl:text-4xl    shadow-lg rounded-full  " />
          </div>
          <div className="cardheading 2xl:mb-6">
            <h2 className="text-2xl 2xl:text-3xl font-semibold font-Jost">Pixel Perfect</h2>
          </div>
          <div className="para font-Jost 2xl:text-2xl">
            <p>
              Most common methods for designing websites that work well on
              desktop is responsive and adaptive design.
            </p>
          </div>
        </motion.div>
        <motion.div className="items container"
        initial={{opacity:0, scale:0}}
        whileInView={{opacity:1,scale:1}}
        exit={{opacity:0,scale:0}}
        transition={{duration:1, ease:"easeIn"}}
        onMouseEnter={mouseenterhandler}
        onMouseLeave={mouseremovehandler}
        >
          <div className="icons flex justify-center mb-3 2xl:mb-6 w-full ">
            <LuPaintbrush2 className=" text-3xl 2xl:text-4xl    shadow-lg rounded-full" />
          </div>
          <div className="cardheading 2xl:mb-6">
            <h2 className="text-2xl font-semibold font-Jost 2xl:text-3xl">High Quality</h2>
          </div>
          <div className="para font-Jost 2xl:text-2xl">
            <p className=" mypara">
              Most common methods for designing websites that work well on
              desktop is responsive and adaptive design.
            </p>
          </div>
        </motion.div>
        <motion.div className="items container"
        
        initial={{opacity:0,x:-50}}
        whileInView={{opacity:1, x:0}}
        exit={{opacity:0,x:-50}}
        transition={{duration:1, ease:"easeIn"}}
        onMouseEnter={mouseenterhandler}
        onMouseLeave={mouseremovehandler}
        >
        <div className="icons flex justify-center mb-3 2xl:mb-6 w-full ">
        <MdLightbulbOutline className=" text-3xl 2xl:text-4xl    shadow-lg rounded-full" />
          </div>
          <div className="cardheading  2xl:mb-6">
            <h2 className="text-2xl font-semibold font-Jost 2xl:text-3xl">Awesome Idea</h2>
          </div>
          <div className="para font-Jost 2xl:text-2xl">
            <p>
              Most common methods for designing websites that work well on
              desktop is responsive and adaptive design.
            </p>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Cards;
