import React, {Component} from 'react';
import  './HomeLanding.css';
import _ from 'lodash';
import {ShapeOne,ShapeTwo,ShapeThree,ShapeFour} from '../Shapes/Shapes';

class HomeLanding extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      yPos: 0,
    };  
  }

  shapeTwoRef = React.createRef();
  shapeThreeRef = React.createRef();
  shapeFourRef = React.createRef();
  
  componentDidMount(){
    setTimeout(function(){window.scroll(0,1);window.scroll(0,0);},50);
    setTimeout(this.handleScroll(),100);
    window.addEventListener("scroll", _.throttle(this.handleScroll.bind(this), 10));

  }

  componentWillUnmount(){
    window.removeEventListener("scroll", _.throttle(this.handleScroll.bind(this), 10));
  }

  

  handleScroll = (e) => {
    let yPos = window.pageYOffset;
    this.setState(prevState => ({
      yPos: yPos
    }));
    console.log(this.state.yPos);
  }

  render(){
    
    var shapeTwoStyle = {transform: 'translateY(-' + Math.round(this.state.yPos * .05) + 'px) translateX(-'+Math.round(this.state.yPos * .04)+'px)'};
    var shapeThreeStyle = {transform: 'translateY(-' + Math.round(this.state.yPos * 1) + 'px) translateX('+Math.round(this.state.yPos * .2)+'px)'};
    var shapeFourStyle = {transform: 'rotate(-34deg) translateY(-' + Math.round(this.state.yPos * 1.8) + 'px) translateX('+Math.round(this.state.yPos * 1)+'px)'};
    
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
          <ShapeTwo styles={shapeTwoStyle} classNames={'jo-home-shape jo-home-shape-2'}/>
          <ShapeThree styles={shapeThreeStyle} classNames={'jo-home-shape jo-home-shape-3'}/>
          <ShapeFour  styles={shapeFourStyle} classNames={'jo-home-shape jo-home-shape-4'}/>
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
