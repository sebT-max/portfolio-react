import React,{useEffect,useState} from 'react';
import Profile from './Profile';
import Tabs from './Tabs';


const Resume = () => {
    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
      function handleScroll() {
        if (window.scrollY > 0) {
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

    const profile = window.innerWidth < 1024 ? 
    <div className= "profile" id="profile_resume">
          <Profile/>
   </div>
    : 
  (<div className={`profile ${isFixed ? 'fixed' : ''}`}>
          <Profile/>
   </div>)

    return (
        <>  
        <div className="app">
            {profile} 
            <Tabs/>
             
        </div> 
        </>   
    )
}

export default Resume;