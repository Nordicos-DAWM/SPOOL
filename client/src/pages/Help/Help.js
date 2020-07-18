import React, { Fragment } from "react";
import {NavBarSPOOL, ContactUs, Footer} from '../../components';
import "./style.css"

function Help(props) {
    return (
    <Fragment>
        
        <NavBarSPOOL/>

        <div class="container">

            <h2 >Acerca de nosotros</h2>
            <p class="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit distinctio a illum fugiat, aliquam sapiente, perspiciatis modi commodi odio vero sunt earum? Architecto maxime porro in nihil aspernatur est facilis, labore alias harum repudiandae dolorum quaerat eum quibusdam sapiente facere delectus possimus! Facilis exercitationem rem maxime nam ducimus quo consequuntur assumenda blanditiis odit quasi omnis temporibus quos beatae et accusamus eos non possimus, aliquam nesciunt. Quis beatae commodi accusamus veniam aut vitae aliquam sapiente et! Totam enim aliquid commodi ut illo recusandae veritatis sapiente dicta itaque fuga temporibus aperiam at facilis reprehenderit, doloremque sint vitae praesentium nesciunt doloribus debitis tempore obcaecati asperiores? Voluptates quaerat molestiae odio dolor. Cum eaque consectetur voluptates autem? Excepturi dolore commodi tempora magnam accusamus animi sed exercitationem quam qui et ipsa, adipisci recusandae distinctio dolorum quidem esse voluptatem repellendus quas aperiam ex eius mollitia non blanditiis. Error explicabo vero voluptate asperiores praesentium aut velit quaerat labore!</p>
            <p>lalalal alalalal al ala la  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, vero.</p>
            <h2>Contáctanos</h2>
            <ContactUs/>
        </div>
        <Footer/>
    </Fragment>
    );
  }

export { Help };