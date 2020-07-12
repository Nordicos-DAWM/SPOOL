import React,{Fragment}from 'react';
import {CardIcon, Hero, Banner, NavBarSPOOL} from '../../components'
const Home = () =>{
    return(
        <Fragment>
            <NavBarSPOOL/>
            <Hero/>
            <CardIcon/>
            <Banner/>
        </Fragment>
    );
};

export {Home};
