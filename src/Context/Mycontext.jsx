import { createContext, useEffect, useState } from "react";
import {motion} from "framer-motion"

export const Darkcontext = createContext(null);

export const Darkprovider = (props) => {
  const [cursorPos, setcursorPos] = useState({
    x: 0,
    y: 0,
  });
  const [cursorBg, setcursorBg] = useState('default');

  useEffect(() => {
    const move = (e) => {
      setcursorPos({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', move);

    return () => {
      window.removeEventListener('mousemove', move);
    };
  }, []);

  const cursorvarients = {
    default: {
      x: cursorPos.x - 16,
      y: cursorPos.y - 16,
      backgroundColor: '#0e1112',
    },
    text: {
      width: '150px',
      height: '150px',
      x: cursorPos.x - 72,
      y: cursorPos.y - 72,
      backgroundColor: '#fff',
      mixBlendMode: 'difference',
    },
  };

  const [dark, setdark] = useState(false);

  const mouseenterhandler = () => {
    setcursorBg('text');
  };

  const mouseremovehandler = () => {
    setcursorBg('default');
  };

 
  const isMobileDevice = window.innerWidth <= 1024; 


  if (isMobileDevice) {
    return <Darkcontext.Provider value={{ dark, setdark }}>{props.children}</Darkcontext.Provider>;
  }

  return (
    <Darkcontext.Provider value={{ dark, setdark, cursorvarients, cursorBg, mouseenterhandler, mouseremovehandler }}>
      {props.children}
      <motion.div
        className="custom-cursor fixed top-0 left-0 pointer-events-none z-50 rounded-full"
        style={{
          transform: `translate(${cursorvarients[cursorBg].x}px, ${cursorvarients[cursorBg].y}px)`,
          backgroundColor: cursorvarients[cursorBg].backgroundColor,
          width: cursorvarients[cursorBg].width || '32px',
          height: cursorvarients[cursorBg].height || '32px',
          mixBlendMode: cursorvarients[cursorBg].mixBlendMode || 'normal',
        }}
      ></motion.div>
    </Darkcontext.Provider>
  );
};
