import React from 'react'
import { Link } from 'gatsby'
import SEO from '../components/seo'
import  './contact.scss'
import ContactForm from '../components/ContactForm/ContactForm'

const Contact = () => (
  <>
    <SEO title="Contact" />
    <section className="contact-page">
        <div className="jo-row">
            <article className="jo-content">
                <div className="jo-post-content-wrapper">
                    <p>Are you interested in discussing your project? Drop me a line below or <a href="mailto:jesse@jumpoff.io">email me</a>.</p>
                </div>
                <ContactForm name="contactpageform"/>
            </article>
        </div>
    </section>
  </>
)

export default Contact


// import React, {Component} from 'react';
// 

// class ContactPage extends Component {
  
//   render() {
//     return <section className="contact-page">
//       <div className="jo-row">
//         <div className="jo-content">
//           <div className="jo-post-content-wrapper">
//           <p>Are you interested in discussing your project? Drop me a line below or <a href="mailto:jesse@jumpoff.io">email me</a>.</p>
//           </div>
//           <Contact name="contactpageform"/>
//         </div>
//       </div>
//     </section>
//   }

// }

// export default ContactPage;

