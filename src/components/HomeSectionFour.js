import React, {Component} from 'react'
import LinkButton from './LinkButton';
import SmallListPosts from './SmallListPosts';
import styled from 'styled-components'
import {screen} from '../styles/mediaQueries'


const HomeSectionFour = ({data}) => {
  return <StyledHomeSectionFour className="" id="home-section-four">
    <div className="home-blog-section">     
      {data.posts &&
        <div>
          <h2>Latest Posts</h2>
          <SmallListPosts posts={data.posts.edges || []}/>
            <div className="jo-more-posts-wrapper">
              {<LinkButton text="More Posts" to="/blog" />}
            </div>
        </div>
      }
    </div>
  </StyledHomeSectionFour>
}

export default HomeSectionFour

const StyledHomeSectionFour = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 500px;
  .home-blog-section {
    box-sizing: border-box;
    width: 95%; 
    max-width: 1600px;
    padding: 20px;
  }
  .home-blog-section h2 {
    font-size: 3.2em;
    text-align: center;
    @media ${screen.sm} {
      text-align: left;
    }
  }
`