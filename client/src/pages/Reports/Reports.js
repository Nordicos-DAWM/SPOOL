import React from 'react';

const Reports = () => {
    return (
        <>
            <section className="page-header page-header-text-dark bg-white py-5 mb-0">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-8 order-1 order-md-0">
                            <h1>Reportes</h1>
                            <p className="lead mb-0">Aquí se presentan los reportes de datos.</p>
                        </div>
                    </div>
                </div>
            </section>
            <div id="content">
                <section className="section pt-5 pb-0">
                    <div className="container bg-light">
                        <div id="horizontalTab" class="resp-htabs" style={{display: 'block', width: '100%', margin: '0px'}}>
                            <ul class="resp-tabs-list">
                                <li class="resp-tab-item resp-tab-active" aria-controls="tab_item-0" role="tab">Usuarios</li>
                                <li class="resp-tab-item" aria-controls="tab_item-1" role="tab">Proyectos</li>
                            </ul>
                            <div class="resp-tabs-container">
                                <h2 class="resp-accordion resp-tab-active" role="tab" aria-controls="tab_item-0"><i class="resp-arrow"></i>Responsive Tab-1</h2><div class="resp-tab-content resp-tab-content-active" style={{display:'block'}} aria-labelledby="tab_item-0">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nibh urna, euismod ut ornare non, volutpat vel tortor. Integer laoreet placerat suscipit. Sed sodales scelerisque commodo. Nam porta cursus lectus. Proin nunc erat, gravida a facilisis quis, ornare id lectus. Proin consectetur nibh quis urna gravida mollis.</p>
                                </div>
                                <h2 class="resp-accordion" role="tab" aria-controls="tab_item-1"><i class="resp-arrow"></i>Responsive Tab-2</h2><div class="resp-tab-content" aria-labelledby="tab_item-1">
                                    <p>This tab has icon in consectetur adipiscing eliconse consectetur adipiscing elit. Vestibulum nibh urna, ctetur adipiscing elit. Vestibulum nibh urna, t.consectetur adipiscing elit. Vestibulum nibh urna,  Vestibulum nibh urna,it.</p>
                                </div>
                                <h2 class="resp-accordion" role="tab" aria-controls="tab_item-2"><i class="resp-arrow"></i>Responsive Tab-3</h2><div class="resp-tab-content" aria-labelledby="tab_item-2">
                                    <p>Suspendisse blandit velit Integer laoreet placerat suscipit. Sed sodales scelerisque commodo. Nam porta cursus lectus. Proin nunc erat, gravida a facilisis quis, ornare id lectus. Proin consectetur nibh quis Integer laoreet placerat suscipit. Sed sodales scelerisque commodo. Nam porta cursus lectus. Proin nunc erat, gravida a facilisis quis, ornare id lectus. Proin consectetur nibh quis urna gravid urna gravid eget erat suscipit in malesuada odio venenatis.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export { Reports };