import { getSuggestedQuery } from '@testing-library/react';
import React,{Fragment,useEffect,useState} from 'react';
import selftitle from '../sebTitle.png';
import mj from '../mj.png';
import Profile from './Profile';
import Tabs from './Tabs';


const Resume = () => {
    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
      function handleScroll() {
        if (window.scrollY > 180) {
            console.log("scroll")
          setIsFixed(true);
        } else {
          setIsFixed(false);
        }
      }
    
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    const profile = window.innerWidth < 992 ? '': 
  (<div className={`profile ${isFixed ? 'fixed' : ''}`}>
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