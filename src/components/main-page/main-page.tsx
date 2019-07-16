import * as React from "react";

import Catalog from "./../catalog/catalog";
import Layout from "../layout/layout";

interface Props {
  pageClass: string,
}

const MainPage: React.FunctionComponent<Props> = () =>{
  return (
    <Layout title={`Six cities`} pageClasses={`page page--gray page--main`}>
      <Catalog/>
    </Layout>
  );
};

export default MainPage;

