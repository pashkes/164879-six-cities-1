import React from "react";
import ReactDOM from "react-dom";
import MainPage from "./components/main-page.jsx";

const initApp = () => {
  ReactDOM.render(
      <MainPage/>,
      document.getElementById(`root`)
  );
};
initApp();

