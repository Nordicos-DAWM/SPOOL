import React from "react";
import './style.css'
import {Application} from "../../components"



let project = {
    description : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita ab fuga natus laborum, nihil earum nostrum porro, magnam laudantium eaque, eos quisquam! Molestiae consequatur assumenda suscipit ipsa blanditiis corporis eveniet.",
    proposer : "Taika Waititi",
    email : "example.gmail.com",
    maxParticipants : 0,
    mainCategory: "Desarrollo web",
    state : "Activo",
    name : "Título del proyectooo",
    color : "5ED46A"
}

class ProjectInfo extends React.Component{

    constructor(props){
        super(props);
        
    }

    render() {


        return (
        <div className="container-fluid">
            <div className=" jumbotron p-4 p-md-5 bg-dark text-white title">
                <div className="col-md-9 px-0">
                <h1 className="text-white display-5 ">{project.name}</h1>
                </div>
            </div>

            <div className="container info">
                <div className="row bg-white row_info">
                            <div className="col-md-4 col-lg-5 col-sm-12 ">
                                <p className="p_sm">Propuesto por</p>
                                <h6>{ project.proposer }</h6>
                            </div>

                            <div className="col-md-4 col-lg-5 col-sm-12">
                                <p className="p_sm">Categoría principal</p>
                                <h6>{project.mainCategory}</h6>
                            </div>
                            
                            <div className="col-md-3 col-lg-2 col-sm-12">
                                <p className="p_sm">Estado</p>
                                <span id="state" className="badge badge-secondary badge-pill">{project.state}</span>
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
                                        <p className="card-text">{project.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className ="row">
                            <div className="col-lg-7 col-sm-12 col-md-6  bg-white">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className=" display-5 card-title">Contacto</h5>
                                        <p className="card-text">{project.email}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-5 col-sm-12 col-md-6  bg-white">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="display-5 card-title">Máximo participantes</h5>
                                        <p className="card-text  display 2">{project.maxParticipants}</p>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <section className="container application_section bg-white text-center">
                <Application />
            </section>
            
        </div>
    
        );
        }
  }


export { ProjectInfo };