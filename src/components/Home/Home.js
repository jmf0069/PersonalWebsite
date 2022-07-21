import React from 'react'
import './Home.css'
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import { Link, animateScroll as scroll } from "react-scroll";

function Home() {
    return (
        <div className="home" id="home">
            <div className="home__intro fade-in">
                <h1>print('Hi, I'm Jacob')</h1>
            </div>
            <div className="home__description fade-in-2">
                <div className="home__descLineOne">
                    <h2>I'm a senior at <span className="aub"> Auburn </span> <span className="uni">University</span></h2>
                </div>
                <div className="home__descLineTwo">
                    <h2>studying Computer Science.</h2>
                </div>
            </div>
            <div className="home__downArrow">
                <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}>
                        <ArrowCircleDownIcon />
                </Link>
            </div>
        </div>
    )
}

export default Home
