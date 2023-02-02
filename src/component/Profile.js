import { getSuggestedQuery } from '@testing-library/react';
import React,{Fragment} from 'react';
import imgseb from '../me.png';
import selftitle from '../sebTitle.png';
import { FaBeer } from "react-icons/fa";
import { BiCurrentLocation } from "react-icons/bi";
import { BsFillPhoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";


const Profile = () => {

    return (
        
        <>     
            <div className="selfie profile" >          
                <img className="me" src= {imgseb} alt="selfie"/>
                    <h1 style={{color:'#FFF'}}>Sébastien Ternest</h1> 
                    <h2 className="jobTitle">FullStack Developer</h2>
                <div className="profile-data" >            
                    <h3 style={{color:'#FFF'}}>Phone</h3>
                    <span style ={{color: "white", background:"red",fontSize:"1.5em"}}>
                    <BsFillPhoneFill /> 
                    </span>   
                        <p>+32468129890</p>
                    <h3 style={{color:'#FFF'}}>Location</h3>
                    <span style ={{color: "white", fontSize:"1.5em"}}>
                    <BiCurrentLocation /> 
                    </span>
                        <p>Rue Notre-Dame,21</p> 
                        <p>1420 Braine-l'Alleud</p>
                    <h3 style={{color:'#FFF'}}>Email</h3>
                    <span style ={{color: "white", fontSize:"1.5em"}}>
                    <MdEmail /> 
                    </span>
                        <p>sebternest@hotmail.com</p>                          
                </div>
                <div className="downloadCV">Download CV</div>
            </div> 
        </>   
    )
}

export default Profile;



