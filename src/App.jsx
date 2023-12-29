import "./index.css";
import Nav from "./Component/Nav";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Component/Home";
import About from "./Component/About";
import Service from "./Component/Service";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedCursor from "react-animated-cursor";


const App = () => {
  const location = useLocation();
  return (
    <>
      <Nav />
      <AnimatePresence initial={true} mode="wait">
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Service />} />
        </Routes>
      </AnimatePresence>
     
      
    </>
  );
};

export default App;
