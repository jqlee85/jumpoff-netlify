import React, {Component} from 'react';
import styles from './PortfolioItem.css';
import TransformBox from '../TransformBox/TransformBox';

class PortfolioItem extends Component {

  constructor(props) {
    super(props);
  }

  render(){
    // console.log(this.props);
    let itemNumber = this.props.itemNumber || '';
    let classNames = this.props.classNames ? this.props.classNames : '';
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
          <div className="normal-portfolio-background-image" style={normalImageStyle}>{this.props.post.title}</div>
        }
      </div>
    </div>;
  }
}

export default PortfolioItem;

