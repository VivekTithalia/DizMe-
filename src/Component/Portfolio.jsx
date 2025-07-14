import React from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useRef } from "react";
import Gridcontainer from "./Gridcontainer";

const Portfolio = () => {
  const ref = useRef(null);
  const isinview = useInView(ref);
  const maincontrol = useAnimation();

  useEffect(() => {
    if (isinview) {
      maincontrol.start("visible");
    }
  }, [isinview]);

  return (
    <>
      <div
        className="main-container flex flex-col justify-center items-center relative  md:p-3 gap-x-5 mx-auto text-center mb-3"
        ref={ref}
       id="portfolio">
        <motion.div
          className="items "
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={maincontrol}
          transition={{ duration: 1.5, ease: "easeIn" }}
          exit={{ opacity: 0, y: 75 }}
        >
          <motion.div
            className="headings mb-3"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: "1" }}
          >
            <h1 className="text-2xl  text-red-700 font-Jost font-bold">Portfolio</h1>
          </motion.div>
          <div className="second-headings mb-3">
            <h1 className="md:text-3xl  text-xl font-Jost  font-bold ">My Amazing Works</h1>
          </div>
          <div className="para mb-3">
            <p className=" font-JosefinSans">
              Most common methods for designing websites that work well on{" "}
              <br /> desktop is responsive and adaptive design
            </p>
          </div>
        </motion.div>
        <motion.div className="scale-img absolute lg:block hidden left-10"
        
        variants={{
          hidden: { opacity: 0, scale: 0 },
          visible: { opacity: 1, scale:1 },
        }}
        initial="hidden"
        animate={maincontrol}
        transition={{ duration: 1.2, ease: "easeIn" }}
        exit={{ opacity: 0, scale:0 }}
        
        >
          <img src="../public/scale2img.png" alt="" />
        </motion.div>
      <Gridcontainer />
      </div>
    </>
  );
};

export default Portfolio;
