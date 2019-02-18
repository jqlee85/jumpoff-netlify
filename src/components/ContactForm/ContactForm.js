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
      message: ''
    };  
  }

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });
  

  render(){
    
    const { name, email, message } = this.state;
    let theClasses;
    if (this.props.colorScheme == 'dark' ) theClasses += ' dark-bg';
    
    return <div className="jo-contact-form-wrapper">  
      
      <NetlifyForm name='contact'>
        {({ loading, error, success }) => (
          <div>
            {loading &&
              <div>Loading...</div>
            }
            {error &&
              <div>Your information was not sent. Please try again later.</div>
            }
            {success &&
              <div>Thank you for contacting us!</div>
            }
            {!loading && !success &&
              <div className="jo-contact-form">
                <input type="hidden" name="form-name" value="contact" />

                <h2 className="jo-contact-form-title">
                  Contact
                </h2>
                <div>
                  <div className="wrap-input100 rs1-wrap-input100 validate-input" data-validate="Name is required">
                    <label for="name">Your Name</label>
                    <input className="input100" type="text" name="name" placeholder="Enter your name" value={name} onChange={this.handleChange}/>
                    <span className="focus-input100"></span>
                  </div>
          
                  <div className="wrap-input100 rs1-wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
                    <label for="email">Email</label>
                    <input className="input100" type="text" name="email" placeholder="Enter your email addess" value={email} onChange={this.handleChange}/>
                    <span className="focus-input100"></span>
                  </div>
                </div>
                <div className="wrap-input100 validate-input" data-validate = "Message is required">
                  <label for="message">Message</label>
                  <textarea className="input100" name="message" placeholder="Your message here..." value={message} onChange={this.handleChange}></textarea>
                  <span className="focus-input100"></span>
                </div>
        
                <LinkButton text="Send" linkType="form" />  
              </div>
            }
          </div>
        )}
      </NetlifyForm>

      {/* <form className="jo-contact-form contact100-form validate-form" onSubmit={this.handleSubmit} >
				
        

			</form> */}
      
    </div>
  }

}

export default ContactForm;
