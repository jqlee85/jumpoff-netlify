import React from 'react';
import  './SinglePage.css';
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
      content(format: RAW)
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
            <Query query={SINGLE_PAGE_QUERY} variables={uri}>
              {({ loading, error, data }) => {
                if (loading) return null;
                if (error) return (<NotFound/>);
                if (data) return (
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

