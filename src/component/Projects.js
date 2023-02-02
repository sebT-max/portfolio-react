import React,{Fragment} from 'react';
import jamming from '../jamming.jpg';
import immopreneur from '../immopreneur.jpg';
import quizmarvel from '../quiz-marvel.png';
import logoepi from '../logoepi.png';


const Projects = () => {

    return (
        <>     
        <section className="row">
            <div className="light-dark sm-12 md-8 lg-6">
                <div className="project-title pb-5">
                    <h1 className="text-center title-h1">RECENTLY DONE PROJECTS</h1>

                </div>

        

                <div className="row grid">
                    <div className="col-lg-3 col-md-5 col-sm-10 element-item popular proyecto our-project" style={{textAlign:"center",padding: 10,margin:0,marginTop:10}}>
                        
                            <div className="img">
                                <a className="test-popup-link" href="https://www.lesepicurieuxdebacchus.com">
                                    <img src={logoepi} style={{borderRadius:200,height: 150,width:"auto"}} alt="Brand-4"/>
                                </a>
                            </div>
                            <div className="title py-4">
                                <h4 className="project_title">Wine e-shop</h4>
                                <span className="text-secondary">E-commerce for a wine business </span>
                            </div>
                        
                    </div>
                    <div className="col-lg-3 col-md-5 col-sm-10 element-item popular proyecto our-project" style={{textAlign:"center",padding: 10,margin:0,marginTop:10}}>
                        
                            <div className="img">
                                <a className="test-popup-link" href="https://www.immopreneur.be">
                                    <div style={{height:150}}>
                                        <img src={immopreneur} style={{height: 100,width:"auto"}} alt="Brand-4"/>
                                    </div>
                                </a>
                            </div>
                            <div className="title py-4">
                                <h4 className="project_title">Rental Management</h4>
                                <span className="text-secondary">Last internship project </span>
                            </div>
                       
                    </div>
                    <div className="col-lg-3 col-md-5 col-sm-10 element-item popular proyecto our-project" style={{textAlign:"center",padding: 10,margin:0,marginTop:10}}>
                        
                            <div className="img">
                                <a className="test-popup-link" href="https://saveplaylist.netlify.app/">
                                    <img src={jamming} style={{height: 150,width:"auto"}} alt="Brand-4"/>
                                </a>
                            </div>
                            <div className="title py-4">
                                <h4 className="project_title">Save playlist to spotify</h4>
                                <span className="text-secondary">First React App </span>
                            </div>
                        
                    </div>
                    <div className="col-lg-3 col-md-5 col-sm-10 element-item popular proyecto our-project" style={{textAlign:"center",padding: 10,margin:0,marginTop:10}}>
                        
                            <div className="img">
                                <a className="test-popup-link" href="https://marvel-quizz-6144d.web.app/">
                                    <img src={quizmarvel} style={{height: 150,width:"auto"}} alt="Brand-4"/>
                                </a>
                            </div>
                            <div className="title py-4">
                                <h4 className="project_title">Quiz-Marvel</h4>
                                <span className="text-secondary">Test-app React </span>
                            </div>

                    </div>
                </div>
            </div>
        </section>

        </>   
    )
}

export default Projects;