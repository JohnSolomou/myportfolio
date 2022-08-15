import "./App.css";
import Hero from "./Hero";
import React from "react";
// import Navigation from "./Nav";
import About from "./About";

import Work from "./Work";
import Footer from "./Footer";
import Layout from "./components/Layout";
import Contact from "./Contact";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// function App() {
//   return (
//     <div className="dark-hero ">
//       <Navigation />
//       <Hero />
//       <About />
//       <Work />
//       <Contact />

//       <Footer></Footer>
//     </div>
//   );
// }

// export default App;
function App() {
  return (
    <div>
      <Router>
        <Layout>
          <Routes>
            <Route exact path="/" component={Hero} />
            <Route path="/about" component={About} />
            <Route path="/work" component={Work} />
            <Route path="/contact" component={Contact} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
