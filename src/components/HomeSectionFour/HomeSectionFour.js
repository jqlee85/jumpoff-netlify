import React, {Component} from 'react';
import styles from './HomeSectionFour.css';
import ContactForm from '../ContactForm/ContactForm';

class HomeSectionFour extends Component {
  
  constructor(props){
    super(props);
  }

  render(){

    return <section className="" id="home-section-four">
      <ContactForm/>
    </section>
  }

}

export default HomeSectionFour;
