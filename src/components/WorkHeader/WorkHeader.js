import React, {Component} from 'react';
import  './WorkHeader.css';
import theBackgroundImage from '../../public/images/jumpoff-what-we-do-bg-colored-shapes-multi.jpg';


class WorkHeader extends Component {

  
    
  render() {
    
    
    let bgImage = this.props.bgImage ? this.props.bgImage : theBackgroundImage;
    let number = this.props.number ? this.props.number : false;
    let overlayColor = this.props.overlayColor ? this.props.overlayColor : 'rgba(20, 20, 20,.5)';

    let headerStyles = {
      backgroundImage: 'url(' + bgImage + ')',
    }

    let overlayStyles = {
      background: overlayColor
    }

    return <div className="jo-work-header" style={headerStyles}>
      <div className="jo-work-header-overlay" style={overlayStyles}></div>
      <div className="jo-work-header-content">
        {number && <h3>{number}</h3>}<h1 className="jo-work-header-title">{this.props.title}</h1>
      </div>
    </div>;
  } 
  
}

export default WorkHeader;

