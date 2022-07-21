import { Link, animateScroll as scroll } from "react-scroll";
import './MenuExpanded.css';
import React from 'react';

const MenuExpanded = ({ handleMenuClose }) => {
  return (
    <div className="menu">
        <div className="menu__item">
            <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={handleMenuClose}
            ><p>about</p></Link>
        </div>
        <div className="menu__item">
            <Link
                to="work"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={handleMenuClose}
            ><p>work</p></Link>
        </div>
        <div className="menu__item">
            <Link
                to="skills"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={handleMenuClose}
            ><p>skills</p></Link>
        </div>
        <div className="menu__item">
            <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={handleMenuClose}
            ><p>contact</p></Link>
        </div>
    </div>
  )
}

export default MenuExpanded