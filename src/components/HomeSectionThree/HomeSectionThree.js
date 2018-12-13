import React, {Component} from 'react';
import styles from './HomeSectionThree.css';
import PortfolioItem from '../PortfolioItem/PortfolioItem';
import LoadingShape from '../LoadingShape/LoadingShape';
import LinkButton from '../LinkButton/LinkButton';
import PortfolioCarousel from '../PortfolioCarousel/PortfolioCarousel';
import TouchCarousel from 'react-touch-carousel'
import { Query } from "react-apollo";
import gql from "graphql-tag";

const HOME_PORTFOLIO_PROJECTS_QUERY = gql`
  query listView {
    projects(first: 4, where: {orderby: {field: MENU_ORDER, order: DESC}}) {
      edges {
        node {
          id
          title
          slug
          date
          projectDescription
          client
          technologies
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

class HomeSectionThree extends Component {
  
  constructor(props){
    super(props);
  }

  render(){
    
    return <section className="home-section flex-section full-height-section" id="home-section-three">
      <div className="home-portfolio-wrapper">
        <div className="home-section-content">   
          <div className="home-portfolio-base-desktop">
            <svg viewBox="0 0 10 14"></svg>
            <div className="home-portfolio-block home-portfolio-block-1">
              <h2>Recent Projects</h2>
            </div>
              <Query query={HOME_PORTFOLIO_PROJECTS_QUERY}>
                {({ loading, error, data }) => {
                  if (loading) return (<LoadingShape/>);
                  if (error) return (<p>Error Loading Post</p>);
                  return (
                    data.projects.edges.map(({ node },index) => (
                      <PortfolioItem post={node} key={`${node.id}`} itemNumber={index+2} mode="transform"/>
                    ))
                  );
                }}  
              </Query>
            <div className="home-portfolio-block home-portfolio-block-6">
              <LinkButton to="/portfolio" text="More Projects"/>
            </div>
          </div>
        </div> 
        <div className="home-portfolio-base-mobile">
          <h2>Recent Work</h2>
          <Query query={HOME_PORTFOLIO_PROJECTS_QUERY}>
                {({ loading, error, data }) => {
                  if (loading) return (<LoadingShape/>);
                  if (error) return (<p>Error Loading Post</p>);
                  return (
                    <PortfolioCarousel projects={data.projects.edges} />
                  );
                }}  
            </Query>
            <LinkButton to="/portfolio" text="More Projects"/>
        </div>
      </div>
    </section>
  }

}

export default HomeSectionThree;
