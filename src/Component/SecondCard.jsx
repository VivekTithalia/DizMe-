import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useRef } from "react";

const SecondCard = () => {
  const ref = useRef(null);
  const isinview = useInView(ref, { once: true });
  const maincontrol = useAnimation();

  useEffect(() => {
    if (isinview) {
      maincontrol.start("visible");
    }
  }, [isinview]);

  return (
    <>
      <div className="secondhome-container mt-5  " ref={ref}>
        <motion.div
          className="main-container lg:flex  justify-between mx-auto  items-center  gap-24     p-14  "
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={maincontrol}
          transition={{ duration: 1, delay: 0.25, ease: "easeIn" }}
          exit={{ opacity: 0, y: 75 }}
        >
          <div className="first-items  flex-5 relative ">
            <div className="img-container flex  lg:justify-start justify-center ">
              <img src="../public/secondimg.jpg" className=" w-96" alt="" />
            </div>
            <div className="two-cards ">
              <div className="first-cards mb-3 bg-white shadow-lg text-black  lg:absolute  top-32 left-0  lg:w-36 w-full lg:p-4 rounded-lg p-10 lg:text-start text-center">
                <h2>
                  <span className="text-3xl font-bold font-Jost text-green-500">18</span>
                  Year of Sucesss
                </h2>
              </div>
              <div className="second-cards  mb-6 bg-white shadow-lg text-black lg:absolute bottom-10 right-0   lg:w-36 w-full lg:p-4 rounded-lg  p-10 lg:text-start text-center">
                <h2>
                  <span className="text-3xl font-bold font-Jost text-blue-400">9k</span>
                  Total
                </h2>
              </div>
            </div>
          </div>
          <div className="second-items flex-1 ">
            <div className="small-headings mb-3 md:text-start text-center">
              <h2 className=" text-orange-700 font-Jost  font-bold text-xl">
                I'm a Designer
              </h2>
            </div>
            <div className="second-headings mb-3">
              <h2 className="md:text-3xl text-2xl font-Jost  md:text-start text-center font-bold ">
                I Can Design <br /> Anything You Want
              </h2>
            </div>
            <div className="para mb-3 block ">
              <p className=" font-Jost">
                {" "}
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia
                cum perferendis illo. Veritatis quisquam obcaecati voluptatibus
                delectus modi labore sunt accusantium adipisci libero eligendi
                necessitatibus, provident dolorem dicta porro eos qui. Optio,
                illum odit quaerat consequuntur repellat, pariatur, harum
                asperiores accusantium libero amet non?{" "}
              </p>
            </div>
            <div className="btns md:text-start text-center ">
              <button className=" md:px-9 px-7 py-2 rounded-full bg-red-700 text-white font-Jost font-semibold">
                Hire Me
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default SecondCard;
