import React, {Component} from 'react';
import styles from './HomeSectionTwo.css';
import AccordionSection from '../AccordionSection/AccordionSection';
import theBackgroundImage from '../../public/images/jumpoff-what-we-do-bg-colored-shapes-multi.jpg';
import {ShapeThree} from '../Shapes/Shapes';

class HomeSectionTwo extends Component {
  
  constructor(props){
    super(props);
  }

  render(){

    return <section className="full-height-section" id="home-section-two">
      <div className="home-section-two-bg" style={{backgroundImage: "url(" + theBackgroundImage + ")",backgroundPosition: 'left bottom',backgroundSize: 'cover'}}></div>
      <div className="home-section-content">
        <div className="what-we-do">
          <div className="what-we-do-heading">
            <h3>We turn your ideas into beautiful, functional websites.</h3>
          </div>
          <AccordionSection/>
        </div>
      </div>

    </section>
  }

}

export default HomeSectionTwo;
