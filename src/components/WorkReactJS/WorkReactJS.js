import React, {Component} from 'react';
import styles from './WorkReactJS.css';
import LoadingShape from '../LoadingShape/LoadingShape';
import WorkHeader from '../WorkHeader/WorkHeader';
import ScrollDown from '../ScrollDown/ScrollDown';
import NotFound from '../NotFound/NotFound';


const WorkReactJS = () => {

    return <section className="jo-work-page">
      <WorkHeader title="React.js Development" number=".01" bgImage={false} overlayColor={'rgba(20,20,20,.4)'} />
      <div className="jo-work-content">
        <div className="jo-content">
          <ScrollDown/>
          <LoadingShape/>
        </div>
      </div>
    </section>
  
}

export default WorkReactJS;

