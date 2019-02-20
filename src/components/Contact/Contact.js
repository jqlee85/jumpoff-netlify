import React, {Component} from 'react';
import styles from './Contact.css';


class Contact extends Component {
  
  constructor(props){
    super(props);
    this.state = { 
      name: '',
      email: '',
      message: '',
    };  
  }

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: { "form-name": "contact", ...this.state }
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, message } = this.state;
    return <section className="contact-page">
      <div className="jo-row">
        <div className="jo-content">
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
        </div>
      </div>
    </section>
  }
}

export default Contact;

