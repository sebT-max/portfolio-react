import { getSuggestedQuery } from '@testing-library/react';
import React,{Fragment} from 'react';
import selftitle from '../sebTitle.png';
import mj from '../mj.png';
import Profile from './Profile';
import Tabs from './Tabs';


const Resume = () => {
    const profile = window.innerWidth < 992 ? '': 
  (<div className="profile">
          <Profile/>
   </div>)
   
    return (
        <>  
        <div className="app">
            {profile} 
            <Tabs /> 
             
        </div> 
        </>   
    )
}

export default Resume;