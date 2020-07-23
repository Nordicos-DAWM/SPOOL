import React, { Component } from "react";
import { Steps, Hints } from 'intro.js-react';
import "intro.js/introjs.css";

export class IntroSpool extends Component {

    constructor(props) {

        super(props);

        this.state = {
            stepsEnabled: true,
            initialStep: 0,
            steps: [

                {element: ".logo",
                intro: "¡Bienvenido a Spool! Te presentaremos nuestro sitio..."},

                {element: ".doSpool",
                intro: "Spool es una página web que te permitirá participar en proyectos propuestos por clientes reales."},

                {element: ".howStart",
                intro: "En la página ¿Cómo Empezar? podrás aprender más sobre las opciones que tienes en Spool."},
/*
                {element: ".projects",
                intro: "Proyectos te dará acceso a nuestro Pool de proyectos donde podrás visitar las propuestas que más te interesen."},
*/
                {element: '.ourTeam',
                intro:'Descubre quiénes están detrás de SPOOL'},

                {element: ".news",
                intro: "¡Mantente actualizado con todos los cambios de la página!"},

                {element: '.register-btn',
                intro:'!Únete y se parte de SPOOL!'}
            ],
            hintsEnabled: false,
            hints: [] 
        };
    }

    onExit = () => { this.setState( () => ({ stepsEnabled: false })); };

    render() {

        const { stepsEnabled, steps, initialStep, hintsEnabled, hints } = this.state;

        return (
            <div>
                <Steps
                enabled={stepsEnabled}
                steps={steps}
                initialStep={initialStep}
                onExit={this.onExit}
                />
                <Hints enabled={hintsEnabled} hints={hints}/>
            </div>
        );
    }
}


