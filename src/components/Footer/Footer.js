import React, {Component} from 'react'
import styles from './Footer.css';
import LazyLoad from 'react-lazyload';
import LogoTitle from '../LogoTitle/LogoTitle';
import ContactInfo from '../ContactInfo/ContactInfo';
import MapContainer from '../MapContainer/MapContainer';
import SocialIcons from '../SocialIcons/SocialIcons';

class Footer extends Component {

  render(){
    return <footer id="footer">
      <div className="jo-map-wrapper">
        <LazyLoad offset={900}>
          <MapContainer mapStyle={'light'}/>    
        </LazyLoad>
      </div>
      <ContactInfo />
      <div className="jo-logo-title-section">  
        <LogoTitle />
      </div>
    </footer>
  }

}

export default Footer
