import React from 'react';

const PageNews = ()=>{
    return(
        <>
            <section class="page-header page-header-text-dark bg-white py-5 mb-0">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-md-8 order-1 order-md-0">
                            <h1>Últimas Noticias</h1>
                            <p class="lead mb-0">Las actualizaciones de la página las encontrarás aquí.</p>
                        </div>
                    </div>
                </div>
            </section>
            <div id="content">
                <section className="section pt-5 pb-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 mb-5">
                                <div class="bg-white shadow-sm rounded p-4">
                                    <div class="featured-box style-4 py-2 text-left">
                                        <h3 class="text-body text-7 mb-3">Nos gustan los gráficos</h3>
                                        <p class="text-4 line-height-4 text-muted">13 Julio 2020</p>
                                        <p class="text-4 line-height-4">Hemos añadido el apartado de gráficos dentro de la página de Administración.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 mb-5">
                                <div class="bg-white shadow-sm rounded p-4">
                                    <div class="featured-box style-4 py-2 text-left">
                                        <h3 class="text-body text-7 mb-3">Nuevos elementos</h3>
                                        <p class="text-4 line-height-4 text-muted">1 Julio 2020</p>
                                        <p class="text-4 line-height-4">Hemos añadido nuevas funcionalidades en las páginas de Administración.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12 mb-5">
                                <div class="bg-white shadow-sm rounded p-4">
                                    <div class="featured-box style-4 py-2 text-left">
                                        <h3 class="text-body text-7 mb-3">Creación de la página</h3>
                                        <p class="text-4 line-height-4 text-muted">19 Junio 2020</p>
                                        <p class="text-4 line-height-4">Durante los próximos meses estaremos llevando este trabajo a otro nivel!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export {PageNews};