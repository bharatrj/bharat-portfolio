import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function Header() {


  const [DarkTheme, setDarkTheme] = useState(false);
  const [visible, setVisible] = useState(true);
  const [activeId, setActiveId] = useState('home');
  let lastY = 0;
  const sectionIds = ['home', 'about', 'technologies', 'services', 'contact'];

  useEffect(() => {

    const onScroll = () => {
      setVisible(window.scrollY < lastY || window.scrollY < 80);
      lastY = window.scrollY;
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // --- Scroll Detection Logic (Intersection Observer) ---
  useEffect(() => {
    // 1. Setup the Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // When a section enters the viewport, set its ID as active
            setActiveId(entry.target.id);

            // Update the URL hash without reloading the page
            window.history.pushState(null, null, `#${entry.target.id}`);

          }
        });
      },
      {
        // Check if the section is at least 50% into the viewport
        rootMargin: '0px 0px -75% 0px',
        threshold: 0
      }
    );

    // 2. Observe all relevant sections
    sectionIds.forEach(id => {
      const section = document.getElementById(id);
      if (section) {
        observer.observe(section);
      }
    });

    // 3. Clean up the observer on unmount
    return () => observer.disconnect();
  }, []); // Run only once on mount


  const handleToggleTheme = () => {
    document.body.classList.toggle('dark-theme');
    setDarkTheme(!DarkTheme);
  }

  // ... inside your component
  const handleLinkClick = (e, ref) => {
    // 1. Prevent the router from handling the navigation
    e.preventDefault();

    // 2. Perform the desired smooth scroll action
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }

    // Manually trigger the smooth scroll
    const section = document.getElementById(ref);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }

    // 3. Manually update the URL hash without reloading
    window.history.pushState(null, null, `#${ref}`);

  };


  return (
    <React.Fragment>
      <header id="main-header" className={`${visible ? "" : "hide"}`}>
        <div className="row">
          <div className="col-xl-2 col-lg-2 col-md-3 col-sm-12 col-12">
            <div className="logo"><span className="highlight">009</span> BharatRJ</div>
          </div>
          <div className="col-xl-9 col-lg-9 col-md-8 col-sm-12 col-12">
            <nav>
              <ul className="row">
                {sectionIds.map(id =>
                  <li key={id} className="col-xl-2 col-lg col-md-4 col-sm col-6"><Link key={id} to={`#${id}`} className={`${activeId === id ? 'active' : ''}`} onClick={(e) => handleLinkClick(e, id)}>{id.toUpperCase()}</Link></li>
                )}
              </ul>
            </nav>
          </div>
          <div className="col-xl-1 col-lg-1 col-md-1 col-sm-12 col-12">
            <button className="theme-toggle" onClick={() => handleToggleTheme()} >{DarkTheme ? <i className="fas fa-moon"></i> : <i className="fas fa-sun"></i>}</button>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
}

export default Header;
