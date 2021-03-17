import React, {useState} from "react";
import Project from "./Project";

function Portfolio(){
  const [projects, setProjects] = useState([
    {
      name: "vamp-desktop",
      description: "A Real Time Chat Application",
      technologies: "MERN/socket.io/Electron",
      link: "https://vamp-desktop.herokuapp.com/",
      repo: "https://github.com/AeroAtlas/Vamp-Desktop"
    },
    {
      name: "safe-for-work",
      description: "A Testing System for Employees",
      technologies: "MERN/Chart.js/Passport",
      link: "https://project-sfw.herokuapp.com/",
      repo: "https://github.com/Azorse/Project-SFW"
    },
    {
      name: "vamp-desktop",
      description: "A Real Time Chat Application",
      technologies: "MERN/socket.io/Electron",
      link: "https://vamp-desktop.herokuapp.com/",
      repo: "https://github.com/AeroAtlas/Vamp-Desktop"
    },
    {
      name: "vamp-desktop",
      description: "A Real Time Chat Application",
      technologies: "MERN/socket.io/Electron",
      link: "https://vamp-desktop.herokuapp.com/",
      repo: "https://github.com/AeroAtlas/Vamp-Desktop"
    },
  ])

  return (
    <div>  
      <div className="flex-row">
        {projects.map((project, index) => (
          <Project project={project} key={index}/>
        ))}
      </div>
      <span>
        <button onClick={() => setProjects(projects.concat(projects.shift()))}>Prev</button>
        <button onClick={() => setProjects([projects.pop()].concat(projects))}>Next</button>
      </span>
    </div>
  )
}

export default Portfolio;