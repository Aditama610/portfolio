import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'
import { motion } from 'framer-motion'

function Experience() {
  return (
    <section id="experience">
      <h3>What Skills I have</h3>
      <h1>My Experience</h1>

      <div className="container experience__container">

        {/* FRONTEND */}
        <motion.div
          className="experience__frontend"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3>Frontend Development</h3>

          <div className="experience__content">

            <motion.article whileHover={{ x: 5 }} className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </motion.article>

            <motion.article whileHover={{ x: 5 }} className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </motion.article>

            <motion.article whileHover={{ x: 5 }} className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </motion.article>

            <motion.article whileHover={{ x: 5 }} className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Tailwind</h4>
                <small className="text-light">Basic</small>
              </div>
            </motion.article>

            <motion.article whileHover={{ x: 5 }} className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">Basic</small>
              </div>
            </motion.article>

          </div>
        </motion.div>

        {/* BACKEND */}
        <motion.div
          className="experience__backend"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3>Backend Development</h3>

          <div className="experience__content">

            <motion.article whileHover={{ x: 5 }} className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>PHP</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </motion.article>

            <motion.article whileHover={{ x: 5 }} className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Experienced</small>
              </div>
            </motion.article>

            <motion.article whileHover={{ x: 5 }} className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Python</h4>
                <small className="text-light">Basic</small>
              </div>
            </motion.article>

          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Experience