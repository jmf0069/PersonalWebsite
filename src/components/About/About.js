import React from "react";
import "./About.css";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Link, animateScroll as scroll } from "react-scroll";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import { SlideData } from "./SlideData";
import { useState } from "react";
import { useEffect } from "react";

function About() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = SlideData.length;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
  };

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  return (
    <div className="about" id="about">
      <div className="about__upArrow">
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <KeyboardArrowUpIcon />
        </Link>
      </div>

      <h1 className="about__headerText">get to know me!</h1>
      {SlideData.map((slide, index) => {
        return (
          <div
            className={index === currentSlide ? "slide current" : "slide"}
            key={index}
          >
            {index === currentSlide && (
              <>
                <img src={slide.image} alt="Slide" className="slideImage" />
                <div className="content">
                  <h2>{slide.heading}</h2>
                  <p>{slide.desc}</p>
                </div>
              </>
            )}
          </div>
        );
      })}
      <div className="about__leftArrow" onClick={prevSlide}>
        <ArrowLeftIcon />
      </div>
      <div className="about__rightArrow" onClick={nextSlide}>
        <ArrowRightIcon />
      </div>
      <div className="about__downArrow">
        <Link
          activeClass="active"
          to="work"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
        >
          <ArrowCircleDownIcon />
        </Link>
      </div>
    </div>
  );
}

export default About;
