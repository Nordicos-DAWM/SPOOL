import React, { Fragment } from "react";
import {NavBarSPOOL, ContactUs, Footer} from '../../components';
import "./style.css";

function Help(props) {
    return (
    <Fragment>
        
        <NavBarSPOOL/>

        <div class="container">
            <h3 >Acerca de nosotros</h3>
            <p className="p_md">
                <b>SPOOL</b> es una plataforma desarrollada por estudiantes de ESPOL para estudiantes de ESPOL, mediante esta plataforma buscamos conectar clientes y problemas reales a los proyectos que son desarrollados en nuestras materias. 
            </p>
            <p>Confiamos firmemente en las capacidades que poseen los estudiantes de ESPOL, y esperamos estas capacidades puedan ser utilizadas en proyectos que no se queden en el olvido, en proyectos que busquen resolver una problemática real, y que estas soluciones puedan ser compartidas dentro de nuestra comunidad. </p>
            <p className="p_md" >lalalal alalalal al ala la  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, vero.</p>
            <hr class="mb-4"/>
            <h3>Contáctanos</h3>
            <ContactUs/>
            <h3>Ubicación</h3>
            <div id="mapContainer">
                <iframe id="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.0205476996175!2d-79.96679919999995!3d-2.145816899999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x902d7303caf3e5c7%3A0xe44102e70bc526da!2sTAWS%20ESPOL!5e0!3m2!1ses!2sec!4v1595191181473!5m2!1ses!2sec"  frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            </div>
        </div>
        <Footer/>
    </Fragment>
    );
  }

export { Help };