import React, {useState} from "react";
import Project from "./Project";
import vamp from "../../assets/projects/vamp-desktop.png"
import sfw from "../../assets/projects/safe-for-work.png"
import recommendations from "../../assets/projects/semi-random-recommendations.png"
import adventure from "../../assets/projects/text-based-rpg.png"

function Portfolio(){
  const [projects, setProjects] = useState([
    {
      name: "vamp-desktop",
      description: "Real Time Chat Application",
      technologies: "MERN/socket.io/Electron",
      link: "https://vamp-desktop.herokuapp.com/",
      repo: "https://github.com/AeroAtlas/Vamp-Desktop",
      image: vamp
    },
    {
      name: "safe-for-work",
      description: "Harry Potter Themed Testing System for Employees",
      technologies: "MERN/Chart.js/Passport",
      link: "https://project-sfw.herokuapp.com/",
      repo: "https://github.com/Azorse/Project-SFW",
      image: sfw
    },
    {
      name: "semi-random-recommendations",
      description: "Random Movie and Game Generator",
      technologies: "MERN/socket.io/Electron",
      link: "https://project2beta.herokuapp.com/",
      repo: "https://github.com/AeroAtlas/Semi-Random-Recommendations",
      image: recommendations
    },
    {
      name: "text-based-rpg",
      description: "React Text Adventure Game",
      technologies: "MERN/GraphQL",
      link: "https://text-based-rpg-atlas.herokuapp.com/",
      repo: "https://github.com/AeroAtlas/text-based-rpg",
      image: adventure
    },
  ])

  return (
    <div>  
      <div className="flex-row" style={{backgroundColor:"rgba(68,71,90,0.6)", border: "2px black solid", marginBottom:"10px"}}>
        {projects.map((project, index) => (
          <Project project={project} key={index}/>
        ))}
      </div>
      <div style={{display:"flex", justifyContent:"center"}}>
        <button onClick={() => setProjects(projects.concat(projects.shift()))}>Prev</button>
        <button onClick={() => setProjects([projects.pop()].concat(projects))}>Next</button>
      </div>
    </div>
  )
}

export default Portfolio;