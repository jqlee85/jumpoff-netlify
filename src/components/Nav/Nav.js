import React, {Component} from 'react';
import styles from './Nav.css';
import {ShapeTwo,ShapeFive} from '../Shapes/Shapes';
import {Link} from 'react-router-dom';


class Nav extends Component {

  constructor(props){
    super(props);
    this.routeLinkClicked = this.routeLinkClicked.bind(this)
  }

  routeLinkClicked() {
    this.props.toggleNav();
  }

  render() {
    let theClasses = 'main-nav';
    if (this.props.menuToggled) theClasses += ' toggled';
    if (this.props.navFront) theClasses += ' front';
    if (this.props.navInitialized) theClasses += ' initialized';
    return <nav id="main-nav" className={theClasses}>
      <ShapeTwo classNames={'jo-nav-shape jo-nav-shape-2'}/>
      <ShapeFive classNames={'jo-nav-shape jo-nav-shape-5'}/>

      <ul className="menu">
        <li><Link to='/about' onClick={this.routeLinkClicked}>About</Link></li>
        <li><Link to='/portfolio' onClick={this.routeLinkClicked}>Work</Link></li>
        <li><Link to='/contact' onClick={this.routeLinkClicked}>Contact</Link></li>
        <li><Link to='/blog' onClick={this.routeLinkClicked}>Blog</Link></li>
      </ul>
    </nav>;
  }

}

export default Nav;

