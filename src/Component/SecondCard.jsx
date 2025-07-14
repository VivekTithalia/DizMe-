import { motion, useInView, useAnimation } from "framer-motion";
import { MdOutlineDownloadDone } from "react-icons/md";
import { useContext } from "react";
import { Darkcontext } from "../Context/Mycontext";


const SecondCard = () => {
  // const darkmode=useContext(Darkcontext)
  const {mouseenterhandler,mouseremovehandler} =   useContext(Darkcontext)
  const yourdarkmode=useContext(Darkcontext)



  return (
    <>
      <motion.div
        className={`  secondhome-container  mb-5 lg:mb-0  h-full   ${yourdarkmode.dark ? "bg-gray-800 ":"bg-white"}  flex lg:flex-row flex-col gap-6   2xl:gap-20  container mx-auto  justify-center items-center overflow-hidden `}
        id="about"
        
        
      >
       
        <div className="left-div-seocnd   ">
          <motion.div className="headings lg:text-3xl  font-Jost   mb-4 2xl:mb-10 "
          initial={{opacity:0,y:-150}}
          whileInView={{opacity:1,y:0}}
          transition={{duration:1.3,stiffness:90,ease:"easeInOut"}}
        
          onMouseEnter={mouseenterhandler}
          onMouseLeave={mouseremovehandler}
          
          >
           <h1 className=" 2xl:mb-3 font-bold">Our Work Progress</h1>
          <h2 className="2xl:mb-3 font-bold"> Discover New Idea With Us</h2>
          <h3 className="2xl:mb-3  font-bold">  Imagination will take us everywhere</h3>
          </motion.div>
          <motion.div className="icons flex gap-6 w-full items-center 2xl:mb-5"
            initial={{opacity:0,x:-250}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:1.5,stiffness:90,ease:"easeInOut"}}
            onMouseEnter={mouseenterhandler}
            onMouseLeave={mouseremovehandler}
          
          >
          <MdOutlineDownloadDone className=" text-3xl  text-red-800  " />
          <h1 className=" md:text-2xl  font-JosefinSans ">Planning Based On Requirement</h1>
          </motion.div>
          <motion.div className="icons flex gap-6 w-full  items-center 2xl:mb-5"
            initial={{opacity:0,x:-260}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:1.7,stiffness:90,ease:"easeInOut"}}
            onMouseEnter={mouseenterhandler}
            onMouseLeave={mouseremovehandler}
          >
          <MdOutlineDownloadDone className=" text-3xl  text-red-800 mb-3" />
          <h1 className=" md:text-2xl font-JosefinSans ">System & Software Design</h1>
          </motion.div>
          <motion.div className="icons flex gap-6 items-center w-full 2xl:mb-5"
             initial={{opacity:0,x:-270}}
             whileInView={{opacity:1,x:0}}
             transition={{duration:1.9,stiffness:90,ease:"easeInOut"}}
             onMouseEnter={mouseenterhandler}
             onMouseLeave={mouseremovehandler}
          
          >
          <MdOutlineDownloadDone className=" text-3xl  text-red-800 mb-3" />
          <h1 className=" md:text-2xl font-JosefinSans ">Business Logic Implementation</h1>
          </motion.div>
          <motion.div className="icons flex gap-6 items-center w-full 2xl:mb-5"
             initial={{opacity:0,x:-280}}
             whileInView={{opacity:1,x:0}}
             transition={{duration:2,stiffness:90,ease:"easeInOut"}}
             onMouseEnter={mouseenterhandler}
             onMouseLeave={mouseremovehandler}
          >
          <MdOutlineDownloadDone className=" text-3xl  text-red-800 " />
          <h1 className=" md:text-2xl font-JosefinSans  ">Deliver Quality Product</h1>
          </motion.div>
          <motion.div className="icons flex gap-6 items-center w-full 2xl:mb-5"
             initial={{opacity:0,x:-290}}
             whileInView={{opacity:1,x:0}}
             transition={{duration:2.2,stiffness:90,ease:"easeInOut"}}
             onMouseEnter={mouseenterhandler}
             onMouseLeave={mouseremovehandler}
          
          >
          <MdOutlineDownloadDone className=" text-3xl  text-red-800 mb-3 2xl:mb-5" />
          <h1 className="md:text-2xl font-JosefinSans  ">Maintenance & Updates</h1>
          </motion.div>


        </div>
        <div className="right-div">
          <motion.img src=".././about.gif" alt=""  className=" w-full 2xl:w-[40rem]"
          initial={{opacity:0,y:100,scale:1.3}}
          whileInView={{opacity:1,y:0,scale:1.2,scale:1}}
          transition={{duration:1.3,ease:"easeInOut",stiffness:90}}
          onMouseEnter={mouseenterhandler}
          onMouseLeave={mouseremovehandler}
          
          
          />
        </div>
      </motion.div>
    </>
  );
};

export default SecondCard;
