import React from 'react'

const About = () => {
  return (
    <section className="about" id='about'>
          <h1>about</h1>
          <section className="about-details">
            <section className="about-details-left">
              <img src="/images/about-img.png" alt="" />
            </section>
            <section className="about-details-right">
              <p>
                As a lifelong musician, before tech I taught guitar and voice, ran a rehearsal studio, and booked concerts in NYC and beyond.
              </p>
              <p id='center'>
                In 2020, I took a leap and trained in modern app development at Fullstack Academy. I quickly absorbed new concepts, while bringing ambitious ideas and a positive attitude to every challenge.
              </p>
              <p>
                When I'm not coding, I'm usually doing yoga, testing out a new recipe, or writing a musical parody on guitar.
              </p>
              <nav>
                <a href='/' className='about-nav-a'>Resume</a>
              </nav>
            </section>
          </section>
    </section>
  )
}

export default About