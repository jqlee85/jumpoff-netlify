import React, {Component} from 'react';
import HomeLanding from '../HomeLanding/HomeLanding';
import HomeSectionTwo from '../HomeSectionTwo/HomeSectionTwo';
import HomeSectionThree from '../HomeSectionThree/HomeSectionThree';
import HomeSectionFour from '../HomeSectionFour/HomeSectionFour';
import HomeSectionFive from '../HomeSectionFive/HomeSectionFive';
import { Helmet } from 'react-helmet';
import metaImage from '../../public/images/jumpoff-what-we-do-bg-colored-shapes-multi.jpg';

import  './Home.css';

class Home extends Component {

  componentDidMount(){
  }

  componentWillUnmount(){
  }
  
  render(){
    return <div id="home" className="home">      
      <Helmet>
        <meta name="image" content={metaImage} />
        <meta property="og:image" content={metaImage} />
      </Helmet>
      <HomeLanding/>
      <HomeSectionTwo/>
      <HomeSectionThree/>
      <HomeSectionFour/>
      <HomeSectionFive/>
    </div>
  }

}

export default Home;