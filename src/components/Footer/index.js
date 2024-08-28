import React from "react";
import "./style.css"


function Footer() {

  const icons = [
    { name: "fab fa-github", link: "https://github.com/AndrewHardemon" },
    { name: "fab fa-linkedin", link: "https://www.linkedin.com/andrewhardemon" },
    { name: "fab fa-stack-overflow", link: "https://stackoverflow.com/AndrewHardemon" },
    { name: "fab fa-youtube", link: "#" }
  ]

  return (
    // <span className="footer-wrapper">
      <footer className="footer">
        <div className="footer-nav">
          {icons.map((icon, index) => (
            <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer">
              <i className={icon.name} ></i>
            </a>
          ))}
        </div>
      </footer>
    // </span>
  )


}

export default Footer;