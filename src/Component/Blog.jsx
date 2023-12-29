import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useRef } from "react";

const Blog = () => {
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
    
      <div className="top relative " ref={ref}>
        <div className="blogheadings-container flex flex-col justify-center items-center text-center ">
          <div className="headingitems mb-3 ">
            <h2 className="text-2xl text-red-700 font-JosefinSans  font-semibold">From My Blog</h2>
          </div>
          <div className="second-heaings mb-3 ">
            <p className=" md:text-3xl  text-xl  font-semibold">
              Our Recent Updates, Blog, Tips,
              <br /> Tricks & More
            </p>
          </div>
          <motion.div
            className="img-container absolute top-0 right-0 lg:block hidden"
            variants={{
              hidden: { opacity: 0, scale: 0 },
              visible: { opacity: 1, scale: 1 },
            }}
            initial="hidden"
            animate={maincontrol}
            transition={{ duration: 1.5, ease: "easeIn", delay: 0.3 }}
            exit={{ opacity: 0, scale: 0 }}
          >
            <img src="../public/scaleimg3.png" alt="" srcset="" />
          </motion.div>
          <motion.div
            className="second img-container absolute top-0 left-10 lg:block hidden"
            variants={{
              hidden: { opacity: 0, scale: 0 },
              visible: { opacity: 1, scale: 1 },
            }}
            initial="hidden"
            animate={maincontrol}
            transition={{
              duration: 1.5,
              ease: "easeIn",
              delay: 0.3,
              type: "spring",
            }}
            exit={{ opacity: 0, scale: 0 }}
          >
            <img src="../public/scaleimg4.png" alt="" />
          </motion.div>
        </div>
      </div>
      <div className="grid-img-container grid lg:grid-cols-3  max-w-[1200px] md:text-start text-center mx-auto items-center gap-6 p-8   ">
        <div className="items-container  relative">
          <div className="forimg  overflow-hidden">
            <img src="../public/first.jpg" className=" w-full lg:h-56 rounded-md hover:scale-125 duration-500" alt="" />
          </div>
          <div className="headings mb-3">
            <h1 className="text-xl text-orange-400    font-semibold">
              Web Development
            </h1>
          </div>
          <div className="para font-JosefinSans">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
              error.
            </p>
          </div>
          <div className="fortop flex absolute md:block  top-5 right-0 ">
            <h1 className=" bg-green-400 text-white p-4 md:block hidden rounded-xl">
              23 <br />
              Dec
            </h1>
          </div>
        </div>
        <div className="items-container relative">
          <div className="forimg overflow-hidden ">
            <img src="../public/secondj.jpg" className=" w-full hover:scale-125 duration-500 ease-linear  lg:h-56 rounded-md" alt="" />
          </div>
          <div className="headings mb-3">
            <h1 className="text-xl text-orange-400 font-semibold">Branding</h1>
          </div>
          <div className="para">
            <p className=" font-JosefinSans">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
              error.
            </p>
          </div>
          <div className="fortop flex absolute md:block  top-5 right-0 ">
            <h1 className=" bg-green-400 text-white p-4 md:block hidden rounded-xl">
              23 <br />
              Dec
            </h1>
          </div>
        </div>
        <div className="items-container relative">
          <div className="forimg overflow-hidden">
            <img src="../public/thirdj.jpg" className=" w-full hover:scale-125 duration-500 ease-in lg:h-56 rounded-md" alt="" />
          </div>
          <div className="headings mb-3">
            <h1 className="text-xl text-orange-400  font-semibold">Social Media</h1>
          </div>
          <div className="para">
            <p className=" font-JosefinSans">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
              error.
            </p>
          </div>
          <div className="fortop flex absolute md:block  top-5 right-0 ">
            <h1 className=" bg-green-400 text-white p-4 md:block hidden rounded-xl">
              23 <br />
              Dec
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
