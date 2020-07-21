import React from 'react';
import logo from "../../assets/Brand-01.png";

function NavBar2() {
    return (
        <div id="header">
            <div className="container pl-0 pr-0">
                <div className="header-row">
                    <div className="header-column justify-content-start">

                        <div>
                            <a className="d-none d-md-flex" href="#">
                                <img className="logo" src={logo} style={{width:'211px', height:'72px'}} alt="Spool"/>
                            </a>
                        </div>


                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#header-nav">
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>


                        <nav className="primary-menu navbar navbar-expand-lg">
                            <div id="header-nav" className="collapse navbar-collapse">
                                <ul className="navbar-nav mr-auto">
                                    <li className="home active">
                                        <a href="">Inicio</a>
                                    </li>
                                    <li className="howItWorks dropdown">
                                        <a className="dropdown-toggle" href="">
                                            ¿Cómo funciona?
                                            <i className="arrow"/>
                                        </a>
                                        <ul className="dropdown-menu" style={{display: 'none', height: '245.6px', pt: '10px', mt: '0px', pb: '10px', mb: '0px'}}>
                                            <li className="dropdown">
                                                <a className="dropdown-item dropdown-toggle" href="">Aplicar</a>
                                            </li>
                                            <li className="dropdown">
                                                <a className="dropdown-item dropdown-toggle" href="">Proponer</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="projects">
                                        <a href="">Proyectos</a>
                                    </li>
                                    <li className="help">
                                        <a href="">Ayuda</a>
                                    </li>
                                </ul>
                            </div>
                        </nav>            
                    </div>


                    <div className="header-column justify-content-end">
                        <nav className="login-signup navbar navbar-expand">
                            <ul className="navbar-nav">
                                <li> 
                                    <a href="">Login</a>
                                </li>
                                <li className="align-items-center h-auto ml-sm-3">
                                    <a className="btn btn-primary d-none d-sm-block" href="">Sign Up</a>
                                </li>
                            </ul>
                        </nav>
                    </div>


                </div>
            </div>
        </div>

    )
}

export { NavBar2 }