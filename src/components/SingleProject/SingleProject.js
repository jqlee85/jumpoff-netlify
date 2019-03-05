import React, {Component} from 'react';
import  './SingleProject.css';
import LoadingShape from '../LoadingShape/LoadingShape';
import NotFound from '../NotFound/NotFound';
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
      content(format: RENDERED)
      projectDescription
      projectLink
      githubLink
      demoLink
      client
      technologies
      desktopScreenshot
      mobileScreenshot
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
  
  
    
  render(){ 

    let slug = { slug: this.props.match.params.post_slug }

    return <section className="projects">
    <div className="jo-row">      
      <div className="single-project">
        <Query query={SINGLE_PROJECT_QUERY} variables={slug}>
          {({ loading, error, data }) => {
            if (loading) return null;
            if (error) return (<NotFound/>);
            if (data) return (
              <ProjectContent post={data.projectBy}/>
            );
          }}  
        </Query>
      </div>      
    </div>
  </section>
  }
  
}

export default SingleProject;

