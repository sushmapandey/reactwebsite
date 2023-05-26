import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Service from "./Service";
import About from "./About";
import Contact from "./Contact";
import PageNotFound from "./PageNotFound";
import Footer from "./Footer";

function HeaderMenu() {
  return (
    <>
      <div className="container">
        <Navbar />
        <Routes>
          <Route path="/" Component={() => <Home />} />
          <Route path="/service" Component={() => <Service />} />
          <Route path="/about" Component={() => <About />} />
          <Route path="/contact" Component={() => <Contact />} />
          <Route path="*" Component={() => <PageNotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default HeaderMenu;
