import { getSuggestedQuery } from '@testing-library/react';
import React,{Fragment} from 'react';
import imgseb from '../me.png';
import selftitle from '../sebTitle.png';
import { FaBeer, FaRegIdBadge } from "react-icons/fa";
import { BiCurrentLocation } from "react-icons/bi";
import { BsFillPhoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";


const Profile = () => {
    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('cv.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'cv.pdf';
                alink.click();
            })
        })
    }
    return (
        
        <>     
            <div className="selfie profile" >          
                <img className="me" src= {imgseb} alt="selfie"/>
                    <h1 style={{color:'#FFF'}}>Sébastien Ternest</h1> 
                    <h2 className="jobTitle">FullStack Developer</h2>
                <div className="profile-data" >            
                   <div className='flex'>
                        <span style ={{marginRight:15,color:"lightblue",fontSize:"2.2em"}}>
                        <BsFillPhoneFill /> 
                        </span> 
                        
                        <div>
                        <h6 style={{color:'grey'}}>Phone</h6>
                        <p style={{width:150,fontSize:14}}>+32468129890</p>
                        </div>  
                        
                    </div>
                    

                    <div className='flex'>
                        <span style ={{marginRight:15,color: "lightcoral",fontSize:"2.2em"}}>
                        <BiCurrentLocation /> 
                        </span> 
                        
                        <div>
                        <h6 style={{color:'grey'}}>Location</h6>
                        <p style={{width:150,fontSize:14}}>Braine-l'Alleud</p>
                        </div>  
                        
                    </div>
                    <div className='flex'>
                        <span style ={{marginRight:15,color: "lightgray",fontSize:"2.2em"}}>
                        <MdEmail /> 
                        </span> 
                        
                        <div>
                        <h6 style={{color:'grey'}}>Email</h6>
                        <p style={{width:150,fontSize:14}}>sebternest@hotmail.com</p>
                        </div>  
                        
                    </div>                          
                </div>
                <div className="downloadCV" onClick={onButtonClick}>Download CV</div>
            </div> 
        </>   
    )
}

export default Profile;



