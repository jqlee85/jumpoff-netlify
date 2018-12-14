import React, {Component} from 'react';
import styles from './TransformBox.css';
import {Link} from 'react-router-dom';
import _ from 'lodash';
import theBackgroundImage from '../../public/images/jumpoff-what-we-do-bg-color-vibrant.jpg';

export class TransformBox extends Component {

  /* BEGIN Transform Setup */
  inner = React.createRef();
  container = React.createRef();
  mouse = {
    _x: 0,
    _y: 0,
    x: 0,
    y: 0,
  }
  //Time to Update Variables
  counter = 0;
  updateRate = 15;
  /* END Transform Setup */

  updatePosition(x,y) {
    this.mouse.x = x - this.mouse._x;
    this.mouse.y = (y - this.mouse._y) * -1;
  }

  setOrigin() {
    var inner = this.inner;
    if ( inner.current && typeof(inner.current) !== 'undefined'){
      var elem = inner.current;
      var domRect = elem.getBoundingClientRect();
      this.mouse._x = domRect.left + Math.floor(elem.offsetWidth/2);
      this.mouse._y = domRect.top + Math.floor(elem.offsetHeight/2);
    }
  }

  constructor(props) {
    super(props);
    // Set mouse x and y values for transform
    this.state = { x: 0, y: 0 };
  }

  componentDidMount(){
    // Track the mouse position relative to the center of the container.
    this.setOrigin(this.inner);
    window.addEventListener("scroll", _.debounce(this.setOrigin.bind(this), 500));
    window.addEventListener("resize", _.debounce(this.setOrigin.bind(this), 500));
  }

  componentWillUnmount(){
    window.removeEventListener("scroll", _.debounce(this.setOrigin.bind(this), 500));
    window.removeEventListener("resize", _.debounce(this.setOrigin.bind(this), 500));
  }

  mouseEnter(e) {
    // Transforming
    this.setState({ x: e.screenX, y: e.screenY });
    this.transformUpdate();
  }
  
  mouseLeave() {
    // Undo Transforming
    this.inner.current.style = "";
  }
  
  mouseMove(e) {
    // Update Transforming
    // console.log('screenX: ' + e.screenX +  ' screenY: ' + e.screenY);
    // console.log('this.mouse.x: ' + this.mouse.x +  ' this.mouse.y: ' + this.mouse.y);
    this.setState({ x: e.screenX, y: e.screenY });
    if (this.isTimeToUpdate()) {
      this.transformUpdate(e, this.mouse.x,this.mouse.y);
    }
  }

  transformUpdate() {
    this.updatePosition(this.state.x,this.state.y);
    var itemHeight = this.inner.current.offsetHeight;
    var itemWidth = this.inner.current.offsetWidth;
    var rotateX = ( this.mouse.y / itemHeight * 40 ).toFixed(2);
    var rotateY = ( this.mouse.x / itemWidth * 40 ).toFixed(2);
    
    if (rotateX > 20) rotateX = 20;
    if (rotateX < -20) rotateX = -20;
    if (rotateY > 20) rotateY = 20;
    if (rotateY < -20) rotateY = -20;
    //TODO add maximum rotate values

    // console.log('-------------------');
    // console.log(this);
    // console.log('Mouse X: '+this.mouse.x);
    // console.log('Mouse Y: '+this.mouse.y);
    // console.log('Mouse _X: '+this.mouse._x);
    // console.log('Mouse _Y: '+this.mouse._y);
    // console.log('itemHeight: '+itemHeight)
    // console.log('itemWidth: '+itemWidth)
    // console.log('rotateX: '+rotateX);
    // console.log('rotateY: '+rotateY);

    this.updateTransformStyle(
      rotateX,
      rotateY
    );
  }

  // Update CSS to transform item
  updateTransformStyle(x, y) {
    var transformStyle = "perspective(1500px) rotateX(" + x + "deg) rotateY(" + y + "deg) scale3d(1,1,1)";
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

    let id = this.props.project.id;
    let slug = this.props.project.slug;
    let postID = 'jo-project-id_' + id;
    let title = this.props.project.title;
    let featuredImage = (typeof(this.props.project.featuredImage) !== 'undefined') ? this.props.project.featuredImage.sourceUrl : '';
    let projectLink = '/portfolio/' + slug;
    let description = this.props.project.projectDescription;
    let technologies = this.props.project.technologies;

    let classNames = this.props.classNames ? this.props.classNames : '';
    classNames += ' jo-transform-box';

    return <div className={classNames} onMouseEnter={this.mouseEnter.bind(this)} onMouseLeave={this.mouseLeave.bind(this)} onMouseMove={this.mouseMove.bind(this)} ref={this.container}>
      <div className="jo-transform-box-inner" ref={this.inner} >
        <div className="jo-transform-box-inner-container">
          <div className="jo-transform-box-bg-image" style={{backgroundImage: "url(" + featuredImage + ")"}}></div>
          <Link to={projectLink}>
            <div className="jo-transform-box-content-wrapper">
              <div className="jo-transform-box-content">
                <h3 className="jo-portfolio-item-title" dangerouslySetInnerHTML={{ __html: title }}/>
                <p className="jo-portfolio-item-technologies" dangerouslySetInnerHTML={{ __html: technologies }}/>
                <p className="jo-portfolio-item-description" dangerouslySetInnerHTML={{ __html: description }}/>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>;
  }
}

export default TransformBox;

