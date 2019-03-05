import React, {Component} from 'react';
import  './SmallListPosts.css';
import SmallListPost from '../SmallListPost/SmallListPost';


class SmallListPosts extends Component {

  render(){
    let posts = this.props.data;
    return <div className="jo-small-list-posts-container">
      {posts.map(({ node }) => (
        <SmallListPost post={node} key={`${node.id}`} path={this.props.path}/>
      ))}
    </div>
  }
}

export default SmallListPosts;

