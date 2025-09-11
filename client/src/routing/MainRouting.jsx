import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Layout from "../layout/Layout";
import Countries from "../pages/Countries";
import Contact from "../pages/Contact";
import UniversityDetails from "../pages/UniversityDetails";

const MainRouting = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="countries" element={<Countries />} />
          <Route path="contact" element={<Contact />} />
          <Route path="/universities/:id" element={<UniversityDetails />} />
        </Route>
      </Routes>
    </>
  );
};

export default MainRouting;
