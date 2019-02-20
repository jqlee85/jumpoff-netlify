import React, {Component} from 'react'
import  './LoadingShape.css';
import {ShapeOne,ShapeTwo,ShapeThree,ShapeFour} from '../Shapes/Shapes';

class LoadingShape extends Component {

  render(){
    return <div className="jo-loading-shape">
      <ShapeThree/>
    </div>
  }


}



export default LoadingShape
