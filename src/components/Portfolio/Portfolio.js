import React, {Component} from 'react';
import styles from './Portfolio.css';
import ProjectContent from '../ProjectContent/ProjectContent';
import LoadingRectangles from '../LoadingRectangles/LoadingRectangles';
import { Query } from "react-apollo";
import gql from "graphql-tag";

const PORTFOLIO_PROJECTS_QUERY = gql`
  query listView {
    projects {
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
    }
  }
`;

class Portfolio extends Component {

  render(){
    
    return (
    <section className="portfolio">
      <div className="jo-row">
        <div className="jo-content">
        <Query query={PORTFOLIO_PROJECTS_QUERY}>
          {({ loading, error, data }) => {
            if (loading) return (<LoadingRectangles/>);
            if (error) return (<p>Error Loading Post</p>);
            return (
              data.projects.edges.map(({ node }) => (
                <ProjectContent post={node} key={`${node.id}`} path={this.props.path}/>
              ))
            );
          }}  
        </Query>
        </div>
      </div>
    </section>);
  }
}

export default Portfolio;
