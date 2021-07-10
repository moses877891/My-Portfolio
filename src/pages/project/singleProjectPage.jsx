import React from "react";

function ProjectPage({ projects, loading, ...props }) {
    if (loading) return (<div className="text-center"><i className="fas fa-spinner"></i></div>)
    const id = props.match.params.id;
    const project = projects[id - 1];
    const { imageUrl, title, body, excerpt, tools, duration, Website } = project;
    return (
        <div className="container py-5 my-5 txt">
            <div className="row">
                <div className="col-md-6 mb-3">
                    <div className="justify-content-center markdown">
                        <img src={imageUrl} alt={title} className="w-100" />
                    </div>
                    <div className="text-center mt-3">
                        <a href={Website} target="_blank" rel="noreferrer"
                            className="fas fa-external-link-alt text-muted">Vist Website</a>
                    </div>
                </div>
                <div className="col-md-6">
                    <h1 className="font-weight-light text-center mb-3">{title}</h1>
                    <p className="text-center text-muted mb-3">{excerpt}</p>
                    <p><h5 className="text-danger">Tools: </h5>{tools}</p>
                    <p><h5 className="text-danger">Description: <br /></h5>{body}</p>
                    <p><h5 className="text-info">Duration: <br /></h5>{duration}</p>
                </div>
            </div>
        </div>
    );
}

export default ProjectPage;