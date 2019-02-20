import React, {Component} from 'react';
import styles from './Contact.css';


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
    const data = new FormData(e.target);
    console.log(data);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: data
    })
    .then(
      response => {
        console.log(response)
        console.log(response.status)
        if (this.response.status > 199 && this.response.status < 300){
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

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, message } = this.state;
    return <section className="contact-page">
      <div className="jo-row">
        <div className="jo-content">
          {!this.state.submitResponse &&
            <form name="contactpageform" method="post" onSubmit={this.handleSubmit}>
              <input type="hidden" name="form-name" value="contactpageform" />
              <p>
                <label>Your Name: <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/></label>
              </p>
              <p>
                <label>Your Email: <input type="email" name="email" value={this.state.email} onChange={this.handleChange}/></label>
              </p>
              <p>
                <label>Message: <textarea name="message" onChange={this.handleChange}>{this.state.message}</textarea></label>
              </p>
              <p>
                <button type="submit">Send</button>
              </p>
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
      </div>
    </section>
  }
}

export default Contact;

