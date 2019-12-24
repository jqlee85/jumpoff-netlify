import React from 'react'
import LazyLoad from 'react-lazyload'
import ContactInfo from "./ContactInfo"
import MapContainer from "./MapContainer"
import {ShapeOne} from "./Shapes/Shapes"
import {screen} from '../styles/mediaQueries'
import styled from 'styled-components'


const Footer = () => {
  return <StyledFooter id="footer">
    <div className="jo-map-wrapper">
      <LazyLoad offset={900}>
        <></>
        <MapContainer mapStyle={'light'}/>    
      </LazyLoad>
    </div>
    <ContactInfo />
    <div className="jo-footer-shape-section">  
      <ShapeOne color="white"/>
    </div>
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
  justify-content: flex-start;
  background: #191919;
  color: #fff;
  z-index: 75;
  
  .jo-map-wrapper  {
    display: none;
    position: relative;
    width: 45%;
    min-width: 200px;
    max-width: 600px;
    height: 100%;
    min-height: 100%;

    @media ${screen.md} {
      display: inline;
    }

    div {
      color: #191919;
    }

    #map {
      width: 100%;
      height: 100%;
    }
  
  }

  .jo-footer-shape-section {
    position: absolute;
    box-sizing: border-box;
    width: 30%;
    max-width: 150px;
    height: auto;
    right: 30px;
    /* padding: 40px; */
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
