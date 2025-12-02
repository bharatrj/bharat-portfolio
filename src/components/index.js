/**
 * Created By Bharat Jograna
 * Created on: 30 Sep 2025
 * File comment : main view file of project
*/

import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Experience from "./Experience";
import Technologies from "./Technologies";
import Service from './service';
import Projects from "./Projects";

import "../assets/css/style.css"

function App() {

  return (
    <React.Fragment>
      <Header />
      <main className="container">
        <Home />
        <About />
        <Experience />
        <Technologies />
        <Service />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
