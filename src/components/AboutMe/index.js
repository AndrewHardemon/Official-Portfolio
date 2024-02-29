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
          <div className="about-me-section">
            <h3 className="my-2 about-me-header">Andrew Hardemon - Full Stack Web Developer</h3>
            <img className="profile-img" alt="profile-img" src={profile} style={{ height: "200px", width: "auto", borderRadius: "100px" }}></img>
            <p >
              I am a Full Stack Web Developer with a background in education and management.
              My passion for technology and education led me to a position where I help junior developers learn the skills they need to succeed in the tech industry. 
              <p>
              I have a strong background in JavaScript, Node.js, Express, MongoDB, React, and responsive web design. While web development is my primary focus, I also spend a lot of time learning about program development and functional programming.
              Of all of my skills, I believe my strongest is my ability to learn and understand new and complex ideas and communicate them in a way that is easy to understand.
              </p>
              <p>
                Now I work as a Full Stack Web Development Tutor and Teacher's Assistant with 2U and EdX.
                I worked as a Teacher's Assistant at UCLA, and currently am I Senior Tutor helping students from many different universities.
              </p>
            </p>
          </div>
        </div>
      </section>
      <section className="my-5">
        <div className="my-2">
          <p className="resume-link about-me-text">
            Download my <a target="_blank" rel="noreferrer" href={resume}>Resume</a>
          </p>
          <div className="about-me-container">
            <div className="about-me-div">
              <h3>Front-end</h3>
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
              <h3>Back-end</h3>
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