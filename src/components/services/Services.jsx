import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'

function Services() {
  return (
    <section id="services">
      <h3>What I Offer</h3>
      <h1>Services</h1>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Designing a website appearance that is modern, responsive, and user-friendly. </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Creating a prototype before the development process.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Improving the user experience (UX) to be more comfortable and efficient.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Optimization of the display for various devices (desktop & mobile).</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
            <BiCheck className="service__list-icon" />
            <p>Building a modern website using React, HTML, CSS, and JavaScript.</p>
          </li>
          <li>
            <BiCheck className="service__list-icon" />
            <p>Developing interactive features and animations on the website.</p>
          </li>
          <li>
            <BiCheck className="service__list-icon" />
            <p>API and backend integration according to project needs.</p>
          </li>
          <li>
            <BiCheck className="service__list-icon" />
            <p>Regular website maintenance and updates.</p>
          </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Full Stack Developer</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Developing web applications from the frontend to the backend.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Using technologies such as Laravel, React, Node.js, and databases (MySQL/FireBase).</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Managing the database and ensuring the application's performance remains optimal.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Deployment and maintenance of applications to the server/hosting.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services
