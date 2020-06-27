import React from 'react';
import HeroBackground from '../../assets/hero-bg.jpg';

const Hero = () =>{
    return(
        <section className="hero-wrap section shadow-md">
        <div className="hero-mask opacity-7 bg-dark"></div>
        <div className="hero-bg" style={{backgroundImage:`url(${HeroBackground})`}}></div>
        <div className="hero-content py-2 py-lg-5">
        <div className="container">
            <div className="row">
                <div className="col-12 col-lg-8 col-xl-7 text-center text-lg-left">
                    <h1 className="text-13 text-white">
                        Lorem ipsum dolor sit amet consectetur adipisicing.
                    </h1>
                    <p className="text-5 text-white mb-4">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    </p>
                    <a href=" " className="btn btn-primary mr-3">Get started for free</a>
                </div>
            </div>
        </div>
        </div>
        </section>
    )
}

export {Hero};