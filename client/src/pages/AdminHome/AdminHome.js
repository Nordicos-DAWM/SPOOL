import React from 'react';
import {NavBar2} from '../../components';
import dataCenter from '../../assets/data.jpg';

const AdminHome = ()=>{
    return(
        <> 
        <NavBar2 userType='admin' isLoggedIn={true} activePage='adminHome'/>
        <section className="page-header page-header-text-light py-0 mb-0">
                <section className="hero-wrap section">
                        <div className="hero-mask opacity-7 bg-dark"></div>
                            <div className="hero-bg hero-bg-scroll" style={{backgroundImage:`url(${dataCenter})`}}></div>
                            <div className="hero-content">
                            <div className="container">
                                <div className="row">
                                <div className="col-12 text-center">
                                    <h1 className="text-11 font-weight-500 text-white mb-4">Bienvenido al sistema de administración</h1>
                                    <p className="text-4">Accede a las herramientas de administador</p>
                                    </div>
                                </div>
                        </div>
                    </div>
                </section>
        </section>
        <section className="section pt-2">
            <div className="container">
                <div className="row pt-3 pt-md-5">
                    <div className="col-12 col-md-4">
                        <div className="row">
                            <div className="col-4 col-md-12 text-center">
                                <div className="featured-box-icon " style={{fontSize:"50px"}}> <i class="far fa-file-alt"></i> </div>
                            </div>
                            <div className="col-8 col-md-12 text-left text-md-center">
                                <h3 className="text-5">Visualiza Registros</h3>
                                <p className="text-4" style={{lineHeight:"1.3em"}}>Accede a los registros de usuarios y proyectos</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="row">
                            <div className="col-4 col-md-12 text-center">
                                <div className="featured-box-icon " style={{fontSize:"50px"}}> <i class="fas fa-chart-bar"></i> </div>
                            </div>
                            <div className="col-8 col-md-12 text-left text-md-center">
                                <h3 className="text-5">Estadísticas</h3>
                                <p className="text-4" style={{lineHeight:"1.3em"}}>Visualiza estadísticas del sistema SPOOL</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="row">
                            <div className="col-4 col-md-12 text-center">
                                <div className="featured-box-icon " style={{fontSize:"50px"}}> <i class="fas fa-newspaper"></i> </div>
                            </div>
                            <div className="col-8 col-md-12 text-left text-md-center">
                                <h3 className="text-5">Noticias</h3>
                                <p className="text-4" style={{lineHeight:"1.3em"}}>Administra las noticias</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
            
        </>
    )
}

export {AdminHome}