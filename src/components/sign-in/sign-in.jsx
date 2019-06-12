import React from "react";

import LoginForm from "./../login-form/login-form.jsx";
import Header from "./../header/header.jsx";
import WrapperForPages from "../wrapper-for-pages/wrapper-for-pages.jsx";

const SignIn = () => {
  return (
    <WrapperForPages pageClasses={[`page`, `page--gray`, `page--login`]}>
      <Header />
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <LoginForm />
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </WrapperForPages>
  );
};

export default SignIn;
