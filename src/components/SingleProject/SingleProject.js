import React, {Component} from 'react';
import styles from './SingleProject.css';
import LoadingShape from '../LoadingShape/LoadingShape';
import ProjectContent from '../ProjectContent/ProjectContent';
import { Query } from "react-apollo";
import gql from "graphql-tag";


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
      categoryProjects {
        edges {
          node {
            id
            name
          }
        }
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
              if (loading) return (<LoadingShape/>);
              if (error) return (<p>Error Loading Project</p>);
              return (
                <ProjectContent post={data.projectBy}/>
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

