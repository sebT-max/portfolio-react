import { useState } from 'react';
import Wagon from '../assets/images/certif-wagon.png';
import mindeed from '../assets/images/mindeed.png';
import react_certif from '../assets/images/react_certif.jpg';
import technofutur_certif from '../assets/images/attestation_technofuturTic.png';
import logoepi from '../assets/images/logoepi.png';
import acf from '../assets/images/acf.png';
import sebTtitle from '../assets/images/sebTitle.png';


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
          
            <h3>Freelance Fullstack Web developer - Current job</h3> 
           
            <div className="bg_white padding_10" id ="immopreneur_project_details">

                <div className='flex space-between wrap freelance'>
                    <div className="img">
                        <a className="test-popup-link" href="https://test-acf.netlify.app/" target="blank">
                        <div className="project-image">
                            <img src={acf} style={{borderRadius:3,height: 150}} alt="Brand-4"/>
                        </div>
                        </a>
                    </div>
                    <div className="container acf_container my-5">
                        <h1 className="mb-4">Action Conduite France</h1>
                        <p>
                            <strong>ACF</strong> is an accredited training center for driving license point recovery since 2012.
                            In the face of increasing competition, ACMF aimed to strengthen its online presence by launching a website that will:
                        </p>
                        <ul>
                            <li>Allow users to select training sessions based on location and date.</li>
                            <li>Facilitate online registration and payment.</li>
                            <li>Automate the sending of convocations.</li>
                            <li>Offer a client portal to track sessions and manage registrations.</li>
                            <li>Include a professional area for companies wishing to register their employees.</li>
                            <li>Implement marketing and analytics tracking tools.</li>
                        </ul>

                        <h4 className="mt-4">Client Area</h4>
                        <ul>
                            <li>Access history of past and upcoming sessions and documents</li>
                        </ul>

                        <h4 className="mt-4">Professional Area (B2B Clients)</h4>
                        <ul>
                            <li>Quote request, invoice.</li>
                            <li>Provide a private link for employee registration.</li>
                        </ul>

                        <h4 className="mt-4">Admin Interface</h4>
                        Management of subscriptions, training sessions, invoices, quote requests, convocations, private links for employee registrations.
                    </div>

                    <div className="tech-exp ">    
                        <div className='buttons-exp wrap'>
                            <div className='button-grey'>Java Spring</div>
                            <div className='button-grey'>Angular</div>
                            <div className='button-grey'>PostgreSQL</div>
                            <div className='button-grey'>Railway</div>
                            <div className='button-grey'>Netlify</div>
                            <div className='button-grey'>IDE: Webstorm</div>
                        </div>
                    </div>
                </div>
<hr/>

                <div className='flex space-between wrap freelance'>
                    <div className="img">
                        <a className="test-popup-link" href="https://www.lesepicurieuxdebacchus.com" target="blank">
                            <div className="project-image">
                                <img src={logoepi} style={{borderRadius:200,height: 150,width:"auto"}} alt="Brand-4"/>
                            </div>
                        </a>
                    </div>
                    <div className="container acf_container my-5">
                        <h1 className="mb-4">Les Épicurieux de Bacchus</h1>
                        <p>
                            <strong>Les Épicurieux de Bacchus</strong> is a wine business located in Rhode-Saint-Genèse. Its mission is to
                            highlight the talent of small wine producers I had the chance to meet during my travels through France, Italy, and Spain.
                            This is a full-fledged e-commerce platform, with all product images designed and retouched by me using Photoshop.
                        </p>

                        <p>
                            I managed the entire project, from <strong>design</strong> to <strong>frontend</strong> and <strong>backend</strong> development using Ruby on Rails.
                            One of the most complex challenges I faced was implementing the <strong>payment system</strong>, which required deep integration
                            with <strong>Solidus</strong>—an e-commerce gem for Ruby projects. The codebase was highly abstract,
                            and I frequently communicated with the Solidus team at Nebulab to resolve issues.
                        </p>

                        <h4 className="mt-4">Wine Tasting Reservation System</h4>
                        <p>
                            I also built a <strong>smart reservation system for wine tastings</strong>, designed to prevent opening too many bottles for too few participants—an all-too-common issue.
                            The system optimizes tastings based on the number of interested users and their common availability, ensuring both efficiency and conviviality.
                        </p>
                        </div>

                    <div className="tech-exp">   
                
                    <div className='buttons-exp wrap'>
                        <div className='button-grey'>Ruby on Rails</div>
                        <div className='button-grey'>PostgreSQL</div>
                        <div className='button-grey'>Heroku</div>
                        <div className='button-grey'>HAML</div>
                        
                        <div className='button-grey'>IDE: VS Code</div>
                    </div>
                </div>
            </div>
        </div>
        <hr/>
        
        <div className='freelance'>
            <h3>Mindeed(ex-M&J consulting)</h3>

            <div className='flex'> 
                <img style={{marginTop:20,borderRadius:10,width: 200}} src= {mindeed} alt="mindeed"/>
            </div>

            <div id ="immopreneur_project_details">
                <h4>Implementation of a real estate management interface for admin team and a user/owner area</h4>
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
            <div className="tech-exp">    
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
        </div>
        )
        :
        (
        <div className="education" >  
           <h3>Technofutur Tic Java/Angular <br/> April 2025</h3>  
            <div className='flex'>
                <img style={{marginTop:20,borderRadius:10,height:400,width: 270}} src= {technofutur_certif} alt="selfie"/>
            </div>

                <div className="text-center container"><br/>
                    Intensive training program focusing on backend technologies like Java, Spring
                    Boot, and RESTful services, as well as frontend development with Angular. It in-
                    cludes SQL database management, application security fundamentals, and
                    hands-on labs. Participants complete the program with an individual develop-
                    ment project to apply their skills.
                </div>

                <div className="tech-exp">
                    <h3>Content</h3> 
                    <br/>     
                    <div className='buttons-exp wrap'>
                        <div className='button-grey'>Java Spring</div>
                        <div className='button-grey'>Angular</div>
                        <div className='button-grey'>Hibernate</div>
                        <div className='button-grey'>JDBC</div>
                        <div className='button-grey'>Github</div>
                        <div className='button-grey'>PostgreSQL</div>
                    </div>
                </div>
            <hr/> 
            <br/> 
            <h3>Le Wagon 24-week intensive coding bootcamp <br/> March 2022</h3>  
            <div className='flex'>
                <img style={{marginTop:20,borderRadius:10,height:200,width: 270}} src= {Wagon} alt="selfie"/>
            </div>

                <div className="text-center container"><br/>
                    The National Commission of professionnal certification (CNCP) has recognized the Wagon as a level II certification course (corresponding to the level Bac +3/+4) for the professions of designer-developer of web applications.
                </div>

                <div className="tech-exp">
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
                <div className="tech-exp">
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
                    <br/>
                    <a className="button-white" href="https://www.udemy.com/course/formation-react-js-pour-tous/"> More infos</a>
                </div>   
                <br/> 
            </div>              
                
            </div> 
        )
        }
        </div>
  );
}
export default Tabs;
