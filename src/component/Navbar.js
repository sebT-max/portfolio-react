import React,{useState} from 'react';
import {Link} from 'react-router-dom'; 
import {IoHome} from "react-icons/io5";
import {ImProfile} from "react-icons/im";
import {CgWebsite} from "react-icons/cg";
import CloseButton from 'react-bootstrap/CloseButton';



function Navbar() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const handleNavCollapse = () => {
    setIsNavCollapsed(!isNavCollapsed)
  };

  const barreau = !isNavCollapsed ? <CloseButton variant = "white"  />:<span className="navbar-toggler-icon"></span>
        
  return (
    <nav className="navbar navbar-expand-lg">
      <button className="custom-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded={isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
        {barreau}
      </button>

      <div id="nav" className={`${isNavCollapsed ? 'collapse':''} navbar-collapse`}>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link  onClick={handleNavCollapse} style ={{color:"lightblue"}} className={`${isNavCollapsed ? 'col':'link_sm'} nav-link`} to="/">
                <span style ={{color:"lightblue",fontSize:"2.1em"}}>
                  <IoHome className={`${isNavCollapsed ? '':'lightblue_border'} `} />
                </span> Home
            </Link> 
          </li>

          <li className="nav-item">
            <Link  onClick={handleNavCollapse} style ={{color:"lightblue"}} className={`${isNavCollapsed ? 'col':''} nav-link`} to="/resume">
                  <span style ={{color:"lightblue",fontSize:"2.2em"}}>
                  <ImProfile />
                </span> Resume
            </Link> 
          </li>
          
          <li className="nav-item">
            <Link  onClick={handleNavCollapse} style ={{color:"lightblue"}} className={`${isNavCollapsed ? 'col':''} nav-link`} to="/projects">
                  <span style ={{color:"lightblue",fontSize:"2.2em"}}>
                  <CgWebsite />
                </span> Projects
            </Link> 
          </li>
        </ul>
      </div>
    </nav>
  );
}


export default Navbar;