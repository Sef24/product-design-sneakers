import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  return <AppContext.Provider value="">{}</AppContext.Provider>;
};

export { AppContext, AppProvider };
