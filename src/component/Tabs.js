import { useState } from 'react';
import Wagon from '../certif-wagon.png';
import mindeed from '../mindeed.png';
import react_certif from '../react_certif.jpg';

function Tabs(props) {
  const [activeIndex, setActiveIndex] = useState(1);

  const goExperience = () => {
    setActiveIndex(1);
  };
  const goEducation = () => {
    setActiveIndex(2);
  };

  return (
      
      <div id="resume" className="selfie linkto container">
        <div className='flex container'>
            <div onClick={goExperience} className={`onglets ${activeIndex === 1 ? 'active' : ''}`}>Experience</div>
            <div onClick={goEducation} className={`onglets ${activeIndex === 2 ? 'active' : ''}`}>Education</div>
        </div>
        <hr/>
        <br/>
        
        {activeIndex === 1 ?
        (
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
                    Create the documents dynamically (lease, inventory, termination letter, indexing letter of
                    rent, etc.)
                    </li>
                    <li> Organize property visits</li>
                    <li> Communicate on works/repairs</li>
                    <li> Create new opportunities for real estate</li>
                    <li> Have a follow-up of the project<br/><br/></li>
                </ul>

            <h5>2) Development of an authorized owner space in 6 parts:<br/></h5>
            <ul>
                <li>Realties</li>
                <li>Rentals</li>
                <li>Rental repair with a chat system</li>
                <li>Scheduling of visits</li>
                <li>Finance with graph and list of transactions (rents paid)</li>
                <li>Monthly report of the other parts concerning the property(ies) of the owner.</li>
            </ul>
            <h5>3) Public pages of the site: <br/></h5>
                <ul>
                    <li>Real estate opportunities with calculation of interests</li>
                    <li>Presentation of projects and other pages for which I only worked on the design</li>
                    
                    
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
        )
        :
        (
        <div className="education" >  
           
            <h3>Le Wagon 24-week intensive coding bootcamp <br/> March 2022</h3>  
            <div className='flex'>
                <img style={{marginTop:20,borderRadius:10,height:200,width: 270}} src= {Wagon} alt="selfie"/>
            </div>

                <div className="text-center container"><br/>
                    The National Commission of professionnal certification (CNCP) has recognized the Wagon as a level II certification course (corresponding to the level Bac +3/+4) for the professions of designer-developer of web applications.
                </div>

                <div className="selfie tech-exp">
                    <h3>Content</h3>      
                    <div className='buttons-exp wrap'>
                        <div className='button-grey'>Ruby on Rails</div>
                        <div className='button-grey'>HTML & CSS</div>
                        <div className='button-grey'>Javascript ES6</div>
                        <div className='button-grey'>Github</div>
                        <div className='button-grey'>PostgreSQL</div>
                        <div className='button-grey'>Heroku</div>
                    </div>
                </div>

            <hr/> 
            <br/>    
            <h3>React JS 45 hours UDEMY online courses<br/> August 2023</h3>  
            <div className='flex'>
            <img style={{marginTop:20,borderRadius:10,height:200,width: 270}} src= {react_certif} alt="selfie"/>
            </div>
                <div className="text-center container"><br/>Master REACT with HOOKS, REDUX, FIREBASE, APIs from A to Z<br/><br/>
                <div className="selfie tech-exp">
            <h3>Content</h3>      
                <div className='buttons-exp wrap'>
                    <div className='button-grey'>React JS 16, 17, 18</div>
                    <div className='button-grey'>Redux</div>
                    <div className='button-grey'>State management</div>
                    <div className='button-grey'>Use API's in React App</div>
                    <div className='button-grey'>Deployment on Firebase</div>
                </div>
                
                </div>
                
                <div className="text-center">
                    <a className="button-white" href="https://www.udemy.com/course/formation-react-js-pour-tous/"> More infos</a>
                </div>    
            </div>              
                
            </div> 
        )
        }
        </div>
  );
}
export default Tabs;
