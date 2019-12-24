import React from 'react'
// import LazyLoad from "react-lazyload"
// import ContactInfo from "../ContactInfo/ContactInfo"
// import MapContainer from "../MapContainer/MapContainer"
// import {ShapeOne} from "../Shapes/Shapes"
import {screen} from '../styles/mediaQueries'
import styled from 'styled-components'


const Footer = () => {
  return <StyledFooter id="footer">
    {/* <div className="jo-map-wrapper">
      <LazyLoad offset={900}>
        <MapContainer mapStyle={'light'}/>    
      </LazyLoad>
    </div>
    <ContactInfo />
    <div className="jo-footer-shape-section">  
      <ShapeOne color="white"/>
    </div> */}
  </StyledFooter>
}

export default Footer

const StyledFooter = styled.footer`
  
  position: relative;
  height: 250px;
  min-height: 200px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: #191919;
  color: #fff;
  z-index: 75;
  
  .jo-map-wrapper  {
    display: none;

    @media ${screen.md} {
      display: inline;
    }

    div {
      color: #191919;
    }
  
  }

  .jo-contact-wrapper {
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
      text-transform: uppercase;
    }
  
  }

  .jo-contact-info {
    margin-top: 20px;
  }

  .jo-footer-shape-section {
    position: absolute;
    box-sizing: border-box;
    width: 30%;
    max-width: 150px;
    height: auto;
    right: 30px;
    padding: 40px;
    bottom: 51px;

    @media ${screen.sm} {
      bottom: 30px;
    }

    svg {
      path {
        fill: #fff;
      }
    }
  
  }

`
