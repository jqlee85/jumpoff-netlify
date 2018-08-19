import React, {Component} from 'react';
import styles from './HomeSectionTwo.css';
import TechLogo from '../TechLogo/TechLogo';

class HomeSectionTwo extends Component {
  
  constructor(props){
    super(props);
  }

  render(){
    return <section className="jo-section home-section" id="home-section-two">
      <div className="home-section-content">
          <h2>React + Redux</h2>
          <p>Users today expect fast, app-like experiences when using the web. Full page refreshes can be slow and choppy, so we build universal web applications that leverage client-side apps and server-side rendering to create the fast, modern experience that users expect without sacrificing SEO.</p>
          <a><button className="blue">Learn More</button></a>
      </div>
      <div className="home-section-graphics">
        <TechLogo logo="react" rotating={true} color="#191919"/>
        <TechLogo logo="graphql" rotating={true} color="#191919"/>
        <TechLogo logo="wordpress" rotating={true} color="#191919"/>
        <TechLogo logo="redux" rotating={true} color="#191919"/>
      </div>
    </section>
  }

}

export default HomeSectionTwo;
