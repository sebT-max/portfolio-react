import React from 'react';
import imgseb from '../assets/images/me.png';
import { BiCurrentLocation } from "react-icons/bi";
import { BsFillPhoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import {BsGithub} from "react-icons/bs";



const Profile = () => {

    const downloadCV = () => {
        // using Java Script method to get PDF file
        fetch('CV-Sébastien_Ternest.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'CV-Sébastien_Ternest';
                alink.click();
            })
        })
    }
    return (
        
        <>     
            <div className="sidebar selfie" >       
                <img className="me" src= {imgseb} alt="selfie"/>
                <h1 style={{color:'#FFF'}}>Sébastien Ternest</h1> 
                <h2 className='jobTitle' style={{color:"lightblue",textAlign:"center"}}>FullStack Developer</h2>
                <div className="profile-data" >            
                   <div className='flex'>
                        <span style ={{marginRight:15,color:"lightblue",fontSize:"2.2em"}}>
                        <a style={{color:"lightblue"}} href="0468129890"><BsFillPhoneFill /> </a>
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
                        
                           <a style={{color:"white"}} href="mailto:sebternest@hotmail.com"><MdEmail /></a>  

                        </span> 
                        
                        <div>
                        <h6 style={{color:'grey'}}>Email</h6>
                        <p style={{width:150,color:"white",fontSize:14}}>
                            sebternest@hotmail.com
                        </p>
                        </div>  
                        
                    </div> 
                    <div className='flex'>
                        <span style ={{marginRight:15,color: "lightgray",fontSize:"2.2em"}}>
                        <a href= "https://github.com/sebT-max"><BsGithub/></a>
                        </span> 
                        <div>
                        <h6 style={{color:'grey'}}>Github</h6>
                        <p style={{width:150,fontSize:14}}>github.com/sebT-max</p>
                        </div>                    
                    </div> 
                                             
                </div>
                <div className="downloadCV" onClick={downloadCV}>Download CV</div>

            </div> 
        </>   
    )
}

export default Profile;



