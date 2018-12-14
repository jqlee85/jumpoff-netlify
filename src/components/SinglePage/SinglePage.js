import React from 'react';
import styles from './SinglePage.css';
import LoadingShape from '../LoadingShape/LoadingShape';
import NotFound from '../NotFound/NotFound';
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
      featuredImage {
        sourceUrl
      }
    }
  }
`;


const SinglePage = ({ match }) => {
  
    var page_slug = /[^/]*$/.exec(match.path)[0];
    let uri = { uri: page_slug }

    return <section className="blog">
      <div className="jo-row">
        <div className="jo-content">
          <div className="single-post">
            {/* Check to see if post exists in cache first, if so*/}
            <Query query={SINGLE_PAGE_QUERY} variables={uri}>
              {({ loading, error, data }) => {
                if (loading) return (<LoadingShape/>);
                if (error) return (<NotFound/>);
                return (
                    <Post post={data.pageBy}/>
                );
              }}  
            </Query>
          </div>
        </div>
      </div>
    </section>
  
}

export default SinglePage;

