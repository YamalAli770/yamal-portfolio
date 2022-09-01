import React from 'react'
import { Link } from "react-scroll";

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-container">
                <h1 data-aos="fade-right" data-aos-duration="1000" data-aos-easings="ease-in" data-aos-once="true">Hi, I'm <span>Yamal.</span><br />I'm a Full Stack Developer.</h1>
                <nav className="hero-nav" data-aos="fade-in" data-aos-duration="1000" data-aos-once="false" data-aos-easing="ease-in">
                    <Link to='skills' smooth={true} duration={500} className='hero-nav-a'>Skills</Link>
                    <Link to='projects' smooth={true} duration={500} className='hero-nav-a'>Projects</Link>
                    <Link to='about' smooth={true} duration={800} className='hero-nav-a'>About</Link>
                    <Link to='contact' smooth={true} duration={900} className='hero-nav-a'>Contact</Link>
                </nav>
            </div>
        </div>
    )
}

export default Hero