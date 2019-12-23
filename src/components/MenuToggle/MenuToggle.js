import React from 'react'
import { AppContext } from '../../context/AppState'
import  './MenuToggle.scss'

const MenuToggle = (props) => (
  <AppContext.Consumer>
    {({ navOpen, toggleNav }) =>  {
      let theClasses = 'menu-toggle';
      if (navOpen) theClasses += ' toggled';
      return <button  className={theClasses} id="nav-icon" onClick={toggleNav}>
        <span></span>
        <span></span>
        <span></span>
      </button>
    }}
  </AppContext.Consumer>
)

export default MenuToggle