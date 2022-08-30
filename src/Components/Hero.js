import React from 'react'

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-container">
                <h1>Hi, I'm <span>Yamal.</span><br />I'm a full stack developer.</h1>
                <nav className="hero-nav">
                    <a href="#skills" className='hero-nav-a'>Skills</a>
                    <a href="#projects" className='hero-nav-a'>Projects</a>
                    <a href="#about" className='hero-nav-a'>About</a>
                    <a href="#contact" className='hero-nav-a'>Contact</a>
                </nav>
            </div>
        </div>
    )
}

export default Hero