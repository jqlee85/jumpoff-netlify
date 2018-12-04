import React, {Component} from 'react';
import styles from './ListPost.css';
import {Link} from 'react-router-dom';
import LinkButton from '../LinkButton/LinkButton';
import { Helmet } from 'react-helmet';


class ListPost extends Component {

  render(){

    let id = this.props.post.id;
    let slug = this.props.post.slug;
    let postID = 'jo-post-id_' + id;
    let title = this.props.post.title;
    let excerpt = this.props.post.excerpt || '';
    console.log(excerpt);
    let content = this.props.post.content;
    let featuredImage = this.props.post.featuredImage;
    let postLink = '/blog/' + slug;
    let imgStyle = {
      backgroundImage: 'url(' + featuredImage.sourceUrl + ')'
    }
    
    return <article id={postID} data-post-id={id} className="jo-post jo-list-post">
      <div className="jo-list-post-featured-image-wrapper" style={imgStyle}>
      </div>
      <Link to={postLink}><h1 className="jo-post-title" dangerouslySetInnerHTML={{ __html: title }}/></Link>
      <div className="jo-list-post-excerpt-wrapper">
        <div className="jo-post-excerpt" dangerouslySetInnerHTML={{ __html: excerpt }} />
        <LinkButton to={postLink}/>
      </div>
      
      
      
      
    </article>
  }
}

export default ListPost;

