import React from 'react';
import './stylesheet.css';
import {Container, Row, Col} from 'shards-react';

function Banner(){
    return (
    <>
        <Container>
        <Row>
            <Col lg="5" xl="6" style={{display:"flex"}}>
                <div>
                    <h2>Spool es para todos</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione blanditiis quae commodi veritatis modi perferendis. Porro ab eos ea magni facere necessitatibus molestias voluptates, vero voluptatibus hic amet animi autem adipisci officia, aliquam dolores, dignissimos earum nobis sapiente sed quod.
                    </p>
                </div>

            </Col>
            <Col lg="7" xl="6">
                <Row className="banner style-2" style={{justify:"content-center"}}>
                    <Col sm='6' mb-4 text-center></Col>
                    
                </Row>

            </Col>

        </Row>
        </Container>

    </>
)}


export {Banner};