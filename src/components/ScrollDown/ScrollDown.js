import React, {Component} from 'react';
import styles from './ScrollDown.css';

class ScrollDown extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount = () => {

  }

  render(){
    
    let size = this.props.size || 60;
    let style = {
      width: size,
      height: size
    }
    let color = this.props.color || 'black';
    // let hoverColor = this.props.hoverColor || 'white';
    let href = this.props.href;

    return <a className="jo-scroll-down" href={href} onClick={this.props.onClick}>
      <div className="jo-scroll-down-center">
        <svg width="40" height="45" viewBox="0 0 50 130">
          <rect id="jo-scroll-down" x="0" y="5" rx="30" ry="30" width="60" height="120" stroke={color} fill="none" strokeWidth="2"></rect>
          <circle id="jo-scroll-down-circle-shape" cx="30" cy="32" r="8" fill={color}></circle>
        </svg>
        <p>SCROLL</p>
      </div> 
    </a>;
  }
}

export default ScrollDown;
