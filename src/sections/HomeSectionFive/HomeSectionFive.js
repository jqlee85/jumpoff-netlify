import React, {Component} from 'react'
import  './HomeSectionFive.scss'
import ContactForm from '../../components/ContactForm/ContactForm'

class HomeSectionFive extends Component {
  
  render(){

    return <section className="home-contact-section" id="home-section-five">
      <div className="home-section-content">
        <ContactForm name="contactform"/>
      </div>
    </section>
  }

}

export default HomeSectionFive
