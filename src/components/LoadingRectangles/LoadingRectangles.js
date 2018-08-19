import React, {Component} from 'react'
import styles from './LoadingRectangles.css';

class LoadingRectangles extends Component {

  render(){
    return <div className="jo-loading-rectangles">
      <div className="jo-rectangle jo-rectangle-h1"></div>
      <div className="jo-rectangle jo-rectangle-p"></div>
      <div className="jo-rectangle jo-rectangle-img"></div>
      <div className="jo-rectangle jo-rectangle-p"></div>
    </div>
  }


}



export default LoadingRectangles
