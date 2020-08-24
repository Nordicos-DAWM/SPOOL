import React,{Fragment} from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/Brand-01.png';

const RegisterHome = () =>{

    return(
        <Fragment>
        <div className="container">
            <a href="/">
                <img src={logo} alt="Spool's logo" className="img-fluid mx-auto d-block" style={{maxWidth: "40%"}}/>
            </a>
            
            <h2 className="text-center  text-primary my-4" style={{fontWeight:"400"}}>Soy: </h2>

            <div className="row">

                <div className="col-sm-6 col-lg-4 mb-4 offset-lg-2">
                    <div className="featured-box style-5 rounded">
                        <Link style={{float:"none"}} to="/register/student">
                            <div className="featured-box-icon text-primary">
                                <i className="fa fa-graduation-cap fa-2x p-4"></i>
                            </div>
                                <h3 className="text-5">Estudiante</h3>
                            
                        </Link>
                    </div>
                </div>

                <div className="col-sm-6 col-lg-4 mb-4">
                    <div className="featured-box style-5 rounded">
                        <Link style={{float:"none"}} to="/register/client">
                            <div className="featured-box-icon text-primary">
                                <i className="fa fa-users fa-2x p-4"></i>
                            </div>
                                <h3 className="text-5">Cliente</h3>
                            
                        </Link>
                    </div>
                </div>
            </div>

            <div className="row">

                <div className="text-center col-12 text-3">Ya tienes cuenta? <Link to="/login/">Ingresa aquí!</Link></div>
            </div>
        </div>
        </Fragment>
    );
};
export  {RegisterHome};

