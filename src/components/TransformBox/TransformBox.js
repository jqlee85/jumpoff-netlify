import React, {Component} from 'react';
import styles from './TransformBox.css';



export class TransformBox extends Component {

  inner = React.createRef();
  container = React.createRef();
  mouse = {
    _x: 0,
    _y: 0,
    x: 0,
    y: 0,
    updatePosition: function(event,x,y) {
      var e = event || window.event;
      this.x = x - this._x;
      this.y = (y - this._y) * -1;
    },
    setOrigin: function(inner) {
      console.log(inner);
      var elem = inner.current;
      this._x = elem.offsetLeft + Math.floor(elem.offsetWidth/2);
      this._y = elem.offsetTop + Math.floor(elem.offsetHeight/2);
      console.log('orgin set to');
      console.log('x: '+this._x);
      console.log('y: '+this._y);
    },
    show: function() { return '(' + this.x + ', ' + this.y + ')'; }
  }
  //Time to Update Variables
  counter = 0;
  updateRate = 10;

  constructor(props) {
    super(props);
    
    // this.mouse.setOrigin(this.container);
    this.state = { x: 0, y: 0 };
  }

  componentDidMount(){
    // Track the mouse position relative to the center of the container.
    this.mouse.setOrigin(this.inner);
  }

  mouseEnter(e) {
    this.transformUpdate(e);
  }
  mouseLeave(e) {
    this.inner.current.style = "";
  }
  mouseMove(e) {
    this.setState({ x: e.screenX, y: e.screenY });
    if (this.isTimeToUpdate()) {
      this.transformUpdate(e);
    }
  }

  transformUpdate(event) {
    this.mouse.updatePosition(event,this.state.x,this.state.y);
    
    var halfHeight = this.inner.current.offsetHeight/10;
    var halfWidth = this.inner.current.offsetWidth/10;
    var rotateX = (this.mouse.y / halfHeight).toFixed(2);
    var rotateY = (this.mouse.x / halfWidth).toFixed(2);
    
    console.log('this.mouse.x: '+this.mouse.x);
    console.log('this.mouse.y: '+this.mouse.y);
    console.log('halfHeight: '+halfHeight)
    console.log('halfWidth: '+halfWidth)
    console.log('rotateX: '+rotateX);
    console.log('rotateY: '+rotateY);

    this.updateTransformStyle(
      rotateX,
      rotateY
    );
  }


  updateTransformStyle(x, y) {
    var transformStyle = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
    console.log(transformStyle);
    
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

