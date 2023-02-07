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
import Profile from './Profile';



const About = () => {
 
  return (
    <> 
    <div className="app">

        <div className="profile">
              <Profile/>
        </div>

        <div id="about" className="linkto row" style={{textAlign:"center",color:'#FFF'}}>
          <div className="margin-auto about" >
            <h1 style={{color:'white',fontWeight:400}}> About me</h1>
            <hr/>
            <p style={{color:'grey', fontSize:24}}>
              I'm a passionate web developper who sees coding as an enjoyable activity, full of possibilities, open to creativity and above all as a tool for a more efficient world. Multilingual, I've always loved learning new languages. Music is also a language that I love and play.
            </p>
          </div>
            <br/>
          <div style={{textAlign:"center"}} className='main-content selfie'>  
            <h2>Technologies</h2>
            <hr/>
            <div className="techno">
              <div className='Backend'>
                <h3>Back-end</h3>
                <img style={{width:100,height:60,margin:20}} src={rails}/>
                <img src={postgres}/>
                
              </div>
              <hr/>
              
              <div className='Backend'>
                <h3>Front-end</h3>
                  <img style={{width:130,height:70,marginTop:20,marginBottom:20}} src={redux}/>
                  <img style={{width:100,height:75,marginBottom:20}} src={htmlco}/>
              </div>
              <hr/>
              <div className='Backend'>
                <h3>Versioning</h3>
                  <img style={{width:155,height:90,marginBottom:10}} src={gh}/>
                  <img style={{width:135,height:90,marginBottom:20}} src={gitlab}/>
              </div>
              <hr/>
              <div className='Backend'>
                <h3>Cloud</h3>
                  <img style={{width:100,height:100}} src={aws}/>
                  <img style={{width:140,height:80,marginBottom:20}} src={docker}/>

              </div>
            </div>
            <div style={{color:'white', fontSize:24,padding:20,fontWeight:400}}><span>Skills:</span> <br/>       
                
                <BsGithub/> GitHub  
                <DiRuby/> Ruby  
                <DiResponsive/>Responsive Web Design  
                <ImHtmlFive/>HTML 
              </div>
              <div style={{color:'white', fontSize:24,fontWeight:400}}> <br/>       
                
                <FaAws/>Amazon Web Services (AWS)
                <SiJquery/>jQuery
                <SiCss3/> scss
                <DiIntellij/>IntelliJ IDEA
              </div>
          </div>
        </div>
    </div>
    
    </>   
)
}


export default About;