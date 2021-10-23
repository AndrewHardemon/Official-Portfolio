import React from "react";

function Footer(){

  const icons = [
    {name: "fab fa-github", link: "https://github.com/AeroAtlas"},
    {name: "fab fa-linkedin", link:"https://www.linkedin.com/andrewhardemon"},
    {name: "fab fa-stack-overflow", link:"https://stackoverflow.com/AeroAtlas"},
    {name: "fab fa-youtube", link:"#"}
  ]

  return (                                                                                                                /* width:"269px" */
    <footer className="flex-row px-1" style={{backgroundColor:"black", height: "85vh"}}>
      {icons.map((icon,index) => (
        <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer">
          <i className={icon.name} style={!index ? {marginTop:"300%"}: null}></i>
        </a>
      ))}
    </footer>
  )


}

export default Footer;