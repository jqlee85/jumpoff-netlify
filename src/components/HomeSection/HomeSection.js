import React, {Component} from 'react';
import styles from './HomeSection.css';

class HomeSection extends Component {
  
  constructor(props){
    super(props);
  }

  render(){
    
    let sectionStyle = this.props.sectionData.backgroundImage ? {
      backgroundImage: `url(${this.props.sectionData.backgroundImage})`
    } : {};

    let idName = 'home-content-wrapper_'+this.props.sectionData.number;

    return <section className="jo-section home-section" id={'home-section_'+this.props.sectionData.number} style={sectionStyle}>
      <div className="home-section-content">
        <div className="content-wrapper" id={idName}>
          <h2>{this.props.sectionData.title}</h2>
          <p>{this.props.sectionData.content}</p>
          <a href={this.props.sectionData.link}>Learn More</a>
        </div>
      </div>
    </section>
  }

}

export default HomeSection
