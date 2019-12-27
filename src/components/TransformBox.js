import React, {Component} from 'react'
import {Link} from 'gatsby'
import _ from 'lodash'
import styled from 'styled-components'
import {screen} from '../styles/mediaQueries'

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
  updateRate = 10;
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
    window.addEventListener("scroll", _.debounce(this.setOrigin.bind(this), 50));
    window.addEventListener("resize", _.debounce(this.setOrigin.bind(this), 50));
  }

  componentWillUnmount(){
    window.removeEventListener("scroll", _.debounce(this.setOrigin.bind(this), 50));
    window.removeEventListener("resize", _.debounce(this.setOrigin.bind(this), 50));
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

    let slug = this.props.project.slug;
    let title = this.props.project.title;
    let featuredImage = (typeof(this.props.project.featuredImage) !== 'undefined') ? this.props.project.featuredImage.sourceUrl : '';
    let projectLink = '/portfolio/' + slug;
    let description = this.props.project.projectDescription;
    let technologies = this.props.project.technologies;

    let classNames = this.props.classNames ? this.props.classNames : '';
    classNames += ' jo-transform-box';

    return <StyledTransformBox 
      className={classNames} 
      onMouseEnter={this.mouseEnter.bind(this)} 
      onMouseLeave={this.mouseLeave.bind(this)} 
      onMouseMove={this.mouseMove.bind(this)} 
      ref={this.container}
    >
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
    </StyledTransformBox>;
  }
}

export default TransformBox

const StyledTransformBox = styled.div`

  
    width: 100%;
    height: 100%;
  
  .jo-transform-box-inner {
    position: relative;
    display: inline-block;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    margin: 0px;
    padding: 0px;
    margin: 0px;
    padding: 0px;
    transition: all .8s cubic-bezier(.42,0,0,1);
    will-change: transform;
    box-shadow: .75rem 1.25rem 2.5rem 0.35rem rgba(0,0,0,.08);
    color: #fff;
    cursor: pointer;
  }
  .jo-transform-box-inner h1, .jo-transform-box-inner h2, .jo-transform-box-inner h3, .jo-transform-box-inner p, .jo-transform-box-inner a {
    color: #fff;
  } 

  .jo-transform-box-inner-container {
    position: relative;
    width: 100%;
    height: 100%;
    background: #000;
    transition: all .8s cubic-bezier(.42,0,0,1);
  }
  .jo-transform-box-inner:hover .jo-transform-box-inner-container {
  }
  .jo-transform-box-bg-image {
    position: absolute;
    width: 100%;
    height: 100%;
    left:0;
    top:0;
    background-position: center center;
    background-size: cover;
    z-index: 5; 
  }
  .jo-transform-box-content-wrapper {
    position: absolute;
    height: 100%;
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    background-color: transparent;
    transition: background-color .8s cubic-bezier(.42,0,0,1);
    z-index: 30;
  }
  .jo-transform-box-inner:hover .jo-transform-box-content-wrapper {
    background-color: rgba(0,0,0,.7);
  }
  .jo-transform-box-content {
    position: relative;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    opacity: 0;  
    transition: all .8s cubic-bezier(.42,0,0,1);
    background-color: none;
    z-index: 40;
  }
  .jo-transform-box-inner:hover .jo-transform-box-content {
    opacity: 1;
  }
  .jo-transform-box-content h3.jo-portfolio-item-title, .jo-transform-box-content p.jo-portfolio-item-technologies, .jo-transform-box-content p.jo-portfolio-item-description {
    text-align: center;
  }
  .jo-transform-box-content h3.jo-portfolio-item-title {
    font-size: 1.2rem;
    font-weight: bold;
  }
  .jo-transform-box-content p.jo-portfolio-item-technologies {
    font-size: .7rem;
  }
  .jo-transform-box-content p.jo-portfolio-item-description {
    font-size: 1rem;
    text-transform: none;
  }
  /* Media Queries */
  @media screen and ( min-width: 1201px ) {
    .jo-transform-box-content h3.jo-portfolio-item-title {
      font-size: 1.8rem;
      line-height: 1.25;
      margin-bottom: .5rem;
    }
    .jo-transform-box-content p.jo-portfolio-item-technologies {
      font-size: .7rem;
      margin-bottom: .7rem;
    }
    .jo-transform-box-content p.jo-portfolio-item-description {
      font-size: 1.2rem;
      line-height: 1.2;
      margin-bottom: 1.2rem;
    }
  }
  @media screen and ( min-width: 1001px ) and ( max-width: 1200px ) {
    .jo-transform-box-content h3.jo-portfolio-item-title {
      font-size: 1.5rem;
      line-height: 1.25;
      margin-bottom: .5rem;
    }
    .jo-transform-box-content p.jo-portfolio-item-technologies {
      font-size: .6rem;
      margin-bottom: .5rem;
    }
    .jo-transform-box-content p.jo-portfolio-item-description {
      font-size: 1rem;
      line-height: 1.2;
      margin-bottom: 1rem;
    }
  }
  @media screen and ( max-width: 1000px ) {
    .jo-transform-box-content h3.jo-portfolio-item-title {
      font-size: 1.3rem;
      line-height: 1.25;
      margin-bottom: .3rem;
    }
    .jo-transform-box-content p.jo-portfolio-item-technologies {
      font-size: .6rem;
      margin-bottom: .5rem;
    }
    .jo-transform-box-content p.jo-portfolio-item-description {
      font-size: .9rem;
      line-height: 1.2;
      margin-bottom: .7rem;
    }
    .jo-transform-box-content .jo-link-button-wrapper {
      margin-top: .5rem;
    }
  }

`