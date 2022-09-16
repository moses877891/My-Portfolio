import React from 'react';
import './project.styles.css'

import { Link } from 'react-router-dom';

function ProjectCard(props) {
    const { project, loading } = props;
    if (loading) return (<div className="text-center"><i className="fas fa-spinner"></i></div>)
    return (
        <div className="card shadow h-100">
            <img
                src={project.imageUrl}
                alt={project.title}
                className="card-img-top"
            />
            <h4 className="card-title">{project.title}</h4>
            <p className="card-text">{project.excerpt}</p>
            <p className="card-text"><span className="text-danger">Tools: </span>{project.tools}</p>
            <Link to={`/project/${project.id}`} className="stretched-link text-dark cmore">read more...</Link>
        </div>
    )
}

export default ProjectCard;