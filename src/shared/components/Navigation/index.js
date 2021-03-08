import React, { useState } from "react";
import SideDrawer from "./SideDrawer";
import Navbar from "./Navbar";
import {Backdrop} from "../UIElements";

const Index = (props) => {
  const [drawerIsOpen, setDrawerOpen] = useState(false);
  const toggleDrawerHandle = () => {
    setDrawerOpen(!drawerIsOpen);
  };

  return (
    <section>
      {drawerIsOpen && <Backdrop onClick={toggleDrawerHandle} />}
      <Navbar toggle={toggleDrawerHandle} />
      <SideDrawer show={drawerIsOpen} onClick={toggleDrawerHandle} />
    </section>
  );
};

export default Index;
