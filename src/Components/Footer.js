import React from 'react'
import {FaFacebookF, FaInstagram, FaTwitter} from 'react-icons/fa'
import {GrMail} from 'react-icons/gr'

const Footer = () => {
  return (
    <footer className="footer">
        <section className="footer-left">
            <div className="footer-left-img">
                <img src="/images/Yamal(3).png" alt="" />
            </div>
            <h2 className="footer-title">YAMAL ALI</h2>
            <div className="footer-text">
                <p className="footer-copyright">
                    Copyright &copy; 2022 | YamalAli.me
                </p>
                <p className="icons-link">
                    Icons By <a href='https://icons8.com/'>icons8.com</a>
                </p>
            </div>
        </section>
        <section className="footer-right">
            <nav className="footer-nav">
                <a href='http://facebook.com'><FaFacebookF /></a>
                <a href='http://instagram.com'><FaInstagram /></a>
                <a href='http://twitter.com'><FaTwitter /></a>
                <a href='mailto:Yamal.Ali@outlook.com'><GrMail /></a>
            </nav>
        </section>
    </footer>
  )
}

export default Footer