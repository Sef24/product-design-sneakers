import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [modal, setModal] = useState(true);

  const openModal = () => {
    setModal(false);
  };
  const closeModal = () => {
    setModal(true);
  };

  return (
    <AppContext.Provider value={{ modal, openModal, closeModal }}>
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };