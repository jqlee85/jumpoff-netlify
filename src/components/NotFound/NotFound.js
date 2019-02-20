import React, {Component} from 'react'
import  './NotFound.css';
import {Link} from 'react-router-dom';
import {ShapeFive} from '../Shapes/Shapes';

class NotFound extends Component {

  render(){
    return <div className="jo-not-found">
      <ShapeFive/>
      <div className="jo-not-found-text">
      <h1>Not Found</h1>
      <Link to='/'><h3>Take Me Back Home</h3></Link>
      </div>
    </div>
  }


}



export default NotFound
