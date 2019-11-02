/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import Nav from "./Nav/Nav"
import "./layout.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Nav 
        // menuToggled={this.state.navToggled} 
        // toggleNav={this.toggleAppNav}
        // navFront={this.state.navFrontToggled}
        // navInitialized={this.state.navInitialized}
      />
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
      <Footer/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
