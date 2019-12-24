import React from 'react'
import { Link } from 'gatsby'
import MenuToggle from './MenuToggle'
import Logo from './Logo'
import {AppContext} from '../context/AppState'
import styled from 'styled-components'

const Header = () => {

  return <AppContext.Consumer>
    {({ appScrolled, navOpen, toggleNav }) =>  {
      const clickTitleLink = () => { if (navOpen) toggleNav() }
      return <StyledHeader id="header" navOpen={navOpen} appScrolled={appScrolled}>
        <Link className="site-title" to="/" onClick={clickTitleLink}><Logo/></Link>
        <MenuToggle/>
      </StyledHeader>
    }}
  </AppContext.Consumer>

}

export default Header

const StyledHeader = styled.header`
  
  display: block;
  box-sizing: border-box;
  position: fixed;
  top: 0px;
  width: 100%;
  height: 72px;
  padding: 14px 10px;
  z-index: 150;
  -webkit-transition: background-color .3s ease;
  transition: background-color .3s ease;
  background-color: rgba(25,25,25,0);
  background-color: ${props => (props.appScrolled && !props.navOpen) ? 'rgba(25,25,25,1)' : 'rgba(25,25,25,0)'};
  box-shadow: ${props => (props.appScrolled && !props.navOpen) ? '1px 1px 5px rgba(0,0,0,.1)' : 'none'};
  
  a.site-title {
    display: inline;
    position: relative;
    float: left;
    opacity: 1; 
    color: #fff;
    height: auto;
    margin-top: 8px;
    margin-left: 10px;
    
    &:hover {
      .jo-logo-wrapper {
        transform: rotate(375deg);
        padding-bottom: 44px;
        width: 44px;
        top: -7px;
        left: -2px;
      } 
    }

    h1 {
      position: absolute;
      left: 30px;
      display: inline;
      margin-left: 6px;
      color: #fff;
      font-size: 28px;
      font-weight: 600;
      text-transform: uppercase;
      -webkit-transition: color .3s ease; /* Safari */
      transition: color .3s ease;
    }

    .jo-logo-wrapper {
      left: 0;
      top: -4px;
      padding-bottom: 36px;
      width: 34px;
      display: inline;
      -webkit-transition: top .2s ease-in-out, left .2s ease-in-out, padding-bottom .2s ease-in-out, .2s width ease-in-out, -webkit-transform .2s ease-in-out;
      transition: top .2s ease-in-out, left .2s ease-in-out, padding-bottom .2s ease-in-out, width .2s ease-in-out, transform .2s ease-in-out;
    }
  }
`


