import React, {Component} from 'react';
import styles from './Blog.css';
import ListPost from '../ListPost/ListPost';
import LoadingShape from '../LoadingShape/LoadingShape';
import { Query } from "react-apollo";
import gql from "graphql-tag";

const LATEST_POSTS_QUERY = gql`
  query listView {
    posts {
      edges {
        node {
          id
          title
          slug
          date
          excerpt
          featuredImage {
            sourceUrl
          }
        }
      }
    }
  }
`;

class Blog extends Component {

  render(){
    
    return (
    <section className="blog latest-posts">
      <div className="jo-row">
        <div className="jo-content">
        <h1 className="standard-title">Latest Posts</h1>
        <Query query={LATEST_POSTS_QUERY}>
          {({ loading, error, data }) => {
            if (loading) return (<LoadingShape/>);
            if (error) return (<p>Error Loading Post</p>);
            return (
              data.posts.edges.map(({ node }) => (
                <ListPost post={node} key={`${node.id}`} path={this.props.path}/>
              ))
            );
          }}  
        </Query>
        </div>
      </div>
    </section>);
  }
}

export default Blog;
