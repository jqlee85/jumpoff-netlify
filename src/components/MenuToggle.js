import React from 'react'
import { AppContext } from '../context/AppState'
import styled from 'styled-components'

const MenuToggle = (props) => (
  <AppContext.Consumer>
    {({ appScrolled, navOpen, toggleNav }) =>  {
      let theClasses = 'menu-toggle';
      if (navOpen) theClasses += ' toggled';
      return <StyledMenuToggle  
        className={theClasses} 
        id="nav-icon" 
        onClick={toggleNav} 
        navOpen={navOpen} 
        appScrolled={appScrolled}
      >
        <span></span>
        <span></span>
        <span></span>
      </StyledMenuToggle>
    }}
  </AppContext.Consumer>
)

export default MenuToggle

const StyledMenuToggle = styled.button`
  /* Menu Toggle */
  width: 24px;
  height: 24px;
  position: relative;
  margin: 12px 10px;
  float:right;
  padding: 0;
  background: none;
  color:#000;      /* unvisited link */
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: .3s ease-in-out, margin 1s ease;
  -moz-transition: .3s ease-in-out, margin 1s ease;
  -o-transition: .3s ease-in-out, margin 1s ease;
  transition: .3s ease-in-out, margin 1s ease;
  cursor: pointer;
  border: none !important;
  outline: none !important;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  
  &:visited {
    color:#000; /* visited link */
  }  
  &:focus {
    border: none;
    color: none;
  }
  &:hover span {
    -webkit-animation: ${props => (props.appScrolled || props.navOpen) ? 'bg-rainbow 7s infinite' : 'bg-rainbow-black 7s infinite'};
    -ms-animation: ${props => (props.appScrolled || props.navOpen) ? 'bg-rainbow 7s infinite' : 'bg-rainbow-black 7s infinite'};
    -o-animation: ${props => (props.appScrolled || props.navOpen) ? 'bg-rainbow 7s infinite' : 'bg-rainbow-black 7s infinite'};
    animation: ${props => (props.appScrolled || props.navOpen) ? 'bg-rainbow 7s infinite' : 'bg-rainbow-black 7s infinite'};
  }
  
  span {
    display: block;
    position: absolute;
    height: 2px;
    width: 24px;
    border-radius: 2px;
    background-color: ${props => (!props.appScrolled && !props.navOpen) ? '#191919' : '#fff'};
    opacity: 1;
    left: 0;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: background-color .5s ease-in-out;
    -moz-transition: background-color .5s ease-in-out;
    -o-transition: background-color .5s ease-in-out;
    transition: background-color .5s ease-in-out;
  }
  span:nth-child(1) {
    top: 0px;
    -webkit-transform-origin: left center;
    -moz-transform-origin: left center;
    -o-transform-origin: left center;
    transform-origin: left center;
  }
  span:nth-child(2) {
    top: 9px;
    -webkit-transform-origin: left center;
    -moz-transform-origin: left center;
    -o-transform-origin: left center;
    transform-origin: left center;
    -webkit-transition: opacity .15s ease-in-out;
    -moz-transition: opacity .15s ease-in-out;
    -o-transition: opacity .15s ease-in-out;
    transition: opacity .15s ease-in-out;
  }
  span:nth-child(3) {
    top: 18px;
    -webkit-transform-origin: left center;
    -moz-transform-origin: left center;
    -o-transform-origin: left center;
    transform-origin: left center;
  }
  span:nth-child(1), span:nth-child(3) {
    -webkit-transition: -webkit-transform .15s ease-in-out, top .15s ease-in-out, left .15s ease-in-out;
    -moz-transition: -moz-transform .15s ease-in-out, top .15s ease-in-out, left .15s ease-in-out;
    -o-transition: -o-transform .15s ease-in-out, top .15s ease-in-out, left .15s ease-in-out;
    transition: transform .15s ease-in-out, top .15s ease-in-out, left .15s ease-in-out;
  }
  
  &.toggled span:nth-child(1), &.toggled span:nth-child(3) {
    width: 27px;
    width: 27px;
  }
  
  &.toggled span:nth-child(1) {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
    top: -1px;
    left: 2px;
  }
  
  &.toggled span:nth-child(2) {
    opacity: 0;
  }
  
  &.toggled span:nth-child(3) {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
    top: 18px;
    left: 2px;
  }

`