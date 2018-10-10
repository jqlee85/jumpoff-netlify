import React, {Component} from 'react';
import styles from './HomeLanding.css';
import {ShapeOne,ShapeTwo,ShapeThree,ShapeFour} from '../Shapes/Shapes';
import ScrollDown from '../ScrollDown/ScrollDown';

class HomeLanding extends Component {
  
  constructor(props){
    super(props);
  }

  render(){
    
    let onClick = this.props.onClick;
    
    //Muted Colors
    let colors = {
      color1: '#f0ba45',
      color2: '#f89c44',
      color3: '#ef6085',
      color4: '#cd5fa1'
    } 
    let coolColors = {
      color1: '#1276ae',
      color2: '#429c9a',
      color3: '#aceb78'
    }

    return <section className="home-section-one home-landing">
        <svg style={{width:0,height:0,position:'absolute'}} aria-hidden="true" focusable="false">
          <linearGradient id="jo-home-landing-shape-gradient" x2="1" y2="1"  gradientTransform="rotate(50)">
            <stop offset="0%"   stopColor={coolColors.color1}/>
            <stop offset="33%"   stopColor={coolColors.color2}/>
            <stop offset="66%" stopColor={coolColors.color3}/>
            {/* <stop offset="100%" stopColor={colors.color4}/> */}
          </linearGradient>
        </svg>
        <div className="jo-home-shapes-wrapper aspectRatioSizer">
          <ShapeOne classNames={'jo-home-shape jo-home-shape-1'}/>
          <ShapeTwo classNames={'jo-home-shape jo-home-shape-2'}/>
          <ShapeThree classNames={'jo-home-shape jo-home-shape-3'}/>
          <ShapeFour classNames={'jo-home-shape jo-home-shape-4'}/>
        </div>
        <div className="jo-home-title-wrapper">
          <h1 className="jo-home-title">JumpOff</h1>
          <p className="jo-home-description">a web development company building<br/>unique, modern web experiences</p>
        </div>
      {/* <ScrollDown color='#191919'/> */}
    </section>
  }

}

export default HomeLanding;
