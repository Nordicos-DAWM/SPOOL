import React from "react";
import { Button, Modal, ModalBody, ModalHeader } from "shards-react";
import './styles.css'




export default class Application extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    const { open } = this.state;
    return (
      <div>
        <Button className= "text-center" onClick={this.toggle}>Aplicar</Button>
        <Modal size="lg" open={open} toggle={this.toggle}>
          <ModalHeader>Aplicación</ModalHeader>
          <ModalBody>
            <form>
                <div class="form-group">
                    <label for="proposal">Detalle el motivo por el cual desea aplicar a este proyecto</label>
                    <textarea class="form-control" id="proposal" placeholder="Escriba aquí" required/>
                    <small id="help" class="form-text text-muted">Las respuesta no puede exceder los 200 caracteres</small>
                </div>
                <div class="form-group">
                    <label for="proposal">Escriba su propuesta</label>
                    <textarea class="form-control" id="proposal" placeholder="Escriba aquí" required/>
                    <small id="help" class="form-text text-muted">Las respuesta no puede exceder los 200 caracteres</small>
                </div>
                
                <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="subject"/>
                    <label class="form-check-label" for="subject">Este proyecto se llevará como proyecto en alguna materia</label>
                </div>
                <div class="text-center">
                    <button type="submit" class="center-block btn btn-primary">Aplicar</button>
                </div>
                
            </form>
        </ModalBody>
        </Modal>
      </div>
    );
  }
}
export { Application };





