import React, {Component} from 'react';
import  './ContactPage.css';
import Contact from '../Contact/Contact';

class ContactPage extends Component {
  
  render() {
    return <section className="contact-page">
      <div className="jo-row">
        <div className="jo-content">
          <div className="jo-post-content-wrapper">
          <p>Are you interested in discussing your project? Drop me a line below or <a href="mailto:jesse@jumpoff.io">email me</a>.</p>
          </div>
          <Contact name="contactpageform"/>
        </div>
      </div>
    </section>
  }

}

export default ContactPage;

