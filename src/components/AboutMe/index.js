import React from "react";
import profile from "../../assets/profile/Andrew.jpeg"

function About(){
  return (
    <>
    <section className="my-5">
      <div className="my-2">
        <div className="my-5">
        <img sclassNam2e="profile-img" src={profile} style={{ height: "200px", width: "auto", borderRadius:"100px" }}></img>
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
    <p>
      Download my <a href="../../assets/profile/Andrew-Hardemon-Web-Development-TA-Resume.pdf" download="Andrew-Hardemon-Web-Development-TA-Resume.pdf">resume</a>
      </p>
      <div style={{display:"grid", gridTemplateColumns: "33% 33% 33%", gridTemplateRows:"10% 90%"}}>
        <div style={{gridColumnStart:"1", gridColumnEnd:"2", gridRowStart:"1", gridRowEnd:"2"}}>
          <h3>Front-end Proficiencies</h3>
          <ul className="skills">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>jQuery</li>
            <li>Responsive Design</li>
            <li>React</li>
            <li>Redux</li>
            <li>Bootstrap</li>
          </ul>
        </div>
        <div style={{gridColumnStart:"2", gridColumnEnd:"3", gridRowStart:"1", gridRowEnd:"2"}}>
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
        <div style={{gridColumnStart:"3", gridColumnEnd:"4", gridRowStart:"1", gridRowEnd:"2"}}>
          <h3>Other Skills and Technologies</h3>
          <ul className="skills">
            <li>Git</li>
            <li>Linux</li>
            <li>Bash</li>
            <li>Github</li>
            <li>Test Driven Development</li>
            <li>Heroku, Firebase</li>
            <li>Java, Scala</li>
            <li>C#, F#</li>
            <li>Haskell</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  </>
  )
}

export default About;