import React, {Component} from 'react';
import styles from './PortfolioItem.css';
import TransformBox from '../TransformBox/TransformBox';
import LinkButton from '../LinkButton/LinkButton';

class PortfolioItem extends Component {

  constructor(props) {
    super(props);
  }

  render(){
    
    let slug = this.props.post.slug;
    let projectLink = '/portfolio/' + slug;
    let description = this.props.post.projectDescription;
    let technologies = this.props.post.technologies;
    let itemNumber = this.props.itemNumber || '';
    let classNames = this.props.classNames ? this.props.classNames : '';
    if ( this.props.mode != 'transform' ) classNames += ' jo-portfolio-item-normal ';
    let normalImageStyle;
    if (this.props.mode == 'transform') { classNames += ' home-portfolio-block home-portfolio-block-' + itemNumber; }
    else { 
      classNames += 'normal-portfolio-block normal-portfolio-block-' + itemNumber;
      normalImageStyle = {
        backgroundImage: 'url('+this.props.post.featuredImage.sourceUrl+')'
      }
    }
    return <div className={classNames}>
      <div className="jo-portfolio-item">
        {this.props.mode == 'transform' && <TransformBox project={this.props.post}/>}
        {this.props.mode !== 'transform' && 
          <div className="normal-portfolio-background-image" style={normalImageStyle}>
            <div className="normal-portfolio-hover-content">
              <h1>{this.props.post.title}</h1>
              <p className="jo-portfolio-item-technologies" dangerouslySetInnerHTML={{ __html: technologies }}/>
              <p className="jo-portfolio-item-description" dangerouslySetInnerHTML={{ __html: description }}/>
              <LinkButton to={projectLink} transparent={true} color="white" text="See More" classNames="small-screen-responsive"/>
            </div>
          </div>
        }
      </div>
    </div>;
  }
}

export default PortfolioItem;

