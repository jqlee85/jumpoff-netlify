import React from 'react'
import SmallListPost from './SmallListPost'
import styled from 'styled-components'
import {screen} from '../styles/mediaQueries'

const SmallListPosts = ({posts}) => {
    return <StyledSmallListPosts className="jo-small-list-posts-container">
      {posts.map(({ node }) => (
        <SmallListPost post={node} key={`${node.id}`} />
      ))}
    </StyledSmallListPosts>
}

export default SmallListPosts;

const StyledSmallListPosts = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${screen.lg} {
    flex-direction: row;
  }
`