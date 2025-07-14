import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaQuoteRight } from "react-icons/fa";
import { RiDoubleQuotesR } from "react-icons/ri";
import { RiDoubleQuotesL } from "react-icons/ri";
import { SiAntdesign } from "react-icons/si";
import { IoLogoReact } from "react-icons/io5";
import { IoLogoApple } from "react-icons/io";
import { IoIosDesktop } from "react-icons/io";
import { SiAnydesk } from "react-icons/si";
import { motion, useInView, useAnimation } from "framer-motion";
import { useContext } from "react";
import { Darkcontext } from "../Context/Mycontext";
import { useEffect } from "react";
import { useRef } from "react";

const Caresol = () => {
  const darkmode = useContext(Darkcontext);
  const { mouseenterhandler, mouseremovehandler } = useContext(Darkcontext);
  const ref = useRef(null);
  const myref = useRef(null);
  const isinview = useInView(ref, myref, { once: true });
  const maincontrol = useAnimation();

  useEffect(() => {
    if (isinview) {
      maincontrol.start("visible");
    }
  }, [isinview]);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const mydata = [
    {
      id: 1,
      description:
        "Dizme is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals",
      ime: "https://randomuser.me/api/portraits/men/47.jpg",
      name: "vivek",
      title: "WebDesgnier",
    },
    {
      id: 2,
      name: "nilkant",
      description:
        "Dizme is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals",
      ime: "https://randomuser.me/api/portraits/men/45.jpg",
      title: "Abc Group",
    },
    {
      id: 3,
      name: "Arun",
      description:
        "Dizme is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals",
      ime: "https://randomuser.me/api/portraits/men/49.jpg",
      title: "Nothing",
    },
    {
      id: 4,
      name: "james",
      description:
        "Dizme is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals",
      ime: "https://randomuser.me/api/portraits/men/50.jpg",
      title: "Angular",
    },
  ];
  return (
    <>
      {/* services */}
      <div
        className={`main-container h-full lg:min-h-screen ${
          darkmode.dark ? "bg-gray-800" : "bg-white"
        }   w-full`}
        id="services"
      >
        <div className="services-headings text-center mb-12 2xl:mb-20 overflow-hidden">
          <motion.h1
            className=" text-2xl lg:text-3xl 2xl:text-3xl text-red-700 font-Jost font-bold mb-3"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut", stiffness: 90 }}
            onMouseEnter={mouseenterhandler}
            onMouseLeave={mouseremovehandler}
          >
            Services
          </motion.h1>
          <motion.h2
            className="text-2xl   lg:text-4xl font-[600]  font-Jost 2xl:text-5xl mb-5"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, ease: "easeInOut", stiffness: 90 }}
            onMouseEnter={mouseenterhandler}
            onMouseLeave={mouseremovehandler}
          >
            What i do for clients
          </motion.h2>
          <motion.p
            className=" text-xl lg:text-2xl 2xl:text-3xl font-Jost text-start px-5 lg:px-12 font-semibold"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.1, ease: "easeInOut", stiffness: 90 }}
          >
            We’re offering <br />
            Reliable & Consistent{" "}
            <span className=" text-red-700">IT-Solutions</span>{" "}
          </motion.p>
        </div>
        <div className="services-main-card-container container grid lg:grid-cols-3 gap-16  lg:px-12 px-5   place-items-center items-center ">
          <div className="first-card">
            <motion.div
              className="img-container mb-3"
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, ease: "easeInOut", stiffness: 90 }}
              onMouseEnter={mouseenterhandler}
              onMouseLeave={mouseremovehandler}
            >
              <img src=".././logo1.png" alt="" />
            </motion.div>
            <motion.h1
              className=" lg:text-3xl 2xl:text-3xl  font-bold font-Jost mb-3"
              initial={{ opacity: 0, y: 170 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.3, ease: "easeInOut", stiffness: 90 }}
              onMouseEnter={mouseenterhandler}
              onMouseLeave={mouseremovehandler}
            >
              UI & Graphic <br /> Design
            </motion.h1>
            <motion.p
              className=" text-xl 2xl:text-2xl font-Jost mb-2"
              initial={{ opacity: 0, y: 170 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut", stiffness: 90 }}
              onMouseEnter={mouseenterhandler}
              onMouseLeave={mouseremovehandler}
            >
              We are using latest tool for design and develpoment, Like - HTML,
              CSS & SCSS.
            </motion.p>
          </div>
          <div className="first-card">
            <motion.div
              className="img-container mb-3"
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, ease: "easeInOut", stiffness: 90 }}
              onMouseEnter={mouseenterhandler}
              onMouseLeave={mouseremovehandler}
            >
              <img src=".././logo2.png" alt="" />
            </motion.div>
            <motion.h1
              className="  lg:text-3xl 2xl:text-2xl font-bold font-Jost mb-3"
              initial={{ opacity: 0, y: 170 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.3, ease: "easeInOut", stiffness: 90 }}
              onMouseEnter={mouseenterhandler}
              onMouseLeave={mouseremovehandler}
            >
              Website <br /> Development
            </motion.h1>
            <motion.p
              className=" text-xl 2xl:text-2xl font-Jost mb-2"
              initial={{ opacity: 0, y: 170 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut", stiffness: 90 }}
            >
              In the process of Web Development, Developers build web pages and
              applications for either the Intranet, a private network.
            </motion.p>
          </div>
          <div className="first-card">
            <motion.div
              className="img-container mb-3"
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, ease: "easeInOut", stiffness: 90 }}
              onMouseEnter={mouseenterhandler}
              onMouseLeave={mouseremovehandler}
            >
              <img src=".././logo3.png" alt="" />
            </motion.div>
            <motion.h1
              className=" lg:text-3xl 2xl:text-2xl  font-bold font-Jost mb-3"
              initial={{ opacity: 0, y: 170 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.3, ease: "easeInOut", stiffness: 90 }}
              onMouseEnter={mouseenterhandler}
              onMouseLeave={mouseremovehandler}
            >
              Application <br /> Development
            </motion.h1>
            <motion.p
              className=" text-xl 2xl:text-2xl font-Jost mb-2"
              initial={{ opacity: 0, y: 170 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut", stiffness: 90 }}
              onMouseEnter={mouseenterhandler}
              onMouseLeave={mouseremovehandler}
            >
              A professional application developer is an impeccable source code
              creator of the software. Based on the specialized field.
            </motion.p>
          </div>
          <div className="first-card">
            <motion.div
              className="img-container mb-3"
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, ease: "easeInOut", stiffness: 90 }}
            >
              <img src=".././logo4.png" alt="" />
            </motion.div>
            <motion.h1
              className=" lg:text-3xl 2xl:text-3xl  font-bold font-Jost mb-3"
              initial={{ opacity: 0, y: 170 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.3, ease: "easeInOut", stiffness: 90 }}
            >
              Software <br /> Development
            </motion.h1>
            <motion.p
              className=" text-xl 2xl:text-2xl font-Jost mb-2"
              initial={{ opacity: 0, y: 170 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut", stiffness: 90 }}
            >
              The stages are often referred to collectively as the software
              development life-cycle.
            </motion.p>
          </div>
          <div className="first-card">
            <motion.div
              className="img-container mb-3"
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, ease: "easeInOut", stiffness: 90 }}
            >
              <img src=".././logo5.png" alt="" />
            </motion.div>
            <motion.h1
              className=" lg:text-3xl 2xl:text-3xl font-bold font-Jost mb-3"
              initial={{ opacity: 0, y: 170 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.3, ease: "easeInOut", stiffness: 90 }}
            >
              Development <br /> Outsourcing
            </motion.h1>
            <motion.p
              className=" text-xl 2xl:text-2xl font-Jost mb-2"
              initial={{ opacity: 0, y: 170 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut", stiffness: 90 }}
            >
              Since the outsourced workforce are already experienced and
              well-versed in the technologies and tools required of the
              development process.
            </motion.p>
          </div>
          <div className="first-card">
            <motion.div
              className="img-container mb-3"
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, ease: "easeInOut", stiffness: 90 }}
            >
              <img src=".././logo6.png" alt="" />
            </motion.div>
            <motion.h1
              className="  lg:text-3xl 2xl:text-3xl font-bold font-Jost mb-3"
              initial={{ opacity: 0, y: 170 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.3, ease: "easeInOut", stiffness: 90 }}
            >
              Hosting & <br /> Deployment
            </motion.h1>
            <motion.p
              className=" text-xl 2xl:text-2xl font-Jost mb-2"
              initial={{ opacity: 0, y: 170 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut", stiffness: 90 }}
            >
              Deployment is an optional stage in software management where the
              software is installed on workstations or hosted as an application
              and accessible to others in a runtime state.
            </motion.p>
          </div>
        </div>

        <br />
        <br />
        <br />

        {/* //testimonal */}
        <div className="slider-headings flex flex-col justify-center items-center text-center md:p-0 p-4 relative overflow-hidden">
          <div className="slider-items ">
            <div className="headings mb-2 2xl:mb-5">
              <motion.h1
                className="text-2xl font-bold  text-red-700 font-Jost 2xl:text-3xl"
                initial={{ scale: 1.9 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 1.3, ease: "easeInOut", stiffness: 90 }}
                onMouseEnter={mouseenterhandler}
            onMouseLeave={mouseremovehandler}
              >
                Testimonials
              </motion.h1>
            </div>
            <div className="second-hedings mb-2 2xl:mb-5">
              <motion.h2
                className="md:text-3xl 2xl:text-4xl text-xl font-bold font-JosefinSans"
                initial={{ scale: 1.9 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut", stiffness: 90 }}
                onMouseEnter={mouseenterhandler}
            onMouseLeave={mouseremovehandler}
              >
                What My Clients Say
              </motion.h2>
            </div>
            <div className="para mb-2 2xl:mb-5">
              <motion.p
                className=" font-JosefinSans text-xl  2xl:text-2xl"
                initial={{ scale: 1.9 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut", stiffness: 90 }}
                onMouseEnter={mouseenterhandler}
            onMouseLeave={mouseremovehandler}
              >
                Most common methods for designing websites that work well on
                desktop <br /> is responsive and adaptive design
              </motion.p>
            </div>
          </div>
          <div className="img-containers absolute  right-0 bottom-7 lg:block hidden">
            <img src=".././testing.png" alt="" />
          </div>
          <motion.div className="images-containers absolute lg:block hidden   top-0 left-0  "
          initial={{opacity:0,x:-200}}
          whileInView={{opacity:1,x:0}}
          transition={{duration:1.3,ease:"easeInOut",stiffness:90}}
          >
            <img src=".././smbg.png" alt="" />
          </motion.div>
        </div>
        <div className="caresol-main relative">
          <Carousel
            showDots={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            infinite={true}
            removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
            responsive={responsive}
          >
            {mydata.map((items) => (
              <motion.div
                className="caresol-container flex flex-col text-center justify-center items-center p-3 "
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 1.3, ease: "easeInOut", stiffness: 90 }}
                onMouseEnter={mouseenterhandler}
                onMouseLeave={mouseremovehandler}
                key={items.id}
              >
                <div
                  className="items   lg:shadow-none   md:w-3/5   h-96  mb-10 flex flex-col justify-center items-center md:p-6 p-3  rounded-md "
                 
                >
                  <div className="icons mb-3 2xl:mb-12">
                    <RiDoubleQuotesL className="  text-5xl 2xl:text-5xl text-red-700 " />
                  </div>

                  <div className="second-headings mb-3 2xl:mb-6">
                    <h3 className=" font-Jost text-xl 2xl:text-2xl">{items.description}</h3>
                  </div>
                  <div className="headings flex-container flex gap-4 justify-center items-center ">
                    <div className="img-containers mb-3 2xl:mb-6">
                      <img
                        src={items.ime}
                        className=" w-16 2xl:w-20  rounded-full"
                        alt=""
                      />
                    </div>
                    <div className="myitems ">
                      <h3 className="mb-1 font-Jost  font-bold text-xl 2xl:text-3xl">
                        {items.name}
                      </h3>
                      <h3 className="mb-2 2xl:text-2xl">{items.title}</h3>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </Carousel>

          <div className="images-container" ref={ref}>
            <motion.div
              className="first-img absolute   top-10  left-28 lg:block hidden"
              variants={{
                hidden: { opacity: 0, scale: 0 },
                visible: { opacity: 1, scale: 1 },
              }}
              initial="hidden"
              animate={maincontrol}
              transition={{ duration: 1.5, ease: "easeIn" }}
              exit={{ opacity: 0, scale: 0 }}
              onMouseEnter={mouseenterhandler}
              onMouseLeave={mouseremovehandler}
            >
              <img
                src="https://randomuser.me/api/portraits/women/81.jpg "
                className=" w-14 2xl:w-20 rounded-full"
                alt=""
              />
            </motion.div>
            <motion.div
              className="second-mg absolute   top-28   left-48 lg:block hidden"
              variants={{
                hidden: { opacity: 0, scale: 0 },
                visible: { opacity: 1, scale: 1 },
              }}
              initial="hidden"
              animate={maincontrol}
              transition={{ duration: 1.5, ease: "easeIn" }}
              exit={{ opacity: 0, scale: 0 }}
              onMouseEnter={mouseenterhandler}
              onMouseLeave={mouseremovehandler}
            >
              <img
                src="https://randomuser.me/api/portraits/women/60.jpg"
                className="w-14  2xl:w-20 rounded-full"
                alt=""
              />
            </motion.div>
            <motion.div
              className="third-mg absolute    bottom-24  left-10  lg:block hidden"
              variants={{
                hidden: { opacity: 0, scale: 0 },
                visible: { opacity: 1, scale: 1 },
              }}
              initial="hidden"
              animate={maincontrol}
              transition={{ duration: 1.5, ease: "easeIn" }}
              exit={{ opacity: 0, scale: 0 }}
            >
              <img
                src="https://randomuser.me/api/portraits/men/88.jpg"
                className="w-14  2xl:w-20 rounded-full"
                alt=""
              />
            </motion.div>
            <div className="third-mg absolute    bottom-24  left-56  lg:block hidden">
              <img
                src="https://randomuser.me/api/portraits/men/1.jpg"
                className="w-8 2xl:w-20 rounded-full"
                alt=""
              />
            </div>
            <motion.div
              className="third-mg absolute  top-16  right-32  lg:block hidden"
              variants={{
                hidden: { opacity: 0, scale: 0 },
                visible: { opacity: 1, scale: 1 },
              }}
              initial="hidden"
              animate={maincontrol}
              transition={{ duration: 1.5, ease: "easeIn" }}
              exit={{ opacity: 0, scale: 0 }}
              onMouseEnter={mouseenterhandler}
              onMouseLeave={mouseremovehandler}
            >
              <img
                src="https://randomuser.me/api/portraits/women/40.jpg"
                className="w-14 2xl:w-20 rounded-full"
                alt=""
              />
            </motion.div>
            <motion.div
              className="third-mg absolute   top-60  right-24  lg:block hidden"
              variants={{
                hidden: { opacity: 0, scale: 0 },
                visible: { opacity: 1, scale: 1 },
              }}
              initial="hidden"
              animate={maincontrol}
              transition={{ duration: 1.5, ease: "easeIn" }}
              exit={{ opacity: 0, scale: 0 }}
              onMouseEnter={mouseenterhandler}
              onMouseLeave={mouseremovehandler}
            >
              <img
                src="https://randomuser.me/api/portraits/women/76.jpg"
                className="w-14 2xl:w-20 rounded-full"
                alt=""
              />
            </motion.div>
            <div className="circle absolute   top-20  right-80  lg:block hidden ">
              <span className=" bg-yellow-400     px-7 py-4 rounded-full  "></span>
            </div>
            <motion.div
              className="circle absolute   top-36  left-20 lg:block hidden"
              variants={{
                hidden: { opacity: 0, scale: 0 },
                visible: { opacity: 1, scale: 1 },
              }}
              initial="hidden"
              animate={maincontrol}
              transition={{ duration: 1.5, ease: "easeIn" }}
              exit={{ opacity: 0, scale: 0 }}
              onMouseEnter={mouseenterhandler}
              onMouseLeave={mouseremovehandler}
            >
              <span className=" bg-lime-400     px-3 py-0 2xl:px-6 2xl:py-3 rounded-full  "></span>
            </motion.div>
            <div className="circle absolute  top-40  right-24  lg:block hidden">
              <span className=" bg-blue-400     px-3 py-0 rounded-full  "></span>
            </div>
         
          </div>
        </div>
        <br />
        <br />
        <div className="forimges ">
          {/* <div className="bottom-card-section mx-w-[1200px] grid lg:grid-cols-4 md:grid-cols-2 mx-auto  gap-10 text-center  p-16 items-center overflow-hidden ">
            <motion.div
              className="cards-items text-center border-solid border-2  p-9 shadow  "
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              animate={maincontrol}
              transition={{ duration: 1.7, ease: "easeIn" }}
              exit={{ opacity: 0, x: 20 }}
              onMouseEnter={mouseenterhandler}
              onMouseLeave={mouseremovehandler}
            >
              <img src=".././sm1.png" className="" alt="" />
            </motion.div>
            <motion.div
              className="cards-items border-solid border-2 p-9 shadow"
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              animate={maincontrol}
              transition={{ duration: 1.7, ease: "easeIn" }}
              exit={{ opacity: 0, x: 20 }}
              onMouseEnter={mouseenterhandler}
              onMouseLeave={mouseremovehandler}
            >
              <img src=".././sm2.png" alt="" />
            </motion.div>
            <motion.div
              className="cards-items border-solid border-2 p-9 shadow"
              variants={{
                hidden: { opacity: 0, x: -40 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              animate={maincontrol}
              transition={{ duration: 1.7, ease: "easeIn" }}
              exit={{ opacity: 0, x: -20 }}
            >
              <img src=".././sm3.png" alt="" />
            </motion.div>
            <motion.div
              className="cards-items border-solid border-2 p-9 shadow"
              variants={{
                hidden: { opacity: 0, x: -40 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              animate={maincontrol}
              transition={{ duration: 1.7, ease: "easeIn" }}
              exit={{ opacity: 0, x: -20 }}
              onMouseEnter={mouseenterhandler}
              onMouseLeave={mouseremovehandler}
            >
              <img src=".././sm4.png" alt="" />
            </motion.div>
            <motion.div
              className="cards-items border-solid border-2 p-9 shadow"
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              animate={maincontrol}
              transition={{ duration: 1.7, ease: "easeIn" }}
              exit={{ opacity: 0, x: 20 }}
              onMouseEnter={mouseenterhandler}
              onMouseLeave={mouseremovehandler}
            >
              <img src=".././sm5.png" alt="" />
            </motion.div>
            <motion.div
              className="cards-items border-solid border-2 p-9 shadow"
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              animate={maincontrol}
              transition={{ duration: 1.9, ease: "easeIn" }}
              exit={{ opacity: 0, x: 20 }}
              onMouseEnter={mouseenterhandler}
              onMouseLeave={mouseremovehandler}
            >
              <img src=".././sm6.png" alt="" />
            </motion.div>
            <motion.div
              className="cards-items border-solid border-2 p-9 shadow"
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              animate={maincontrol}
              transition={{ duration: 1.9, ease: "easeIn" }}
              exit={{ opacity: 0, x: -20 }}
              onMouseEnter={mouseenterhandler}
              onMouseLeave={mouseremovehandler}
            >
              <img src=".././sm7.png" alt="" />
            </motion.div>
            <motion.div
              className="cards-items border-solid border-2 p-9 shadow"
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              animate={maincontrol}
              transition={{ duration: 1.9, ease: "easeIn" }}
              exit={{ opacity: 0, x: -20 }}
              onMouseEnter={mouseenterhandler}
              onMouseLeave={mouseremovehandler}
            >
              <img src=".././sm8.png" alt="" />
            </motion.div>
          </div> */}
          
        </div>
      </div>
    </>
  );
};

export default Caresol;
