import React from "react";
import './style.css'
import {Application} from "../../components"



function ProjectInfo(props) {

    return (
    <div className="container">
        <div className="row">
            <div className="col p-4 p-md-5 my-3 bg-dark text-white title">
                <h1 className="text-white display-5 ">{props.data.title}</h1>
            </div>
        </div>
        <div className="row bg-white row_info">
            <div className="col-md-4 col-lg-5 col-sm-12 ">
                <p className="mb-0 text-4">Propuesto por</p>
                <h6>{ props.data.proposer }</h6>
            </div>

            <div className="col-md-4 col-lg-5 col-sm-12 ">
                <p className="mb-0 text-4">Categoría principal</p>
                <h6>{props.data.mainCategory}</h6>
            </div>
            <div className="col-md-3 col-lg-2 col-sm-12 ">
                <p className="mb-0 text-4">Estado</p>
                <span className="text-success">{props.data.state}</span>
            </div>
        </div>

        <div className="row">
            <div className="col-md-4 col-lg-4 col-sm-12 bg-dark text-white">
                <div className="category_skills_div">
                    <h5 className="text-white">Categorías</h5>
                    {props.data.categories.map(i => <span className="badge badge-secondary badge-pill category"> {i}</span>)}
                </div>
                <div className="category_skills_div">
                    <h5 className="text-white">Habilidades</h5>
                    {props.data.skills.map(i => <span className="badge badge-light badge-pill text-dark category"> {i}</span>)}
                </div>
            </div>

            <div className="col-lg-8 col-sm-12 col-md-8 bg-secondary ">
                <div className ="row">
                    <div className="col-12 bg-white">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Descripción</h5>
                                <p className="card-text">{props.data.description}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className ="row">
                    <div className="col-lg-7 col-sm-12 col-md-6  bg-white">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Contacto</h5>
                                <p className="card-text">{props.data.email}</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-5 col-sm-12 col-md-6  bg-white">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Máximo participantes</h5>
                                <p className="card-text ">{props.data.maxParticipants}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        <div className="row bg-white">
            <div className="col my-3 text-center">
                <Application />
            </div>
        </div> 
    </div>

    );
}
  


export { ProjectInfo };