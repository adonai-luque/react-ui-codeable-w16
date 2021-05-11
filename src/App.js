import "./App.css";
import Main from "./components/Main";
import Header from "./components/Header";
import React from "react";

function App() {
  console.log("Inside App.js");
  return (
    <>
      <Header />
      <Main />
    </>
  );
}

export default App;
