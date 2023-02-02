import './App.css';
import Counter from './component/Counter'
import React from 'react'
import Profile from './component/Profile'
import About from './component/About'
import Resume from './component/Resume'
import Projects from './component/Projects'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
    <div className="Home">
    <Profile/>
     
    <Router>
      <div className="container">
        <Navbar/>
        <Routes>
          <Route path="/" element={<About/>}/>
          <Route path="/resume" element={<Resume/>}/>
          <Route path="/projects" element={<Projects/>}/>
        </Routes>
      </div>  
    </Router>

</div>
 <Footer />
    </>  
  );
}

export default App;
