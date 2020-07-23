import React from "react";


function Footer(props) {
    return (
    <footer className="page-footer font-small mdb-color pt-4">


        <div className="container text-center text-md-left">
            <div className="row footer-options">
                <span className= "col-lg-3 col-sm-4 col-md-3 "><a className="text-primary" href='/help'>Acerca de SPOOL</a></span>
                <span className= "col-lg-3 col-sm-4 col-md-3 "><a className="text-primary" href='/help'>Contáctanos</a></span>
                <span className= "col-lg-3 col-sm-4 col-md-3 "><a className="text-primary" href='/help'>Ayuda</a></span>
                
            </div>
            <hr/>
            <div className="row d-flex align-items-center">

            <div className="col-md-7 col-lg-8">

                <p className="text-center text-md-left">Copyright © 2020 
                    <strong> SPOOL</strong>. All Rights Reserved.

                </p>

            </div>
            
            <div className="col-md-5 col-lg-4 ml-lg-0">

                <div className="text-center text-md-right">
                <ul className="list-unstyled list-inline">
                    <li className="list-inline-item">
                    <a href='/' className="btn-floating btn-sm rgba-white-slight mx-1">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    </li>
                    <li className="list-inline-item">
                    <a href='/' className="btn-floating btn-sm rgba-white-slight mx-1">
                        <i className="fab fa-twitter"></i>
                    </a>
                    </li>
                    <li className="list-inline-item">
                    <a href='/' className="btn-floating btn-sm rgba-white-slight mx-1">
                        <i className="fab fa-google-plus-g"></i>
                    </a>
                    </li>
                    <li className="list-inline-item">
                    <a href='/' className="btn-floating btn-sm rgba-white-slight mx-1">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                    </li>
                </ul>
                </div>

            </div>
            
            </div>
            
        </div>
        
        </footer>

    );
  }



export { Footer };