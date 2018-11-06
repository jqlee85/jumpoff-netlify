import React, {Component} from 'react';
import styles from './Portfolio.css';
import ProjectContent from '../ProjectContent/ProjectContent';
import LoadingShape from '../LoadingShape/LoadingShape';
import NotFound from '../NotFound/NotFound';
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
    <section className="jo-portfolio">
        <Query query={PORTFOLIO_PROJECTS_QUERY}>
          {({ loading, error, data }) => {
            if (loading) return (<LoadingShape/>);
            if (error) return (<NotFound/>);
            return (
              data.projects.edges.map(({ node }) => (
                <ProjectContent post={node} key={`${node.id}`} path={this.props.path}/>
              ))
            );
          }}  
        </Query>
    </section>);
  }
}

export default Portfolio;
