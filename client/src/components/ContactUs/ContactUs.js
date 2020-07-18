import React from "react";

function ContactUs(props) {
    return (
        <form>
        <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
        </div>
        <div class="form-group">
            <label for="proposal">Escriba su mensaje</label>
            <textarea class="form-control" id="proposal" placeholder="Escriba aquí" required/>
        </div>
    
        <div class="text-center">
            <button type="submit" class="center-block btn btn-primary">Enviar</button>
        </div>
        
    </form>
    );
  }


export { ContactUs };