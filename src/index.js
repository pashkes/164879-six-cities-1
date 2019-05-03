import React from "react";
import ReactDOM from "react-dom";
import MainPage from "./components/main-page/main-page.jsx";

const OFFERS_MOCK = [
  {
    title: `Beautiful & luxurious apartment at great location`,
    photoURL: `img/apartment-01.jpg`,
    isPremium: true,
    isFavorite: false,
    price: 120,
    type: `Apartment`,
    rating: 93
  },
  {
    title: `Wood and stone place`,
    photoURL: `img/room.jpg`,
    isPremium: false,
    isFavorite: true,
    price: 80,
    type: `Private room`,
    rating: 80
  },
  {
    title: `Canal View Prinsengracht`,
    photoURL: `img/apartment-02.jpg`,
    isPremium: false,
    isFavorite: false,
    price: 132,
    type: `Apartment`,
    rating: 80
  },
  {
    title: `Nice, cozy, warm big bed apartment`,
    photoURL: `img/apartment-03.jpg`,
    isPremium: false,
    isFavorite: false,
    price: 180,
    type: `Apartment`,
    rating: 80
  }
];

const initApp = () => {
  ReactDOM.render(
      <MainPage
        offers={OFFERS_MOCK}
      />,
      document.getElementById(`root`)
  );
};

MainPage.defaultProps = {
  offers: []
};

initApp();

