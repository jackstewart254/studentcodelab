"use client"
import React, { createContext, useContext, useState } from 'react';

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [global, setGlobal] = useState({
    render: "landing",
    showPopup: false,
    popupContent: 0,
    fields: [],
  });

  return (
    <GlobalContext.Provider value={{ global, setGlobal }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobal = () => useContext(GlobalContext);