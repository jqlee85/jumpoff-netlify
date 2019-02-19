import React, {Component} from 'react';
import styles from './Blog.css';
import ListPost from '../ListPost/ListPost';
import ListPosts from '../ListPosts/ListPosts';
import LoadingShape from '../LoadingShape/LoadingShape';
import { Query } from "react-apollo";
import gql from "graphql-tag";

const LATEST_POSTS_QUERY = gql`
  query listView($first: Int!) {
    posts(first:$first) {
      pageInfo {
        hasNextPage
        endCursor
      }
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

  constructor(props) {
    super(props);
    this.state = { 
      first: 3,
    };  
  }

  morePosts = () => {
    this.setState(prevState => ({
      first: this.state.first += 3
    }));
  }

  render(){
    
    let first = { first: this.state.first }

    return (
    <section className="blog latest-posts">
      <div className="jo-row">
        <div className="jo-content">
          <h1 className="standard-title">Latest Posts</h1>
          <Query query={LATEST_POSTS_QUERY} variables={first}>
            {({ loading, error, data }) => {
              if (loading) return (<LoadingShape/>);
              if (error) return (<p>Error Loading Post</p>);
              return (
                <ListPosts data={data} morePosts={this.morePosts}/>
              );
            }}
          </Query>
        </div>
      </div>
    </section>);
  }
}

export default Blog;
