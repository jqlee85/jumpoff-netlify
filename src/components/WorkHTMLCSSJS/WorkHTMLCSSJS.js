import React, {Component} from 'react';
import styles from './WorkHTMLCSSJS.css';
import LoadingShape from '../LoadingShape/LoadingShape';
import WorkHeader from '../WorkHeader/WorkHeader';


class WorkHTMLCSSJS extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.checkHeaderSolid(true);
  }

  componentWillUnmount(){
    this.props.checkHeaderSolid(false);
  }

  render() {

    return <section className="jo-work-page">
      <WorkHeader title="HTML/CSS/JS Development" number=".01" bgImage={false} overlayColor={'rgba(20,20,20,.4)'} />
      <div className="jo-work-content">
        <div className="jo-content">
          <LoadingShape/>
        </div>
      </div>
    </section>;
  }
    
  
}

export default WorkHTMLCSSJS;

