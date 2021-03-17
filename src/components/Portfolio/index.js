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
    {
      name: "vamp-desktop",
      description: "A Real Time Chat Application",
      technologies: "MERN/socket.io/Electron",
      link: "https://vamp-desktop.herokuapp.com/",
      repo: "https://github.com/AeroAtlas/Vamp-Desktop"
    },
  ])

  return (
    <div className="flex-row">
      {projects.map((project, index) => (
        <Project project={project} key={index}/>
      ))}
    </div>
  )
}

export default Portfolio;