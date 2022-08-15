import Footer from "../Footer";
import Navigation from "../Nav";
import React from "react";

const Layout = ({ children }) => {
  return (
    <div>
      <Navigation />

      {children}
      <Footer />
    </div>
  );
};

export default Layout;
