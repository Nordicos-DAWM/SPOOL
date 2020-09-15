import React from 'react';
import {CategoriesPlot,SkillsPlot,FacultyGraph,MatterGraph,NavBar2,Footer} from '../../components';
import { useState } from 'react';
import { useEffect } from 'react';
import { chartService } from '../../_services'
const ChartsPage = () =>{
    const[skills,setSkills]= useState(null);
    const[categories,setCategories]=useState(null);
    const[subject,setSubject]=useState(null);
    const[school,setSchool]=useState(null)

    useEffect(()=>{
        function fetchSkills(){
            chartService.getSkills()
            .then(
                skills=>{
                    setSkills(skills);
                },
                error=>{
                    console.log(error)
                }
            )
        }
        function fetchCategories(){
            chartService.getCategories()
            .then(
                categories=>{
                    setCategories(categories)
                },
                error=>{console.log(error)}
            )
        }
        function fetchSubject(){
            chartService.getIsSubject()
            .then(
                isSubject=>{
                    setSubject(isSubject)
                },error=>{console.log(error)}
            )
        }

        function fetchSchool(){
            chartService.getSchool()
            .then(
                schools=>{
                    console.log(schools)
                    setSchool(schools)
                },error=>{console.log(error)}
            )
        }
        fetchSkills();
        fetchCategories();
        fetchSubject();
        fetchSchool();

    },[])

    return(
        <>
            <NavBar2 userType='client' isLoggedIn={true} activePage='clientCharts'/>
            <section className="page-header page-header-text-dark bg-white py-5 mb-0">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-8 order-1 order-md-0">
                            <h1>Estadísticas</h1>
                            <p className="lead mb-0">Gráficas de datos de la aplicación.</p>
                        </div>
                    </div>
                </div>
            </section>
            <div id="content">
                <section className="section pt-5 pb-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-6 mb-5">
                                <div className="bg-white shadow-sm rounded p-4">
                                    <div className="featured-box style-4 py-2 text-left">
                                        {skills && <SkillsPlot {...skills}/>}
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 mb-5">
                                <div className="bg-white shadow-sm rounded p-4">
                                    <div className="featured-box style-4 py-2 text-left">
                                        {categories && <CategoriesPlot {...categories}/>}
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 mb-5">
                                <div className="bg-white shadow-sm rounded p-4">
                                    <div className="featured-box style-4 py-2 text-left">
                                        {subject && <MatterGraph {...subject}/>}
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 mb-5">
                                <div className="bg-white shadow-sm rounded p-4">
                                    <div className="featured-box style-4 py-2 text-left">
                                        {school && <FacultyGraph {...school}/>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer/>
        </>
    )
}
export {ChartsPage};