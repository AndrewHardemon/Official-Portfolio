// import React from 'react';
import { changeToStandardFormat } from '../../../utils/helpers';
import "./style.css"

interface ProjectProps {
  project: {
    name: string,
    repo: string,
    link: string,
    description: string,
    image: string,
    fullDescription: string
  },
  index: number,
  extra: boolean
}

function Project({ project, index, extra }: ProjectProps) {

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
        <h2 className="project-name">{changeToStandardFormat(name)}</h2>
        <h4 className="project-description">{fullDescription}</h4>
      </div> : null}
    </div> : null}
    </>
  );
}

export default Project;
