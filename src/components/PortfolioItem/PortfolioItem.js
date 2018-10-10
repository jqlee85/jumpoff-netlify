import React, {Component} from 'react';
import styles from './PortfolioItem.css';
import TransformBox from '../TransformBox/TransformBox';

export class PortfolioItem extends Component {

  constructor(props) {
    super(props);
  }

  render(){
    
    let classNames = this.props.classNames ? this.props.classNames : '';
    classNames += ' jo-portfolio-item';

    return <div className={classNames}>
      <TransformBox/>
    </div>;
  }
}

export default PortfolioItem;

