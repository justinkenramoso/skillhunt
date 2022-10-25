import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "./Home";
import Company from "./Company";
import ContactUs from "./ContactUs";
import LogIn from "./LogIn";
import Register from "./Register";

const Index = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/company" element={<Company />} />
        <Route exact path="/contactUs" element={<ContactUs />} />
        <Route exact path="/logIn" element={<LogIn />} />
        <Route exact path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default Index;
