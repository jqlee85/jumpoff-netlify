import React, {Component} from 'react'
import styles from './ContactForm.css';
import LinkButton from '../LinkButton/LinkButton';



class ContactForm extends Component {

  constructor(props){
    super(props);
  }

  render(){
    let theClasses;
    if (this.props.colorScheme == 'dark' ) theClasses += ' dark-bg';
    
    return <div className="jo-contact-form-wrapper">  
      
      <form className="jo-contact-form contact100-form validate-form" name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
				
        <input type="hidden" name="form-name" value="contact" />

        <span className="contact100-form-title">
					Contact
				</span>

				<div className="wrap-input100 rs1-wrap-input100 validate-input" data-validate="Name is required">
					<label for="name">Your Name</label>
					<input className="input100" type="text" name="name" placeholder="Enter your name"/>
					<span className="focus-input100"></span>
				</div>

				<div className="wrap-input100 rs1-wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
					<label for="email">Email</label>
					<input className="input100" type="text" name="email" placeholder="Enter your email addess"/>
					<span className="focus-input100"></span>
				</div>

				<div className="wrap-input100 validate-input" data-validate = "Message is required">
					<label for="message">Message</label>
					<textarea className="input100" name="message" placeholder="Your message here..."></textarea>
					<span className="focus-input100"></span>
				</div>

        <LinkButton text="Send" linkType="form" />  

			</form>
      
    </div>
  }

}

export default ContactForm;
