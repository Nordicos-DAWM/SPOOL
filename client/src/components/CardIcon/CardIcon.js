import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import './CardIcon.css'

function CardIcon() {
  return (
    <section className="section">
      <div className="container">
        <div className="row">
          <div className="col" id="doSpool">
            <h2 className="text-9">¿Qué puedes hacer en Spool?</h2>
            <p className="text-4 text-justify">En SPOOL encontrás un espacio en donde podrás navegar a través de proyectos, e incluso añadir uno si lo deseas.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 offset-md-2">
            <div className="card m-2 featured-box style-5">
              <i className="fa fa-users fa-5x p-4 text-primary"></i>
              <div className="card-footer cardFooter">
                <p className="text-5">Participar en Proyectos</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card m-2 featured-box style-5">
              <i className="fa fa-lightbulb fa-5x p-4 text-primary"></i>
              <div className="card-footer cardFooter">
                <p className="text-5">Proponer Proyectos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export {CardIcon};