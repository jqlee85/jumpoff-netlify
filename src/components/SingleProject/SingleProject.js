import React, {Component} from 'react';
import styles from './SingleProject.css';
import LoadingRectangles from '../LoadingRectangles/LoadingRectangles';
import Post from '../Post/Post';
import SiteMockup from '../SiteMockup/SiteMockup';
import { Query } from "react-apollo";
import gql from "graphql-tag";

//Temp
import theBackgroundImage from '../../public/images/reservation-wordpress-theme-1.jpg';

const SINGLE_PROJECT_QUERY = gql`
  query detailView($slug: String!){
    projectBy(slug: $slug) {
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
`;

class SingleProject extends Component {
  
  constructor(props) {
    super(props);
  }
    
  render(){ 

    let slug = { slug: this.props.match.params.post_slug }
    console.log('slug:');
    console.log(slug);

    return <section className="projects">
    <div className="jo-row">
      <div className="jo-content">
        <div className="single-project">
          <Query query={SINGLE_PROJECT_QUERY} variables={slug}>
            {({ loading, error, data }) => {
              if (loading) return (<LoadingRectangles/>);
              if (error) return (<p>Error Loading Project</p>);
              return (
                <div>
                <Post post={data.projectBy}/>
                <SiteMockup device="" image={data.projectBy.featuredImage.sourceUrl}/>
                </div>
                
              );
            }}  
          </Query>
        </div>
      </div>
    </div>
  </section>
  }
  
}

export default SingleProject;

