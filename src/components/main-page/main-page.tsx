import React from "react";
import PropTypes from "prop-types";

import Catalog from "./../catalog/catalog.jsx";
import Layout from "../layout/layout.jsx";

const MainPage = () =>{
  return (
    <Layout title={`Six cities`} pageClasses={[`page`, `page--gray`, `page--main`]}>
      <Catalog/>
    </Layout>
  );
};

MainPage.propTypes = {
  pageClass: PropTypes.string,
};

export default MainPage;

