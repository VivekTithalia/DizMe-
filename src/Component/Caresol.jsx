import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaQuoteRight } from "react-icons/fa";
import { RiDoubleQuotesR } from "react-icons/ri";
import { RiDoubleQuotesL } from "react-icons/ri";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useRef } from "react";

const Caresol = () => {
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
            <div className="caresol-container flex flex-col text-center justify-center items-center p-3 ">
              <div
                className="items  shadow-md lg:shadow-none   md:w-3/5   h-96  mb-10 flex flex-col justify-center items-center md:p-6 p-3  rounded-md "
                key={items.id}
              >
                <div className="icons mb-3">
                  <RiDoubleQuotesL className="  text-5xl text-red-700 " />
                </div>

                <div className="second-headings mb-3">
                  <h3 className=" font-Jost">{items.description}</h3>
                </div>
                <div className="headings flex-container flex gap-4 justify-center items-center ">
                  <div className="img-containers mb-3">
                    <img
                      src={items.ime}
                      className=" w-16  rounded-full"
                      alt=""
                    />
                  </div>
                  <div className="myitems ">
                    <h3 className="mb-1 font-Jost  font-bold text-xl">{items.name}</h3>
                    <h3 className="mb-2">{items.title}</h3>
                  </div>
                </div>
              </div>
            </div>
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
          >
            <img
              src="https://randomuser.me/api/portraits/women/81.jpg "
              className=" w-14 rounded-full"
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
          >
            <img
              src="https://randomuser.me/api/portraits/women/60.jpg"
              className="w-14 rounded-full"
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
              className="w-14 rounded-full"
              alt=""
            />
          </motion.div>
          <div className="third-mg absolute    bottom-24  left-56  lg:block hidden">
            <img
              src="https://randomuser.me/api/portraits/men/1.jpg"
              className="w-8 rounded-full"
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
          >
            <img
              src="https://randomuser.me/api/portraits/women/40.jpg"
              className="w-14 rounded-full"
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
          >
            <img
              src="https://randomuser.me/api/portraits/women/76.jpg"
              className="w-14 rounded-full"
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
          >
            <span className=" bg-lime-400     px-3 py-0 rounded-full  "></span>
          </motion.div>
          <div className="circle absolute  top-40  right-24  lg:block hidden">
            <span className=" bg-blue-400     px-3 py-0 rounded-full  "></span>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="forimges relative">
        <div className="bottom-card-section mx-w-[1200px] grid lg:grid-cols-4 md:grid-cols-2 mx-auto  gap-10 text-center  p-16 items-center overflow-hidden ">
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
          >
            <img src="../public/sm1.png" className="" alt="" />
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
          >
            <img src="../public/sm2.png" alt="" />
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
            <img src="../public/sm3.png" alt="" />
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
            <img src="../public/sm4.png" alt="" />
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
          >
            <img src="../public/sm5.png" alt="" />
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
          >
            <img src="../public/sm6.png" alt="" />
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
          >
            <img src="../public/sm7.png" alt="" />
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
          >
            <img src="../public/sm8.png" alt="" />
          </motion.div>
        </div>
        <div className="images-containers absolute lg:block hidden   bottom-72  ">
          <img src="../public/smbg.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default Caresol;
