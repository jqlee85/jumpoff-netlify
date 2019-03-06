import React, {Component} from 'react';
import  './HomeLanding.css';
import {ShapeOne,ShapeTwo,ShapeThree,ShapeFour} from '../Shapes/Shapes';

class HomeLanding extends Component {

  boidsContainer = React.createRef();
  boids = React.createRef();

  render(){
    
    return <section className="home-section-one home-landing">
      <div className="jo-home-landing-boids-container" ref={this.boidsContainer}>
        <canvas ref={this.boids} id="jo-home-boids"></canvas>
      </div>
      <div className="jo-home-shapes-wrapper aspectRatioSizer">
        <ShapeOne classNames={'jo-home-shape jo-home-shape-1'}/>
        <ShapeTwo classNames={'jo-home-shape jo-home-shape-2'}/>
        <ShapeThree classNames={'jo-home-shape jo-home-shape-3'}/>
        <ShapeFour classNames={'jo-home-shape jo-home-shape-4'}/>
      </div>
      <div className="jo-home-title-wrapper">
        <h1 className="jo-home-title">JumpOff</h1>
        <p className="jo-home-description">web development by Jesse Lee<br/>unique, modern web experiences</p>
      </div>
    </section>
  }

}

export default HomeLanding;
