import "./App.css";
import Hero from "./Hero";
import React from "react";
import Navigation from "./Nav";
import About from "./About";
import Work from "./Work";
import Footer from "./Footer";
import Contact from "./Contact";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";
function App() {
  return (
    <div className="dark-hero ">
      <Navigation />
      <Hero />
      <About />
      <Work />
      <Contact />

      <Footer></Footer>
    </div>
  );
}

export default App;
