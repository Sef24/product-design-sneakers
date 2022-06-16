import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [modal, setModal] = useState(false);

  const openModel = () => {
    setModal(true);
  };
  const closeModel = () => {
    setModal(false);
  };

  return (
    <AppContext.Provider value={{ modal }}>{children}</AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
