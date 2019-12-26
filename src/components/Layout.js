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
import styled from 'styled-components'
import GlobalStyles from '../styles/GlobalStyles'
import '../fonts/fonts.scss'

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
    <StyledWrapper>
      <Header siteTitle={data.site.siteMetadata.title}/>
      <main>{children}</main>
      <Footer/>
    </StyledWrapper> 
  </>
    
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

const StyledWrapper = styled.div`
  height: auto;
  min-height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;

  main {
    height: auto;
  }

  main, footer {
    width: 100%;
  }
`

export default Layout

