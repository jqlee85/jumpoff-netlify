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
    let date = this.props.post.date;
    let content = this.props.post.content;
    let featuredImage = this.props.post.featuredImage;
    let postLink = '/blog/' + slug;
    let imgStyle = {
      backgroundImage: 'url(' + featuredImage.sourceUrl + ')'
    }
    
    return <article id={postID} data-post-id={id} className="jo-list-post">
      <div className="jo-list-post-featured-image-wrapper">
        <div className="gradient-overlay gradient-overlay-cool"></div>
        <img className="jo-list-post-featured-image" src={featuredImage.sourceUrl}/>
      </div>
      
      <div className="jo-list-post-title">
          <Link to={postLink}>
            <h1 className="" dangerouslySetInnerHTML={{ __html: title }}/>
          </Link>
        </div>
      <div className="jo-list-post-excerpt-wrapper">
        <div className="jo-post-date">
          <p dangerouslySetInnerHTML={{ __html: date }}/>
        </div>
        <div className="jo-post-excerpt" dangerouslySetInnerHTML={{ __html: excerpt }} />
        <LinkButton to={postLink} transparent={true} text="Read More"/>
      </div>
      
      
      
      
    </article>
  }
}

export default ListPost;

