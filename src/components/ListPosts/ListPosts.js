import React, {Component} from 'react';
import  './ListPosts.css';
import ListPost from '../ListPost/ListPost';


class ListPosts extends Component {

  render(){
    let posts = this.props.data;
    return <div>
      {posts.map(({ node }) => (
        <ListPost post={node} key={`${node.id}`} path={this.props.path}/>
      ))}
    </div>
  }
}

export default ListPosts;

