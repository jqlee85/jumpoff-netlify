import React, {Component} from 'react';
import styles from './HomeSectionThree.css';
import WordPressLogo from '../WordPressLogo/WordPressLogo';

class HomeSectionThree extends Component {
  
  constructor(props){
    super(props);
  }

  render(){
    return <section className="jo-section home-section" id="home-section-three">
      <div className="home-section-graphics">
        <WordPressLogo color="#191919"/>
      </div>
      <div className="home-section-content">
          <h2>WordPress Development</h2>
          <p>Whether you need a simple blog or an E-Commerce site, a customized WordPress site may be the perfect solution. As the most popular CMS in the world, WordPress has been battle-tested and has an un-paralleled ecosystem of plugins and themes. We have more than seven years of experience building WordPress sites, premium themes and custom plugins to help businesses achieve their goals.</p>
          <a>Learn More</a>
      </div>
    </section>
  }

}

export default HomeSectionThree;
