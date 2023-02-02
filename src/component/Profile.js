import { getSuggestedQuery } from '@testing-library/react';
import React,{Fragment} from 'react';
import imgseb from '../me.png';
import selftitle from '../sebTitle.png';
import { FaBeer, FaRegIdBadge } from "react-icons/fa";
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
                   <div className='flex'>
                        <span style ={{marginRight:15,color:"lightblue",fontSize:"2.5em"}}>
                        <BsFillPhoneFill /> 
                        </span> 
                        
                        <div>
                        <h6 style={{color:'grey'}}>Phone</h6>
                        <p>+32468129890</p>
                        </div>  
                        
                    </div>
                    

                    <div className='flex'>
                        <span style ={{marginRight:15,color: "lightcoral",fontSize:"2.5em"}}>
                        <BiCurrentLocation /> 
                        </span> 
                        
                        <div>
                        <h6 style={{color:'grey'}}>Location</h6>
                        <p>Braine-l'Alleud</p>
                        </div>  
                        
                    </div>
                    <div className='flex'>
                        <span style ={{marginRight:15,color: "lightgray",fontSize:"2.5em"}}>
                        <MdEmail /> 
                        </span> 
                        
                        <div>
                        <h6 style={{color:'grey'}}>Phone</h6>
                        <p>sebternest@hotmail.com</p>
                        </div>  
                        
                    </div>                          
                </div>
                <div className="downloadCV">Download CV</div>
            </div> 
        </>   
    )
}

export default Profile;



