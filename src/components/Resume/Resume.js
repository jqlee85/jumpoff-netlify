import React, {Component} from 'react';
import styles from './Resume.css';

class Resume extends Component {
  
  componentDidMount(){
    this.props = this.props.properties;
  }
  
  render(){
    return <div className="resume jo-section">
      <div className="jo-row">
        <div className="jo-content">
          <h2 class="resume-name">Jesse Lee</h2>
          <div class="resume-contact-block">
          Santiago, Chile<br/>
          jesse@jumpoff.io<br/>
          +56 9 6188 2509<br/>
          +1 708 752 2532<br/>
          </div>
          <div class="resume-clear"></div>
          <h2>Work History / Education</h2>
          <h3>JumpOff.io - Owner/Operator</h3>
          <hr />
          March 2016 - Present | Santiago, CL
          <ul>
            <li>Experimenting with Node/React/Redux/Express apps interacting with WordPress via the REST API</li>
            <li>Developing responsive, premium WordPress Themes and Plugins for <a href="https://organicthemes.com">Organic Themes</a></li>
            <li>Designed/developed/maintained <a href="https://jumpwriter.com">JumpWriter</a>, a freewriting app built with MeteorJS</li>
            <li>Custom development and maintenance for Hawaii Web Group</li>
            <li>Create digital mixed-media art using Photoshop, Arduinos and more</li>
          </ul>
          <h3></h3>
          <h3>Organic Themes - Web Developer</h3>

          <hr />

          May 2016 - Nov 2017 | Oakland, CA
          <ul>
            <li>Developed responsive, premium WordPress Themes and Plugins using PHP, HTML, CSS and JS</li>
            <li>Designed and developed themes and features for <a href="https://givingpress.com">GivingPress</a>, a managed WordPress hosting solution</li>
            <li>Built a REST integration plugin to connect WooCommerce to the GivingPress AWS hosting provider via its REST API</li>
            <li>Customized and supported WordPress themes for the WordPress.com Premium repository</li>
            <li>Responded to feature requests and bug reports, pushed updates to existing products being used by hundreds of thousands of users</li>
          </ul>
          <h3></h3>
          <h3>Hawaii Web Group - Designer/Developer</h3>

          <hr />

          June 2014 - May 2016 | Maui, HI
          <ul>
            <li>Designed/coded and assembled responsive sites using HTML/CSS/JS/PHP and WordPress</li>
            <li>Created compelling infographics for high-traffic sites reaching millions a year</li>
            <li>Built, customized and maintained e-commerce sites</li>
            <li>Developed custom WordPress Plugins and Themes</li>
          </ul>
          <h3></h3>
          <h3>Creative Island Visions - Webmaster</h3>

          <hr />

          April 2014 - June 2015 | Maui, HI
          <ul>
            <li>Built and maintained new website</li>
            <li>Shot photos, edited photos and assisted with photoshoots</li>
          </ul>
          <h3></h3>
          <h3>Groupon - Image Manager</h3>

          <hr />

          October 2010 - September 2013 | Chicago, IL
          <ul>
            <li>Managed a team of 15 designers/photographers</li>
            <li>Edited photos and responded to service requests</li>
            <li>Designed/coded/implemented internal productivity tools using HTML/CSS/JS/PHP</li>
            <li>Collected and analyzed productivity and quality data to improve processes</li>
          </ul>
          <h3></h3>
          <h3>Earthship Biotecture - Intern</h3>

          <hr />

          Summer 2010 | Taos, NM
          <ul>
            <li>Built off-grid, sustainable houses from recycled materials</li>
            <li>Constructed green-houses</li>
            <li>Conducted tours of visitor center</li>
          </ul>
          <h3></h3>
          <h3>University of Illinois at Urbana/Champaign</h3>

          <hr />

          Class of 2010 | Urbana, IL
          <ul>
            <li>Bachelor of Science, Architectural Studies</li>
          </ul>
          <h3></h3>
          <h3>Continuing Education</h3>
          <hr />
          Coursera.org
          <ul>
            <li><a href="https://www.coursera.org/account/accomplishments/records/KQXCSWJGU6AE" target="_blank" rel="noopener">Machine Learning</a></li>
            <li><a href="https://jumpoff.io/wp-content/uploads/2018/01/Coursera_Certificate_v1-1833677.pdf" target="_blank" rel="noopener">Human Computer Interaction</a></li>
            <li><a href="https://jumpoff.io/wp-content/uploads/2018/01/Coursera_Certificate_v1-3033677.pdf" target="_blank" rel="noopener">Model Thinking</a></li>
          </ul>
          <h2>Skills</h2>
          <h3>Web Development</h3>
          HTML,CSS,PHP,JS,React,NodeJS,JQuery,WordPress,Git,Unix
          <h3>Art/Design</h3>
          Photoshop,Lightroom,Illustrator,AutoCAD,Photography
          <h3>Languages</h3>
          English: Native
          Spanish: Conversational
          <h2></h2>
          <h2>Additional Hobbies/Interests</h2>
          <ul>
            <li>Spanish</li>
            <li>Machine Learning</li>
            <li>Rock climbing</li>
            <li>Surfing</li>
            <li>Guitar</li>
            <li>Writing</li>
            <li>Photography</li>
            <li>Skateboarding</li>
          </ul>

        </div>
      </div>
    </div>
  }

}

export default Resume
