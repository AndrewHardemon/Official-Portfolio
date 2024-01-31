import React from "react";
import profile from "../../assets/profile/Andrew.jpeg"
// import resume from "../../assets/profile/Andrew-Hardemon-Full-Stack-Web-Developer.pdf"
import resume from "../../assets/profile/Andrew-Hardemon-Full-Stack-Web-Developer.pdf"
import "./index.css";

function About() {
  return (
    <>
      <section className="my-5">
        <div className="my-2">
          <div className="about-me-section my-5">
            <img className="profile-img" alt="profile-img" src={profile} style={{ height: "200px", width: "auto", borderRadius: "100px" }}></img>
            <p>Andrew Hardemon - Full Stack Web Developer</p>
            <p>
              I've been programming for several years. It's a long time passion of mine, and I'm always looking to learn new languages, frameworks, and technologies.
              I studied CS at Eastern Kentucky University, and I am a certified Full Stack Web Developer from the University of Arizona.
            </p>
            <p>
              Now I work as a Full Stack Web Development Tutor and Teacher's Assistant (TA) with Triology, Edu.
              I worked as a Teacher's Assistant at UCLA, and currently am I Senior Tutor helping students from many different universities.
            </p>
          </div>
        </div>
      </section>
      <section className="my-5">
        <div className="my-2">
          <p className="resume-link">
            Download my <a target="_blank" rel="noreferrer" href={resume}>Resume</a>
          </p>
          <div className="about-me-container">
            <div className="about-me-div">
              <h3>Front-end Proficiencies</h3>
              <ul className="skills">
                <li>HTML / CSS</li>
                <li>Bootstrap</li>
                <li>jQuery</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>Responsive Design</li>
                <li>Webpack</li>
                <li>React / Redux</li>
                <li>Vue.js</li>
              </ul>
            </div>
            <div style={{ gridColumnStart: "2", gridColumnEnd: "3", gridRowStart: "1", gridRowEnd: "2" }}>
              <h3>Back-end Proficiencies</h3>
              <ul className="skills">
                <li>REST APIs</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>MySQL, Sequelize</li>
                <li>MongoDB, Mongoose</li>
                <li>REST</li>
                <li>GraphQL</li>
                <li>Authentication</li>
                <li>Deno</li>
              </ul>
            </div>
            <div style={{ gridColumnStart: "3", gridColumnEnd: "4", gridRowStart: "1", gridRowEnd: "2" }}>
              <h3>Other Skills</h3>
              <ul className="skills">
                <li>Git</li>
                <li>Linux</li>
                <li>Bash</li>
                <li>Git, Github, Gitlab</li>
                <li>Test Driven Development</li>
                <li>Heroku, Firebase</li>
                <li>OOP</li>
                <li>Functional Programming</li>
                <li>AWS</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About;