import * as React from "react";
import {Link} from "react-router-dom";
import LoginForm from "../login-form/login-form";
import Layout from "../layout/layout";

const SignIn: React.FunctionComponent = () => {
  return (
    <Layout title={`Page of log in`} pageClasses={`page page--gray page--login`}>
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <LoginForm />
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link to="/" className="locations__item-link">
                <span>Amsterdam</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
};

export default SignIn;
