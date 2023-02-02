import React,{useRef, useEffect, Fragment,useState} from 'react'
import {Link} from 'react-router-dom';



const About = () => {

  return (
    <>  
    <div className="row">

    <div className="selfie about sm-12 md-8 lg-6" >
      <h1 style={{color:'white', padding:20,fontWeight:400}}> About me</h1>
      <p style={{color:'red', padding:20}}>
            I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media. I enjoy turning complex problems into simple, beautiful and intuitive designs.
            My aim is to bring across your message and identity in the most creative way. I created web design for many famous brand companies.
      </p>
      <p style={{color:'white', padding:20,fontWeight:400}}><span>Skills:</span> <br/>
                Data Modeling · Programming · GitHub · Programming Languages · Responsive Web Design · Object-Oriented Programming (OOP) · HTML · Back-End Web Development · Web Development · Amazon Web Services (AWS) · Front-End Development · Ruby · Full-Stack Development · jQuery · scss · Haml · IntelliJ IDEA · Ruby on Rails</p>
        
    </div>
    </div>
    
        
    </>   
)
}


export default About;