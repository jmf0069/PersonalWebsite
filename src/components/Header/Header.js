import React, { useEffect, useLayoutEffect, useState } from "react";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, animateScroll as scroll } from "react-scroll";
import MenuExpanded from "../MenuExpanded/MenuExpanded";

function Header() {
  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen);
    console.log(menuOpen);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="header">
      <div className="header__logo">
        {!menuOpen && (
          <Link to="home" spy={true} smooth={true} offset={-70} duration={500}>
            <h1>jacob farley.</h1>
          </Link>
        )}
      </div>
      <div className="header__nav">
        <div className="header__option">
          <Link to="about" spy={true} smooth={true} offset={-70} duration={500}>
            about
          </Link>
        </div>
        <div className="header__option">
          <Link to="work" spy={true} smooth={true} offset={-70} duration={500}>
            work
          </Link>
        </div>
        <div className="header__option">
          <Link
            to="skills"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            skills
          </Link>
        </div>
        <div className="header__option">
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            contact
          </Link>
        </div>
        <div className="header__menuIcon">
          <MenuIcon onClick={handleMenuOpen} />
        </div>
      </div>
      <div className="menu__display">
        {menuOpen && <MenuExpanded handleMenuClose={handleMenuClose} />}
      </div>
    </div>
  );
}

export default Header;
