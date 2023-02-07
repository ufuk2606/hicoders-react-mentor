import { createContext } from "react";
import Data from "../data.json";

export const PersonContext = createContext();

const PersonContextProvider = ({ children }) => {
  return (
    <PersonContext.Provider value={{ Data }}>{children}</PersonContext.Provider>
  );
};

export default PersonContextProvider;
