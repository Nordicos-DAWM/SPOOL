import React from "react";

import logo from "../../assets/Brand-01.png";
function NavBarSPOOL(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a href="/" className="navbar-left navbar-brand "><img src= {logo} width="110px" alt="Logo"/></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">Projects</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">How it works</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">Help</a>
                </li>

                </ul>
                    <a className="nav-link" href="/">Login</a>
            </div>
        </nav>
    );
  }



export { NavBarSPOOL };