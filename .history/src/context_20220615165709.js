import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [modal, setModal] = useState(false);

  const openModel = () => {
    setModal(true);
  };
  const closeModel = () => {};

  return <AppContext.Provider value="">{children}</AppContext.Provider>;
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
