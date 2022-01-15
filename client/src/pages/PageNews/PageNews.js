import React,{useState,useEffect} from 'react';
import {NavBar2,Footer,Preloader} from '../../components'
import {newService} from '../../_services';
const PageNews = ()=>{

    const [loading, setLoading] = useState(true);
    const [news, setNews] = useState([]);

    useEffect(() => {
        function fetchNewsData() {
            newService.getAll()
                .then(
                    news => {
                        setNews(news);
                        console.log(news);
                        setLoading(false);
                    },
                    error => {
                        console.log(error);
                    }
                );
        }
        fetchNewsData();// eslint-disable-next-line
    }, [])

    if(loading){
        return <Preloader/>
    }
    return(
        <>
        <NavBar2 activePage='news'/>
            <section className="page-header page-header-text-dark bg-white py-5 mb-0">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-8 order-1 order-md-0">
                            <h1>Últimas Noticias</h1>
                            <p className="lead mb-0">Las actualizaciones de la página las encontrarás aquí.</p>
                        </div>
                    </div>
                </div>
            </section>
            <div id="content">
                <section className="section pt-5 pb-0">
                    <div className="container">
                        <div className="row">
                            {news && news.map(n => {
                                return (
                                    <div className="col-md-12 mb-5">
                                        <div className="bg-white shadow-sm rounded p-4">
                                            <div className="featured-box style-4 py-2 text-left">
                                                <h3 className="text-body text-7 mb-3">{n.title}</h3>
                                                <p className="text-4 line-height-4 text-muted">{n.date}</p>
                                                <p className="text-4 line-height-4">{n.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                            )}
                        </div>
                    </div>
                </section>
            </div>
            <Footer/>
        </>
    );
}

export {PageNews};