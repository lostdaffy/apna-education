import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Layout;
