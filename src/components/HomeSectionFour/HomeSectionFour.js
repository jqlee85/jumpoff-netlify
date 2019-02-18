import React, {Component} from 'react';
import styles from './HomeSectionFour.css';
import ContactForm from '../ContactForm/ContactForm';

class HomeSectionFour extends Component {
  
  constructor(props){
    super(props);
  }

  render(){

    return <section className="" id="home-section-four">
      <div className="home-section-content">
        <ContactForm/>
      </div>
    </section>
  }

}

export default HomeSectionFour;
