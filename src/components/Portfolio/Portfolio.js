import React, {Component} from 'react';
import styles from './Portfolio.css';
import ProjectContent from '../ProjectContent/ProjectContent';
import PortfolioItem from '../PortfolioItem/PortfolioItem';
import HomeSectionThree from '../HomeSectionThree/HomeSectionThree';
import LoadingShape from '../LoadingShape/LoadingShape';
import NotFound from '../NotFound/NotFound';
import { Query } from "react-apollo";
import gql from "graphql-tag";

const PORTFOLIO_PROJECTS_QUERY = gql`
  query listView {
    projects(first: 7, where: {orderby: {field: MENU_ORDER, order: DESC}}) {
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
      {/* <div className="jo-portfolio-static background">
        <div className="jo-portfolio-static-text">
          <h1 className="background-text">PORTFOLIO</h1>
        </div>
      </div>  */}
      <div className="jo-portfolio-content">
        <h1 className="standard-title">Portfolio</h1>
        <div className="jo-portfolio-list-grid">
          <svg viewBox="0 0 100 253"></svg>
          <Query query={PORTFOLIO_PROJECTS_QUERY}>
            {({ loading, error, data }) => {
              if (loading) return (<LoadingShape/>);
              if (error) return (<NotFound/>);
              return (
                data.projects.edges.map(({ node },index) => (
                  <PortfolioItem post={node} key={`${node.id}`} itemNumber={index+1} path={this.props.path} mode="normal"/>
                ))
              );
            }}  
          </Query>
        </div>
      </div>
      {/* <div className="jo-portfolio-static foreground">
        <div className="jo-portfolio-static-text">
          <h1 className="foreground-text">PORTFOLIO</h1>
        </div>
      </div>  */}
    </section>);
  }
}

export default Portfolio;
