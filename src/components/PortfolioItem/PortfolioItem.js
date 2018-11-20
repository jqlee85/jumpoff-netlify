import React, {Component} from 'react';
import styles from './PortfolioItem.css';
import TransformBox from '../TransformBox/TransformBox';

class PortfolioItem extends Component {

  constructor(props) {
    super(props);
  }

  render(){
    
    let itemNumber = this.props.itemNumber || '';
    let classNames = this.props.classNames ? this.props.classNames : '';
    classNames += '  home-portfolio-block home-portfolio-block-' + itemNumber;

    return <div className={classNames}>
      {/* <div className="jo-home-portfolio-item-wrapper"> */}
        <div className="jo-home-portfolio-item">
          <TransformBox project={this.props.post}/>
        </div>
      {/* </div> */}
    </div>;
  }
}

export default PortfolioItem;

