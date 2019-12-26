import React from 'react'
import { Link } from 'gatsby'
import Seo from '../components/Seo'
import HomeLanding from '../components/HomeLanding'
import HomeSectionTwo from '../components/HomeSectionTwo'
import HomeSectionThree from '../components/HomeSectionThree'
// import HomeSectionFour from '../sections/HomeSectionFour/HomeSectionFour'
import HomeSectionFive from '../sections/HomeSectionFive/HomeSectionFive'

import './index.scss'

const Home = () => (
  <>
    <Seo title="Home" />
    <div id='home' className='home'>      
      <HomeLanding/>
      <HomeSectionTwo/>
      <HomeSectionThree/>
      {/* <HomeSectionFour/> */}
      <HomeSectionFive/> 
    </div>
  </>
)

export default Home

