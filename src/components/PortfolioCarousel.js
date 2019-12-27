import React, {Component} from 'react'
import TouchCarousel, {clamp} from 'react-touch-carousel'
import NonPassiveTouchTarget from './NonPassiveTouchTarget'
import touchWithMouseHOC from 'react-touch-carousel/lib/touchWithMouseHOC'
import cx from 'classnames'
import LinkButton from './LinkButton'
import _ from 'lodash'
import styled from 'styled-components'
import {screen} from '../styles/mediaQueries'

let listOfData;
let Container;
const enableAutoplay = false
const enableLoop = false
const cardSize = 350;
const cardPadCount = enableLoop ? 3 : 0
// const carouselWidth = clamp(window.innerWidth, 0, 800)

class PortfolioCarousel extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      width: window.innerWidth
    }
    this.CarouselContainer = this.CarouselContainer.bind(this);
  }

  componentWillMount(){
    listOfData = this.props.projects;
    Container = touchWithMouseHOC(this.CarouselContainer)
  } 
  
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", _.debounce(this.updateDimensions.bind(this), 500));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", _.debounce(this.updateDimensions.bind(this), 500));
  }
  
  updateDimensions() {
    if(window.innerWidth < 801) {
      this.setState({ width: window.innerWidth });
    } 
  }
   
  /* Carousel Container */
  CarouselContainer (props) {

    const {cursor, carouselState: {active, dragging}, ...rest} = props
    let current = -Math.round(cursor) % listOfData.length
    while (current < 0) {
      current += listOfData.length
    }
    // Put current card at center
    const translateX = (cursor - cardPadCount) * cardSize + (this.state.width - cardSize) / 2
    return (<div className="jo-carousel"><NonPassiveTouchTarget className={cx('carousel-container',{'is-active': active, 'is-dragging': dragging})}>
        <NonPassiveTouchTarget className='carousel-track' style={{transform: `translate3d(${translateX}px, 0, 0)`}}{...rest}/></NonPassiveTouchTarget>
        <div className='carousel-pagination-wrapper'>
            <ol className='carousel-pagination'>
              {listOfData.map((_, index) => (
                <li
                  key={index}
                  className={current === index ? 'current' : ''}
                />
              ))}
            </ol>
          </div>
      </div>
    )
  }

  /* Render the Card */
  renderCard(index, modIndex, cursor, carouselState) {

    const item = listOfData[modIndex]
    let itemLink = '/work/' + item.node.slug;
    const onTop = Math.abs(index + cursor) < 0.5
    const rawDeg = 15 * (index + cursor)
    const degrees = Math.round(rawDeg * 10) / -10
    
    // render the item
    return (
      <div
        key={index}
        className='carousel-card'
      >
        <div className='carousel-card-inner' style={{
          transform: `rotateY(${degrees}deg)`,
          zIndex: onTop ? 1 : 0
        }}>
          <div className="carousel-card-image" style={{
             backgroundImage: 'url('+item.node.featuredImage.sourceUrl+')',
          }}>
            <div className="carousel-card-content">
              <h3 className='carousel-title'>{item.node.title}</h3>
              <p className='carousel-text'>{item.node.projectDescription}</p>
              <LinkButton to={itemLink} color="white" transparent={true} linkType="route" text="See More"></LinkButton>
            </div>
          </div>
          
        </div>        
      </div>
    );
  }

  render(){

    return <StyledPortfolioCarousel>
      <TouchCarousel
        width={this.state.width}
        component={Container}
        cardSize={cardSize}
        cardCount={listOfData.length}
        autoplay={enableAutoplay}
        renderCard={this.renderCard}
        loop={enableLoop}
      />
    </StyledPortfolioCarousel>;
  }

}

export default PortfolioCarousel;

const StyledPortfolioCarousel = styled.div`

  .carousel-container {
    position: relative;
    height: 400px;
    max-width: 800px;
    margin: 0 auto;
    touch-action: pan-y;
  }
  .carousel-track {
    display: flex;
    height: 100%;
  }
  .carousel-card {
    flex: 0 0 340px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-weight: bold;
    color: white;
    padding: 2px;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    -webkit-perspective: 400px;
    -moz-perspective: 400px;
    -ms-perspective: 400px;
    -o-perspective: 400px;
    perspective: 400px;
  }
  .carousel-card-inner {
    position: relative;
    width: 346px;
    height: 396px;
    box-shadow: .75rem 1.25rem 2.5rem 0.35rem rgba(0,0,0,.1);
  }
  .carousel-card-image {
    position: relative;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    background-size: cover;
    background-position: center;
  }
  .carousel-card-content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 20px;
    background-color: rgba(0,0,0,.5);
  }
  .carousel-card-inner h3, .carousel-card-inner p {
    color: white;
  }
  .carousel-title {
    margin-top: 20px;
    font-size: 1.5em;
  }

  .carousel-text {
    padding: 1em;
    font-size: .9em;
    line-height: 150%;
    white-space: pre-wrap;
    text-align: left;
    font-family: sans-serif;
  }

  .carousel-pagination-wrapper {
    position: relative;
    margin: 60px auto;
    display: flex;
    justify-content: center;
    pointer-events: none;
    
  }

  .carousel-pagination {
    list-style: none;
    display: flex;
    justify-content: space-around;
    width: 180px;
    padding: 0;
  }

  .carousel-pagination li {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: rgba(50, 50, 50, 0.5);
  }

  .carousel-pagination .current {
    margin-top: -1px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #f89c44;
    background-image: linear-gradient(15deg, #ef6085, #f0ba45 );
  }

`