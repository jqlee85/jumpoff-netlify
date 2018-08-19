import React, {Component} from 'react';
import styles from './Post.css';
import {Link} from 'react-router-dom';


class Post extends Component {

  render(){
    
    let id = this.props.post.id;
    let slug = this.props.post.slug;
    let postID = 'jo-post-id_' + id;
    let title = this.props.post.title;
    let content = this.props.post.content
    let postLink = '/blog/' + slug;
    
    return <article id={postID} data-post-id={id} className="jo-post">
      { !this.props.single && 
        <Link to={postLink}><h1 className="jo-post-title" dangerouslySetInnerHTML={{ __html: title }}/></Link>
      }
      { this.props.single && <h1 className="jo-post-title" dangerouslySetInnerHTML={{ __html: title }}/> }
      <div className="jo-post-content-wrapper" dangerouslySetInnerHTML={{ __html: content }} />
    </article>
  }
}

export default Post;

