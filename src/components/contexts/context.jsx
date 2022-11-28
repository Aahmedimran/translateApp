import React, { createContext, useReducer } from "react";
import { reducer } from './reducer'

export const GlobalContext = createContext("Initial Value");


let data = {
  user: {},
  isLogin: null,
  darkTheme: true,
  cart: JSON.parse(localStorage.getItem("cartItem")) || [],
  baseUrl:
  window.location.href.indexOf("https") === -1
    ? "http://localhost:3001"
    : "https://ecommrace-web-app.up.railway.app/"
};  


export default function ContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, data);
  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
}
