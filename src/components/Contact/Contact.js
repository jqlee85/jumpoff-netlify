import React, {Component} from 'react';
import  './Contact.css';
import LinkButton from '../LinkButton/LinkButton';
import qs from 'qs';
import ReCAPTCHA from "react-google-recaptcha";


class Contact extends Component {
  
  recaptchaRef = React.createRef();

  constructor(props){
    super(props);
    this.state = { 
      name: '',
      email: '',
      message: '',
      formFilled: false,
      captchaDone: false,
      canSubmit: false,
      submitResponse: false,
      recaptchaValue: false
    };
  }

  handleSubmit = e => {

    e.preventDefault();
    this.checkCanSubmit();
    
    // If form filled out but captcha not done, execute captcha function
    if (this.state.formFilled && !this.state.captchaDone) {
      this.recaptchaRef.current.execute();
      return false;
    }

    // Abort submission if not ready for submit
    if (!this.state.canSubmit) {
      return false;
    }

    // Collect form data
    let formData = {
      "form-name": this.props.name,
      "name": this.state.name,
      "email": this.state.email,
      "message": this.state.message,
      "g-recaptcha-response": this.recaptchaRef.current.getValue()
    }
    console.log(formData);
    
    // If recaptcha value set
    if (this.state.recaptchaValue){
      fetch( window.location.href + "/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: qs.stringify(formData)
      })
      .then(
        response => {
          console.log(response)
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
    
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    if (!this.state.formFilled && ( this.state.name !== '' && this.state.email !== '' && this.state.message !== '' ) ){
      this.setState(prevState => ({
        formFilled: true
      }));
      if (typeof(this.recaptchaRef) !== 'null'){
        if (typeof(this.recaptchaRef.current) !== 'null'){
          this.recaptchaRef.current.execute();
        } else {
          this.recaptchaRef.execute();
        }
      }
    } else if ( this.state.name === '' && this.state.email === '' && this.state.message === '' ) {
      this.setState(prevState => ({
        formFilled: false
      }));
    }
    this.checkCanSubmit();
  }

  onRecaptchaChange = () => {
    this.setState(prevState => ({
      recaptchaValue: this.recaptchaRef.current.getValue(),
      captchaDone: true
    }));
    this.checkCanSubmit();
  }

  checkCanSubmit = () => {
    if (this.state.formFilled && this.state.captchaDone) {
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

    const { name, email, message, canSubmit, formFilled, captchaDone } = this.state;
    let containerClasses = 'jo-contact-form-container';
    if (!canSubmit) { containerClasses += ' inactive'; }
    if (this.props.colorScheme === 'dark' ) containerClasses += ' dark-bg';
    let nameClasses = 'input100';
    if (name !== '') nameClasses += ' has-val';
    let emailClasses = 'input100';
    if (email !== '') emailClasses += ' has-val';
    let messageClasses = 'input100';
    if (message !== '') messageClasses += ' has-val';
    let recaptchaError = false;
    if (formFilled && !captchaDone) {
      recaptchaError = true;
    }

    return <div className="jo-contact-form">
      {this.state.submitResponse === 'error' &&
        <div className="jo-contact-form-submission-message jo-contact-form-error">
          Your information was not sent. Please try again later.
        </div>
      }
      {this.state.submitResponse === 'success' &&
        <div className="jo-contact-form-submission-message jo-contact-form-success">
          Thanks for the message! Expect a reply shortly.
        </div>
      }
      <h2 className="jo-contact-form-title">Contact</h2>
      <form name={this.props.name} method="post" onSubmit={this.handleSubmit} data-netlify-recaptcha="true">
        <ReCAPTCHA
          ref={this.recaptchaRef}
          size="invisible"
          sitekey="6LcMq5IUAAAAAHhkhS2bJiOZSWHu1KknvntqaAWh"
          onChange={this.onRecaptchaChange}
        />
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
            {canSubmit && <div className="recaptcha-information">This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy">Privacy Policy</a> and <a href="https://policies.google.com/terms">Terms of Service</a> apply.</div>}
            {recaptchaError && <div className="recaptcha-information">Google reCAPTCHA has not been able to verify you, please try later.</div>}
            {canSubmit && <LinkButton size="large" text="Send" linkType="form"/>}
            {!canSubmit && <LinkButton size="large" text="Send" linkType="form" inactive={true} />}
          </div>
        </div>
      </form>
      
    </div>
  }
}

export default Contact;