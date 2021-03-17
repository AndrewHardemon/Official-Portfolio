import React from 'react';
import { changeToStandardFormat } from '../../../utils/helpers';

function Project({ project }) {

  const { name, repo, link, description, image } = project;

  return (
    <div className="project" key={name}>
      <img
        // src={require(`../../../assets/projects/${name}.png`)}
        src={image}
        alt={changeToStandardFormat(name)}
        className="project-bg"
      />
      <div className="project-text">
        <h3>
          <a href={link}>{changeToStandardFormat(name)}</a>{' '}
          <a href={repo}>
            <i className="fab fa-github"></i>
          </a>
        </h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Project;
