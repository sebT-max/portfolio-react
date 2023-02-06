import React,{Fragment,useState} from 'react'
import {Link} from 'react-router-dom';
import technos from '../technos.png';
import {BsGithub} from "react-icons/bs"; 
import {DiRuby} from "react-icons/di"; 
import {DiResponsive} from "react-icons/di";
import {ImHtmlFive} from "react-icons/im";
import {FaAws} from "react-icons/fa";
import {SiJquery} from "react-icons/si"; 
import {SiCss3} from "react-icons/si";
import {DiIntellij} from "react-icons/di";
import react from '../react2.png';
import postgres from '../postgresql.svg';
import redux from '../react-redux.png';
import rails from '../rails.png';
import htmlco from '../html&co.png';
import gitlab from '../gitlab.png';
import gh from '../gh.png';
import heroku from '../heroku.png';
import aws from '../aws.png';
import docker from '../docker.png';

const Hobbies = () => {

  return (
    <>  
    <div className="Myhobbies" style={{color:'#FFF'}}>
      <div className="margin-auto about sm-12 md-6 lg-4" >
        <h1 style={{color:'white',fontWeight:400}}> Besides work</h1>
        <hr/>
        <p style={{color:'grey', fontSize:24}}>
            Dedicated father of two young boys, I get always older and younger at the same time.
            I'm interested in almost everything, especially music and technology.
            Very open-minded, I used to live with many extremely different people and find the beauty of life in harmonizing relationships.      
          </p>
        </div>
        <br/>
      <div className='main-content selfie'>  
        <h2>Technologies</h2>
        <hr/>
        <div className="techno">
          <div className='Backend'>
            <h3>Back-end</h3>
            <img style={{width:200,height:120,margin:20}} src={rails}/>
            <img src={postgres}/>
            
          </div>
          <hr/>
          
          <div className='Backend'>
            <h3>Front-end</h3>
              <img style={{width:220,height:120,margin:20}} src={redux}/>
              <img style={{width:200,height:150,marginBottom:20}} src={htmlco}/>
          </div>
          <hr/>
        </div>
      </div>
      </div>
    </>   
)
}


export default Hobbies;