import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, {Component}  from "react"
import MenuToggle from "../MenuToggle/MenuToggle"
import Logo from "../Logo/Logo"
import  "./Header.scss"

class Header extends Component {
  
  constructor(props){
    super(props);
    this.linkClicked = this.linkClicked.bind(this)
    this.titleLinkClicked = this.titleLinkClicked.bind(this)
  }

  titleLinkClicked() {
    if (this.props.menuToggled) {
      this.props.toggleNav()
    }
  }

  linkClicked() {
    this.props.toggleNav()
  }

  render() {
    return (
      <header id="header">
        <Link className="site-title" to='/' onClick={this.titleLinkClicked}><Logo/></Link>
        <MenuToggle menuToggled={this.props.menuToggled} toggleNav={this.linkClicked}/>
      </header>
    )
  }
}

export default Header


