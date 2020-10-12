import React, { useState, useEffect } from "react";

import "./Nav.css";

const Nav = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <nav className={`nav ${show && "nav--dark"}`}>
      <img
        className="nav__logo"
        src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png"
        alt="Netflix Logo"
      />
      <img
        src="https://i7.pngguru.com/preview/721/745/248/computer-icons-ninja-icon-design-ninja.jpg"
        alt="Avatar"
        className="nav__avatar"
      />
    </nav>
  );
};

export default Nav;
