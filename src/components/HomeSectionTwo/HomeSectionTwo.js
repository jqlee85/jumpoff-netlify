import React, {Component} from 'react';
import styles from './HomeSectionTwo.css';
import TechLogo from '../TechLogo/TechLogo';
import AccordionSection from '../AccordionSection/AccordionSection';


class HomeSectionTwo extends Component {
  
  constructor(props){
    super(props);
  }

  render(){
    return <section className="jo-section home-section" id="home-section-two">
      <div className="home-section-content">
          <h2>What We Do</h2>
          <AccordionSection/>
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
