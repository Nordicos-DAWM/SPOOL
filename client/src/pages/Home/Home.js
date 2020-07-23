import React from 'react';
import {CardIcon, Hero, Banner,IntroSpool,NavBar2,Footer} from '../../components'
const Home = () =>{
    return(
        <>  
            <IntroSpool/>
            <NavBar2 activePage='home'/>
            <Hero/>
            <CardIcon/>
            <Banner/>
            <Footer/>
        </>
    );
};

export {Home};