import React, {Component} from 'react'
import  './ContactInfo.css';
import { Link } from 'react-router-dom';
import SocialIcons from '../SocialIcons/SocialIcons';

class ContactInfo extends Component {

  render(){
    return <div className="jo-contact-wrapper">  
      <h3>Jumpoff</h3>
      <div className="jo-contact-info">
        <address>Santiago, CL</address>
        <address>Chicago, IL</address>
        <a href="mailto:jesse@jumpoff.io">jesse@jumpoff.io</a>
      </div>
      <SocialIcons />
    </div>
  }

}

export default ContactInfo
