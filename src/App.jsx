import "./index.css";
import Nav from "./Component/Nav";
import Home from "./Component/Home";
import { IoCloseOutline } from "react-icons/io5";

import { motion } from "framer-motion";
import { useContext, useState } from "react";
import { Darkcontext } from "./Context/Mycontext";
import db from "./Component/Firebaseconfig";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { doc, addDoc, collection, getDocs } from "firebase/firestore";

const App = () => {
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

  const closemodel = () => {
    openmodel(!model);
    setnameerrorr(false);
    setEmailerror(false);
    setPhoneerror(false);
    setSubjecterror(false);
    setmessageerror(false);
  };

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
        alert("data added");
        // toast.success("Message Send Sucessfully");
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

  return (
    <>
      <Nav openmodel={openmodel} model={model} />
      <Home />

      <div
        className={`formmodel h-screen w-full fixed ${
          model ? "block" : "hidden"
        }  top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-40 lg:p-0 md:p-0 p-6 z-50   `}
      >
        <motion.div
          className={`child ${
            darkmode.dark ? "bg-gray-700 text-white" : "bg-white"
          }    max-w-[35rem] 2xl:max-w-[40rem]  w-full p-6 overflow-hidden relative shadow rounded`}
          initial={{opacity:0,y:400}}
          whileInView={{opacity:1,y:0}}
          transition={{duration:1.2,ease:"easeInOut",stiffness:90}}
          exit={{y:200}}
        >
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
                >
                  <input
                    type="email"
                    id="floating_standard"
                    className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
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
                >
                  <input
                    type="text"
                    id="floating_standard"
                    className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
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
                >
                  <input
                    type="text"
                    id="floating_standard"
                    autoComplete="off"
                    className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
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
              >
                <textarea
                  type="text"
                  id="floating_standard"
                  className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  cols="30"
                  rows="10"
                  autoComplete="off"
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
            >
              <button
                className=" px-7 py-2 rounded-full font-JosefinSans bg-orange-600  text-white  duration-300 transition-all ease-in-out   flex justify-center items-center "
                onClick={handlesubmit}

                // disabled={!Name && !Email && !Phone && !Subject && !Message}
              >
                Submit Now
              </button>
            </motion.div>
          </div>

          <IoCloseOutline
            className=" text-3xl   absolute top-0 right-0 cursor-pointer  "
            // onClick={() => openmodel(!model)}
            onClick={closemodel}
          />
        </motion.div>
        <ToastContainer />
      </div>
    </>
  );
};

export default App;
