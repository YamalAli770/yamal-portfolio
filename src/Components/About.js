import React, { useContext } from 'react'
import { ThemeContext } from '../App'

const About = () => {
  const theme = useContext(ThemeContext);
  return (
    <div className='about-container'>
      <div className="blob-top">
        <img src={ theme.theme === "dark-theme" ? 'images/curves/blob-top.png' : 'images/curves/blob-top-light.png'} alt="" />
      </div>
      <div className="blob-bottom">
        <img src={ theme.theme === "dark-theme" ? 'images/curves/blob-bottom.png' : 'images/curves/blob-bottom-light.png'} alt="" />
      </div>
      <section className="about" id='about'>
        <h1 data-aos="fade-in" data-aos-duration="800" data-aos-easing="ease-in" data-aos-once="true">about</h1>
        <section className="about-details">
          <section className="about-details-left" data-aos="fade-up" data-aos-duration="900" data-aos-once="true" data-aos-easing="ease-in">
            <img src="/images/about-img.png" alt="" />
          </section>
          <section className="about-details-right" data-aos="fade-right" data-aos-duration="900" data-aos-easing="ease-in" data-aos-once="true">
            <p>
              I am a Software Engineering Undergrad currently pursuing my Bachelors in Software Engineering from <i>@NED</i> University. Hoping to graduate by 2024 
            </p>
            <p id='center'>
              I can develop full stack mobile-responsive websites using best development practices. I have a keen interest in Blockchain Development and Mobile Application Development.
            </p>
            <p>
              During my free-time, when i'm not coding, I'm usually playing games or scrolling on social media. My hobbies include Gaming, Cooking <i><sub style={{fontSize: '1rem'}}>(which i don't do alot)</sub></i> and Collecting Perfumes.
            </p>
            <nav>
              <a href='https://drive.google.com/file/d/15rC0WvqOhVWh_EPGAVHvx-SW0jAW3dR1/view?usp=sharing' className='about-nav-a' target="_blank" rel='noreferrer'>Resume</a>
            </nav>
          </section>
        </section>
      </section>
    </div>
  )
}

export default About