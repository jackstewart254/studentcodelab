"use client"
import React, { createContext, useContext, useState } from 'react';

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [global, setGlobal] = useState({
    render: "landing",
  });

  return (
    <GlobalContext.Provider value={{ global, setGlobal }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobal = () => useContext(GlobalContext);