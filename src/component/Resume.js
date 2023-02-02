import { getSuggestedQuery } from '@testing-library/react';
import React,{Fragment} from 'react';
import Wagon from '../certif-wagon.png';
import selftitle from '../sebTitle.png';
import { FaBeer } from "react-icons/fa";


const Resume = () => {

    return (
        <>     
            <div className="selfie eduExp sm-12 md-8 lg-6" > 
                <div className="education">     
                    <img style={{marginTop:20,borderRadius:10,width: 150}} src= {Wagon} alt="selfie"/>
                    <p>Self-taught for Javascript and react></p>
                </div>  

                <div className="experience">
                <h1>Experience</h1> 
                <div className="profile-data" >             
                    <h3 style={{color:'#FFF'}}>M&J consulting</h3>
                </div>
                

                        
                    <h3 style={{color:'#FFF'}}>Location</h3>
                        <p>Rue Notre-Dame,21</p> 
                        <p>1420 Braine-l'Alleud</p>
                    <h3 style={{color:'#FFF'}}>Email</h3>
                        <p>sebternest@hotmail.com</p>                       
                </div>
            </div> 
        </>   
    )
}

export default Resume;