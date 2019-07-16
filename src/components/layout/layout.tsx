import * as React from "react";

import Header from "./../header/header";
import {Helmet} from "react-helmet";
import {ReactNode} from "react";

interface Props {
  pageClasses: string,
  title: string,
  children: ReactNode,
}

const Layout: React.FunctionComponent<Props> = (props) => {
  const {pageClasses, children, title} = props;

  return (
    <div className={pageClasses}>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
