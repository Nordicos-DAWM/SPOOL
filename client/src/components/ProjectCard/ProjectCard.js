import React from 'react';
import './ProjectCard.css';

function ProjectCard(props) {
    return(
        <>
        <div className="project-card col-md-4 mb-5">
            <div className="bg-white pb-1 shadow-sm rounded text-center">
                <div className="color-card"/>
                <div className="m-4">
                    <h3>{props.title}</h3>
                    <div className="row mb-3 mx-1 d-flex justify-content-between">
                        <span className="text-2 d-inline-flex d-sm-block text-center py-1 px-2 rounded bg-primary text-light">{props.state}</span>
                        <span id="project-category" className="text-2 d-inline-flex d-sm-block text-center py-1 px-2 rounded bg-primary text-light">{props.main_category}</span>
                    </div>
                    <p className="text-2 line-height-4 text-justify">{props.description}</p>
                    <a href="#" className="text-muted btn-link text-3">
                        Ver más
                        <i className="fas fa-chevron-right text-2 ml-2"></i>
                    </a>
                </div>
            </div>
        </div>
        </>
    )
}

export { ProjectCard };