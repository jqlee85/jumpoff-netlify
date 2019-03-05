import React, {Component} from 'react';
import  './HomeSectionFive.css';
import Contact from '../Contact/Contact';

class HomeSectionFive extends Component {
  
  render(){

    return <section className="" id="home-section-five">
      <div className="home-section-content">
        <Contact name="contactform"/>
      </div>
    </section>
  }

}

export default HomeSectionFive;
