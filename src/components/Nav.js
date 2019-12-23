import React from 'react'
import {AppContext} from '../context/AppState'
import {ShapeTwo,ShapeFive} from './Shapes/Shapes';
import {Link} from 'gatsby'
import styled from 'styled-components'
import {screen} from '../styles/mediaQueries'

const Nav = () => {

  return <AppContext.Consumer>
    {({ navOpen, toggleNav }) =>  {
      console.log('navOpen',navOpen)
      return <StyledNav 
        id='main-nav'
        className='main-nav'
        navOpen={navOpen}
      >
        <ShapeTwo classNames={'jo-nav-shape jo-nav-shape-2'}/>
        <ShapeFive classNames={'jo-nav-shape jo-nav-shape-5'}/>
        <ul className='menu'>
          <li><Link to='/about' onClick={toggleNav}>About</Link></li>
          <li><Link to='/work' onClick={toggleNav}>Work</Link></li>
          <li><Link to='/contact' onClick={toggleNav}>Contact</Link></li>
          <li><Link to='/blog' onClick={toggleNav}>Blog</Link></li>
        </ul>
      </StyledNav>
    }}
  </AppContext.Consumer>
  
} 

export default Nav

const StyledNav = styled.nav`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  height: 100%;
  height: 100vh;
  max-height: 100vh;
  width: 100%;
  padding: 80px 20px 60px;
  opacity: 1;
  background: #191919;
  overflow: hidden;
  color: #fff;
  -webkit-transition: left .4s ease-in-out; /* Safari */
  transition: left .4s ease-in-out;
  z-index: 100;
  left: ${props => props.navOpen ? "0px" : "100%"};

  ul {
    opacity: 1;
    list-style-type: none;
    text-align: left;
    padding: 0; 
    z-index: 100;
    margin: auto 0 auto 1.2em;
    
    @media ${screen.sm} {
      margin: auto 0 auto 2em;
    }
    
    @media ${screen.md} {
      margin: auto;
      text-align: center;
    }
    
    li {
      font-size: 3.6em;
      line-height: 105%;
    
      @media ${screen.sm} {
        font-size: 5em;
      }
    
      @media ${screen.md} {
        font-size: 6em;
      }
    
      a {
        color: #fff;
        text-transform: uppercase;
        text-decoration: none;
        -webkit-transition: color .5s; /* Safari */
        transition: color .5s;
        font-family: 'Geomanist', 'Cerebri', 'Helvetica', sans-serif;
        font-weight: 600;
    
        &:hover, &:active, &:focus {
          -webkit-animation: p-rainbow 3s infinite;
          -ms-animation: p-rainbow 3s infinite;
          -o-animation: p-rainbow 3s infinite;
          animation: p-rainbow 3s infinite;
        }
     
      }
    
    }
  
  }
  
  .jo-nav-shape {
    width: 40%;
    max-width: 400px;
    height: auto;
    position: absolute; 
   
    path, polygon, rect {
      fill: #222;
    }
  
  }
  
  .jo-nav-shape-2 {
    bottom: 3%;
    right: 3%;
  }
  
  .jo-nav-shape-5 {
    display: none;
    
    @media ${screen.sm} {
      display: block;
      left: 50%;
      top: 10%;
      left: 4%;
      bottom: 20%;
      width: 30%;
      max-width: 300px;
    }
  
  }
`