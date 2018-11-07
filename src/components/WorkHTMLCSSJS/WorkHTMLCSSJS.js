import React, {Component} from 'react';
import styles from './WorkHTMLCSSJS.css';
import LoadingShape from '../LoadingShape/LoadingShape';
import WorkHeader from '../WorkHeader/WorkHeader';
import NotFound from '../NotFound/NotFound';


const WorkHTMLCSSJS = () => {

    return <section className="jo-work-page">
      <WorkHeader title="HTML/CSS/JS Development" bgImage={false} overlayColor={'rgba(20,20,20,.4)'} />
      <div className="jo-content">
      </div>
    </section>
  
}

export default WorkHTMLCSSJS;

