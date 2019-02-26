import React, {Component} from 'react';
import  './ProjectContent.css';
import { Helmet } from 'react-helmet';
import SiteMockup from '../SiteMockup/SiteMockup';
import LinkButton from '../LinkButton/LinkButton';

class ProjectContent extends Component {

  render(){

    let id = this.props.post.id;
    let slug = this.props.post.slug || '';
    let postID = 'jo-post-id_' + id;
    let title = this.props.post.title || '';
    let content = this.props.post.content || '';
    let hasContent = false;
    if ( content !== '' ) {  
      hasContent = true;
    }
    let description = this.props.post.projectDescription || false;
    let featuredImage = this.props.post.featuredImage || false;
    let postLink = '/portfolio/' + slug;
    let projectLink = this.props.post.projectLink || false;
    let client = this.props.post.client || false;
    let githubLink = this.props.post.githubLink || false;
    let technologies = this.props.post.technologies || false;
    let desktopScreenshot = this.props.post.desktopScreenshot || false;
    let mobileScreenshot = this.props.post.mobileScreenshot || false;

    let doubleRow;
    let projectInfoLinksClasses = 'jo-project-info-links';
    if (projectLink && githubLink && hasContent) {
      doubleRow = true;
      projectInfoLinksClasses += ' jo-project-info-links-double-row';
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
            {desktopScreenshot && <SiteMockup device="" image={desktopScreenshot}/>}
            {mobileScreenshot && <SiteMockup device="mobile" image={mobileScreenshot}/>}
          </div>
          <div className="jo-project-info">
            {title && <h1 className="jo-project-title" dangerouslySetInnerHTML={{ __html: title }}/>}
            {technologies && <p className="jo-project-technologies" dangerouslySetInnerHTML={{__html: technologies }}/>}
            {description && <h3 dangerouslySetInnerHTML={{__html: description }}/>}
            {client && <p className="jo-project-client"><span className="jo-project-client-text">Client: </span><span className="jo-project-client-name" dangerouslySetInnerHTML={{__html: client }}/></p>}
            <div className={projectInfoLinksClasses}>
              {doubleRow &&
                <div>
                  {githubLink && <LinkButton to={githubLink} linkType="external" transparent={true} classNames='jo-project-visit-github' icon="github" text="GitHub"/>}
                  {projectLink && <LinkButton to={projectLink} linkType="external" transparent={true} classNames='jo-project-visit-project' text="Visit Project"/>}      
                </div>
              }
              {doubleRow && 
                <div>
                  {hasContent && <LinkButton to="#learn-more" linkType="anchor" classNames='jo-project-learn-more'/>}          
                </div>
              }
              {!doubleRow && githubLink && <LinkButton to={githubLink} linkType="external" transparent={true} classNames='jo-project-visit-github' icon="github" text="GitHub"/>}
              {!doubleRow && projectLink && <LinkButton to={projectLink} linkType="external" transparent={true} classNames='jo-project-visit-project' text="Visit Project"/>}
              {!doubleRow && hasContent && <LinkButton to="#learn-more" linkType="anchor" classNames='jo-project-learn-more'/>}    
            </div>
          </div>
        </div>
        <div id="learn-more" className="jo-post-content-wrapper" dangerouslySetInnerHTML={{ __html: content }} />
      
    </article>
  }
}

export default ProjectContent;

