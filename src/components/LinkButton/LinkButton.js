import React, {Component} from 'react'
import  './LinkButton.css';
import {Link} from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';


export class LinkButton extends Component {

  render() {
    
    let to = this.props.to || '#';
    let linkType = this.props.linkType || 'route';
    let color = this.props.color || '#191919';
    let text = this.props.text || 'Learn More'; 
    let transparent = this.props.transparent || false;
    let inactive = this.props.inactive || false;
    let size = this.props.size || false;
    let recaptcha = this.props.recaptcha || false;
    let textColor = 'white';
    let backgroundColor;
    
    // Inactive Button
    let onClick = false;
    let formType = '';
    if (!inactive) {
      onClick = this.props.onClick;
      formType = 'submit';
    }

    // Recaptcha stuff
    if (recaptcha) {

    }

    // Set Textcolor
    if (color == '#191919') {
      if (transparent) textColor = '#191919';
      else textColor = 'white';
    } else if (color == 'white') {
      if (transparent) textColor = 'white';
      else textColor = '#191919';
    }

    // Set Background Color
    if (!transparent) {
      backgroundColor = color;
    } else {
      backgroundColor = 'rgba(255,255,255,0)';
    }
    
    // Set Button Styles
    let buttonStyles = {
      backgroundColor: backgroundColor,
      border: '1px solid '+ color,
      color: textColor
    }

    // Set ClassNames
    let classNames = 'jo-link-button ' + linkType;
    if (this.props.classNames) { classNames += ' ' + this.props.classNames; }
    if (inactive) { classNames += ' inactive'; }
    if (size) { classNames += ' ' + size;}

    return (  
      <div className="jo-link-button-wrapper">
      {linkType == 'external' && 
        <a href={to} className={classNames} target="_blank">
          <button style={buttonStyles}>
            <span className="button-text">{text}</span>
            <span className="button-arrow">
              <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 476.213 476.213">
                <polygon fill={textColor} points="345.606,107.5 324.394,128.713 418.787,223.107 0,223.107 0,253.107 418.787,253.107 324.394,347.5 
                  345.606,368.713 476.213,238.106 "/>
              </svg>
            </span>
          </button>
        </a>
      }
      {linkType == 'anchor' && 
        <AnchorLink href={to} className={classNames} offset='80'>
          <button style={buttonStyles}>
            <span className="button-text">{text}</span>
            <span className="button-arrow">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 700 700" enableBackground="new 0 0 1000 1000">
                <g>
                  <path stroke={textColor} strokeWidth="40" fill="transparent" d="M300 220 L500 440 L700 220"></path>
                </g>
              </svg>
            </span>
          </button>
        </AnchorLink>
      }
      {linkType == 'route' && 
        <Link to={to} className={classNames}>
          <button style={buttonStyles}>
            <span className="button-text">{text}</span>
            <span className="button-arrow">
              <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 476.213 476.213">
                <polygon fill={textColor} points="345.606,107.5 324.394,128.713 418.787,223.107 0,223.107 0,253.107 418.787,253.107 324.394,347.5 
                  345.606,368.713 476.213,238.106 "/>
              </svg>
            </span>
          </button>
        </Link>
      }
      {linkType == 'form' && recaptcha &&
        <div className={classNames}>
          <button style={buttonStyles} type={formType} className={recaptcha.className} data-sitekey={recaptcha.sitekey} data-callback={recaptcha.callback}>
            <span className="button-text">{text}</span>
            <span className="button-arrow">
              <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 476.213 476.213">
                <polygon fill={textColor} points="345.606,107.5 324.394,128.713 418.787,223.107 0,223.107 0,253.107 418.787,253.107 324.394,347.5 
                  345.606,368.713 476.213,238.106 "/>
              </svg>
            </span>
          </button>
        </div>
      }
      {linkType == 'form' && !recaptcha &&
        <div className={classNames}>
          <button style={buttonStyles} type={formType}>
            <span className="button-text">{text}</span>
            <span className="button-arrow">
              <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 476.213 476.213">
                <polygon fill={textColor} points="345.606,107.5 324.394,128.713 418.787,223.107 0,223.107 0,253.107 418.787,253.107 324.394,347.5 
                  345.606,368.713 476.213,238.106 "/>
              </svg>
            </span>
          </button>
        </div>
      }
      {linkType == 'custom' && 
        <div className={classNames}>
          <button style={buttonStyles} onClick={onClick}>
            <span className="button-text">{text}</span>
            <span className="button-arrow">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 700 700" enableBackground="new 0 0 1000 1000">
                <g>
                  <path stroke={textColor} strokeWidth="40" fill="transparent" d="M300 220 L500 440 L700 220"></path>
                </g>
              </svg>
            </span>
          </button>
        </div>
      }
      </div>
    );
  }
}

export default LinkButton;