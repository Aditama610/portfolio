import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'
import { motion } from 'framer-motion'

function Services() {
  return (
    <section id="services">
      <motion.h3
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        What I Offer
      </motion.h3>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Services
      </motion.h1>

      <div className="container services__container">
        {[
          {
            title: "UI/UX Design",
            items: [
              "Designing a website appearance that is modern, responsive, and user-friendly.",
              "Creating a prototype before the development process.",
              "Improving the user experience (UX) to be more comfortable and efficient.",
              "Optimization of the display for various devices (desktop & mobile)."
            ]
          },
          {
            title: "Web Development",
            items: [
              "Building a modern website using React, HTML, CSS, and JavaScript.",
              "Developing interactive features and animations on the website.",
              "API and backend integration according to project needs.",
              "Regular website maintenance and updates."
            ]
          },
          {
            title: "Full Stack Developer",
            items: [
              "Developing web applications from the frontend to the backend.",
              "Using technologies such as Laravel, React, Node.js, and databases (MySQL / PostgreSQL).",
              "Managing the database and ensuring the application's performance remains optimal.",
              "Deployment and maintenance of applications to the server/hosting."
            ]
          }
        ].map((service, index) => (
          <motion.article 
            className="service"
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <div className="service__head">
              <h3>{service.title}</h3>
            </div>
            <ul className="service__list">
              {service.items.map((desc, i) => (
                <li key={i}>
                  <BiCheck className="service__list-icon" />
                  <p>{desc}</p>
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default Services