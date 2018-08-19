import React, {Component} from 'react'
import styles from './LoadingIcons.css';
import CameraIcon from '../CameraIcon/CameraIcon';

class LoadingIcons extends Component {

  render(){
    return <div className="prompt-types jo-chasing-icons">
      <button className="prompt-type-button jo-chasing-icon jo-icon-1" onClick={this.textPrompt}><span>TEXT</span></button>
      <button className="prompt-type-button prompt-image-button jo-chasing-icon jo-icon-2" onClick={this.imagePrompt}><CameraIcon iconWidth="30px" color="rgba(0,0,0,.7)" hoverColor="#3ae0b1" /></button>
    </div>
  }

}

export default LoadingIcons
