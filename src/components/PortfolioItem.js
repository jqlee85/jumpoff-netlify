import React, {Component} from 'react';
import TransformBox from './TransformBox';
import {Link} from 'gatsby';
import styled from 'styled-components'
import {screen} from '../styles/mediaQueries'

class PortfolioItem extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      showContent: false,
    };  
  }

  showContent = () => {
    this.setState(prevState => ({
      showContent: true
    }));
  }

  render(){
    
    console.log('post',this.props.post)

    let slug = this.props.post.slug
    let projectLink = '/work/' + slug
    let description = this.props.post.projectDescription
    let projectColor = this.props.post.projectColor
    let projectColor2 = this.props.post.projectColor2
    let backgroundImage = this.props.post.portfolioImage ? this.props.post.portfolioImage : this.props.post.featuredImage.sourceUrl
    let itemNumber = this.props.itemNumber || ''
    let classNames = this.props.classNames ? this.props.classNames : ''
    if ( this.props.mode !== 'transform' ) classNames += ' jo-portfolio-item-normal '
    if (this.state.showContent) classNames += ' hovered '
    let normalImageStyle
    let projectHoverStyle = {
      background: projectColor,
      background: '-moz-linear-gradient(20deg, ' + projectColor2 + ' 1%, ' + projectColor + ' 100%)',
      background: '-webkit-linear-gradient(20deg, ' + projectColor2 + ' 1%,' + projectColor + ' 100%)',
      background: 'linear-gradient(20deg, ' + projectColor2 + ' 1%,' + projectColor + ' 100%)',
      filter: "progid:DXImageTransform.Microsoft.gradient( startColorstr='" + projectColor2 + "', endColorstr='" + projectColor + "',GradientType=1 )"
    }
    if (this.props.mode ===  'transform') { classNames += ' home-portfolio-block home-portfolio-block-' + itemNumber; }
    else { 
      classNames += 'normal-portfolio-block normal-portfolio-block-' + itemNumber
      normalImageStyle = { backgroundImage: 'url('+backgroundImage+')' }
    }

    return <StyledPortfolioItem className={classNames}>
      <div className="jo-portfolio-item">
        {this.props.mode ===  'transform' && <TransformBox project={this.props.post}/>}
        {this.props.mode !== 'transform' && 
          <div className="normal-portfolio-content-wrapper" style={normalImageStyle} onClick={this.showContent}>
            <div className="normal-portfolio-hover-content" style={projectHoverStyle}>
              <Link className="normal-portfolio-title" to={projectLink}><h1>{this.props.post.title}</h1></Link>
              <Link to={projectLink}><p className="jo-portfolio-item-description" dangerouslySetInnerHTML={{ __html: description }}/></Link>
            </div>
            <div className="clickblocker"></div>
          </div>
        }
      </div>
    </StyledPortfolioItem>;
  }
}

export default PortfolioItem;

const StyledPortfolioItem = styled.div`
  
  .jo-portfolio-item {
    position: relative;
    display: inline-block; 
    width: 100%;
    height: 100%;
    padding: 0px; 
  }
    
  .normal-portfolio-content-wrapper {
    position:relative;
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100%;
    box-shadow: .75rem 1.25rem 2.5rem 0.35rem rgba(0,0,0,.08);
    overflow: hidden;
  }
  .jo-portfolio-item-normal .normal-portfolio-hover-content {
    position: relative;
    visibility: hidden;
    opacity: 0;
    height: 101%;
    width: 101%;
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: opacity .3s ease-in-out;
    -webkit-transition: opacity .3s ease-in-out;
    background: #ef6085; /* Old browsers */
    background: -moz-linear-gradient(45deg, #ef6085 1%, #f89c44 48%, #f0ba45 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(45deg, #ef6085 1%,#f89c44 48%,#f0ba45 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(45deg, #ef6085 1%,#f89c44 48%,#f0ba45 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ef6085', endColorstr='#f0ba45',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
    cursor: pointer;
  }
  .jo-portfolio-item-normal .normal-portfolio-hover-content a {
    visibility: hidden;
    position: relative;
    transition: visibility .5s ease-in-out;
    margin-left: -9999px;
  }
  .normal-portfolio-hover-content h1, .normal-portfolio-hover-content p {
    color: #fff;
  }
  .normal-portfolio-hover-content h1 {
    font-size: 3rem;
    margin-bottom: .8rem;
    text-transform: uppercase;
  }
  .jo-portfolio-item-normal:hover .normal-portfolio-hover-content, .jo-portfolio-item-normal.hovered .normal-portfolio-hover-content {
    visibility: visible;
    opacity: 1;
  }
  .jo-portfolio-item-normal:hover .normal-portfolio-hover-content a, .jo-portfolio-item-normal.hovered .normal-portfolio-hover-content a{
    visibility: visible;
    margin-left: auto;
    margin-right: auto;
  }
  .normal-portfolio-hover-content a:before {
    content: "";
    position: absolute;
    width: 90%;
    left: 5%;
    height: 2px;
    bottom: 5px;
    background-color: #fff;
    visibility: hidden;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transition: all 0.3s ease-in-out 0s;
    transition: all 0.3s ease-in-out 0s;
  }
  .normal-portfolio-hover-content a.normal-portfolio-title:hover:before, .normal-portfolio-hover-content a.normal-portfolio-title:focus:before, .normal-portfolio-hover-content a.normal-portfolio-title:active:before {
    visibility: visible;
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }
  .normal-portfolio-hover-content p {
    font-size: 1.5rem;
  }

  @media screen and (max-width: 600px) {
    .normal-portfolio-hover-content h1 {
      font-size: 2rem;
      margin-bottom: .4rem;
    }
    .normal-portfolio-hover-content p {
      font-size: 1rem;
    }
  }
  @media screen and (min-width: 751px) and (max-width: 1200px) {
    .normal-portfolio-hover-content h1 {
      font-size: 2rem;
      margin-bottom: .4rem;
    }
    .normal-portfolio-hover-content p {
      font-size: 1rem;
    }
  }
  @media screen and (min-width:1201px) {
    .normal-portfolio-hover-content h1 {
      font-size: 2.5rem;
      margin-bottom: .6rem;
    }
    .normal-portfolio-hover-content p {
      font-size: 1.2rem;
    }
  }

`