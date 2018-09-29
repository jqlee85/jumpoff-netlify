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
    let mutedColors = {
      color1: '#f0ba45',
      color2: '#f89c44',
      color3: '#ef6085',
      color4: '#cd5fa1'
    } 

    return <section className="home-section-one home-landing">
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
