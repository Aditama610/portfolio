import React from 'react'
import { motion } from "framer-motion";
import { useEffect, useState } from "react";import './header.css'

import CTA from './CTA'
import ME from '../../assets/me.jpeg'
import HeaderSocials from './HeaderSocials'

const roles = ["Full Stack Developer", "Web Developer", "UI/UX Designer"];

function Header() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const current = roles[roleIndex];

    if (index < current.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + current.charAt(index));
        setIndex(index + 1);
      }, 80);

      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => {
        setText("");
        setIndex(0);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }, 1500);
    }
  }, [index, roleIndex]);

  return (
    <header id='header'>
      <div className="header__container">

        <h2>Hello I'm</h2>

        <h1 className="shimmer-text">
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
          Muhammad Fadillah Aditama
          </motion.span>
        </h1>

        <h3 className="text-light typing">
          {text}<span className="cursor">|</span>
        </h3>

        <CTA />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

      </div>
    </header>
  )
}

export default Header