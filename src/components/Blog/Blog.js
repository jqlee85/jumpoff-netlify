import React, {Component} from 'react';
import './Blog.css';
import LinkButton from '../LinkButton/LinkButton';
import ListPosts from '../ListPosts/ListPosts';
import LoadingShape from '../LoadingShape/LoadingShape';
import { Query } from "react-apollo";
import gql from "graphql-tag";

const LATEST_POSTS_QUERY = gql`
  query listView($first: Int!, $after: String!) {
    posts(first: $first, after: $after where: {categoryId:188}) {
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

  render(){
    
    let variables = {
      first: 5,
      after: ''
    }

    return (
    <section className="blog latest-posts">
      <div className="jo-row">
        <div className="jo-content">
          <h1 className="standard-title">Latest Posts</h1>
          <Query query={LATEST_POSTS_QUERY} variables={variables} fetchPolicy="cache-and-network">
            {({ loading, error, data, fetchMore }) => {
              if (loading && !data.posts) return (<div className="large-loader-wrapper"><LoadingShape/></div>);
              if (error) return (<p>Error Loading Posts</p>);
              if (data.posts) return(
                <div>
                  <ListPosts data={data.posts.edges || []}/>
                  {data.posts.pageInfo.hasNextPage && 
                    <div className="jo-more-posts-wrapper">
                      {loading && <div className="large-loader-wrapper"><LoadingShape/></div>}
                      {!loading && <LinkButton 
                        transparent={true} 
                        linkType="custom" 
                        text="More Posts" 
                        onClick={() =>
                          fetchMore({
                            query: LATEST_POSTS_QUERY,
                            variables: {
                              first: 5,
                              after: data.posts.pageInfo.endCursor
                            },
                            updateQuery: (prev, { fetchMoreResult }) => {
                              fetchMoreResult.posts.edges.unshift(...prev.posts.edges);
                              if (!fetchMoreResult) return prev;
                              return fetchMoreResult
                            }
                          })
                        }
                      />}
                    </div>
                  }
                </div>
              )
            }}
          </Query>
        </div>
      </div>
    </section>);
  }
}

export default Blog;
