import React, {Component} from 'react'
import styles from './MenuToggle.css';

class MenuToggle extends Component {

  constructor(props){
    super(props);
    this.toggleNav = this.toggleNav.bind(this)
  }

  toggleNav(){
    this.props.toggleNav();
  }

  render() {
    let theClasses = 'menu-toggle';
    if (this.props.menuToggled) theClasses += ' toggled';
    return <button  className={theClasses} id="nav-icon" onClick={this.toggleNav}>
      <span></span>
      <span></span>
      <span></span>
    </button>
  }
}


export default MenuToggle;