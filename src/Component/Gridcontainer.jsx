import React from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useRef } from "react";
import { SiAntdesign } from "react-icons/si";
import { IoLogoReact } from "react-icons/io5";
import { IoLogoApple } from "react-icons/io";
import { IoIosDesktop } from "react-icons/io";
import { SiAnydesk } from "react-icons/si";
import ProgressBar from "@ramonak/react-progress-bar";

const Gridcontainer = () => {
  const ref = useRef(null);
  const myref = useRef(null);
  const isinview = useInView(ref, myref, { once: true });
  const maincontrol = useAnimation();

  useEffect(() => {
    if (isinview) {
      maincontrol.start("visible");
    }
  }, [isinview]);

  return (
    <>
      <div className="first-gridcontainer md:flex justify-center items-center md:gap-7 gap-y-10 text-center">
        <div className="gird items">
          <h1 className="text-xl font-Jost">All</h1>
        </div>
        <div className="gird items">
          <h1 className="text-xl font-Jost">Youtube</h1>
        </div>
        <div className="gird items">
          <h1 className="text-xl font-Jost">Soundcloud</h1>
        </div>
        <div className="gird items">
          <h1 className="text-xl font-Jost">Popup</h1>
        </div>
      </div>
      {/* gird-container */}
      <div className="second-mainimagecontainer  max-w-[1200px] mx-auto grid lg:grid-cols-3   gap-5 p-5">
        <div className="imgchild-container  row-span-2 rounded-md ">
          <div className="img-container overflow-hidden">
            <img
              src="../public/no1.jpg"
              className=" w-full hover:scale-110 duration-500 ease-linear rounded-xl"
              alt=""
            />
          </div>
          <div className="small-headings lg:hidden block">
            <h1 className=" font-bold ">Mockupshape</h1>

            <h2 className=" text-gray-400">YouTube</h2>
          </div>
        </div>
        <div className="imgchild-container   mx-auto rounded-md">
          <div className="img-container overflow-hidden ">
            <img
              src="../public/no2.jpg"
              className="  hover:scale-110 duration-500 ease-out w-full rounded-xl"
              alt=""
            />
          </div>
          <div className="small-headings lg:hidden block">
            <h1 className=" font-bold">AveBottle</h1>

            <h2 className=" text-gray-400">Vimeo</h2>
          </div>
        </div>
        <div className="imgchild-container   row-span-2 rounded-md ">
          <div className="img-container overflow-hidden">
            <img
              src="../public/no3.jpg"
              className=" hover:scale-110 duration-500 ease-out  w-full rounded-xl"
              alt=""
            />
          </div>
          <div className="small-headings lg:hidden block">
            <h1 className=" font-bold">MagicCloud</h1>

            <h2 className=" text-gray-400">SoundCloud</h2>
          </div>
        </div>
        <div className="imgchild-container   row-span-2   mx-auto rounded-md">
          <div className="img-container  overflow-hidden  ">
            <img
              src="../public/no4.jpg"
              className=" hover:scale-110 duration-500 ease-out  w-full rounded-xl"
              alt=""
            />
          </div>
          <div className="small-headings lg:hidden block">
            <h1 className=" font-bold">BlueLeon</h1>

            <h2 className=" text-gray-400">PopUp</h2>
          </div>
        </div>
        <div className="imgchild-container  mx-auto rounded-md">
          <div className="img-container overflow-hidden ">
            <img
              src="../public/no5.jpg"
              className=" hover:scale-110 duration-500 ease-out  w-full rounded-xl"
              alt=""
            />
          </div>
          <div className="small-headings lg:hidden block">
            <h1 className=" font-bold">ArtStone</h1>

            <h2 className=" text-gray-400">popup</h2>
          </div>
        </div>
        <div className="imgchild-container  mx-auto rounded-md ">
          <div className="img-container overflow-hidden ">
            <img
              src="../public/no6.jpg"
              className=" hover:scale-110 duration-500 ease-out  w-full rounded-xl"
              alt=""
            />
          </div>
          <div className="small-headings lg:hidden block">
            <h1 className=" font-bold">GloabEveluation</h1>

            <h2 className=" text-gray-400">Detail</h2>
          </div>
        </div>
      </div>
      {/* grid-ends */}
      <div
        className="third-container  lg:flex  justify-around gap-10 p-14 items-center"
        ref={ref}
      >
        <motion.div
          className="third-items"
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={maincontrol}
          transition={{ duration: 1.5, ease: "easeIn" }}
          exit={{ opacity: 0, y: 75 }}
        >
          <div className="headings mb-3 lg:text-start text-center">
            <h1 className=" text-red-700 text-xl font-bold font-JosefinSans">
              Design is life
            </h1>
          </div>
          <div className="second-heading mb-3">
            <h1 className="md:text-3xl text-xl font-Jost font-bold  lg:text-start text-center ">
              I Develop Skills Regularly <br /> to Keep Me Update
            </h1>
          </div>
          <div className="third-para mb-3  lg:text-start text-center">
            <p className=" text-gray-500 font-JosefinSans">
              Most common methods for designing websites that work <br /> well
              on desktop is responsive and adaptive design
            </p>
            <br />
            <div className="progess bar">
              <div className="items  mb-3">
                <h1 className="  font-semibold font-JosefinSans">Illustrator</h1>
              </div>
              <motion.div className="div">
                {isinview ? (
                  <ProgressBar
                    bgColor="orange"
                    animateOnRender={true}
                    completed={85}
                  />
                ) : (
                  ""
                )}
              </motion.div>

              <div className="second-progess mb-3">
                <h1 className=" font-semibold font-JosefinSans">Photoshop</h1>
              </div>
              <motion.div>
                {isinview ? (
                  <ProgressBar
                    bgColor="green"
                    animateOnRender={true}
                    completed={95}
                  />
                ) : (
                  ""
                )}
              </motion.div>
              <div className="third-progress mb-3">
                <h1 className=" font-semibold font-JosefinSans">Figma</h1>
              </div>
              <motion.div>
                {isinview ? (
                  <ProgressBar
                    bgColor="purple"
                    animateOnRender={true}
                    completed={75}
                  />
                ) : (
                  ""
                )}
              </motion.div>
            </div>
            <br />
            <br />
          </div>
        </motion.div>
        <div className="third-items-img flex flex-col justify-center items-center ">
          <div className="third-img ">
            <img src="../public/third.jpg" className="w-96" alt="" />
          </div>
        </div>
      </div>

      {/* services */}

      <div className="services-container flex flex-col justify-center items-center md:p-0 p-4 relative">
        <div className="services-headings">
          <div className="services-headings mb-3 text-center ">
            <h2 className="text-2xl text-red-700 font-semibold  font-Jost ">
              Services
            </h2>
          </div>
          <div className="second-heaings mb-3 text-center">
            <h3 className="md:text-3xl text-xl font-bold font-Jost">
              What I Do for Clients
            </h3>
          </div>
          <div className="services-para mb-3 text-center ">
            <p className=" text-gray-900 font-JosefinSans">
              Most common methods for designing websites that work well on
              desktop <br /> is responsive and adaptive design
            </p>
          </div>
        </div>
        <motion.div
          className="img-scale-container absolute right-0 lg:block hidden"
          variants={{
            hidden: { opacity: 0, scale: 0 },
            visible: { opacity: 1, scale: 1 },
          }}
          initial="hidden"
          animate={maincontrol}
          transition={{ duration: 1.5, ease: "easeIn", delay: 0.2 }}
          exit={{ opacity: 0, scale: 0 }}
        >
          <img src="../public/scaleimg.png" alt="" />
        </motion.div>
      </div>
      <br />
      <br />
      {/* cards */}

      <div
        className="card-container grid  lg:grid-cols-2 max-w-[1200px] mx-auto  mb-5 p-4 "
        ref={myref}
      >
        <div className="cards-items md:flex  justify-center gap-8  md:p-14 p-4 text-center shadow-md m-3 rounded-md bg-white text-black  ">
          <motion.div
            className="icons-container   "
            variants={{
              hidden: { opacity: 0, x: 40 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={maincontrol}
            transition={{ duration: 2.0, ease: "easeIn" }}
            exit={{ opacity: 0, x: 40 }}
          >
            <SiAntdesign className=" md:text-4xl text-2xl" />
          </motion.div>
          <div className="heading">
            <h1 className="md:text-2xl text-xl  font-semibold  font-Jost">
              Creative Design
            </h1>
            <h2>
              start from{" "}
              <span className="text-red-400  font-bold md:text-2xl text-xl">
                $699
              </span>{" "}
            </h2>
            <p className="  md:p-7 p-2 font-JosefinSans">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              sapiente maiores porro eum saepe adipisci officia mollitia modi
              enim!, at atque ad nobis enim harum voluptate molestiae!
            </p>
          </div>
        </div>
        <div className="cards-items  md:flex  justify-center gap-8  md:p-14 p-4 text-center shadow-md m-3 rounded-md">
          <motion.div
            className="icons-container   text-start   "
            variants={{
              hidden: { opacity: 0, x: 40 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={maincontrol}
            transition={{ duration: 2.0, ease: "easeIn" }}
            exit={{ opacity: 0, x: 40 }}
          >
            <SiAnydesk className=" md:text-4xl text-2xl" />
          </motion.div>
          <div className="heading">
            <h1 className="md:text-2xl text-xl font-semibold  font-Jost">
              Graphic Design
            </h1>
            <h2>
              start from{" "}
              <span className="text-red-400  font-bold md:text-2xl text-xl">
                $699
              </span>{" "}
            </h2>
            <p className="  md:p-7 p-2 font-JosefinSans">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              sapiente maiores porro eum saepe adipisci officia mollitia modi
              enim!, at atque ad nobis enim harum voluptate molestiae!
            </p>
          </div>
        </div>
        <div className="cards-items md:flex  justify-center gap-8  md:p-14 p-4 text-center shadow-md m-3 rounded-md">
          <motion.div
            className="icons-container   md:text-start    "
            variants={{
              hidden: { opacity: 0, x: 40 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={maincontrol}
            transition={{ duration: 2.0, ease: "easeIn", delay: 0.2 }}
            exit={{ opacity: 0, x: 40 }}
          >
            <IoLogoApple className=" md:text-4xl text-xl" />
          </motion.div>
          <div className="heading">
            <h1 className="md:text-2xl text-xl  font-semibold font-Jost">UI/UX Design</h1>
            <h2>
              start from{" "}
              <span className="text-red-400  font-bold md:text-2xl text-xl">
                $799
              </span>{" "}
            </h2>
            <p className=" font-JosefinSans  md:p-7 p-2">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              sapiente maiores porro eum saepe adipisci officia mollitia modi
              enim!, at atque ad nobis enim harum voluptate molestiae!
            </p>
          </div>
        </div>
        <div className="cards-items md:flex  justify-center gap-8  md:p-14 p-4 text-center shadow-md m-3 rounded-md">
          <motion.div
            className="icons-container   text-start   "
            variants={{
              hidden: { opacity: 0, x: 40 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={maincontrol}
            transition={{ duration: 2.3, ease: "easeIn", delay: 0.2 }}
            exit={{ opacity: 0, x: 40 }}
          >
            <IoLogoReact className=" text-4xl" />
          </motion.div>
          <div className="heading">
            <h1 className="md:text-2xl text-xl  font-Jost font-semibold">Web Design</h1>
            <h2>
              start from{" "}
              <span className="text-red-400  font-bold md:text-2xl text-xl">
                $799
              </span>{" "}
            </h2>
            <p className="  md:p-7 p-1 font-JosefinSans">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              sapiente maiores porro eum saepe adipisci officia mollitia modi
              enim!, at atque ad nobis enim harum voluptate molestiae!
            </p>
          </div>
        </div>
        {/* <div className="forimges absolute top-0 " >
          <img src="../public/services.png  "  alt="" />
        </div> */}
      </div>
      <br />
      <br />
      <br />
      <div className="slider-headings flex flex-col justify-center items-center text-center md:p-0 p-4 relative">
        <div className="slider-items ">
          <div className="headings mb-2">
            <h1 className="text-2xl font-bold  text-red-700 font-Jost">
              Testimonials
            </h1>
          </div>
          <div className="second-hedings mb-2">
            <h2 className="md:text-3xl text-xl font-bold font-JosefinSans">
              What My Clients Say
            </h2>
          </div>
          <div className="para mb-2">
            <p className=" font-JosefinSans">
              Most common methods for designing websites that work well on
              desktop <br /> is responsive and adaptive design
            </p>
          </div>
        </div>
        <div className="img-containers absolute  right-0 bottom-7 lg:block hidden">
          <img src="../public/testing.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default Gridcontainer;
