import React from 'react';
import logo from "../../assets/Brand-01.png";

function NavBar2(props) {
    const user = props.userType;
    const isLoggedIn = props.isLoggedIn;
    return (
        <div id="header">
            <div className="container pl-0 pr-0">
                <div className="header-row">
                    <div className="header-column justify-content-start">

                        <div>
                            <a className="d-none d-md-flex" href="/">
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
                                    {
                                    !isLoggedIn
                                        &&
                                    <>
                                        <li className="home active">
                                            <a href="/">Inicio</a>
                                        </li>
                                        <li>
                                            <a href="/how-start">¿Cómo Empezar?</a> 
                                        </li>
                                        <li className="projects">
                                            <a href="/pool">Proyectos</a>
                                        </li>
                                        <li className="ourTeam">
                                            <a href="/our-team">Team SPOOL</a>
                                        </li>
                                        <li className="news">
                                            <a href="/news">Noticias</a>
                                        </li>
                                    </>
                                    }
                                    {
                                        user === 'student'
                                            &&
                                        isLoggedIn
                                            &&
                                        
                                    <>
                                        <li className="home active">
                                            <a href="/pool">Proyectos</a>
                                        </li>
                                        <li>
                                            <a href="/student/applications">Aplicaciones</a> 
                                        </li>
                                    </>
                                    }
                                    {
                                        user === 'client'
                                            &&
                                        isLoggedIn
                                            &&
                                    <>
                                        <li className="home active">
                                            <a href="/clientPool">Proyectos</a>
                                        </li>
                                        <li>
                                            <a href="/charts">Gráficos</a> 
                                        </li>
                                    </>    
                                    }

                                    

                                </ul>
                            </div>
                        </nav>            
                    </div>


                    <div className="header-column justify-content-end">
                        <nav className="login-signup navbar navbar-expand">
                            <ul className="navbar-nav">
                            {
                                    !isLoggedIn
                                        &&
                                <>
                                    <li> 
                                        <a href="/login/home">Login</a>
                                    </li>
                                    <li className="align-items-center h-auto ml-sm-3">
                                        <a className="btn btn-primary d-none d-sm-block" href="/register">Sign Up</a>
                                    </li>
                                </>
                            }
                            </ul>
                        </nav>
                    </div>


                </div>
            </div>
        </div>

    )
}

export { NavBar2 }