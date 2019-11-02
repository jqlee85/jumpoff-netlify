import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HomeLanding from "../sections/HomeLanding/HomeLanding"
import HomeSectionTwo from "../sections/HomeSectionTwo/HomeSectionTwo"
// import HomeSectionThree from "../sections/HomeSectionThree/HomeSectionThree"
// import HomeSectionFour from "../sections/HomeSectionFour/HomeSectionFour"
import HomeSectionFive from "../sections/HomeSectionFive/HomeSectionFive"

import "./index.scss"

const Home = () => (
  <Layout>
    <SEO title="Home" />
    <div id="home" className="home">      
      <HomeLanding/>
      <HomeSectionTwo/>
      {/*<HomeSectionThree/>
      <HomeSectionFour/>*/}
      <HomeSectionFive/> 
    </div>
  </Layout>
)

export default Home

