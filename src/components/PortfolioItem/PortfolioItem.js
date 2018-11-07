import React, {Component} from 'react';
import styles from './PortfolioItem.css';
import TransformBox from '../TransformBox/TransformBox';

class PortfolioItem extends Component {

  constructor(props) {
    super(props);
  }

  render(){
    

    let classNames = this.props.classNames ? this.props.classNames : '';
    classNames += ' jo-home-portfolio-item';

    return <div className={classNames}>
      <TransformBox project={this.props.post}/>
    </div>;
  }
}

export default PortfolioItem;

