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
      <AnimatedCursor
      innerSize={8}
      outerSize={35}
      innerScale={1}
      color='193, 11, 111'
      outerScale={1.7}
      outerAlpha={0}
      outerStyle={{
        border: '3px solid var(--cursor-color)'
      }}
      innerStyle={{
        backgroundColor: 'var(--cursor-color)'
      }}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
    
      />
    </>
  );
};

export default App;
