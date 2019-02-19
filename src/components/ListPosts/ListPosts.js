import React, {Component} from 'react';
import styles from './ListPosts.css';
import ListPost from '../ListPost/ListPost';
import LinkButton from '../LinkButton/LinkButton';


class ListPosts extends Component {

  constructor(props) {
    super(props); 
  }

  render(){
    let data = this.props.data;
    let hasNextPage = this.props.data.posts.pageInfo.hasNextPage;
    return <div>
      {data.posts.edges.map(({ node }) => (
        <ListPost post={node} key={`${node.id}`} path={this.props.path}/>
      ))}
      {hasNextPage && 
        <div className="jo-more-posts-wrapper">
          <LinkButton linkType="custom" text="More Posts" onClick={this.props.morePosts}/>
        </div>
      }
    </div>
  }
}

export default ListPosts;

