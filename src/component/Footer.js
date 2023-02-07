import React from 'react';
import sebTtitle from '../sebTitle.png';


function Footer(){
  return (
    <footer>
      <div className="footer">
        <p style={{fontSize:16,margin:5}}> 
        <span>
          Made by
        <img src={sebTtitle} alt="Logo" width="200" height="60" className="vertical-align-middle" />
        </span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;