import React, {Component} from 'react';
import  './ContactPage.css';
import Contact from '../Contact/Contact';

class ContactPage extends Component {
  
  render() {
    return <section className="contact-page">
      <div className="jo-row">
        <div className="jo-content">
          <Contact name="contactpageform"/>
        </div>
      </div>
    </section>
  }

}

export default ContactPage;

