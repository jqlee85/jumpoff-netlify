import React, {Component} from 'react';
import  './SinglePost.css';
import LoadingShape from '../LoadingShape/LoadingShape';
import NotFound from '../NotFound/NotFound';
import Post from '../Post/Post';
import { Query } from "react-apollo";
import gql from "graphql-tag";


const SINGLE_POST_QUERY = gql`
  query detailView($slug: String!){
    postBy(slug: $slug) {
      id
      title
      slug
      date
      content(format: RAW)
      featuredImage {
        sourceUrl
      }
    }
  }
`;

class SinglePost extends Component {
  
  
    
  render(){ 

    let slug = { slug: this.props.match.params.post_slug }
    console.log('slug:');
    console.log(slug);

    return <section className="blog">
    <div className="jo-row">
      <div className="jo-content">
        <div className="single-post">
          <Query query={SINGLE_POST_QUERY} variables={slug}>
            {({ loading, error, data }) => {          
              if (loading) return (
                <LoadingShape/>
              );
              if (error) return (<NotFound/>);
              return (
                <Post post={data.postBy}/>
              );
            }}  
          </Query>
        </div>
      </div>
    </div>
  </section>
  }
  
}

export default SinglePost;

