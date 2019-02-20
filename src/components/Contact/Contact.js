import React, {Component} from 'react';
import  './Contact.css';
import LinkButton from '../LinkButton/LinkButton';
import qs from 'qs';


class Contact extends Component {
  
  constructor(props){
    super(props);
    this.state = { 
      name: '',
      email: '',
      message: '',
      canSubmit: false,
      submitResponse: false
    };  
  }

  handleSubmit = e => {
    
    e.preventDefault();

    if (!this.state.canSubmit) {
      return false;
    }

    let formData = {
      "form-name": this.props.name,
      "name": this.state.name,
      "email": this.state.email,
      "message": this.state.message,
    }
    
    fetch( window.location.href + "/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: qs.stringify(formData)
    })
    .then(
      response => {
        console.log(response)
        console.log(response.status)
        if (response.status > 199 && response.status < 300){
          this.setState(prevState=>({
            submitResponse: 'success'
          }))
        } else {
          this.setState(prevState=>({
            submitResponse: 'error'
          }))
        } 
      }
    )
    .catch(
      error => {
        console.log(error)
        this.setState(prevState=>({
          submitResponse: 'error'
        }))
      }
    );
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    if ( this.state.name !== '' && this.state.email !== '' && this.state.message !== '') {
      console.log('fields filled in');
      this.setState(prevState => ({
        canSubmit: true
      }));
    } else {
      this.setState(prevState => ({
        canSubmit: false
      }));
    }
  }

  render() {

    const { name, email, message, canSubmit } = this.state;
    let containerClasses = 'jo-contact-form-container';
    if (!canSubmit) { containerClasses += ' inactive'; }
    if (this.props.colorScheme == 'dark' ) containerClasses += ' dark-bg';
    let nameClasses = 'input100';
    if (name !== '') nameClasses += ' has-val';
    let emailClasses = 'input100';
    if (email !== '') emailClasses += ' has-val';
    let messageClasses = 'input100';
    if (message !== '') messageClasses += ' has-val';


    return <div className="jo-contact-form">
      <h2 className="jo-contact-form-title">Contact</h2>
      {!this.state.submitResponse &&
        <form name={this.props.name} method="post" onSubmit={this.handleSubmit} data-netlify-recaptcha="true">
          <div className={containerClasses}>
            <input type="hidden" name="form-name" value="contactpageform"/>
            <div>
              <div className="wrap-input100 rs1-wrap-input100 validate-input">
                <label htmlFor="name">Your Name</label>
                <input className={nameClasses} type="text" name="name" value={name} onChange={this.handleChange}/>
                <span className="focus-input100"></span>
              </div>
              <div className="wrap-input100 rs1-wrap-input100 validate-input">
                <label htmlFor="email">Your Email</label>
                <input className={emailClasses} type="email" name="email" value={email} onChange={this.handleChange}/>
                <span className="focus-input100"></span>
              </div>
              <div className="wrap-input100 validate-input">
                <label htmlFor="message">Message</label>
                <textarea className={messageClasses} name="message" onChange={this.handleChange} value={message}/>
                <span className="focus-input100"></span>
              </div>
              {canSubmit && <LinkButton size="large" text="Send" linkType="form" />}
              {!canSubmit && <LinkButton size="large" text="Send" linkType="form" inactive={true} />}
            </div>
          </div>
        </form>
      }
      {this.state.submitResponse == 'success' &&
        <div className="jo-contact-form-submission-message jo-contact-form-success">
          <div>Thanks for the message! Expect a reply shortly.</div>
        </div>
      }
      {this.state.submitResponse == 'error' &&
        <div className="jo-contact-form-submission-message jo-contact-form-error">
          <div>Your information was not sent. Please try again later.</div>
        </div>
      }
    </div>
  }
}

export default Contact;