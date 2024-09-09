// import React, { useEffect } from "react";
// import profile from "../../assets/profile/Andrew.jpeg"
import logo from "../../assets/profile/AH-LOGO-NEW.png"
// import resume from "../../assets/profile/Andrew-Hardemon-Full-Stack-Web-Developer.pdf"
import resume from "../../assets/profile/Andrew-Hardemon-Resume.pdf"
// import anime from 'animejs/lib/anime.es.js';
import "./index.css";

function About() {

  // useEffect(() => {
  //   // document.querySelector(".footer").translateX = "-250px"
  //   const profile = anime.timeline({
  //     easing: 'easeOutExpo',
  //     duration: 1000,
  //     // begin: function(){
  //     // }
  //   })

  //   profile
  //     // .add({
  //     //   targets: '.footer',
  //     //   translateX: -250,
  //     //   duration: 800,
  //     //   delay: 200,
  //     // })
  //     .add({
  //       targets: '.footer',
  //       translateX: 250,
  //       duration: 800,
  //       delay: 500,
  //     })
  // }, []);


  return (
    <>
      <section className="my-3">
        <div className="my-2">
          <div className="about-me-section">
            <div id="about-me-container" className="flex lg:justify-center 2xl:justify-between items-center w-full mx-5 md:px-12 px-6 xl:px-12">
              <img className="profile-img" alt="profile-img" src={logo}></img>
              <div className="lg:w-100 2xl:w-full mx-2 px-6">
                <h3 className="about-me-header">Andrew Hardemon</h3>
                <h3 className="about-me-lesser">Full Stack Web Developer</h3>
                <h3 className="about-me-lesser">Software Developer</h3>
              </div>
              {/* <span></span>
              <span></span> */}
            </div>
            <div className="profile-text">
              <p>Full-Stack Web Developer and Software Engineer with a background in education and management. My attention to detail and problem-solving skills have helped me excel in the various positions I've worked in over the years.</p>
              <p>With 4 years of work experience using JavaScript, TypeScript, HTML/CSS, SQL, Mongo, and Python, along with extensive knowledge of React, Vue.js, Node.js, Next.js, and Django, I have contributed to countless projects with a wide variety of applications and requirements.</p>
              <p>Adaptating to unfamiliar languages and frameworks, debugging complex code bases, and having the ability to articulate problems and technicalities to other programmers and non-programmers alike are some of the skills that I have honed over the past 4 years as a developer.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="my-3">
        <div className="my-2">
          <a target="_blank" rel="noreferrer" href={resume}>
            <p className="resume-link about-me-text">
              Download my Resume
            </p>
          </a>
          <div className="about-me-container">
            <div className="about-me-div">
              <h3>Front-end</h3>
              <ul className="skills">
                <div className="relative group inline-block">
                  <img src="https://img.icons8.com/color/48/000000/html-5--v1.png" alt="html5"/>
                  <span className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-55 transition-opacity ease-in duration-900 opacity-0 text-lg text-center font-bold hover:opacity-100">HTML5</span>
                </div>
                <div className="relative group inline-block">
                <img src="https://img.icons8.com/color/48/000000/css3.png" alt="css3"/>
                  <span className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-55 transition-opacity ease-in duration-900 opacity-0 text-lg text-center font-bold hover:opacity-100">CSS</span>
                </div>
                <div className="relative group inline-block">
                <img src="https://img.icons8.com/color/48/000000/bootstrap.png" alt="bootstrap"/>
                  <span className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-55 transition-opacity ease-in duration-900 opacity-0 text-lg text-center font-bold hover:opacity-100">Bootstrap</span>
                </div>
                <div className="relative group inline-block">
                  <img src="https://img.icons8.com/color/48/000000/tailwind_css.png" alt="tailwind"/>
                  <span className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-55 transition-opacity ease-in duration-900 opacity-0 text-lg text-center font-bold hover:opacity-100">Tailwind</span>
                </div>
                <div className="relative group inline-block">
                <img src="https://img.icons8.com/ios-filled/50/000000/jquery.png" alt="jquery" />
                  <span className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-55 transition-opacity ease-in duration-900 opacity-0 text-lg text-center font-bold hover:opacity-100">jQuery</span>
                </div>
                <div className="relative group inline-block">
                <img src="https://img.icons8.com/color/48/000000/javascript--v1.png" alt="javascript" />
                  <span className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-55 transition-opacity ease-in duration-900 opacity-0 text-lg text-center font-bold hover:opacity-100">JavaScript</span>
                </div>
                <div className="relative group inline-block">
                <img src="https://img.icons8.com/color/48/000000/typescript.png" alt="typescript" />
                  <span className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-55 transition-opacity ease-in duration-900 opacity-0 text-lg text-center font-bold hover:opacity-100">TypeScript</span>
                </div>
                <div className="relative group inline-block">
                  <img src="https://img.icons8.com/color/48/media-queries.png" alt="responsive" /> 
                  <span className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-55 transition-opacity ease-in duration-900 opacity-0 text-lg text-center font-bold hover:opacity-100">Responsive Design</span>
                </div>
                <div className="relative group inline-block">
                  <img src="https://img.icons8.com/color/48/000000/webpack.png" alt="webpack" />
                  <span className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-55 transition-opacity ease-in duration-900 opacity-0 text-lg text-center font-bold hover:opacity-100">Webpack</span>
                </div>
                <div className="relative group inline-block">
                  <img src="https://img.icons8.com/color/48/000000/react-native.png" alt="react" />
                  <span className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-55 transition-opacity ease-in duration-900 opacity-0 text-lg text-center font-bold hover:opacity-100">React</span>
                </div>
                <div className="relative group inline-block">
                  <img src="https://img.icons8.com/color/48/000000/redux.png" alt="redux" />
                  <span className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-55 transition-opacity ease-in duration-900 opacity-0 text-lg text-center font-bold hover:opacity-100">Redux</span>
                </div>
                <div className="relative group inline-block">
                  <img src="https://img.icons8.com/color/48/000000/vue-js.png" alt="vue" />
                  <span className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-55 transition-opacity ease-in duration-900 opacity-0 text-lg text-center font-bold hover:opacity-100">Vue.js</span>
                </div>
              </ul>
            </div>
            <div className="about-me-div">
              <h3>Back-end</h3>
              <ul className="skills">
                <div className="relative group inline-block">
                <img src="https://img.icons8.com/color/48/api-settings.png" alt="api" />
                  <span className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-55 transition-opacity ease-in duration-900 opacity-0 text-lg text-center font-bold hover:opacity-100">REST API</span>
                </div>
                <div className="relative group inline-block">
                <img src="https://img.icons8.com/color/48/000000/nodejs.png" alt="nodejs" />
                  <span className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-55 transition-opacity ease-in duration-900 opacity-0 text-lg text-center font-bold hover:opacity-100">Node.js</span>
                </div>
                <div className="relative group inline-block">
                  <img src="https://img.icons8.com/color/48/000000/express.png" alt="express" />
                  <span className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-55 transition-opacity ease-in duration-900 opacity-0 text-lg text-center font-bold hover:opacity-100">Express</span>
                </div>
                <div className="relative group inline-block">
                  <img src="https://img.icons8.com/color/48/000000/mysql.png" alt="mysql" />
                  <span className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-55 transition-opacity ease-in duration-900 opacity-0 text-lg text-center font-bold hover:opacity-100">MySQL, Sequelize</span>
                </div>
                <div className="relative group inline-block">
                  <img src="https://img.icons8.com/color/48/000000/mongodb.png" alt="mongodb" />
                  <span className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-55 transition-opacity ease-in duration-900 opacity-0 text-lg text-center font-bold hover:opacity-100">MongoDB, Mongoose</span>
                </div>
                <div className="relative group inline-block">
                  <img src="https://img.icons8.com/color/48/000000/graphql.png" alt="graphql" />
                  <span className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-55 transition-opacity ease-in duration-900 opacity-0 text-lg text-center font-bold hover:opacity-100">GraphQL</span>
                </div>
                <div className="relative group inline-block">
                  <img src="https://img.icons8.com/color/48/000000/authentication.png" alt="authentication" />
                  <span className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-55 transition-opacity ease-in duration-900 opacity-0 text-lg text-center font-bold hover:opacity-100">Authentication</span>
                </div>
                <div className="relative group inline-block">
                  <img src="https://img.icons8.com/color/48/000000/deno.png" alt="deno" />
                  <span className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-55 transition-opacity ease-in duration-900 opacity-0 text-lg text-center font-bold hover:opacity-100">Deno</span>
                </div>
              </ul>
            </div>
            <div className="about-me-div">
              <h3>Other Skills</h3>
              <ul className="skills">
                <div className="relative group inline-block">
                  <img src="https://img.icons8.com/color/48/000000/git.png" alt="git" />
                  <span className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-55 transition-opacity ease-in duration-900 opacity-0 text-lg text-center font-bold hover:opacity-100">Git</span>
                </div>
                <div className="relative group inline-block">
                <img src="https://img.icons8.com/color/48/000000/linux.png" alt="linux" />
                  <span className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-55 transition-opacity ease-in duration-900 opacity-0 text-lg text-center font-bold hover:opacity-100">Linux</span>
                </div>
                <div className="relative group inline-block">
                  <img src="https://img.icons8.com/color/48/000000/console.png" alt="bash" />
                  <span className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-55 transition-opacity ease-in duration-900 opacity-0 text-lg text-center font-bold hover:opacity-100">Bash</span>
                </div>
                <div className="relative group inline-block">
                  <img src="https://img.icons8.com/color/48/000000/github--v1.png" alt="github" />
                  <span className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-55 transition-opacity ease-in duration-900 opacity-0 text-lg text-center font-bold hover:opacity-100">Git, Github, Gitlab</span>
                </div>
                <div className="relative group inline-block">
                <img src="https://img.icons8.com/color/48/test-tube.png" alt="tdd" />
                  <span className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-55 transition-opacity ease-in duration-900 opacity-0 text-lg text-center font-bold hover:opacity-100">TTD</span>
                </div>
                <div className="relative group inline-block">
                  <img src="https://img.icons8.com/color/48/000000/heroku.png" alt="heroku" />
                  <span className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-55 transition-opacity ease-in duration-900 opacity-0 text-lg text-center font-bold hover:opacity-100">Heroku</span>
                </div>
                <div className="relative group inline-block">
                  <img src="https://img.icons8.com/external-solidglyph-m-oki-orlando/32/external-object-oriented-programming-programming-solid-solidglyph-m-oki-orlando.png" alt="external-object-oriented-programming-programming-solid-solidglyph-m-oki-orlando"/>
                  <span className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-55 transition-opacity ease-in duration-900 opacity-0 text-lg text-center font-bold hover:opacity-100">OOP</span>
                </div>
                <div className="relative group inline-block">
                  <img src="https://img.icons8.com/color/48/000000/haskell.png" alt="functional" />
                  <span className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-55 transition-opacity ease-in duration-900 opacity-0 text-lg text-center font-bold hover:opacity-100">Functional Programming</span>
                </div>
                <div className="relative group inline-block">
                  <img src="https://img.icons8.com/color/48/000000/amazon-web-services.png" alt="aws" />
                  <span className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-55 transition-opacity ease-in duration-900 opacity-0 text-lg text-center font-bold hover:opacity-100">AWS</span>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About;