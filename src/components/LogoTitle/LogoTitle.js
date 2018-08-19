import React, {Component} from 'react'
import styles from './LogoTitle.css';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';


class LogoTitle extends Component {

  render(){
    let color = this.props.color ? this.props.color : 'white';
    let textColor = this.props.color ? this.props.color : '#ffffff';
    let textStyle = {color: textColor};

    return <div className="jo-logo-title">  
      <Logo mainColor={color}/>
      <h3 style={textStyle}>JUMP<br/>OFF</h3>
    </div>
  }

}

export default LogoTitle
