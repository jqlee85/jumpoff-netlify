import React, {Component} from 'react';
import styles from './Portfolio.css';
import ProjectContent from '../ProjectContent/ProjectContent';
import LoadingShape from '../LoadingShape/LoadingShape';
import NotFound from '../NotFound/NotFound';
import { Query } from "react-apollo";
import gql from "graphql-tag";

const PORTFOLIO_PROJECTS_QUERY = gql`
  query listView {
    projects(first: 10, where: {orderby: {field: MENU_ORDER, order: DESC}}) {
      edges {
        node {
          id
          title
          slug
          date
          content
          projectDescription
          projectLink
          client
          technologies
          githubLink
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
    }
  }
`;

class Portfolio extends Component {

  render(){
    
    return (
    <section className="jo-portfolio">
        <h1 className="standard-title">Portfolio</h1>
        <Query query={PORTFOLIO_PROJECTS_QUERY}>
          {({ loading, error, data }) => {
            if (loading) return (<LoadingShape/>);
            if (error) return (<NotFound/>);
            return (
              data.projects.edges.map(({ node }) => (
                <ProjectContent post={node} key={`${node.id}`} path={this.props.path} listView={true}/>
              ))
            );
          }}  
        </Query>
    </section>);
  }
}

export default Portfolio;
