import React from "react";

function ContactUs(props) {
    return (
        <form>
        <div className="row">
            <div className="col-md-6">
                <div class="form-group">
                    <label htmlFor="name">Nombre</label>
                    <input type="text" class="form-control" id="name"  placeholder="Nombre"/>
                </div>
            </div>
            <div className="col-md-6">
                <div class="form-group">
                    <label htmlFor="date">Fecha de Nacimiento</label>
                    <input type="date" class="form-control" id="date"  placeholder="Nombre"/>
                </div>
            </div>
        </div>
        <div class="form-group">
            <label htmlFor="exampleInputEmail1">Correo de Contacto</label>
            <input type="email" class="form-control" id="exampleInputEmail1"  placeholder="Correo"/>
        </div>
        <div class="form-group">
            <label htmlFo="proposal">Escriba su mensaje</label>
            <textarea class="form-control" id="proposal" placeholder="Escriba aquí" required/>
        </div>

        <div class="text-center">
            <button type="submit" class="center-block btn btn-primary">Enviar</button>
        </div>
        
    </form>
    );
  }


export { ContactUs };