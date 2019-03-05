import React, {Component} from 'react';
import HomeLanding from '../HomeLanding/HomeLanding';
import HomeSectionTwo from '../HomeSectionTwo/HomeSectionTwo';
import HomeSectionThree from '../HomeSectionThree/HomeSectionThree';
import HomeSectionFour from '../HomeSectionFour/HomeSectionFour';
import HomeSectionFive from '../HomeSectionFive/HomeSectionFive';

import  './Home.css';

class Home extends Component {

  componentDidMount(){
  }

  componentWillUnmount(){
  }
  
  render(){
    return <div id="home" className="home">      
      <HomeLanding/>
      <HomeSectionTwo/>
      <HomeSectionThree/>
      <HomeSectionFour/>
      <HomeSectionFive/>
    </div>
  }

}

export default Home;