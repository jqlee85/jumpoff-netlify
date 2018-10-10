import React, {Component} from 'react';
import styles from './HomeSectionThree.css';
import PortfolioItem from '../PortfolioItem/PortfolioItem';

class HomeSectionThree extends Component {
  
  constructor(props){
    super(props);
  }

  render(){
    return <section className="home-section flex-section full-height-section" id="home-section-three">
      <div className="home-section-content">
          <h2>Portfolio</h2>
          <PortfolioItem/>
      </div>
    </section>
  }

}

export default HomeSectionThree;
