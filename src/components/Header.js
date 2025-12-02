import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function Header() {


  const [DarkTheme, setDarkTheme] = useState(false);
  const [visible, setVisible] = useState(true);
  let lastY = 0;


  useEffect(() => {

    const onScroll = () => {
      setVisible(window.scrollY < lastY || window.scrollY < 80);
      lastY = window.scrollY;
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);


  const handleToggleTheme = () => {
    document.body.classList.toggle('dark-theme');
    setDarkTheme(!DarkTheme);
  }


  return (
    <React.Fragment>
      <header id="main-header" className={`navbar ${visible ? "" : "hide"}`}>
        <div className="container">
          <div className="logo"><span className="highlight">009</span> BharatRJ</div>
          <nav>
            <ul className="row">
              <li className="col-xl-2 col-lg col-md col-sm col"><Link to="/" className="active">Home</Link></li>
              <li className="col-xl-2 col-lg col-md col-sm col"><Link to="/">About</Link></li>
              <li className="col-xl-2 col-lg col-md col-sm col"><Link to="/">Technologies</Link></li>
              <li className="col-xl-2 col-lg col-md col-sm col"><Link to="/">Projects</Link></li>
              <li className="col-xl-2 col-lg col-md col-sm col"><Link to="/">Contact</Link></li>
            </ul>
          </nav>
        </div>
        <button className="theme-toggle" onClick={() => handleToggleTheme()} >{DarkTheme ? <i className="fas fa-moon"></i> : <i className="fas fa-sun"></i>}</button>
      </header>
    </React.Fragment>
  );
}

export default Header;
