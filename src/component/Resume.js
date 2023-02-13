import { getSuggestedQuery } from '@testing-library/react';
import React,{Fragment} from 'react';
import Wagon from '../certif-wagon.png';
import Wagon2 from '../wag.png';
import selftitle from '../sebTitle.png';
import mindeed from '../mindeed.png';
import mj from '../mj.png';
import Profile from './Profile';



const Resume = () => {
    const profile = window.innerWidth < 992 ? '': 
  (<div className="profile">
          <Profile/>
   </div>)

    return (
        <>  
        <div className="app">
        {profile}
        <div id="resume" className="linkto row container" style={{color:'#FFF'}}>
            <div style={{marginBottom:50}} className="education" >  
                <h1>Education as developer</h1> 
                <hr/>
                <h3 style={{color:'#FFF'}}>Le Wagon bootcamp - March 2021</h3>  
                <div className='flex'>
                <img style={{marginTop:20,borderRadius:10,height:200,width: 270}} src= {Wagon} alt="selfie"/>
                    
                </div>
                   
                    <div className="education container">24-week intensive coding bootcamp learning HTML, CSS, Bootstrap, JavaScript ES6,
                        SQL, git, GitHub, Heroku and Ruby on Rails. Designed, implemented and shipped to
                        production a clone of AirBnB and a Rails prototype.</div>
        
            </div>  
            <hr/>

                <div className="experience">
                    <h1>Experience as developer</h1>
                    <hr/> 
                    <h3 style={{color:'#FFF'}}>Mindeed(ex-M&J consulting) - 8-12/2021</h3> 
                    <div className='flex'> 
                        <img style={{marginTop:20,borderRadius:10,width: 200}} src= {mindeed} alt="mindeed"/>
                                    
                    </div>
                    <div className="about container">Implementation of a real estate management interface for admin team and a user/owner area in                     
                        <a style={{color:"white"}} className="test-popup-link" href="https://www.immopreneur.be"> immopreneur.be</a>
                    </div>
                </div>

            </div>
        </div> 
        </>   
    )
}

export default Resume;