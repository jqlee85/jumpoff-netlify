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
   
  renderCard(index, modIndex, cursor) {
    const item = listOfData[modIndex]
    console.log('item');
    console.log(item);
    // console.log(item.node.title);
    // console.log(item.node.projectDescription);
    let cardStyles = {
      backgroundImage: 'url('+item.node.featuredImage.sourceUrl+')'
    }
    let itemLink = '/portfolio/' + item.node.slug;
    // render the item
    return (
      <div
        key={index}
        className='carousel-card'
        onClick={() => console.log(`clicked card ${1 + modIndex}`)}
      >
        
          <div className='carousel-card-inner' style={cardStyles}>
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

  render(){
    
    
    // console.log('listOfData');
    // console.log(listOfData);
    
    return <div>
      <TouchCarousel
        component={Container}
        cardSize={cardSize}
        cardCount={listOfData.length}
        autoplay={enableAutoplay ? 2e3 : false}
        renderCard={this.renderCard}
        loop={enableLoop}
        // onRest={index => console.log(`rest at index ${index}`)}
        // onDragStart={() => console.log('dragStart')}
        // onDragEnd={() => console.log('dragEnd')}
        // onDragCancel={() => console.log('dragCancel')}
      />
    </div>;
  }

}

export default PortfolioCarousel;