import React, { Fragment } from "react";
import {NavBarSPOOL, ProjectInfo, Footer} from '../../components';


function Project(props) {
    return (
    <Fragment>
      <NavBarSPOOL/>
      <ProjectInfo/>
      <Footer/>
    </Fragment>
    );
  }

export { Project };