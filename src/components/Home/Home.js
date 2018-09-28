import React, {Component} from 'react';
import HomeLanding from '../HomeLanding/HomeLanding';
import HomeSectionTwo from '../HomeSectionTwo/HomeSectionTwo';
import HomeSectionThree from '../HomeSectionThree/HomeSectionThree';
import styles from './Home.css';

class Home extends Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){
  }

  componentWillUnmount(){
  }
  
  render(){
    return <div id="home" className="home">      
      <HomeLanding/>
      <HomeSectionTwo/>
      <HomeSectionThree/>
    </div>
  }

}

export default Home;