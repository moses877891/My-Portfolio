import React from 'react';

import { Link } from 'react-router-dom';

import ProjectCard from './projectcard';

function ProjectSection({ project, loading }) {
    if (loading) { return (<div className="text-center"><i className="fas fa-spinner"></i></div>) }
    return (
        <div className="container text-center py-3 my-2 ">
            <h1 className="font-weight-light">
                My <span className="text-danger">Projects</span>
            </h1>
            <div className="lead">
                List of my projects
            </div>
            <div className="row my-2 pt-3">
                {project.slice(0, 3).map((i = project.id) => (
                    <div key={i.id} className="col-md-4 my-2">
                        <ProjectCard project={i} />
                    </div>
                ))}
            </div>
            <Link to="/projects" className="float-right text-info hov"><span>See All<i className="fas fa-chevron-right ml-1 tr"></i></span></Link>
        </div>
    )
}

export default ProjectSection;