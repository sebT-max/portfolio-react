import React,{Fragment} from 'react';
import jamming from '../assets/images/jamming.jpg';
import quizmarvel from '../assets/images/quiz-marvel.png';
import logoepi from '../assets/images/logoepi.png';
import reciplan from '../assets/images/reciplan2.png';
import acf from '../assets/images/acf.png';
import Profile from './Profile';

const Projects = () => {
    const profile = window.innerWidth < 1024 ? '': 
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
                        <div className="project" id="acf_project">
                        <a className="test-popup-link" href="https://test-acf.netlify.app/">
                            <div className="img">
                                
                                <div class="project-image">
                                    <img src={acf} style={{borderRadius:30}} alt="Brand-4"/>
                                </div>
            
                            </div>
                            <div className="title py-4">
                                <h4 className="project_title" id="acf_h4">Certified Driver Improvement Center in France</h4>
                                <p></p>
                                <span className="text-secondary" id="projo-description">Java/Angular</span>
                            </div>  
                        </a>
                    </div>
                        
                        <div className="project" id="edb_project"> 
                           <a className="test-popup-link" href="https://www.lesepicurieuxdebacchus.com">
                                <div className="img">
                                        <div class="project-image">
                                            <img src={logoepi} style={{borderRadius:200,height: 150,width:"auto"}} alt="Brand-4"/>
                                        </div>
                                </div>
                                <div className="title py-4">
                                    <h4 className="project_title">Wine e-shop</h4>
                                    <span className="text-secondary" id="projo-description">E-commerce for a wine business </span>
                                </div>
                            </a>
                        </div>
                
                      
                        <a className="project" id="reciplan_project" href="https://reciplan-b1fc6.web.app/">
                            
                        </a>
                    
                
                        <div className="project" id="marvel_quizz_project">   
                            <a className="test-popup-link" href="https://marvel-quizz-6144d.web.app/">
                                <div className="img">
    
                                        <img src={quizmarvel} style={{borderRadius:400,height: 150,width:"auto"}} alt="Brand-4"/>
                                  
                                </div>
                                <div className="title py-4">
                                    <h4 className="project_title">Quiz-Marvel</h4>
                                    <span className="text-secondary" id="projo-description">A quizz for the marvel fans ! </span>
                                </div>
                            </a>    
                        </div>
                    </div>
                </div>
            </div>
        </div>    
        </>   
    )
}

export default Projects;