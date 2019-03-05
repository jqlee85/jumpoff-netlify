import React, {Component} from 'react';
import  './SmallListPost.css';
import {Link} from 'react-router-dom';
import LinkButton from '../LinkButton/LinkButton';
import {getPrettyDate} from '../../lib/utilities';


class SmallListPost extends Component {

  render(){

    let id = this.props.post.id;
    let slug = this.props.post.slug;
    let postID = 'jo-post-id_' + id;
    let title = this.props.post.title;
    let date = this.props.post.date;
    let prettyDate = getPrettyDate(date);
    let featuredImage = this.props.post.featuredImage;
    let postLink = '/blog/' + slug;
    
    return <article id={postID} data-post-id={id} className="jo-list-post-small" >
      <img className="jo-list-post-featured-img" src={featuredImage.sourceUrl} alt={title}/>
      <div className="jo-list-post-small-flex-container">
        <div className="jo-list-post-meta">
          <div className="jo-list-post-small-date">
            <p className="black-box-text" dangerouslySetInnerHTML={{ __html: prettyDate }}/>
          </div>
        </div>
        <div className="jo-list-post-title">
            <Link to={postLink}>
              <h1 className="black-box-text" dangerouslySetInnerHTML={{ __html: title }}/>
            </Link>
        </div>
        <div className="jo-list-post-read-more">
            <LinkButton to={postLink} text="Read More"/>
        </div>
      </div>
    </article>
  }
}

export default SmallListPost;

