import React,{Fragment} from 'react';
import jamming from '../jamming.jpg';
import immopreneur from '../immopreneur.webp';
import quizmarvel from '../quiz-marvel.png';
import logoepi from '../logoepi.png';
import reciplan from '../reciplan2.png';
import oldportfolio from '../aboutus copie.png';
import Profile from './Profile';



const Projects = () => {
    const profile = window.innerWidth < 992 ? '': 
    (<div className="profile">
          <Profile/>
    </div>)
    return (
        <> 
         <div className="app">
            {profile}
            <div id="projects" className="linkto row container" style={{color:'#FFF'}}>
                <div className="about" >
                    <h1 style={{color:'white',fontWeight:400}}> My last projects</h1>
                    <hr/>
                    <div className="projects">
                        
                        <div className="project">
                            
                                <div className="img">
                                    <a className="test-popup-link" href="https://www.lesepicurieuxdebacchus.com">
                                        <div class="project-image">
                                            <img src={logoepi} style={{borderRadius:200,height: 150,width:"auto"}} alt="Brand-4"/>
                                        </div>
                                    </a>
                                </div>
                                <div className="title py-4">
                                    <h4 className="project_title">Wine e-shop</h4>
                                    <span className="text-secondary" id="projo-description">E-commerce for a wine business </span>
                                </div>
                            
                        </div>
                        
                        <div className="project">
                            
                                <div className="img">
                                    <a className="test-popup-link" href="https://www.immopreneur.be">
                                        <div class="project-image">
                                            <img src={immopreneur} style={{height: 150,width:"auto"}} alt="Brand-4"/>
                                        </div>
                                    </a>
                                </div>
                                <div className="title py-4">
                                    <h4 className="project_title">Immopreneur</h4>
                                    <span className="text-secondary" id="projo-description">Rental management service</span>
                                </div>
                        
                        </div>
                        <div className="project">
                            
                                <div className="img">
                                    <a className="test-popup-link" href="https://saveplaylist.netlify.app/">
                                    <div class="project-image">
                                        <img src={jamming} style={{borderRadius:30,height: 150,width:"auto"}} alt="Brand-4"/>
                                    </div>
                                    </a>
                                </div>
                                <div className="title py-4">
                                    <h4 className="project_title">Save playlist to spotify</h4>
                                    <span className="text-secondary" id="projo-description">First React App </span>
                                </div>
                            
                        </div>
                        <div className="project">
                            
                                <div className="img">
                                    <a className="test-popup-link" href="https://marvel-quizz-6144d.web.app/">
                                        <img src={quizmarvel} style={{borderRadius:400,height: 150,width:"auto"}} alt="Brand-4"/>
                                    </a>
                                </div>
                                <div className="title py-4">
                                    <h4 className="project_title">Quiz-Marvel</h4>
                                    <span className="text-secondary" id="projo-description">Test-app React </span>
                                </div>

                        </div>
                        <div className="project">
                            
                                <div className="img">
                                    <a className="test-popup-link" href="https://reciplan-b1fc6.web.app/">
                                        <img src={reciplan} style={{borderRadius:400,height: 150,width:"auto"}} alt="Brand-4"/>
                                    </a>
                                </div>
                                <div className="title py-4">
                                    <h4 className="project_title">Reciplan</h4>
                                    <span className="text-secondary" id="projo-description">Test-app React </span>
                                </div>

                        </div>
                        <div className="project">
                            
                                <div className="img">
                                    <a className="test-popup-link" href="https://sebt-max.github.io">
                                        <img src={oldportfolio} style={{borderRadius:400,height: 150,width:"auto"}} alt="Brand-4"/>
                                    </a>
                                </div>
                                <div className="title py-4">
                                    <h4 className="project_title">Old portfolio</h4>
                                    <span className="text-secondary" id="projo-description">Do you prefer ? </span>
                                </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>    
        

        </>   
    )
}

export default Projects;