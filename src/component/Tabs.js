import { useState } from 'react';
import Wagon from '../certif-wagon.png';
import mindeed from '../mindeed.png';

function Tabs(props) {
  const [activeIndex, setActiveIndex] = useState(1);

  const goExperience = () => {
    setActiveIndex(1);
  };
  const goEducation = () => {
    setActiveIndex(2);
  };

  return (
      

      <div id="resume" className="selfie linkto row container">
        <div className='flex container'>
            <div onClick={goExperience} className={`onglets ${activeIndex === 1 ? 'active' : ''}`}><h1>Experience</h1></div>
            <div onClick={goEducation} className={`onglets ${activeIndex === 2 ? 'active' : ''}`}><h1>Education</h1></div>
      </div>
      <hr/>
        {activeIndex === 1 ?
        <div className="education">
            <h3>Mindeed(ex-M&J consulting)  <br/>8-12/2021</h3> 

            <div className='flex'> 
                <img style={{marginTop:20,borderRadius:10,width: 200}} src= {mindeed} alt="mindeed"/>
             
            </div>
        <div id ="immopreneur_project_details"><h4>Implementation of a real estate management interface for admin team and a user/owner area in                     
            <a style={{color:"white"}} className="test-popup-link" href="https://www.immopreneur.be"> immopreneur.be</a><br/><br/></h4>
            <h5>1) Development of the admin interface allowing Immopreneur employees to:<br/><br/></h5>
            <ul> 
            <li>
            Create the documents relating to a lease in the lease department dynamically (lease contracts, inventory, termination letter, indexing letter of
            rent, etc.)
            </li>
                
            
            <li> Create the documents relating to a lease in the lease department dynamically (lease contracts, inventory, termination letter, indexing letter of
            rent, etc.)</li>

            <li> Organizing property visits</li>

            <li> Communicate on works/repairs</li>

                <li>Create new opportunities for real estate</li>

                <li> Project follow-up<br/><br/></li>
            </ul>


            <h5>2) Development of an authorized owner space in 6 parts:<br/></h5>
            <ul>
                <li>Goods</li>
                <li>Locations</li>
                <li>Repair with a chat system</li>
                <li>Schedule of visits</li>
                <li>Finance with graph and list of transactions (rents paid)</li>
                <li>Monthly report of the other parties concerning the property(ies) of the owner.</li>
            </ul>
            <h5>3) Public pages of the site: <br/></h5>
                <ul>
                    <li>Real estate opportunities with calculation of interests</li>
                    <li>presentation of projects and other pages for which I only worked on the design</li>
                    
                    
                </ul>
            </div>
        <hr/>  
        <div className="selfie tech-exp">
            <h1>Technologies</h1>      
            <div className='buttons-exp wrap'>
                <div className='button-grey'>Ruby on Rails</div>
                <div className='button-grey'>MySQL</div>
                <div className='button-grey'>Heroku</div>
                <div className='button-grey'>HAML</div>
                <div className='button-grey'>SCSS/CSS</div>
                <div className='button-grey'>IntelliJ</div>
            </div>
            </div>
        </div> 
        :
        <div className="education" >  
           
            <h3>Le Wagon bootcamp <br/> March 2021</h3>  
            <div className='flex'>
            <img style={{marginTop:20,borderRadius:10,height:200,width: 250}} src= {Wagon} alt="selfie"/>
            </div>
                <div className="about container">24-week intensive coding bootcamp learning HTML, CSS, Bootstrap, JavaScript ES6,
                    SQL, git, GitHub, Heroku and Ruby on Rails. Designed, implemented and shipped to
                    production a clone of AirBnB and a Rails prototype.<br/><br/>
                    The National Commission of professionnal certification (CNCP) has recognized the Wagon as a level II certification course (corresponding to the level Bac +3/+4) for the professions of designer-developer of web applications.
                </div>
            </div> 
        }
        </div>
  );
}
export default Tabs;
