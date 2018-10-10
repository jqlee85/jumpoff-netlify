import React, {Component} from 'react';
import styles from './TransformBox.css';



export class TransformBox extends Component {

  /* BEGIN Transform Setup */
  inner = React.createRef();
  container = React.createRef();
  mouse = {
    _x: 0,
    _y: 0,
    x: 0,
    y: 0,
    updatePosition: function(x,y) {
      this.x = x - this._x;
      this.y = (y - this._y) * -1;
    },
    setOrigin: function(inner) {
      var elem = inner.current;
      this._x = elem.offsetLeft + Math.floor(elem.offsetWidth/2);
      this._y = elem.offsetTop + Math.floor(elem.offsetHeight/2);
      // console.log('orgin set to');
      // console.log('x: '+this._x);
      // console.log('y: '+this._y);
    }
  }
  //Time to Update Variables
  counter = 0;
  updateRate = 10;
  /* END Transform Setup */

  constructor(props) {
    super(props);
    // Set mouse x and y values for transform
    this.state = { x: 0, y: 0 };
  }

  componentDidMount(){
    // Track the mouse position relative to the center of the container.
    this.mouse.setOrigin(this.inner);
  }

  mouseEnter(e) {
    // Transforming
    this.setState({ x: e.screenX, y: e.screenY });
    this.transformUpdate(this.mouse.x,this.mouse.y);
  }
  
  mouseLeave() {
    // Undo Transforming
    this.inner.current.style = "";
  }
  
  mouseMove(e) {
    // Update Transforming
    this.setState({ x: e.screenX, y: e.screenY });
    if (this.isTimeToUpdate()) {
      this.transformUpdate(e, this.mouse.x,this.mouse.y);
    }
  }

  transformUpdate() {
    this.mouse.updatePosition(this.state.x,this.state.y);
    var offsetHeight = this.inner.current.offsetHeight;
    var offsetWidth = this.inner.current.offsetWidth;
    var rotateX = ( this.mouse.y / offsetHeight * 40 ).toFixed(2);
    var rotateY = ( this.mouse.x / offsetWidth * 40 ).toFixed(2);
    
    // console.log('this.mouse.x: '+this.mouse.x);
    // console.log('this.mouse.y: '+this.mouse.y);
    // console.log('halfHeight: '+offsetHeight)
    // console.log('halfWidth: '+offsetWidth)
    // console.log('rotateX: '+rotateX);
    // console.log('rotateY: '+rotateY);

    this.updateTransformStyle(
      rotateX,
      rotateY
    );
  }

  // Update CSS to transform item
  updateTransformStyle(x, y) {
    var transformStyle = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
    // console.log(transformStyle);
    this.inner.current.style.transform = transformStyle;
    this.inner.current.style.webkitTransform = transformStyle;
    this.inner.current.style.mozTransform = transformStyle;
    this.inner.current.style.msTransform = transformStyle;
    this.inner.current.style.oTransform = transformStyle;
  };

  //Check if it's time to update the transforms
  isTimeToUpdate() {
    return this.counter++ % this.updateRate === 0;
  };

  render(){

    let classNames = this.props.classNames ? this.props.classNames : '';
    classNames += ' jo-transform-box';

    return <div className={classNames} onMouseEnter={this.mouseEnter.bind(this)} onMouseLeave={this.mouseLeave.bind(this)} onMouseMove={this.mouseMove.bind(this)} ref={this.container}>
      <div className="jo-transform-box-inner" ref={this.inner}></div>
    </div>;
  }
}

export default TransformBox;

