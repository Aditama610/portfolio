import React, { useEffect, useState } from 'react'
import { FaFacebook } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { IoLogoTwitter } from 'react-icons/io'
import { BsLinkedin } from 'react-icons/bs'
import { FaArrowUp } from 'react-icons/fa'
import './footer.css'

function Footer() {

  const [showFooter, setShowFooter] = useState(false)
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector("footer")

      if (footer) {
        const footerTop = footer.getBoundingClientRect().top
        const windowHeight = window.innerHeight

        if (footerTop < windowHeight - 100) {
          setShowFooter(true)
        }
      }

      if (window.scrollY > 300) {
        setShowTop(true)
      } else {
        setShowTop(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      <footer className={showFooter ? "show" : ""}>

        <a href="#home" className="footer__logo">
          Aditama
        </a>

        <ul className="permalinks">
          <li><a href="#header">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="footer__socials">
          <a href="https://www.facebook.com/profile.php?id=61554387782712" target="_blank" rel="noreferrer"><FaFacebook /></a>
          <a href="https://www.instagram.com/fadiladit05?igsh=bGdkNWhobHZ2aGJ5" target="_blank" rel="noreferrer"><FiInstagram /></a>
          <a href="https://www.linkedin.com/in/muhammad-fadillah-aditama-2b7ba7355?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer"><BsLinkedin /></a>
        </div>

        <div className="footer__copyright">
          <small>© {new Date().getFullYear()} Aditama. All rights reserved.</small>
        </div>

      </footer>

      {/* BACK TO TOP */}
      <div 
        className={`back-to-top ${showTop ? "show" : ""}`} 
        onClick={scrollToTop}
      >
        <FaArrowUp />
      </div>
    </>
  )
}

export default Footer