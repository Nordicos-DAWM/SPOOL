import React from 'react';
import teamImage from '../../assets/team.jpg';

const DeveloperTeam = ()=>{
    return(
        <>  <section className="page-header page-header-text-light py-0 mb-0">
                <section className="hero-wrap section">
                        <div className="hero-mask opacity-7 bg-dark"></div>
                            <div className="hero-bg hero-bg-scroll" style={{backgroundImage:`url(${teamImage})`}}></div>
                            <div className="hero-content">
                            <div className="container">
                                <div className="row">
                                <div className="col-12 text-center">
                                    <h1 className="text-11 font-weight-500 text-white mb-4">Equipo de desarrollo</h1>
                                    <p className="text-5 text-white line-height-4 mb-4">Nuestra misión es ayudarte a tener un proyecto de calidad que puedas resolver!</p>
                                    </div>
                                </div>
                        </div>
                    </div>
                </section>
            </section>
            <section className="section">
            <div className="container">
                <h2 className="text-9 text-center">Nórdicos</h2>
                <p className="text-4 text-center mb-5">Somos un grupo de estudiantes de ESPOL resolviendo problemas de la industria.</p>
                <div className="row">
                <div className="col-sm-6 col-md-3 text-center mb-4 mb-md-0">
                    <div className="team rounded d-inline-block"> <img className="img-fluid rounded" alt="" src="https://via.placeholder.com/180x188.png"/>
                    <h3>Nicole García</h3>
                    <p className="text-muted">Desarolladora</p>
                    <ul className="social-icons social-icons-sm d-inline-flex">
                        <li className="social-icons-github"><a href="" target="_blank" title="" ><i className="fab fa-github"></i></a></li>
                    </ul>
                    </div>
                </div>
                <div className="col-sm-6 col-md-3 text-center mb-4 mb-md-0">
                    <div className="team rounded d-inline-block"> <img className="img-fluid rounded" alt="" src="https://via.placeholder.com/180x188.png"/>
                    <h3>Robert Moreno</h3>
                    <p className="text-muted">Desarollador</p>
                    <ul className="social-icons social-icons-sm d-inline-flex">
                        <li className="social-icons-github"><a href="" target="_blank" title="" ><i className="fab fa-github"></i></a></li>
                    </ul>
                    </div>
                </div>
                <div className="col-sm-6 col-md-3 text-center mb-4 mb-md-0">
                    <div className="team rounded d-inline-block"> <img className="img-fluid rounded" alt="" src="https://via.placeholder.com/180x188.png"/>
                    <h3>Doménica Barreiro</h3>
                    <p className="text-muted">Desarolladora</p>
                    <ul className="social-icons social-icons-sm d-inline-flex">
                        <li className="social-icons-github"><a href="" target="_blank" title="" ><i className="fab fa-github"></i></a></li>
                    </ul>
                    </div>
                </div>
                <div className="col-sm-6 col-md-3 text-center mb-4 mb-md-0">
                    <div className="team rounded d-inline-block"> <img className="img-fluid rounded" alt="" src="https://via.placeholder.com/180x188.png"/>
                    <h3>Camilo Gutiérrez</h3>
                    <p className="text-muted">Desarollador</p>
                    <ul className="social-icons social-icons-sm d-inline-flex">
                        <li className="social-icons-github"><a href="" target="_blank" title="" ><i className="fab fa-github"></i></a></li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
            </section>
        </>
    )
}

export {DeveloperTeam}