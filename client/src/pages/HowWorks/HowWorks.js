import React from 'react';
import {NavBarSPOOL} from '../../components';
import Client from '../../assets/client-hw.jpg';
import Student from '../../assets/student-hw.jpg';

const HowWorks = ()=>{
    return (
        <>
        <NavBarSPOOL/>
        <section className="section">
            <div className="container">
                <h2 className="text-9 text-center">
                    ¿Cómo empezar?
                </h2>
                <div className="row pt-3 pt-md-5">
                    <div className="col-12 col-md-4">
                        <div className="row">
                            <div className="col-4 col-md-12 text-center">
                                <div className="featured-box-icon " style={{fontSize:"50px"}}> <i class="far fa-file-alt"></i> </div>
                            </div>
                            <div className="col-8 col-md-12 text-left text-md-center">
                                <h3 className="text-5">Regístrate</h3>
                                <p className="text-4" style={{lineHeight:"1.3em"}}>Obten una cuenta para ver todos los proyectos.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="row">
                            <div className="col-4 col-md-12 text-center">
                                <div className="featured-box-icon " style={{fontSize:"50px"}}> <i class="far fa-envelope-open"></i> </div>
                            </div>
                            <div className="col-8 col-md-12 text-left text-md-center">
                                <h3 className="text-5">Aplica</h3>
                                <p className="text-4" style={{lineHeight:"1.3em"}}>Estudiantes aplican y proponen una solución para un proyecto.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="row">
                            <div className="col-4 col-md-12 text-center">
                                <div className="featured-box-icon " style={{fontSize:"50px"}}> <i class="fas fa-code"></i> </div>
                            </div>
                            <div className="col-8 col-md-12 text-left text-md-center">
                                <h3 className="text-5">¡Programa!</h3>
                                <p className="text-4" style={{lineHeight:"1.3em"}}>Los estudiantes aceptados realizan el proyecto durante el semestre.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="section pt-1">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <img src={Student} className="img-fluid" alt="Responsive image"/>
                        <h2 className="text-7 text-center py-3">Estudiantes</h2>
                        <p className="text-4" style={{lineHeight:"1.3em"}}>
                            Estudiantes buscan dentro de los proyectos
                            y aplican según el proyecto que les llame la 
                            atención. Si son aceptados se contactan con el
                            organizador para obtener más detalles. El tiempo
                            del proyecto será acorde al tiempo que el profesor
                            de la materia determine en cuestión.
                        </p>
                    </div>
                    <div className="col-12 col-md-6">
                        <img src={Client} className="img-fluid" alt="Responsive image"/>
                        <h2 className="text-7 text-center py-3">Organizadores</h2>
                        <p className="text-4" style={{lineHeight:"1.3em"}}>
                            Organizadores serán encargados de proponer
                            una idea de proyecto que estará disponible para
                            que los estudiantes opten por aplicar en ellas.
                            También pueden proponer de contacto un mentor.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}

export {HowWorks};