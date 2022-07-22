import React from "react";
import "./Work.css";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Link, animateScroll as scroll } from "react-scroll";

function Work() {
  return (
    <div className="work">
      <div className="work__upArrow">
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
        >
          <KeyboardArrowUpIcon />
        </Link>
      </div>
    </div>
  );
}

export default Work;
