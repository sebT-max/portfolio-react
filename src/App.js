import './App.css';
import Counter from './component/Counter'
import React from 'react'
import Profile from './component/Profile'
import About from './component/About'
import Resume from './component/Resume'
import Projects from './component/Projects'
import Navbar from './component/Navbar'
import Hobbies from './component/Hobbies'
import Footer from './component/Footer'
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./index.css";

function App() {
  

  return (
    <> 
    <Router>  
    
      <div className= "Home">
          
          <div className="navtog">
            <Navbar/>
          </div>
            <Routes>
                  <Route path="/" element={<About/>}/>
                  <Route path="/resume" element={<Resume/>}/>
                  <Route path="/projects" element={<Projects/>}/>
            </Routes>
      </div>
        
    </Router>
          
 <Footer />
    
    </>  
  );
}

export default App;
