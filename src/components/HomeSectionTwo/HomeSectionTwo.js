import React, {Component} from 'react';
import styles from './HomeSectionTwo.css';
import TechLogo from '../TechLogo/TechLogo';
import AccordionSection from '../AccordionSection/AccordionSection';
import theBackgroundImage from '../../public/images/jumpoff-what-we-do-bg.jpg';



class HomeSectionTwo extends Component {
  
  constructor(props){
    super(props);
  }

  

  render(){

    return <section className="full-height-section" id="home-section-two">
      <div className="home-section-two-bg" style={{backgroundImage: "url(" + theBackgroundImage + ")"}}></div>
      <div className="home-section-content">
        <div className="what-we-do">
          <h2>What We Do</h2>
          <AccordionSection/>
        </div>
      </div>

    </section>
  }

}

export default HomeSectionTwo;
