import React,{useState} from 'react';
import logo from "../../assets/Brand-01.png";

function NavBar2(props) {
    const user = props.userType;
    const isLoggedIn = props.isLoggedIn;
    const isActive = props.activePage;
    const [isOpen, setIsOpen] = useState(false)

    const  toggleOpen = (e) =>{
        e.preventDefault();
        console.log('f')
        setIsOpen(!isOpen);
    }


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


                        <button className="navbar-toggler collapsed" type="button" onClick={toggleOpen}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>


                        <nav className="primary-menu navbar navbar-expand-lg">
                            <div id="header-nav" className={"collapse navbar-collapse"+(isOpen?' show':'')}>
                                <ul className="navbar-nav mr-auto">
                                    {
                                    !isLoggedIn
                                        &&
                                    <>
                                        <li className={"home"+ (isActive==='home'?' active':'')}>
                                            <a href="/">Inicio</a>
                                        </li>
                                        <li className={"howStart"+ (isActive==='howStart'?' active':'')}>
                                            <a href="/how-start">¿Cómo Empezar?</a> 
                                        </li>
                                        

                                        <li className={"ourTeam"+ (isActive==='ourTeam'?' active':'')}>
                                            <a href="/our-team">Team SPOOL</a>
                                        </li>
                                        <li className={"news"+ (isActive==='news'?' active':'')}>
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
                                        <li className={"studentPool"+ (isActive==='studentPool'?' active':'')}>
                                            <a href="/student/pool">Proyectos</a>
                                        </li>
                                        <li className={"studentApply"+ (isActive==='studentApply'?' active':'')}> 
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
                                        <li className={"clientPool"+ (isActive==='clientPool'?' active':'')}>
                                            <a href="/client/pool">Proyectos</a>
                                        </li>
                                    </>    
                                    }
                                    {
                                        user === 'admin'
                                            &&
                                        isLoggedIn
                                            &&
                                    <>
                                        <li className={"adminHome"+ (isActive==='adminHome'?' active':'')}>
                                            <a href="/admin">Inicio</a>
                                        </li>
                                        <li className={"adminReports"+ (isActive==='adminReports'?' active':'')}>
                                            <a href="/admin/reports">Reportes</a>
                                        </li>
                                        <li className={"adminCharts"+ (isActive==='adminCharts'?' active':'')}>
                                            <a href="/admin/charts">Gráficos</a> 
                                        </li>
                                        <li className={"adminNews"+ (isActive==='adminNews'?' active':'')}>
                                            <a href="/admin/news">Noticias</a> 
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
                                        <a href="/login">Iniciar Sesion</a>
                                    </li>
                                    <li className="align-items-center h-auto ml-sm-3">
                                        <a className="btn btn-primary d-none d-sm-block" href="/register">Registrarse</a>
                                    </li>
                                </>
                            }
                            {
                                isLoggedIn
                                    &&
                                    <>
                                        <li> 
                                            <a href="/login">Cerrar sesion</a>
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