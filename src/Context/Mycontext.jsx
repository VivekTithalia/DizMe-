import { createContext, useState } from "react";

export const Darkcontext = createContext(null);

export const Darkprovider = (props) => {
  const [dark, setdark] = useState(false);
  return (
    <Darkcontext.Provider value={{ dark, setdark }}>
      {props.children}
    </Darkcontext.Provider>
  );
};
