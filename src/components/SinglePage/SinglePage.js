import React, {Component} from 'react';
import styles from './SinglePage.css';
import LoadingRectangles from '../LoadingRectangles/LoadingRectangles';
import Post from '../Post/Post';
import { Query } from "react-apollo";
import gql from "graphql-tag";

const SINGLE_PAGE_QUERY = gql`
  query page($uri: String!){
    pageBy(uri: $uri) {
      id
      title
      uri
      content
    }
  }
`;


const SinglePage = ({ match }) => {
  
    var page_slug = /[^/]*$/.exec(match.path)[0];
    let uri = { uri: page_slug }

    return <div className="blog jo-section">
      <div className="jo-row">
        <div className="jo-content">
          <div className="single-post">
            {/* Check to see if post exists in cache first, if so*/}
            <Query query={SINGLE_PAGE_QUERY} variables={uri}>
              {({ loading, error, data }) => {
                if (loading) return (<LoadingRectangles/>);
                if (error) return (<p>Error Loading Post</p>);
                return (
                    <Post post={data.pageBy}/>
                );
              }}  
            </Query>
          </div>
        </div>
      </div>
    </div>
  
}

export default SinglePage;

