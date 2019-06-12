import React from "react";

import LoginForm from "./../login-form/login-form.jsx";
import Layout from "../layout/layout.jsx";

const SignIn = () => {
  return (
    <Layout pageClasses={[`page`, `page--gray`, `page--login`]}>
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
    </Layout>
  );
};

export default SignIn;
