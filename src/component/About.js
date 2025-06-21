import React from 'react'
import postgres from '../assets/images/postgresql.svg';
import redux from '../assets/images/react-redux.png';
import Java from '../assets/images/java.png';
import rails from '../assets/images/rails.png';
import htmlco from '../assets/images/html&co.png';
import gitlab from '../assets/images/gitlab.png';
import gh from '../assets/images/gh.png';
import aws from '../assets/images/aws.png';
import docker from '../assets/images/docker.png';
import MySQL_logo from '../assets/images/MySQL_logo.png';
import Angular_logo from '../assets/images/angular.png';
import Profile from './Profile';



const About = () => {
 
  return (
    <> 
     
    <div className="app">
        <div className="profile">
              <Profile/>
        </div>

        <div className="about" style={{color:'#FFF'}}>  
          <div className="projects_and_about_main_title">
                <h1 style={{color:'white',fontWeight:400}}> About me</h1>
                <hr/>
        </div>
        <div style={{color:'grey'}}>
            <p>
              I’m a Fullstack Web Developer specialized in Java/Angular and Ruby on Rails, with a solid background in communication, event coordination, and digital marketing.
              After successfully retraining through an intensive bootcamp, I now build user-focused, reliable applications that solve real-world problems.
              My previous experience helps me bridge the gap between technical development and business needs. I thrive in team environments, I’m quick to learn, and I’m actively looking for a developer position or freelance opportunities to grow with ambitious teams.
            </p>
        </div>
          <h2 id="about_techno_h2" style={{textAlign:"center"}}>Technologies</h2>
            <br/>
          <div className="techno">
            <div className='Backend'>
              <h3 style={{textAlign:"center"}}>Back-end</h3>
              <img style={{width:100,height:64,margin:10}} src={rails}/>
              <img style={{width:100,margin:10,height:64,marginBottom:10}} src={postgres}/>
              <img style={{width:100,margin:10,height:64,marginBottom:10}} src={MySQL_logo}/>
              <img style={{width:80,margin:10,height:64,marginBottom:10}} src={Java}/>
            </div>
            <hr/>
            
            <div className='Backend'>
              <h3>Front-end</h3>
                <img style={{width:100,height:75,margin:10}} src={redux}/>
                <img style={{width:100,height:75,margin:10}} src={htmlco}/>
                <img style={{width:100,height:75,margin:10}} src={Angular_logo}/>
            </div>
            <hr/>
            <div className='Backend'>
              <h3>Versioning</h3>
                <img style={{width:90,height:80,margin:10}} src={gh}/>
                <img style={{width:80,height:80,margin:10}} src={gitlab}/>
            </div>
            <hr/>
            <div className='Backend' id="cloud">
              <h3>Cloud</h3>
                <img style={{width:80,height:80,marginRight:30}} src={aws}/>
                <img style={{width:80,height:70, marginBottom:15}} src={docker}/>
                {/* <img style={{width:90,height:80,marginBottom:20}} src={kubernetes}/> */}

            </div>
          </div>
          <br/><br/>
        </div>
      </div>
    </>   
  )
}


export default About;