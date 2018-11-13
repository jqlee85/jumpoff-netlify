import React, {Component} from 'react';
import styles from './ProjectContent.css';
import {Link} from 'react-router-dom';
import { Helmet } from 'react-helmet';
import SiteMockup from '../SiteMockup/SiteMockup';


class ProjectContent extends Component {

  render(){

    let id = this.props.post.id;
    let slug = this.props.post.slug;
    let postID = 'jo-post-id_' + id;
    let title = this.props.post.title;
    let content = this.props.post.content;
    let featuredImage = this.props.post.featuredImage;
    let postLink = '/portfolio/' + slug;
    
    let headerStyles = {
      backgroundImage: 'url('+featuredImage.sourceUrl+')'
    }

    return <article id={postID} data-post-id={id} className="jo-project-content">
      
        <Helmet>
          <title>JumpOff - {title}</title>
          <meta name="title" content={title} />
          <meta name="description" content="JumpOff is a web design and development company building unique, modern web experiences using WordPress and React." />
          <meta name="url" content={postLink} />
          { featuredImage && <meta name="image" content={featuredImage.sourceUrl} /> }
        </Helmet>
        
        <div className="jo-project-content-header">
          <div className="jo-project-mockups">
            <SiteMockup device="" image={featuredImage.sourceUrl}/>
            <SiteMockup device="mobile" image={featuredImage.sourceUrl}/>
          </div>
          <div className="jo-project-info">
            <h1 className="jo-project-title" dangerouslySetInnerHTML={{ __html: title }}/>
            <p>Lorem ipsum project description. This is a project description. This is the project description oh yeah yeah yeah. Whacka doodle.</p>
            <button>Visit Project</button>
          </div>
          
          
        </div>
        
        <div className="jo-post-content-wrapper" dangerouslySetInnerHTML={{ __html: content }} />
      
    </article>
  }
}

export default ProjectContent;

