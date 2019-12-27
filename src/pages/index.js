import React from 'react'
import Seo from '../components/Seo'
import HomeLanding from '../components/HomeLanding'
import HomeSectionTwo from '../components/HomeSectionTwo'
import HomeSectionThree from '../components/HomeSectionThree'
import HomeSectionFour from '../components/HomeSectionFour'
import HomeSectionFive from '../components/HomeSectionFive'

import './index.scss'

const Home = ({data}) => {

  return <>
    <Seo title="Home" />
    <div id='home' className='home'>      
      <HomeLanding/>
      <HomeSectionTwo/>
      <HomeSectionThree data={data.latestProjects}/>
      <HomeSectionFour data={data.latestPosts}/>
      <HomeSectionFive/> 
    </div>
  </>
}

export default Home

export const homePageQuery = graphql`

  query homePageQuery {
    latestProjects: wpgraphql {
      projects(first: 4, where: {orderby: {field: MENU_ORDER, order: DESC}}) {
        edges {
          node {
            id
            title
            slug
            date
            projectDescription
            client
            technologies
            featuredImage {
              sourceUrl
            }
            categoryProjects {
              edges {
                node {
                  id
                  name
                }
              }
            }
          }
        }
      }
    }
    latestPosts: wpgraphql {
      posts(
        first: 3, 
        where: {
          orderby: {field: DATE, order: DESC},
          categoryId: 188
        }
      ) {
        edges {
          node {
            id
            title
            slug
            date
            featuredImage {
              sourceUrl
            }
          }
        }
      }
    }
  }

`