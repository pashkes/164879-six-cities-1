import React from "react";
import ReactDOM from "react-dom";
import MainPage from "./components/main-page/main-page.jsx";

const OFFERS = [`Beautiful & luxurious apartment at great location`, `Wood and stone place`, `Canal View Prinsengracht`, `Nice, cozy, warm big bed apartment`, `Wood and stone place`];

const initApp = () => {
  ReactDOM.render(
      <MainPage
        offers={OFFERS}
      />,
      document.getElementById(`root`)
  );
};

initApp();

