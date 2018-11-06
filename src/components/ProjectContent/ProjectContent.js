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

    return <article id={postID} data-post-id={id} className="jo-post">
      { featuredImage && 
        <div className="jo-project-header" style={headerStyles}>
          <div className="jo-project-header-overlay"></div>
          <h1>{title}</h1>
        </div> 
      }
      { !this.props.single && 
        <Link to={postLink}><h1 className="jo-post-title" dangerouslySetInnerHTML={{ __html: title }}/></Link>
      }
      { this.props.single && <h1 className="jo-post-title" dangerouslySetInnerHTML={{ __html: title }}/> }
      <Helmet>
        <title>JumpOff - {title}</title>
        <meta name="title" content={title} />
        <meta name="description" content="JumpOff is a web design and development company building unique, modern web experiences using WordPress and React." />
        <meta name="url" content={postLink} />
        { featuredImage && <meta name="image" content={featuredImage.sourceUrl} /> }
      </Helmet>
      <SiteMockup device="" image={featuredImage.sourceUrl}/>
      <div className="jo-post-content-wrapper" dangerouslySetInnerHTML={{ __html: content }} />
      
    </article>
  }
}

export default ProjectContent;

