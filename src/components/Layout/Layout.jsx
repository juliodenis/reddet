import React from "react";

import Navbar from "../Navbar/Navbar";

const Layout = ({ children }) => (
  <div className="Main">
    <Navbar />
    {children}
  </div>
);

export default Layout;
