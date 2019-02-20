import React, {Component} from 'react'
import  './SiteMockup.css';
import {ShapeTwo,ShapeThree} from '../Shapes/Shapes';

export class SiteMockup extends Component {
  
  render() {
    
    let device = (this.props.device !== 'mobile') ? 'desktop' : 'mobile';
    let classNames = 'jo-site-mockup jo-mockup-' + device;

    return (  
      <div className={classNames}>
        {device == 'desktop' && 
          <svg className="jo-site-mockup-header" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 801 23">
            <path fill="#e1e1e1" d="M801 23H0V4c0-2.8 3.3-4 6.1-4H797c2.8 0 4.1 1.2 4.1 4v19z"></path><circle opacity=".71" fill="#E74C3C" cx="14.1" cy="11.5" r="4.7"></circle><circle opacity=".71" fill="#F1C40F" cx="29.5" cy="11.5" r="4.7"></circle><circle opacity=".71" fill="#2ECC71" cx="44.9" cy="11.5" r="4.7"></circle>
          </svg>
        }
        <div className="jo-site-mockup-container">
          {device == 'desktop' && <ShapeThree/>}
          {device == 'mobile' && <ShapeTwo/>}
          <img src={this.props.image}/>
          {/* <img /> */}
        </div>
      </div>
    );
  }
}

export default SiteMockup;