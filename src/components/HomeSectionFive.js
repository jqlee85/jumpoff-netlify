import React, {Component} from 'react'
import ContactForm from './ContactForm'
import styled from 'styled-components'
import {screen} from '../styles/mediaQueries'


class HomeSectionFive extends Component {
  
  render(){

    return <StyledHomeSectionFive className="home-contact-section" id="home-section-five">
      <div className="home-section-content">
        <ContactForm name="contactform"/>
      </div>
    </StyledHomeSectionFive>
  }

}

export default HomeSectionFive

const StyledHomeSectionFive = styled.section`
  
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 500px;
  
  .home-section-content {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 150px;
  }

  .jo-contact-form-wrapper {
    box-sizing: border-box;
    width: 80%; 
    max-width: 1400px;
  }
`