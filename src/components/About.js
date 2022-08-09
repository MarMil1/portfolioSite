import React from 'react'
import '../styles/about.css'

export const About = () => {
  return (
    <section 
            id="about" 
            className="about section is-large is-white has-text-centered padding-adjust"
    >
        <div className="container is-narrow">
          <div className="columns about-title-container is-mobile is-centered">
            <div className="column is-three-fifths">
              <div className="work-title">
                Hello! I'm Marko.
              </div>
              <p className="subtitle is-size-5-desktop has-text-weight-normal">
                I'm a full stack software developer and I love what I do.
                Developing software is a passion of mine in which
                I strive to provide the best solutions for projects I work on. 
                Take a look at the skills, tools and software that I've had 
                experience with below.
              </p>
            </div>
          </div>
          <div className="box">
            <div className="content">
              <div className="columns is-centered has-text-centered">
                <div className="column">
                  <div className="about-card-title">Languages</div>
                  <ul>
                    <li>JavaSript</li>
                    <li>SQL</li>
                    <li>Python</li>
                    <li>Java</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Swift</li>
                    <li>Ruby</li>
                  </ul>
                </div>
                <div className="column">
                  <div className="about-card-title">Tools</div>
                  <ul>
                    <li>ReactJS</li>
                    <li>NodeJS</li>
                    <li>ExpressJS</li>
                    <li>Ruby on Rails</li>
                    <li>Bulma</li>
                    <li>Bootstrap</li>
                    <li>Angular</li>
                    <li>VueJS</li>
                  </ul>
                </div>
                <div className="column">
                  <div className="about-card-title">Software</div>
                  <ul>
                    <li>GitHub</li>
                    <li>Jira</li>
                    <li>MySQL</li>
                    <li>MongoDB</li>
                    <li>PostgreSQL</li>
                    <li>Oracle Developer</li>
                    <li>Firebase</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}
