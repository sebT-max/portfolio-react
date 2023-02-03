import React,{Fragment,useState} from 'react'
import {Link} from 'react-router-dom';
import technos from '../technos.png';
import {AiOutlineCode} from "react-icons/ai";
import {BsGithub} from "react-icons/bs"; 
import {DiRuby} from "react-icons/di"; 
import {DiResponsive} from "react-icons/di";
import {ImHtmlFive} from "react-icons/im";
import {FaAws} from "react-icons/fa";
import {SiJquery} from "react-icons/si"; 
import {SiCss3} from "react-icons/si";
import {DiIntellij} from "react-icons/di";
import react from '../logo.svg';
import postgres from '../postgresql.svg';
import redux from '../redux.svg';



const About = () => {

  return (
    <>  
    <div className="container row" style={{color:'#FFF'}}>
      <div className="selfie about sm-12 md-6 lg-4" >
        <h1 style={{color:'white', padding:20,fontWeight:400}}> About me</h1>
        <p style={{color:'grey', padding:20, fontSize:24}}>
        I'm a passionate web developper who sees coding as an enjoyable activity, full of possibilities, open to creativity and above all as a tool for a more efficient world. Multilingual, I've always loved learning new languages. Music is also a language that I love and play.
        </p>
        <p style={{color:'white', padding:20,fontWeight:400}}><span>Skills:</span> <br/>       
          <AiOutlineCode/> Programming ·
          <BsGithub/> GitHub · 
          <DiRuby/>Programming Languages - Ruby · 
          <DiResponsive/>Responsive Web Design · 
          <ImHtmlFive/>HTML 
          <FaAws/>Amazon Web Services (AWS) ·
          <SiJquery/> jQuery · 
          <SiCss3/> scss 
          <DiIntellij/>IntelliJ IDEA
        </p>
        </div>

      
      <h3>Technologies</h3>
      
        <div className="techno">
            <img src={react}/>
            <img src={postgres}/>
            <img src={redux}/>
        </div>
     </div>   
   
    </>   
)
}


export default About;