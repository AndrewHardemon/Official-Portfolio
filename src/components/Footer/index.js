import React from "react";
import "./style.css"


function Footer(){

  const icons = [
    {name: "fab fa-github", link: "https://github.com/AeroAtlas"},
    {name: "fab fa-linkedin", link:"https://www.linkedin.com/andrewhardemon"},
    {name: "fab fa-stack-overflow", link:"https://stackoverflow.com/AeroAtlas"},
    {name: "fab fa-youtube", link:"#"}
  ]

  return (                                                                                                                /* width:"269px" */
    <footer className="footer flex-row px-1">
      <div className="footer-nav">
      {icons.map((icon,index) => (

        <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer">
          <i className={icon.name} ></i>
        </a>
      ))}
      </div>
    </footer>
  )


}

export default Footer;