import React, {Component} from 'react'
import {Link} from 'gatsby'
import LinkButton from './LinkButton'
import {getPrettyDate} from '../lib/utilities'
import styled from 'styled-components'
import {screen} from '../styles/mediaQueries'

const SmallListPost = ({post}) => {

  const {
    id,
    slug,
    title,
    date,
    featuredImage
  } = post

  const postID = 'jo-post-id_' + id;
  const prettyDate = getPrettyDate(date);
  const postLink = '/blog/' + slug;
  
  return <StyledSmallListPost id={postID} data-post-id={id} className="jo-list-post-small" >
    <img className="jo-list-post-featured-img" src={featuredImage.sourceUrl} alt={title}/>
    <div className="jo-list-post-small-flex-container">
      <div className="jo-list-post-meta">
        <div className="jo-list-post-small-date">
          <p className="black-box-text" dangerouslySetInnerHTML={{ __html: prettyDate }}/>
        </div>
      </div>
      <div className="jo-list-post-title">
          <Link to={postLink}>
            <h1 className="black-box-text" dangerouslySetInnerHTML={{ __html: title }}/>
          </Link>
      </div>
    </div>
  </StyledSmallListPost>
  
}

export default SmallListPost;

const StyledSmallListPost = styled.article`
  display: block;
  position: relative;
  width: 100%;
  height: auto;
  box-sizing: border-box;
  margin: 30px auto;
  background-size: cover;
  background-position: center;
  box-shadow: -.5rem .5rem 3.6rem 0.6rem rgba(0,0,0,.12);

  @media ${screen.lg} {
    width: 30%;
  }

  .jo-list-post-featured-img {
    display: block;
    width: 100%;
    height: auto;
    position: relative;
    padding: 0px;
    margin: 0px;
  }
  .jo-list-post-small-flex-container {
    
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    padding: 0px;
    display: flex;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
  }
  .jo-list-post-meta {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: flex-end;
  }
  .jo-list-post-title {
    text-align: left;
    padding-top: 15%;
    padding-right: 10px;
    box-sizing: border-box;
    
    @media ${screen.lg} {
      margin-bottom: -10px;
    }
  }
  .jo-list-post-read-more {
    text-align: right;
    height: auto;
    display: flex;
    justify-content: flex-end;
    
    .jo-link-button-wrapper {
      position: relative;
      bottom: -10px;
      margin-right: -12px;
      z-index: 30;
    }
  }
  .jo-link-button-wrapper{
    position: relative;
    left:0;
    /* width: auto; */
  }
  h1 {
    
    text-transform: uppercase; 

    font-size: 1.5rem;

    @media ${screen.sm} {
      font-size: 2.8rem;
    }

    @media ${screen.lg} {
      font-size: 1.5rem;
    }
  }
  
  .jo-list-post-small-date {
    margin-right: 0px;
    margin-top: 28px;

    @media ${screen.lg} {
      margin-top: 18px;  
    }

    p {
      font-size: 1em;
    }

    .black-box-text {
      padding: 8px 0px;
      box-shadow: 12px 0 0 #191919, -12px 0 0 #191919;
    }
  }

`