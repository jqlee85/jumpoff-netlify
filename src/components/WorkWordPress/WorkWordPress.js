import React, {Component} from 'react';
import styles from './WorkWordPress.css';
import LoadingShape from '../LoadingShape/LoadingShape';
import WorkHeader from '../WorkHeader/WorkHeader';
import ScrollDown from '../ScrollDown/ScrollDown';
import NotFound from '../NotFound/NotFound';


class WorkWordPress extends Component {

  componentDidMount(){
    this.props.checkHeaderSolid(true);
  }

  componentWillUnmount(){
    this.props.checkHeaderSolid(false);
  }
    
  render() {
    return <section className="jo-work-page">
      <WorkHeader title="WordPress Development" number=".02" bgImage={false} overlayColor={'rgba(20,20,20,.4)'} />
      <div className="jo-work-content">
        <div className="jo-content">
          <ScrollDown/>
          <LoadingShape/>
        </div>
      </div>
    </section>
  }
    
  
}

export default WorkWordPress;

