import React from 'react'
import SocialIcons from './SocialIcons'
import styled from 'styled-components'
import {screen} from '../styles/mediaQueries'

const ContactInfo = () => {

  return <StyledContactInfo>  
    <h3>Jumpoff</h3>
    <div className="jo-contact-info">
      <address>Santiago, CL</address>
      <address>Chicago, IL</address>
      <a href="mailto:jesse@jumpoff.io">jesse@jumpoff.io</a>
    </div>
    <SocialIcons />
  </StyledContactInfo>

}

export default ContactInfo

const StyledContactInfo = styled.div`
  
  display: inline-block;
  text-transform: uppercase;
  box-sizing: border-box;
  height: 100%;
  flex-grow: 1;
  padding: 20px;
  text-align: left;

  @media ${screen.sm} {
    padding: 40px;
  }

  h3 {
    color: #fff;
    font-size: 3.2em;
    font-weight: bold;
    text-transform: uppercase;
  }

  .jo-contact-info {
    margin-top: 20px;

    address, a, p {
      line-height: 160%;
      font-weight: 500;
      font-size: .8em;
      color: #fff;
      text-decoration: none;
      vertical-align: initial;
      margin-bottom: 0px;
    }     
  
  }
`