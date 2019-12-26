import React, {Component} from 'react'
import {Link} from 'gatsby'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import styled from 'styled-components'
import {screen} from '../styles/mediaQueries'


export class LinkButton extends Component {

  render() {
    
    let to = this.props.to || '#'
    let linkType = this.props.linkType || 'route'
    let color = this.props.color || '#191919'
    let text = this.props.text || 'Learn More' 
    let transparent = this.props.transparent || false
    let inactive = this.props.inactive || false
    let size = this.props.size || false
    let recaptcha = this.props.recaptcha || false
    let textColor = 'white'
    let backgroundColor
    
    // Inactive Button
    let onClick = false
    let formType = ''
    if (!inactive) {
      onClick = this.props.onClick
      formType = 'submit'
    }

    // Recaptcha stuff
    if (recaptcha) {

    }

    // Set Textcolor
    if (color === '#191919') {
      if (transparent) textColor = '#191919'
      else textColor = 'white'
    } else if (color === 'white') {
      if (transparent) textColor = 'white'
      else textColor = '#191919'
    }

    // Set Background Color
    if (!transparent) {
      backgroundColor = color
    } else {
      backgroundColor = 'rgba(255,255,255,0)'
    }
    
    // Set Button Styles
    let buttonStyles = {
      backgroundColor: backgroundColor,
      border: '1px solid '+ color,
      color: textColor
    }

    // Set ClassNames
    let classNames = 'jo-link-button ' + linkType
    if (this.props.icon) classNames += ' jo-link-button-has-icon'
    if (this.props.classNames) { classNames += ' ' + this.props.classNames }
    if (inactive) { classNames += ' inactive' }
    if (size) { classNames += ' ' + size}

    let buttonIcon = false
    switch(this.props.icon){
      case 'github':
        buttonIcon = <svg viewBox="0 0 512 512"><path d="M256 70.7c-102.6 0-185.9 83.2-185.9 185.9 0 82.1 53.3 151.8 127.1 176.4 9.3 1.7 12.3-4 12.3-8.9V389.4c-51.7 11.3-62.5-21.9-62.5-21.9 -8.4-21.5-20.6-27.2-20.6-27.2 -16.9-11.5 1.3-11.3 1.3-11.3 18.7 1.3 28.5 19.2 28.5 19.2 16.6 28.4 43.5 20.2 54.1 15.4 1.7-12 6.5-20.2 11.8-24.9 -41.3-4.7-84.7-20.6-84.7-91.9 0-20.3 7.3-36.9 19.2-49.9 -1.9-4.7-8.3-23.6 1.8-49.2 0 0 15.6-5 51.1 19.1 14.8-4.1 30.7-6.2 46.5-6.3 15.8 0.1 31.7 2.1 46.6 6.3 35.5-24 51.1-19.1 51.1-19.1 10.1 25.6 3.8 44.5 1.8 49.2 11.9 13 19.1 29.6 19.1 49.9 0 71.4-43.5 87.1-84.9 91.7 6.7 5.8 12.8 17.1 12.8 34.4 0 24.9 0 44.9 0 51 0 4.9 3 10.7 12.4 8.9 73.8-24.6 127-94.3 127-176.4C441.9 153.9 358.6 70.7 256 70.7z"/></svg>
        break
      default:
        break
    }
      

    return (  
      <StyledButton className="jo-link-button-wrapper">
      {linkType === 'external' && 
        <a href={to} className={classNames} target="_blank" rel="noopener noreferrer">
          <button style={buttonStyles}>
            <span className="button-text">{text}{buttonIcon && buttonIcon}</span>
            
              <span className="button-arrow">
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 476.213 476.213">
                  <polygon fill={textColor} points="345.606,107.5 324.394,128.713 418.787,223.107 0,223.107 0,253.107 418.787,253.107 324.394,347.5 
                    345.606,368.713 476.213,238.106 "/>
                </svg>
              </span>
            
          </button>
        </a>
      }
      {linkType === 'anchor' && 
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
      {linkType === 'route' && 
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
      {linkType === 'form' && recaptcha &&
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
      {linkType === 'form' && !recaptcha &&
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
      {linkType === 'custom' && 
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
      </StyledButton>
    )
  }
}

export default LinkButton

const StyledButton = styled.div`
  &:hover {
    cursor: pointer;
  }
  .jo-link-button {
    
    &.inactive {
      opacity: .1;
      &:hover button .button-arrow {
        width: 0px;
      }
    }

    &.large {
      width: auto;
      display: flex;
      justify-content: flex-start;

      button, &.inactive button {  
        height: 68px;
        padding: 24px;
        padding-top: 20px; 
        
        span.button-text {
          height: 20px;
          font-size: 20px;
        }
        
      }

      &:hover button .button-arrow {
        height: 20px;
        margin-top: 3px;
        margin-left: 8px;
        width: 29px !important;
        opacity: 1;
        animation: blinker 2s linear infinite;
        -webkit-animation: blinker 2s linear infinite;
      }
    
    }

    &.small-screen-responsive {
      button {
        @media ${screen.uptolg} {
          padding: 8px 12px;
          height: 38px;

          .button-arrow svg {
            max-height: 16px;
          }

          .button-text {
            padding-top: 3px;
            font-size: 10px;
          }

        }
        
      }
    }
    
    button {
      display: block;
      padding: 16px 20px;
      height: 54px;
      transition: padding-right .3s;
      -webkit-transition: padding-right .3s;
      .button-arrow {
        position: relative;
        overflow: hidden;
        opacity: 0;
        transition: width .3s, opacity .3s;
        -webkit-transition: width .3s, opacity .3s;
        height: 16px;
        width: 0px;

        svg {
          position: absolute;
          width: 100%;
          height: auto;
          left: 0px;
          top: 50%;
          transform: translateY(-50%);
          max-height: 20px;
          height: auto;
        }

      }
    }
    &:hover {
      button {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        .button-arrow {
          width: 29px;
          opacity: 1;
          animation: blinker 2s linear infinite;
          -webkit-animation: blinker 2s linear infinite;
        }
      }
    }

  }
  
  a {
    text-decoration: none !important;
  }
  .button-text {
    height: 16px;
    display: flex; 
    
    svg {
      width: 36px;
      height: 36px;
      margin-top: -10px;
    }
 
  }
  
  /* .jo-link-button.jo-link-button-has-icon button:hover {
    background-color: #191919 !important;
    transition: background-color .3s;
    -webkit-transition: background-color .3s;
  }
  .jo-link-button.jo-link-button-has-icon button:hover span.button-text {
    color: white;
    transition: color .3s;
    -webkit-transition: color .3s;
  }
  .jo-link-button-has-icon button:hover .button-text svg {
    fill: white;
    transition: fill .3s;
    -webkit-transition: fill .3s;
  } */

`