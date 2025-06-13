import React,{Fragment} from 'react';
import jamming from '../assets/images/jamming.jpg';
import quizmarvel from '../assets/images/quiz-marvel.png';
import logoepi from '../assets/images/logoepi.png';
import reciplan from '../assets/images/reciplan_title.png';
import acf from '../assets/images/acf.png';
import Profile from './Profile';

const Projects = () => {
   
    return (
        <> 
         <div className="app">


         <div className="profile" id="projects_profile">
              <Profile/>
        </div>
          
        <div className="about" style={{color:'#FFF'}}>  
            <div className="projects_and_about_main_title">
              <h1 style={{color:'white',fontWeight:400}}> My last projects</h1>
              <hr/>
            </div>
         <div className="project-list">
                <div className="project" id="acf_project">
                <a className="test-popup-link" href="https://test-acf.netlify.app/">
                    <div className="img">
                        
                        <div class="project-image">
                            <img src={acf} id="acf_image" alt="Brand-4"/>
                        </div>
    
                    </div>
                    <div className="title py-4">
                        <h4 className="project_title">French Certified Driver Improvement Center</h4>
                        <span id="projo-description">Java/Angular</span>
                    </div>  
                </a>
            </div>
                
                <div className="project" id="edb_project"> 
                    <a className="test-popup-link" href="https://www.lesepicurieuxdebacchus.com">
                        <div className="img">
                                <div class="project-image">
                                    <img src={logoepi} id="edb_logo_image" alt="Brand-4"/>
                                </div>
                        </div>
                        <div className="title py-4">
                            <h4 className="project_title">Wine e-shop</h4>
                            <span id="projo-description">Ruby on Rails </span>
                        </div>
                    </a>
                </div>
        
                <div  className="project" id="reciplan_project">
                    <a className="test-popup-link" href="https://reciplan-b1fc6.web.app/">
                        <div className="img">
                            <div class="project-image">
                                <img src={reciplan} id="reciplan-image" alt="Brand-4"/>
                            </div>
                        </div>
                        <div className="title py-4">
                            <h4 className="project_title">Recipes list</h4>
                            <span id="projo-description">React/Redux</span>
                        </div>
                    </a>
                </div>
            
        
                <div className="project" id="marvel_quizz_project">   
                    <a className="test-popup-link" href="https://marvel-quizz-6144d.web.app/">
                        <div className="img">
                           <div class="project-image">
                             <img src={quizmarvel} id="quizmarvel_image" alt="Brand-4"/>
                            </div>
                        </div>
                        <div className="title py-4">
                            <h4 className="project_title">Quiz-Marvel</h4>
                            <span id="projo-description">React/Redux</span>
                        </div>
                    </a>    
                </div>
            </div>
        </div>  
        </div>
    
    </>   
    )
}

export default Projects;