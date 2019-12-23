import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import HomeLanding from "../sections/HomeLanding/HomeLanding"
import HomeSectionTwo from "../sections/HomeSectionTwo/HomeSectionTwo"
// import HomeSectionThree from "../sections/HomeSectionThree/HomeSectionThree"
// import HomeSectionFour from "../sections/HomeSectionFour/HomeSectionFour"
import HomeSectionFive from "../sections/HomeSectionFive/HomeSectionFive"

import "./index.scss"

const Home = () => (
  <>
    <SEO title="Home" />
    <div id="home" className="home">      
      <HomeLanding/>
      <HomeSectionTwo/>
      {/*<HomeSectionThree/>
      <HomeSectionFour/>*/}
      <HomeSectionFive/> 
    </div>
  </>
)

export default Home

