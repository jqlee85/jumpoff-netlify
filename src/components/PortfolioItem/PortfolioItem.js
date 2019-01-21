import React, {Component} from 'react';
import styles from './PortfolioItem.css';
import TransformBox from '../TransformBox/TransformBox';
import LinkButton from '../LinkButton/LinkButton';
import {Link} from 'react-router-dom';

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
    
    let slug = this.props.post.slug;
    let projectLink = '/portfolio/' + slug;
    let description = this.props.post.projectDescription;
    let projectColor = this.props.post.projectColor;
    let projectColor2 = this.props.post.projectColor2;
    let backgroundImage = this.props.post.portfolioImage ? this.props.post.portfolioImage : this.props.post.featuredImage.sourceUrl;
    let itemNumber = this.props.itemNumber || '';
    let classNames = this.props.classNames ? this.props.classNames : '';
    if ( this.props.mode != 'transform' ) classNames += ' jo-portfolio-item-normal ';
    if (this.state.showContent) classNames += ' hovered ';
    let normalImageStyle;
    let projectHoverStyle = {
      background: projectColor,
      background: '-moz-linear-gradient(20deg, ' + projectColor2 + ' 1%, ' + projectColor + ' 100%)',
      background: '-webkit-linear-gradient(20deg, ' + projectColor2 + ' 1%,' + projectColor + ' 100%)',
      background: 'linear-gradient(20deg, ' + projectColor2 + ' 1%,' + projectColor + ' 100%)',
      filter: "progid:DXImageTransform.Microsoft.gradient( startColorstr='" + projectColor2 + "', endColorstr='" + projectColor + "',GradientType=1 )"
    }
    if (this.props.mode == 'transform') { classNames += ' home-portfolio-block home-portfolio-block-' + itemNumber; }
    else { 
      classNames += 'normal-portfolio-block normal-portfolio-block-' + itemNumber;
      normalImageStyle = { backgroundImage: 'url('+backgroundImage+')' }
    }

    return <div className={classNames}>
      <div className="jo-portfolio-item">
        {this.props.mode == 'transform' && <TransformBox project={this.props.post}/>}
        {this.props.mode !== 'transform' && 
          <div className="normal-portfolio-content-wrapper" style={normalImageStyle} onClick={this.showContent}>
            <div className="normal-portfolio-hover-content" style={projectHoverStyle}>
              <Link className="normal-portfolio-title" to={projectLink}><h1>{this.props.post.title}</h1></Link>
              <Link to={projectLink}><p className="jo-portfolio-item-description" dangerouslySetInnerHTML={{ __html: description }}/></Link>
            </div>
          </div>
        }
      </div>
    </div>;
  }
}

export default PortfolioItem;

