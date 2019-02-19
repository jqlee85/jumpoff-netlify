import React, {Component} from 'react';
import styles from './Contact.css';


class Contact extends Component {
  
  render() {

    return <section className="contact-page">
      <div className="jo-row">
        <div className="jo-content">
          <form name="contactpageform" method="post">
            <input type="hidden" name="form-name" value="contactpageform" />
            <p>
              <label>Your Name: <input type="text" name="name"/></label>
            </p>
            <p>
              <label>Your Email: <input type="email" name="email"/></label>
            </p>
            <p>
              <label>Message: <textarea name="message"></textarea></label>
            </p>
            <p>
              <button type="submit">Send</button>
            </p>
          </form>
        </div>
      </div>
    </section>
  }
}

export default Contact;

