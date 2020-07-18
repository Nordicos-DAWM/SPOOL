import React, { Fragment } from "react";
import {NavBarSPOOL, ProjectInfoEditable, Footer, Proposal} from '../../components';


function ProjectProposer(props) {
    return (
    <Fragment>
      <NavBarSPOOL/>
      <div className="container">

      <h4 class="mb-3">Información del proyecto</h4>
      <ProjectInfoEditable/>
      <hr class="mb-4"/>

      <h4 class="mb-3">Propuestas</h4>
      <Proposal/>
      <Proposal/>
      <Proposal/>

      </div>
      <Footer/>
    </Fragment>
    );
  }

export { ProjectProposer };