import React from "react";
import { PiTarget } from "react-icons/pi";
import { LuPaintbrush2 } from "react-icons/lu";
import { MdLightbulbOutline } from "react-icons/md";
import { motion } from "framer-motion"

const Cards = () => {
  return (
    <>
     <br />

      <div className="main-container grid lg:grid-cols-3 md:grid-cols-1 max-w-[1200px] gap-8 mx-auto text-center p-8 overflow-hidden">
        <motion.div className="items container"
        initial={{opacity:0,x:"-50%"}}
        animate={{opacity:1, x:"0"}}
        exit={{opacity:0,x:"-50%"}}
        transition={{duration:"1.2", ease:"easeIn"}}
        
        >
          <div className="icons flex justify-center mb-3 ">
            <PiTarget className=" text-3xl    shadow-lg rounded-full  " />
          </div>
          <div className="cardheading">
            <h2 className="text-2xl font-semibold font-Jost">Pixel Perfect</h2>
          </div>
          <div className="para font-JosefinSans">
            <p>
              Most common methods for designing websites that work well on
              desktop is responsive and adaptive design.
            </p>
          </div>
        </motion.div>
        <motion.div className="items container"
        initial={{opacity:0, scale:0}}
        animate={{opacity:1,scale:1}}
        exit={{opacity:0,scale:0}}
        transition={{duration:"1.2", ease:"easeIn"}}
        >
          <div className="icons flex justify-center mb-3 ">
            <LuPaintbrush2 className=" text-3xl" />
          </div>
          <div className="cardheading">
            <h2 className="text-2xl font-semibold font-Jost">High Quality</h2>
          </div>
          <div className="para font-JosefinSans">
            <p>
              Most common methods for designing websites that work well on
              desktop is responsive and adaptive design.
            </p>
          </div>
        </motion.div>
        <motion.div className="items container"
        
        initial={{opacity:0,x:"50%"}}
        animate={{opacity:1, x:"0"}}
        exit={{opacity:0,x:"50%"}}
        transition={{duration:"1.2", ease:"easeIn"}}
        >
        <div className="icons flex justify-center mb-3 ">
        <MdLightbulbOutline className=" text-3xl" />
          </div>
          <div className="cardheading">
            <h2 className="text-2xl font-semibold font-Jost">Awesome Idea</h2>
          </div>
          <div className="para font-JosefinSans">
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
