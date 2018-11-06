import React, {Component} from 'react';
import styles from './Blog.css';
import Post from '../Post/Post';
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
          content
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
    <section className="blog">
      <div className="jo-row">
        <div className="jo-content">
        <Query query={LATEST_POSTS_QUERY}>
          {({ loading, error, data }) => {
            if (loading) return (<LoadingShape/>);
            if (error) return (<p>Error Loading Post</p>);
            return (
              data.posts.edges.map(({ node }) => (
                <Post post={node} key={`${node.id}`} path={this.props.path}/>
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
