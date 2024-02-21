import React, {useState} from "react";
import Project from "./Project";
import vamp from "../../assets/projects/vamp-desktop.png"
import sfw from "../../assets/projects/safe-for-work.png"
import recommendations from "../../assets/projects/semi-random-recommendations.png"
import adventure from "../../assets/projects/text-based-rpg.png"
import saus from "../../assets/projects/saus_project.png"
import "./style.css"

function Portfolio(){
  const [projects, setProjects] = useState([
    {
      name: "vamp-desktop",
      description: "Real Time Chat Application",
      technologies: "MERN/socket.io/Electron",
      link: "https://vamp-desktop.herokuapp.com/",
      repo: "https://github.com/AndrewHardemon/Vamp-Desktop",
      image: vamp,
      fullDescription: `Real time chat application created with MERN, socket.io, and multer to allowing for instant communication and image sharing.`
    },
    {
      name: "semi-random-recommends",
      description: "Random Movie and Game Generator",
      technologies: "MERN/socket.io/Electron",
      link: "https://semi-random-recommendations.herokuapp.com/",
      repo: "https://github.com/AndrewHardemon/Semi-Random-Recommendations",
      image: recommendations,
      fullDescription: `Random Movie and Video Game generator. Following MVC patterns with the use of Handlebars and Sequelize/SQL, it allows a user to put in several parameters for both games and movies, so the user can get random results for their specific interests.`
    },
    {
      name: "safe-for-work",
      description: "Harry Potter Themed Testing System for Employees",
      technologies: "MERN/Chart.js/Passport",
      link: "https://safe-for-work.onrender.com/",
      repo: "https://github.com/Azorse/Project-SFW",
      image: sfw,
      fullDescription: `Program for teaching, testing, and graphing the results of employees of a company. Created with MERN and graph.js, it allows for multiple divisions of a company to be tested along side eachother.`
    },
    {
      name: "S.A.U.S",
      description: "A Stimulating Electron App",
      technologies: "Electron/Node.js",
      link: "https://andrewhardemon.github.io/SAUS/",
      repo: "https://github.com/AndrewHardemon/SAUS",
      image: saus,
      fullDescription: `A stimulating electron app designed to have sounds and colors bounce around the window.`
    },
    {
      name: "text-based-rpg",
      description: "React Text Adventure Game",
      technologies: "MERN/GraphQL",
      link: "https://text-based-rpg-atlas.herokuapp.com/",
      repo: "https://github.com/AndrewHardemon/text-based-rpg",
      image: adventure,
      fullDescription: `Text Adventure Game with dynamic stats, choices, and inventory. Uses MERN to allow for instant transitions between each part of the adventure.`
    },
  ])

  return (
    <div>  
      <div className="portfolio-container">
        <div className="project-highlight">
          <div className="button-container">
            <button onClick={() => setProjects([projects.pop()].concat(projects))}>Prev</button>
            <button onClick={() => setProjects(projects.concat(projects.shift()))}>Next</button>
          </div>
          <Project project={projects[0]} extra={true}/>
        </div>
        <div className="flex-row project-container">
        {projects.filter((_,i) => i != 0).map((project, index) => (
          <Project project={project} index={index} key={index}/>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Portfolio;