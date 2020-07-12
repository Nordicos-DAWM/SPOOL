import React from "react";
import './style.css'

let description = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita ab fuga natus laborum, nihil earum nostrum porro, magnam laudantium eaque, eos quisquam! Molestiae consequatur assumenda suscipit ipsa blanditiis corporis eveniet.";
let proposer = "Taika Waititi";
let email = "example.gmail.com";
let maxParticipants = 0;
let mainCategory= "Desarrollo web";
let state = "Activo";
let name = "Título del proyectooo"

function ProjectInfo(props) {
    return (
    <div className="container-fluid">
        <div className=" jumbotron p-4 p-md-5 bg-dark text-white title">
            <div className="col-md-9 px-0">
            <h1 className="text-white display-5 ">{name}</h1>
            </div>
        </div>

        <div className="container info">
            <div className="row row_info">
                <div className="col-1 bg-white" >

                </div>
                <div className="col-8 bg-white">
                    <div className="row">
                        <div className="col-6">
                            <p className="p_sm">Propuesto por</p>
                            <h6>{proposer}</h6>
                        </div>
                        <div className="col-6">
                            <p className="p_sm">Categoría principal</p>
                            <h6>{mainCategory}</h6>
                        </div>
                            

                    </div>
                </div>

                <div className="col-3 bg-white align-items-center justify-content-center ">
                    <div className="bg-success badge badge-secondary badge-pill text-white state">
                        <h6 className="text-white text-center">{state}</h6>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-4 col-lg-4 col-sm-12 bg-dark text-white">
                    <div className="category_skills_div">
                        <h5 className="text-white">Categorías</h5>
                        <span className="badge badge-secondary badge-pill category"> Categoria 1</span>
                        <span className="badge badge-secondary badge-pill category"> Categoria 2</span>
                        <span className="badge badge-secondary badge-pill category"> Categoria 3</span>
                    </div>
                    <div className="category_skills_div">
                        <h5 className="text-white">Habilidades</h5>
                        <span className="badge badge-light badge-pill category"> Habilidad 1</span>
                        <span className="badge badge-light badge-pill category"> Habilidad 2 xd</span>
                        <span className="badge badge-light badge-pill category"> abilidad sin h</span>
                    </div>
                </div>

                <div className="col-lg-8 col-sm-12 col-md-8 bg-secondary ">
                    <div className ="row">
                        <div className="col-12 bg-white">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="display-5 card-title">Descripción</h5>
                                    <p className="card-text">{description}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className ="row">
                        <div className="col-7 bg-white">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className=" display-5 card-title">Contacto</h5>
                                    <p className="card-text">{email}</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-5 bg-white">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="display-5 card-title">Máximo participantes</h5>
                                    <p className="card-text text-center display 2">{maxParticipants}</p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>

        <section className="container text-center application_section bg-white">
            <span className="lead text-muted">
                ¿Interesado en participar?
            </span>
            <button type="button" className="btn btn-sm btn-outline-secondary">Aplicar</button>
        </section>
    </div>
    
    );
  }



export { ProjectInfo };