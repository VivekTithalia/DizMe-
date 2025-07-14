import React, { useState } from "react";
import { MdLocationPin } from "react-icons/md";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { MdOutlinePhone } from "react-icons/md";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { useContext } from "react";
import { Darkcontext } from "../Context/Mycontext";
import db from "./Firebaseconfig";
import { doc, addDoc, collection, getDocs } from "firebase/firestore";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  
  const [model, openmodel] = useState(false);
  const darkmode = useContext(Darkcontext);
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
  const [Subject, setSubject] = useState("");
  const [Message, setMessage] = useState("");
  const [Nameerror, setnameerrorr] = useState(false);
  const [Emailerror, setEmailerror] = useState(false);
  const [Phoneerror, setPhoneerror] = useState(false);
  const [Subjecterror, setSubjecterror] = useState(false);
  const [messageerror, setmessageerror] = useState(false);

  const dbref = collection(db, "mydata");

  const handlenamechange = (e) => {
    setName(e.target.value);
    setnameerrorr(false);
  };

  const handleemailerror = (e) => {
    setEmail(e.target.value);
    setEmailerror(false);
  };
  const handlephonechange = (e) => {
    setPhone(e.target.value);
    setPhoneerror(false);
  };
  const messagehandlechange = (e) => {
    setMessage(e.target.value);
    setmessageerror(false);
  };

  const subjethandlechange = (e) => {
    setSubject(e.target.value);
    setSubjecterror(false);
  };

  // const closemodel = () => {
  
  //   setnameerrorr(false);
  //   setEmailerror(false);
  //   setPhoneerror(false);
  //   setSubjecterror(false);
  //   setmessageerror(false);
  // };

  const handlesubmit = async () => {
    if (!Name || !Email || !Phone || !Subject || !Message) {
      // alert("Please fill out all required fields");
      setnameerrorr(true);
      setSubjecterror(true);
      setmessageerror(true);
      setEmailerror(true);
      setPhoneerror(true);

      return;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(Email)) {
      // alert("Please enter a valid email address");
      setEmailerror(true);
      return;
    }
    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(Phone)) {
      // alert("Please enter a valid 10-digit phone number");
      setPhoneerror(true);
      return;
    }
    try {
      const adddate = await addDoc(dbref, {
        Name: Name,
        Email: Email,
        Phone: Phone,
        Subject: Subject,
        Message: Message,
      });

      if (adddate) {
        // alert("data added");
        toast.success("Message Send Sucessfully");
        setnameerrorr(false);
        setEmailerror(false);
        setPhoneerror(false);
        setSubjecterror(false);
        setmessageerror(false);
        setName("");
        setEmail("");
        setPhone("");
        setSubject("");
        setMessage("");
        openmodel(!model);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const { mouseenterhandler, mouseremovehandler } = useContext(Darkcontext);
  const yourdarkmode = useContext(Darkcontext);
  return (
    <>
      <div
        className={`main-contact-containerf ${
          yourdarkmode.dark ? "bg-gray-800" : "bg-white"
        }  h-full lg:min-h-screen w-full overflow-hidden `}
        id="Contact"
      >
        <div className="forscale relative">
          <div className="contact-headings flex flex-col justify-center items-center text-center">
            <div className="items p-5">
              <h1 className=" text-xl lg:text-2xl  text-[#f75023] mb-3 2xl:mb-7  2xl:text-4xl  font-Jost ">
                Contact Us
              </h1>
              <h2 className="  text-xl lg:text-2xl 2xl:text-3xl font-Jost mb-3 2xl:mb-7 font-bold">
                Got A Problem We're Happy to Help You
              </h2>
              <p className=" md:text-xl mb-3 2xl:text-2xl 2xl:mb-5 font-JosefinSans ">
                Please fill out the form on this section to contact with me. Or
                call between <br /> 9:00 a.m. and 8:00 p.m. ET, Monday through
                Friday
              </p>
            </div>
          </div>
          <div className="img-scale lg:block hidden absolute top-0  left-0">
            <motion.img
              src=".././scalecontact.png"
              alt=""
              initial={{ opacity: 0, x: -150 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.4, stiffness: 100, ease: "easeInOut" }}
              onMouseEnter={mouseenterhandler}
              onMouseLeave={mouseremovehandler}
            />
          </div>
        </div>

        <div className="forimage relative">
          <div className="main-container lg:flex  justify-center  gap-x-36 p-10  2xl:p-28">
            {/* //Address */}
            <div className="flex-items  lg:w-[70%] w-full">
              <div className="first-sdie flex gap-10  md:gap-20 items-center mb-5">
                <div className="first-icons-container bg-[#fedfd7] p-7 rounded-full">
                  <MdLocationPin className=" text-3xl text-orange-400 " />
                </div>
                <motion.div
                  className="headings"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 1.4,
                    stiffness: 100,
                    ease: "easeInOut",
                  }}
                  onMouseEnter={mouseenterhandler}
                  onMouseLeave={mouseremovehandler}
                >
                  <Link
                    className=" text-xl md:text-2xl 2xl:text-3xl 2xl:mb-7  font-Jost font-semibold cursor-pointer text-red-800  mb-1"
                    to="map"
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={1000}
                  >
                    Address
                  </Link>

                  <h2 className=" font-JosefinSans 2xl:text-xl">
                    207, Jer Firoz Complex, Opp. Mango Market, <br /> Bechar
                    Road, Valsad, Gujarat, India
                  </h2>
                </motion.div>
              </div>
              <motion.div
                className="first-sdie flex gap-10 md:gap-20 items-center mb-5"
                initial={{ opacity: 0, scale: 0.8, x: 200 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                transition={{
                  duration: 1.6,
                  stiffness: 100,
                  ease: "easeInOut",
                }}
                onMouseEnter={mouseenterhandler}
                onMouseLeave={mouseremovehandler}
              >
                <div className="first-icons-container bg-[#ddf5e6] p-7 rounded-full">
                  <MdOutlineMarkEmailUnread className=" text-3xl " />
                </div>
                <div className="headings">
                  <h2 className=" text-xl md:text-2xl 2xl:text-3xl   text-red-800  font-Jost font-semibold  mb-1">
                    Email
                  </h2>

                  <h2 className=" font-JosefinSans 2xl:text-xl">
                    info@tag97.com
                  </h2>
                </div>
              </motion.div>
              <motion.div
                className="first-sdie flex  gap-10 md:gap-20 items-center mb-5"
                initial={{ opacity: 0, scale: 0.8, x: -200 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                transition={{
                  duration: 1.8,
                  stiffness: 100,
                  ease: "easeInOut",
                }}
                onMouseEnter={mouseenterhandler}
                onMouseLeave={mouseremovehandler}
              >
                <div className="first-icons-container  bg-gray-200 p-7 rounded-full">
                  <MdOutlinePhone className=" text-3xl text-blue-500 " />
                </div>
                <div className="headings">
                  <h2 className=" text-xl md:text-2xl 2xl:text-3xl font-bold text-red-800 font-Jost  mb-1">
                    Phone
                  </h2>
                  <h2 className=" font-JosefinSans 2xl:text-xl">
                    +91 84697 99777
                  </h2>
                </div>
              </motion.div>
            </div>
            {/* form */}
            <div className="form-container  w-full      ">
              <div className="inputfields">
                <div className="forsideby lg:flex gap-x-7    mb-5">
                  <div className="first-input mb-3 w-full">
                    {/* <input
                    type="text"
                    placeholder="Enter your name"
                    className=" w-full  px-6 py-2 rounded-lg font-Jost outline-none border-2  border-gray-400 "
                  /> */}
                    <motion.div
                      className="relative z-0"
                      initial={{ opacity: 0, x: -150 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 1.4,
                        ease: "easeInOut",
                        stiffness: 90,
                        bounceStiffness: 60,
                      }}
                      onMouseEnter={mouseenterhandler}
                      onMouseLeave={mouseremovehandler}
                    >
                      <input
                        type="text"
                        id="floating_standard"
                        className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer "
                        placeholder=" "
                        name="Name"
                        value={Name}
                        onChange={handlenamechange}
                        autoComplete="off"
                      />
                      <label
                        htmlFor="floating_standard"
                        className="absolute text-sm text-gray-500  dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                      >
                        Enter your Name
                      </label>
                    </motion.div>

                    {Nameerror ? (
                      <p className=" text-red-400 font-Jost">
                        please fill this form
                      </p>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="second-input mb-3 w-full">
                    {/* <input
                        type="text"
                        placeholder=" your email"
                        className=" px-6 py-2 rounded-lg font-Jost  w-full outline-none border-2  border-gray-400"
                      /> */}
                    <motion.div
                      className="relative z-0"
                      initial={{ opacity: 0, x: 150 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 1.4,
                        ease: "easeInOut",
                        stiffness: 90,
                        bounceStiffness: 60,
                      }}
                      onMouseEnter={mouseenterhandler}
                      onMouseLeave={mouseremovehandler}
                    >
                      <input
                        type="email"
                        id="floating_standard"
                        className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer "
                        placeholder=" "
                        name="Email"
                        value={Email}
                        autoComplete="off"
                        onChange={handleemailerror}
                      />
                      <label
                        htmlFor="floating_standard"
                        className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                      >
                        Email
                      </label>
                    </motion.div>
                    {Emailerror ? (
                      <p className=" text-red-400  font-Jost">
                        Please enter a valid email address
                      </p>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <div className="second-side-by-side mb-5 lg:flex gap-x-7 ">
                  <div className="first-second-inputfield mb-3 w-full">
                    {/* <input
                        type="text"
                        placeholder=" your phone"
                        className="w-full  px-6 py-2 rounded-lg font-Jost outline-none border-2  border-gray-400"
                      /> */}
                    <motion.div
                      className="relative z-0"
                      initial={{ opacity: 0, x: -150 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 1.4,
                        ease: "easeInOut",
                        stiffness: 90,
                        bounceStiffness: 60,
                      }}
                      onMouseEnter={mouseenterhandler}
                      onMouseLeave={mouseremovehandler}
                    >
                      <input
                        type="text"
                        id="floating_standard"
                        className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer "
                        placeholder=" "
                        name="Phone"
                        value={Phone}
                        autoComplete="off"
                        onChange={handlephonechange}
                      />
                      <label
                        htmlFor="floating_standard"
                        className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                      >
                        Phone No
                      </label>
                    </motion.div>
                    {Phoneerror ? (
                      <p className=" text-red-400 font-Jost">
                        Please enter a valid 10-digit phone number
                      </p>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="first-second-inputfield mb-3 w-full">
                    {/* <input
                        type="text"
                        placeholder=" your Subject"
                        className="w-full  px-6 py-2 rounded-lg font-Jost outline-none border-2  border-gray-400"
                      /> */}
                    <motion.div
                      className="relative z-0"
                      initial={{ opacity: 0, x: 150 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 1.4,
                        ease: "easeInOut",
                        stiffness: 90,
                        bounceStiffness: 60,
                      }}
                      onMouseEnter={mouseenterhandler}
                      onMouseLeave={mouseremovehandler}
                    >
                      <input
                        type="text"
                        id="floating_standard"
                        className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer "
                        placeholder=" "
                        name="Subject"
                        value={Subject}
                        onChange={subjethandlechange}
                      />
                      <label
                        htmlFor="floating_standard"
                        className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                      >
                        your subject
                      </label>
                    </motion.div>
                    {Subjecterror ? (
                      <p className=" text-red-400  font-Jost">
                        it should not be empty
                      </p>
                    ) : (
                      ""
                    )}
                  </div>
                </div>

                <div className="fortext-area mb-5">
                  {/* <textarea
                      name=""
                      id=""
                      cols="30"
                      className=" border-2 border-gray-400 w-full  p-6 rounded-lg"
                      placeholder="Enter some text"
                      rows="10"
                    ></textarea> */}
                  <motion.div
                    className="relative z-0"
                    initial={{ opacity: 0, y: 150 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 1.4,
                      ease: "easeInOut",
                      stiffness: 90,
                      bounceStiffness: 60,
                    }}
                    onMouseEnter={mouseenterhandler}
                    onMouseLeave={mouseremovehandler}
                  >
                    <textarea
                      type="text"
                      id="floating_standard"
                      className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer "
                      placeholder=" "
                      cols="30"
                      rows="10"
                      name="Message"
                      value={Message}
                      onChange={messagehandlechange}
                    />
                    <label
                      htmlFor="floating_standard"
                      className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                    >
                      Message
                    </label>
                  </motion.div>
                  {messageerror ? (
                    <p className=" text-red-400 font-Jost">
                      please fill this field
                    </p>
                  ) : (
                    ""
                  )}
                </div>

                <motion.div
                  className="btn-container "
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 1.4,
                    ease: "easeInOut",
                    stiffness: 90,
                    bounceStiffness: 60,
                  }}
                  onMouseEnter={mouseenterhandler}
                  onMouseLeave={mouseremovehandler}
                >
                  <button
                    className=" px-7 py-3 rounded-full font-JosefinSans bg-orange-600 font-semibold text-white "
                    onClick={handlesubmit}
                  >
                    Submit Now
                  </button>
                </motion.div>
              </div>
            </div>
          </div>
          <div className="second-contact-image  lg:block hidden absolute bottom-0  right-0">
            <img src=".././scalecontact2.png" alt="" />
          </div>
        </div>
        <br />
        <br />

        {/* googlemap */}
        <div
          className="maps-container flex justify-center  items-center w-full p-4"
          id="map"
        >
          <motion.div
            className="items overflow-hidden rounded-lg "
            initial={{ y: 200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.3, ease: "easeInOut", stiffness: 60 }}
            // onMouseEnter={mouseenterhandler}
            // onMouseLeave={mouseremovehandler}
          >
            <iframe
              className="  "
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14937.473538557908!2d72.933065!3d20.613836!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0e958e41c9ac3%3A0xfd03ba19965f966b!2sTAG97!5e0!3m2!1sen!2sin!4v1711434243439!5m2!1sen!2sin"
              allowFullScreen=""
              // style={{ width: "70em", height: "300px" }}
              style={{ width: "90vw", height: "50vh" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
        <br />
        <br />
        {/* //footer */}
        <div className="footer-container p-4 lg:p-0  md:text-start text-center overflow-hidden ">
          <div className="items md:flex justify-between items-center gap-10">
            <div className="first-section flex md:flex-row flex-col gap-6  lg:px-12 items-center">
              <motion.div
                className="imges  "
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.3, ease: "easeInOut", stiffness: 60 }}
              >
                {yourdarkmode.dark ? (
                  <img
                    src="../../T97.png"
                    className=" w-20 "
                    alt=""
                    srcset=""
                  />
                ) : (
                  <img src=".././T97white.png" className=" w-20 " alt="" />
                )}
              </motion.div>
              <h1 className=" font-Poppins ">
                All Right reserved
                <span className=" text-purple-700 font-bold"> </span> ©{" "}
                <span className=" text-red-700 font-bold font-Jost">2024</span>
              </h1>
            </div>
            <motion.div
              className="second-section md:flex gap-9 p-8 lg:px-16 font-Jost"
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.3, ease: "easeInOut", stiffness: 90 }}
            >
              <h1 className=" ">
                Terms &{" "}
                <span className=" text-red-700 font-bold">Condition</span>{" "}
              </h1>
              <h2 className=" ">
                {" "}
                Privacy <span className=" text-red-700 font-bold">Policy</span>
              </h2>
            </motion.div>
          </div>
        </div>

        <ToastContainer 
        theme="colored"
        autoClose={2000}
        />
      </div>
    </>
  );
};

export default Contact;
