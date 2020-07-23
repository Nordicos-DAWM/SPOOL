import React, { Fragment } from "react";
import {NavBar2, ContactUs, Footer} from '../../components';
import "./style.css";

function Help(props) {
    return (
    <Fragment>
        
        <NavBar2/>

        <div class="container mt-5">
            <h3 >Acerca de SPOOL</h3>
            <p className="p_md text-justify">
                <b>SPOOL</b> es una plataforma desarrollada por estudiantes de ESPOL para estudiantes de ESPOL, mediante esta plataforma buscamos conectar clientes y problemas reales a los proyectos que son desarrollados en nuestras materias. 
            </p>
            <p>Confiamos firmemente en las capacidades que poseen los estudiantes de ESPOL, y esperamos estas capacidades puedan ser utilizadas en proyectos que no se queden en el olvido, en proyectos que busquen resolver una problemática real, y que estas soluciones puedan ser compartidas dentro de nuestra comunidad. </p>
            <hr class="mb-4 text-justify"/>
            <h3>Contáctanos</h3>
            <ContactUs/>
            <h3>Ubicación</h3>
            <div className="row">
                <div className="col-12 col-md-6 offset-md-3">
                    <div class="map-responsive">
                        <iframe id="map" title="Mapa de Taws" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.0205476996175!2d-79.96679919999995!3d-2.145816899999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x902d7303caf3e5c7%3A0xe44102e70bc526da!2sTAWS%20ESPOL!5e0!3m2!1ses!2sec!4v1595191181473!5m2!1ses!2sec"  width="600" height="450" frameborder="0" style={{border:0}} allowfullscreen></iframe>
                    </div>
                </div>
            </div>
            
        </div>
        <Footer/>
    </Fragment>
    );
}

export { Help };