import React from 'react';

const Bookingtitle = () => {
    return (
        <section
            className="bg-cover position-relative"
            style={{ background: 'url(assets/img/bg-title.jpg) no-repeat' }}
            data-overlay="5"
        >
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-xl-7 col-lg-9 col-md-12">
                        <div className="fpc-capstion text-center my-4">
                            <div className="fpc-captions">
                                <h1 className="xl-heading text-light">Get-in Touch</h1>
                                <p className="text-light">
                                    Cicero famously orated against his political opponent Lucius Sergius Catilina. Occasionally the first
                                    Oration against Catiline is taken for type specimens
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Bookingtitle;