import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import { Container, Row, Col, Card, CardFooter } from "shards-react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import './CardIcon.css'

export default function CardIcon() {
  return (
    <Container>
      <Row>
        <Col>
        <h3>¿Qué puedes hacer en Spool?</h3>
        <p>Muchas cosas wuuuuuuuuuuuu</p>
        </Col>
      </Row>
      <Row>
        <Col md="6">
          <Card className="m-2">
            <i className="fa fa-users fa-5x p-4"></i>
            
            <CardFooter className="cardFooter">
              <p>Participar en Proyectos.</p>
            </CardFooter>
          </Card>
        </Col>

        <Col md="6">
          <Card className="m-2">
            <i className="fa fa-lightbulb fa-5x p-4"></i>
            <CardFooter className="cardFooter">
              <p>Proponer Proyectos.</p>
            </CardFooter>
          </Card>
        </Col>

      </Row>
    </Container>
  );
}