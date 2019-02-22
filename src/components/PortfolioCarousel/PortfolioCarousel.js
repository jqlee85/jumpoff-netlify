import React, {Component} from 'react';
import  './PortfolioCarousel.css';
import TouchCarousel, {clamp} from 'react-touch-carousel'
import NonPassiveTouchTarget from '../NonPassiveTouchTarget/NonPassiveTouchTarget';
import touchWithMouseHOC from 'react-touch-carousel/lib/touchWithMouseHOC'
import cx from 'classnames'
import LinkButton from '../LinkButton/LinkButton';
import _ from 'lodash'

let listOfData;
let Container;
const query = window.location.search.slice(1)
const enableAutoplay = /\bautoplay\b/.test(query)
const enableLoop = /\bloop\b/.test(query)
const cardSize = 350;
const cardPadCount = enableLoop ? 3 : 0
const carouselWidth = clamp(window.innerWidth, 0, 800)

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
    let itemLink = '/portfolio/' + item.node.slug;
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

    return <div>
      <TouchCarousel
        width={this.state.width}
        component={Container}
        cardSize={cardSize}
        cardCount={listOfData.length}
        autoplay={enableAutoplay ? 2e3 : false}
        renderCard={this.renderCard}
        loop={enableLoop}
      />
    </div>;
  }

}

export default PortfolioCarousel;