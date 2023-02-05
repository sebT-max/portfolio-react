import { getSuggestedQuery } from '@testing-library/react';
import React,{Fragment} from 'react';
import Wagon from '../certif-wagon.png';
import Wagon2 from '../wag.png';
import selftitle from '../sebTitle.png';
import mindeed from '../mindeed.png';



const Resume = () => {

    return (
        <>   
        <div style={{color:'#FFF'}} className="container">
  
            <div className="eduExp row" > 
                <div className="col lg-4">  
                    <h1>Education</h1> 
                    <h3 style={{color:'#FFF'}}>Le Wagon bootcamp</h3>  
                        <img style={{marginTop:20,borderRadius:10,width: 200}} src= {Wagon} alt="selfie"/>
                        <img style={{marginTop:50,margin:50,borderRadius:10,width: 100}} src= {Wagon2} alt="selfie"/>
                        
                        <br/><br/>
                        <p>24-week part-time intensive coding bootcamp learning HTML, CSS, Bootstrap, JavaScript ES6,
                            SQL, git, GitHub, Heroku and Ruby on Rails. Designed, implemented and shipped to
                            production a clone of AirBnB and a Rails prototype.</p>
                            <br/>
                            <p>My GitHub profile: https://github.com/sebT-max</p>
                        <p>Self-taught for Javascript and react></p>
                </div>  
                <hr/>

                <div className="col lg-4">
                    <h1>Experience</h1> 
                    <h3 style={{color:'#FFF'}}>Mindeed(ex-M&J consulting)</h3> 
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