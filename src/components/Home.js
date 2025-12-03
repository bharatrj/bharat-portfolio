import React from "react";
import Profile from '../assets/img/profile.png'
import '../assets/css/home.css';

function Home() {

  return (
    <React.Fragment>
      <section id="home" className="hero-section row">
        <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12">
          <img src={Profile} alt="Profile Photo" />
        </div>
        <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12">
          <div className="row">
            <h3 className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">Hii, I'm</h3>
            <h1 className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12 gradient-text"> Bharat Jograna</h1>
            <h3 className="col-xl-1 col-lg-1 col-md-1 col-sm-12 col-12"> 👋</h3>
          </div>
          <h3>Senior React.js Developer</h3>
          <ul className="details">
            <li><i className="fas fa-coffee"></i> fueled by coffee</li>
            <li><i className="fas fa-globe-americas"></i> based in Gujarat, India</li>
            <li><i className="fas fa-briefcase"></i> Front-end Developer</li>
            <li><i className="fas fa-envelope"></i> bharatjograna @hotmail.com</li>
          </ul>
          <div className="socials">
            <a href="https://www.instagram.com/052bharat/" target="_blank"><i className="fab fa-instagram"></i></a>
            <a href="https://github.com/bharatrj/" target="_blank"><i className="fab fa-github"></i></a>
            <a href="https://linkedin.com/in/bharat-jograna-630862165/" target="_blank"><i className="fab fa-linkedin"></i></a>
            <a href="https://bharatrj.vercel.app/" target="_blank"><i className="fa-solid fa-globe"></i></a>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Home;
