import React from 'react';
import { useState } from 'react';
import {NavBar2,Footer,NewCard,NewModal} from '../../components'

const NewsAdmin = ()=>{
    const [open,setOpen] = useState(false);
    const handleOpen = (e)=>{
        e.preventDefault();
        setOpen(true);
        
    }

    const emptyNew = {title:"",date:"",content:""}
    const news = [
        {
            id:1,
            title:"Nos gustan los gráficos",
            date:"13 Julio 2020",
            content:"Hemos añadido el apartado de gráficos dentro de la página de Administración."
        },
        {
            id:2,
            title:"Nuevos elementos",
            date:"19 Junio 2020",
            content:"Hemos añadido nuevas funcionalidades en las páginas de Administración."

        },
        {
            id:3,
            title:"Creación de la página",
            date:"19 Junio 2020",
            content:"Durante los próximos meses estaremos llevando este trabajo a otro nivel!"
        }
    ]
    return(
        <>
            <NavBar2 activePage = 'news'/>
                <section className="page-header page-header-text-dark bg-white py-5 mb-0 pb-0">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-md-8 mx-auto col-12">
                                    <h1 className="text-center text-9">Noticias</h1>                                   
                                </div>
                                <button type="button" className="btn btn-primary d-md-inline-flex d-sm-block" onClick={handleOpen}>
                                    <i className="fa fa-plus text-light pr-2 my-0"></i>
                                    Nueva Noticia
                                </button>   
                            </div>

                        
                        </div>
                </section>
                    <div id="contentt">
                        <section className="section pt-5 pb-0">
                            <div className="container">
                                <div className="row">
                                   {news && news.map(n =>(
                                       <NewCard {...n} key={n.id} className="col-12"/>
                                ))}
                                </div>
                            </div>
                        </section>
                    </div>
                    <Footer/>
                    <NewModal {...emptyNew} show={open} onHide={()=>setOpen(false)} key="0"/>
                    
        </>
    );
}
export{NewsAdmin};