import React, { Fragment } from 'react'
import './about.css'
import ME from '../../assets/me.JPG'
import { FaAward } from 'react-icons/fa'
import { FiUser } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

export default function About() {
  return (
    <section id="about">
      <h3>Get To Know</h3>
      <h1>About Me</h1>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" width={500} height={500} />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ Years</small>
            </article>
            <article className="about__card">
              <FiUser className="about__icon" />
              <h5>Clients</h5>
              <small>20+ Worldwide</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Completed Project</small>
            </article>
          </div>

          <p>
            I am an undergraduate student in Informatics at ITB AAS INDONESIA 
            who has high motivation, discipline, and is able to adapt quickly 
            to new environments. I have a strong learning spirit, commitment to 
            completing tasks, and am able to work effectively both individually and 
            in a team.
          </p>

          <a href="#contact" className="btn btn-primary">
            Lets Talk
          </a>
        </div>
      </div>
    </section>
  )
}
