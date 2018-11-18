import React, {Component} from 'react'
import styles from './LinkButton.css';
import {Link} from 'react-router-dom';


export class LinkButton extends Component {
  
  constructor(props) {
    super(props);
  }
  
  render() {
    
    let to = this.props.to || '#';
    let external = this.props.external || false;
    let color = this.props.color || '';
    let hoverColor = this.props.hoverColor || '#000';
    let text = this.props.text || 'Learn More';
    let buttonStyles = {}    

    if (color == 'transparent') {
      buttonStyles = {
        backgroundColor: 'rgba(255,255,255,0)',
        border: '1px solid black',
        color: 'black'
      }
    } else {
      buttonStyles = {
        backgroundColor: color,
        color: 'white'
      }
    }
    
    let classNames = 'jo-link-button ' + this.props.classNames;
    

    return (  
      <div className="jo-link-button-wrapper">
      {external && 
        <a href={to} className={classNames}>
          <button style={buttonStyles}>{text}<span className="button-arrow">></span></button>
        </a>
      }
      {!external && 
        <Link to={to} className={classNames}>
        <button style={buttonStyles}>{text}<span className="button-arrow">></span></button>
        </Link>
      }
      </div>
    );
  }
}

export default LinkButton;