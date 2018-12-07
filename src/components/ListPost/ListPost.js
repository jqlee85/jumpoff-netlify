import React, {Component} from 'react';
import styles from './ListPost.css';
import {Link} from 'react-router-dom';
import LinkButton from '../LinkButton/LinkButton';
import { Helmet } from 'react-helmet';
import {getPrettyDate} from '../../lib/utilities';


class ListPost extends Component {

  render(){

    let id = this.props.post.id;
    let slug = this.props.post.slug;
    let postID = 'jo-post-id_' + id;
    let title = this.props.post.title;
    let excerpt = this.props.post.excerpt || '';
    console.log(excerpt);
    let date = this.props.post.date;
    let prettyDate = getPrettyDate(date);
    let content = this.props.post.content;
    let featuredImage = this.props.post.featuredImage;
    let postLink = '/blog/' + slug;
    let imgStyle = {
      backgroundImage: 'url(' + featuredImage.sourceUrl + ')'
    }
    
    return <article id={postID} data-post-id={id} className="jo-list-post">
      <div className="jo-list-post-featured-image-wrapper">
        <img className="jo-list-post-featured-image" src={featuredImage.sourceUrl}/>
        <div className="jo-list-post-read-more">
          <LinkButton to={postLink} text="Read More"/>
        </div>
      </div>
      <div className="jo-list-post-content">
        <div className="jo-list-post-title">
          <Link to={postLink}>
            <h1 className="black-box-text" dangerouslySetInnerHTML={{ __html: title }}/>
          </Link>
        </div>
        <div className="jo-list-post-excerpt-wrapper">
          <div className="jo-list-post-excerpt black-box-text" dangerouslySetInnerHTML={{ __html: excerpt }} />
        </div>
        <div className="jo-list-post-content-spacer"></div>
      </div>
      <div className="jo-list-post-meta">
        <div className="jo-list-post-date">
          <p className="black-box-text" dangerouslySetInnerHTML={{ __html: prettyDate }}/>
        </div>
        
      </div>
    </article>
  }
}

export default ListPost;

