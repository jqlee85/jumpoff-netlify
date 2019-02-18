import React, {Component} from 'react'
import styles from './ContactForm.css';
import LinkButton from '../LinkButton/LinkButton';
import NetlifyForm from 'react-netlify-form';


class ContactForm extends Component {

  constructor(props){
    super(props);
    this.state = { 
      name: '',
      email: '',
      message: '',
      canSubmit: false
    };  
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    if ( this.state.name !== '' && this.state.email !== '' && this.state.message !== '') {
      console.log('fields filled in');
      this.setState(prevState => ({
        canSubmit: true
      }));
    }
  }
  
  validate = (e) => {
    console.log('validate');
    console.log(e);
    console.log(e.values());
    if ( !( this.state.name !== '' && this.state.email !== '' && this.state.message !== '') ) {
      return true;
    }
  }

  render(){
    
    const { name, email, message, canSubmit } = this.state;
    let theClasses = 'jo-contact-form-wrapper';
    if (!canSubmit) { theClasses += ' inactive'; }
    if (this.props.colorScheme == 'dark' ) theClasses += ' dark-bg';
    let nameClasses = 'input100';
    if (name !== '') nameClasses += ' has-val';
    let emailClasses = 'input100';
    if (email !== '') emailClasses += ' has-val';
    let messageClasses = 'input100';
    if (message !== '') messageClasses += ' has-val';

    return <div className={theClasses}>  
      
      <NetlifyForm name='contact'>
        {({ loading, error, success }) => (
          <div>
            {/* {loading &&
              <div>Loading...</div>
            } */}
            {!loading && !success &&
              // <div>
              //   <input type="text" name="name" />
              //   <input type="email" name="email" />
              //   <textarea name="message"></textarea>
              //   <button>Submit</button>
              // </div>
              <div className="jo-contact-form">
                <input type="hidden" name="form-name" value="contact" />

                <h2 className="jo-contact-form-title">
                  Contact
                </h2>
                <div>
                  <div className="wrap-input100 rs1-wrap-input100 validate-input" data-validate="Name is required">
                    <label htmlFor="name">Your Name</label>
                    <input className={nameClasses} type="text" name="name" placeholder="Enter your name" value={name} onChange={this.handleChange}/>
                    <span className="focus-input100"></span>
                  </div>
                  <div className="wrap-input100 rs1-wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
                    <label htmlFor="email">Email</label>
                    <input className={emailClasses} type="text" name="email" placeholder="Enter your email addess" value={email} onChange={this.handleChange}/>
                    <span className="focus-input100"></span>
                  </div>
                </div>
                <div className="wrap-input100 validate-input" data-validate = "Message is required">
                  <label htmlFor="message">Message</label>
                  <textarea className={messageClasses} name="message" placeholder="Your message here..." value={message} onChange={this.handleChange}></textarea>
                  <span className="focus-input100"></span>
                </div>
        
                <LinkButton text="Send" linkType="form" />  
              </div>
            }
            {error &&
              <div className="jo-contact-form-submission-message jo-contact-form-error">
                <div>
                  Your information was not sent. Please try again later.
                </div>
              </div>
            }
            {success &&
              <div className="jo-contact-form-submission-message jo-contact-form-success">
                <div>
                  Thanks for the message! Expect a reply shortly. 
                </div>
            </div>
            }
          </div>
        )}
      </NetlifyForm>
      
    </div>
  }

}

export default ContactForm;
