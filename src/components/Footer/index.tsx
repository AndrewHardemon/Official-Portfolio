import React from "react";
import "./style.css"


function Footer() {

  const icons = [
    { name: "fab fa-github", link: "https://github.com/AndrewHardemon" },
    { name: "fab fa-linkedin", link: "https://www.linkedin.com/in/andrew-hardemon/" },
    { name: "fab fa-stack-overflow", link: "https://stackoverflow.com/AndrewHardemon" },
    { name: "fab fa-youtube", link: "https://github.com/AndrewHardemon" }
  ]

  return (
    <footer className="footer">
      <div className="footer-nav">
        {icons.map((icon, _index) => (
          <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer">
            <i className={icon.name} ></i>
          </a>
        ))}
      </div>
    </footer>
  )


}

export default Footer;