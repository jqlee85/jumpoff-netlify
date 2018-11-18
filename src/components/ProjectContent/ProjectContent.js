import React, {Component} from 'react';
import styles from './ProjectContent.css';
import { Helmet } from 'react-helmet';
import SiteMockup from '../SiteMockup/SiteMockup';
import LinkButton from '../LinkButton/LinkButton';
import { Query } from "react-apollo";
import gql from "graphql-tag";

const SCREENSHOT_QUERY = gql`
  query screenshotView($mediaItemId: ID!){
    mediaItemBy(mediaItemId: $mediaItemId){
      sourceUrl
    }
  }
`;

class ProjectContent extends Component {

  render(){

    let id = this.props.post.id;
    let slug = this.props.post.slug || '';
    let postID = 'jo-post-id_' + id;
    let title = this.props.post.title || '';
    let content = this.props.post.content || '';
    let description = this.props.post.projectDescription || false;
    let featuredImage = this.props.post.featuredImage || false;
    let postLink = '/portfolio/' + slug;
    let projectLink = this.props.post.projectLink || false;
    let client = this.props.post.client || false;
    let technologies = this.props.post.technologies || false;
    let desktopScreenshot = this.props.post.desktopScreenshot || false;
    let desktopScreenshotId = { mediaItemId: desktopScreenshot }
    let mobileScreenshot = this.props.post.mobileScreenshot || false;
    let mobileScreenshotId = { mediaItemId: mobileScreenshot }
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
            {desktopScreenshot && <Query query={SCREENSHOT_QUERY} variables={desktopScreenshotId}>
              {({ loading, error, data }) => {
                if (loading) return (<SiteMockup device="" image=""/>);
                if (error) return (<SiteMockup device="" image=""/>);
                return (
                  <SiteMockup device="" image={data.mediaItemBy.sourceUrl}/>
                );
              }}  
            </Query>}
            {mobileScreenshot && <Query query={SCREENSHOT_QUERY} variables={mobileScreenshotId}>
              {({ loading, error, data }) => {
                if (loading) return (<SiteMockup device="" image=""/>);
                if (error) return (<SiteMockup device="" image=""/>);
                return (
                  <SiteMockup device="mobile" image={data.mediaItemBy.sourceUrl}/>
                );
              }}  
            </Query>}
          </div>
          <div className="jo-project-info">
            {title && <h1 className="jo-project-title" dangerouslySetInnerHTML={{ __html: title }}/>}
            {technologies && <p className="jo-project-technologies" dangerouslySetInnerHTML={{__html: technologies }}/>}
            {description && <h3 dangerouslySetInnerHTML={{__html: description }}/>}
            {/* {client && <p className="jo-project-client"><span className="jo-project-client-text">Client: </span><span className="jo-project-client-name" dangerouslySetInnerHTML={{__html: client }}/></p>} */}
            <div className="jo-project-info-links">
            {<LinkButton to="#learn-more" external={true} color='transparent' classNames='jo-project-learn-more' />}
            {projectLink && <LinkButton to={projectLink} external={true} classNames='jo-project-visit-project' text="Visit Project"/>}
            </div>
          </div>
        
        </div>
        
        <div id="learn-more" className="jo-post-content-wrapper" dangerouslySetInnerHTML={{ __html: content }} />
      
    </article>
  }
}

export default ProjectContent;

