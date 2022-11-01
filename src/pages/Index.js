import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "./Home";
import Talent from "./Talent.js";
import Careers from "./Careers";
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
        <Route path="/talent" element={<Talent />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/company" element={<Company />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/logIn" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default Index;
