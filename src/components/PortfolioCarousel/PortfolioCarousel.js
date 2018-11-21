import React, {Component} from 'react';
import styles from './PortfolioCarousel.css';
import TouchCarousel, {clamp} from 'react-touch-carousel'
import NonPassiveTouchTarget from '../NonPassiveTouchTarget/NonPassiveTouchTarget';
import touchWithMouseHOC from 'react-touch-carousel/lib/touchWithMouseHOC'
import cx from 'classnames'
import LinkButton from '../LinkButton/LinkButton';


let listOfData;
let Container;
const query = window.location.search.slice(1)
const enableAutoplay = /\bautoplay\b/.test(query)
const enableLoop = /\bloop\b/.test(query)
const cardSize = 350;
const cardPadCount = enableLoop ? 3 : 0
const carouselWidth = clamp(window.innerWidth, 0, 800)

// console.log('carouselWidth');
// console.log(carouselWidth);
// console.log('cardPadCount');
// console.log(cardPadCount);


class PortfolioCarousel extends Component {
  
  constructor(props){
    super(props);
  }

  componentWillMount(){
    listOfData = this.props.projects;
    Container = touchWithMouseHOC(this.CarouselContainer)
  }

  getcardPosition(){

  }
   
  renderCard(index, modIndex, cursor, carouselState) {
    
    const item = listOfData[modIndex]
    let itemLink = '/portfolio/' + item.node.slug;
    const onTop = Math.abs(index + cursor) < 0.5
    
    console.log('item');
    console.log(item);
    
    // const degrees = Math.round( (cursor * 30) * 10) / -10;
    
    
    
    
    const rotate = 40 * (index + cursor)
    
    const rawDeg = 15 * (index + cursor)
    const degrees = Math.round(rawDeg * 10) / -10
    console.log(degrees);
    
    
    // render the item
    return (
      <div
        key={index}
        className='carousel-card'
        onClick={() => console.log(`clicked card ${1 + modIndex}`)}
      >
        <div className='carousel-card-inner' style={{
          backgroundImage: 'url('+item.node.featuredImage.sourceUrl+')',
          transform: `rotateY(${degrees}deg)`,
          // transform: `rotate(${rotate}deg)`,
          zIndex: onTop ? 1 : 0
        }}>
          <div className="carousel-card-overlay">
            <h3 className='carousel-title'>{item.node.title}</h3>
            <p className='carousel-text'>{item.node.projectDescription}</p>
            <LinkButton to={itemLink} color='white' transparent={true} linkType="route" text="See More"></LinkButton>
          </div>
        </div>        
      </div>
    );
  }
  
  CarouselContainer (props) {
    const {cursor, carouselState: {active, dragging}, ...rest} = props
    // console.log('props');
    // console.log(props);
    // console.log(listOfData);
    let current = -Math.round(cursor) % listOfData.length
    while (current < 0) {
      current += listOfData.length
    }
    // Put current card at center
    const translateX = (cursor - cardPadCount) * cardSize + (carouselWidth - cardSize) / 2
    const perspective = cardSize + 'px';
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
  // const Container = touchWithMouseHOC(CarouselContainer)

  onDragStart(args){
    console.log('onDragStart');
  }

  render(){

    return <div>
      <TouchCarousel
        component={Container}
        cardSize={cardSize}
        cardCount={listOfData.length}
        autoplay={enableAutoplay ? 2e3 : false}
        renderCard={this.renderCard}
        loop={enableLoop}
        onRest={index => console.log(`rest at index ${index}`)}
        onDragStart={this.onDragStart}
        onDragEnd={() => console.log('dragEnd')}
        onDragCancel={() => console.log('dragCancel')}
      />
    </div>;
  }

}

export default PortfolioCarousel;