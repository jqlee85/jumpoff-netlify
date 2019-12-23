import React from 'react'
import  './Nav.scss'
import {AppContext} from '../../context/AppState'
// import {ShapeTwo,ShapeFive} from '../Shapes/Shapes';
import {Link} from 'gatsby'

const Nav = (props) => {
  
  return <AppContext.Consumer>
    {({ navInitialized, navOpen, toggleNav }) =>  {
      
      let theClasses = 'main-nav';
      let navStyles = {opacity:'0'}
      if (navOpen) theClasses += ' open';
      if (navOpen) {
        theClasses += ' front';
        navStyles = {opacity:'1'}
      }
      if (navInitialized) theClasses += ' initialized';
      
      return <nav id='main-nav' style={navStyles} className={theClasses}>
        {/* <ShapeTwo classNames={'jo-nav-shape jo-nav-shape-2'}/>
        <ShapeFive classNames={'jo-nav-shape jo-nav-shape-5'}/> */}
        <ul className='menu'>
          <li><Link to='/about' onClick={toggleNav}>About</Link></li>
          <li><Link to='/portfolio' onClick={toggleNav}>Work</Link></li>
          <li><Link to='/contact' onClick={toggleNav}>Contact</Link></li>
          <li><Link to='/blog' onClick={toggleNav}>Blog</Link></li>
        </ul>
      </nav>
    }}
  </AppContext.Consumer>
  
} 

export default Nav