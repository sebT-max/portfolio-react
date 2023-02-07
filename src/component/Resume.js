import { getSuggestedQuery } from '@testing-library/react';
import React,{Fragment} from 'react';
import Wagon from '../certif-wagon.png';
import Wagon2 from '../wag.png';
import selftitle from '../sebTitle.png';
import mindeed from '../mindeed.png';
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
            <br/>
                <h1>Education as developer</h1> 
                <hr/>
                <h3 style={{color:'#FFF'}}>Le Wagon bootcamp - Obtained March 2021</h3>  
                    <img style={{marginTop:20,borderRadius:10,width: 200}} src= {Wagon} alt="selfie"/>
                    <img style={{marginTop:50,margin:50,borderRadius:10,width: 100}} src= {Wagon2} alt="selfie"/>
                    <br/><br/>
                    <p>24-week part-time intensive coding bootcamp learning HTML, CSS, Bootstrap, JavaScript ES6,
                        SQL, git, GitHub, Heroku and Ruby on Rails. Designed, implemented and shipped to
                        production a clone of AirBnB and a Rails prototype.</p>
                        <br/>
                        <p>My GitHub profile: https://github.com/sebT-max</p>
                    <p>Self-taught for Javascript and React</p>
            </div>  
            <hr/>

                <div className="experience">
                    <h1>Experience as developer</h1>
                    <hr/> 
                    <h3 style={{color:'#FFF'}}>Mindeed(ex-M&J consulting) - 8-12/2021</h3> 
                    <div> 
                        <img style={{marginTop:20,borderRadius:10,width: 200}} src= {mindeed} alt="mindeed"/>            
                        <p>Implementation of a real estate management interface for admin team and a user/owner area in www.immopreneur.be</p>
                    </div>

                </div>
            </div> 
        </div> 
        
      
        </>   
    )
}

export default Resume;