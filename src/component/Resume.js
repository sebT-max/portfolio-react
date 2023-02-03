import { getSuggestedQuery } from '@testing-library/react';
import React,{Fragment} from 'react';
import Wagon from '../certif-wagon.png';
import Wagon2 from '../wag.png';
import selftitle from '../sebTitle.png';
import { FaBeer } from "react-icons/fa";


const Resume = () => {

    return (
        <>   
        <div style={{color:'#FFF'}} className="container">
  
            <div className="eduExp row" > 
                <div className="col lg-4">  
                    <h1>Education</h1> 
                    <h3 style={{color:'#FFF'}}>Le Wagon bootcamp</h3>  
                        <img style={{marginTop:20,borderRadius:10,width: 150}} src= {Wagon} alt="selfie"/>
                        <img style={{marginTop:20,borderRadius:10,width: 150}} src= {Wagon2} alt="selfie"/>
                        <p>Self-taught for Javascript and react></p>
                    </div>  

                <div className="col lg-4">
                    <h1>Experience</h1> 
                    <div>             
                        <h3 style={{color:'#FFF'}}>M&J consulting</h3>
                        <p>Implementation of a real estate management interface for admin team</p>
                        <p>and a user/owner area</p> 
                        <p>www.immopreneur.be</p>

                    </div>

                </div>
            </div> 
        </div>
        </>   
    )
}

export default Resume;