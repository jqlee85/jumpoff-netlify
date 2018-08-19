import React, {Component} from 'react'
import styles from './Logo.css';

class Logo extends Component {

  constructor(props){
    super(props);
  }

  render(){
    
    let mainColor = this.props.mainColor == 'white' ? 'white' : 'black';
    let secondaryColor = this.props.mainColor == 'white' ? 'black' : 'white';
    //Muted Colors
    let colors = {
      color1: '#f0ba45',
      color2: '#f89c44',
      color3: '#ef6085',
      color4: '#cd5fa1'
    } 

    return <div className="jo-logo-wrapper">
      <div className="jo-logo">
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" 
          width="100%"
          height="100%"
          x="0"
          y="0"
          viewBox="0 0 250 250"
        >
          <defs>
            <linearGradient id="jo-gradient-vibrant" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%"   stopColor={colors.color1}/>
              <stop offset="25%"   stopColor={colors.color2}/>
              <stop offset="75%" stopColor={colors.color3}/>
              <stop offset="100%" stopColor={colors.color4}/>
            </linearGradient>
          </defs>
          <path 
            d="M 25 50 L 200 50 L 200 200 L 50 200 L 50 125"
            fill="none"
            stroke="url(#jo-gradient-vibrant)"
            strokeWidth="50"
          />
        </svg>
      </div>
    </div>
  }

}

export default Logo

