import React, {Component} from 'react';
import  './Post.css';
import  LinkButton from '../LinkButton/LinkButton';
import { Helmet } from 'react-helmet';


class Post extends Component {

  render(){

    let id = this.props.post.id;
    let slug = this.props.post.slug;
    let postID = 'jo-post-id_' + id;
    let title = this.props.post.title;
    let content = this.props.post.content;
    let featuredImage = this.props.post.featuredImage;
    let postLink = '/blog/' + slug;
    
    return <article id={postID} data-post-id={id} className="jo-post">
      <Helmet>
        <title>JumpOff - {title}</title>
        <meta name="title" content={title} />
        <meta name="description" content="JumpOff is a web design and development company building unique, modern web experiences using WordPress and React." />
        <meta name="url" content={postLink} />
        { featuredImage && <meta name="image" content={featuredImage.sourceUrl} /> }
      </Helmet>
      { featuredImage && <img className="jo-featured-image" src={featuredImage.sourceUrl} alt={title}/> }
      <div className="jo-post-content-wrapper">
        <h1 className="jo-post-title black-box-text" dangerouslySetInnerHTML={{ __html: title }}/>
        <div className="jo-post-content" dangerouslySetInnerHTML={{ __html: content }} /> 
        <div className="jo-post-contact-button">
          <LinkButton  to="/contact/" text="Contact Me"/>
        </div>
      </div>
    </article>
  }
}

export default Post;

