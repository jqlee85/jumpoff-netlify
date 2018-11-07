import React, {Component} from 'react';
import styles from './WorkHeader.css';
import LoadingShape from '../LoadingShape/LoadingShape';
import NotFound from '../NotFound/NotFound';
import theBackgroundImage from '../../public/images/jumpoff-what-we-do-bg-colored-shapes-multi.jpg';


class WorkHeader extends Component {

  constructor(props) {
    super(props);
  }
    
  render() {
    
    
    let bgImage = this.props.bgImage ? this.props.bgImage : theBackgroundImage;
    let title = this.props.title ? this.props.title : 'Work Title';
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
        <h3>.01</h3><h1 className="jo-work-header-title">{this.props.title}</h1>
      </div>
    </div>;
  } 
  
}

export default WorkHeader;

