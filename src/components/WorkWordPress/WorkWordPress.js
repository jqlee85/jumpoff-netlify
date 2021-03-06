import React, {Component} from 'react';
import  './WorkWordPress.css';
import LoadingShape from '../LoadingShape/LoadingShape';
import WorkHeader from '../WorkHeader/WorkHeader';


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
          <LoadingShape/>
        </div>
      </div>
    </section>
  }
    
  
}

export default WorkWordPress;

