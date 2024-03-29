import React from 'react';
import { changeToStandardFormat } from '../../../utils/helpers';
import "./style.css"

function Project({ project, index, extra }) {

  const { name, repo, link, description, image, fullDescription } = project;

  return (
    <>
    {(index!==-1) ? <div className="project" key={name}>
      <img
        // src={require(`../../../assets/projects/${name}.png`)}
        style={extra ? {border:"3px solid black", boxShadow: "10px 10px black"}: {}}
        src={image}
        alt={changeToStandardFormat(name)}
        className="project-bg"
      />
      <div className="project-text">
        <h3>
          <a href={link} target="_blank">{changeToStandardFormat(name)}</a>{' '}
          <a href={repo} target="_blank">
            <i className="fab fa-github"></i>
          </a>
        </h3>
        <p>{description}</p>
      </div>
      {extra ? <div style={{padding:"0.5rem", border: "2px solid black", backgroundColor:"rgba(68,71,90,0.5)", boxShadow: "10px 10px black"}}>
        <h2 style={{textShadow: "1px 1px black", borderBottom: "3px solid black", paddingBottom: "3px"}}>{changeToStandardFormat(name)}</h2>
        <h4 style={{color:"white", textShadow:"1px 1px black"}}>{fullDescription}</h4>
      </div> : null}
    </div> : null}
    </>
  );
}

export default Project;
