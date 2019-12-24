/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import Header from './Header'
import Footer from './Footer'
import Nav from './Nav'
import {AppContext} from '../context/AppState'
import useScrollPosition from '../hooks/useScrollPosition'
import GlobalStyles from '../styles/GlobalStyles'

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

  return <>
        <GlobalStyles/>
        <Nav/>
        <Header siteTitle={data.site.siteMetadata.title}/>
        <main>{children}</main>
        <Footer/>
      </>
    
  
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

