import React, {Component} from 'react';
import styles from './HomeSectionThree.css';
import PortfolioItem from '../PortfolioItem/PortfolioItem';
import LoadingRectangles from '../LoadingRectangles/LoadingRectangles';
import { Query } from "react-apollo";
import gql from "graphql-tag";

const HOME_PORTFOLIO_PROJECTS_QUERY = gql`
  query listView {
    projects {
      edges {
        node {
          id
          title
          slug
          date
          featuredImage {
            sourceUrl
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
      <div className="home-section-content">
          <h2>Portfolio</h2>
          <Query query={HOME_PORTFOLIO_PROJECTS_QUERY}>
          {({ loading, error, data }) => {
            if (loading) return (<LoadingRectangles/>);
            if (error) return (<p>Error Loading Post</p>);
            return (
              data.projects.edges.map(({ node }) => (
                <PortfolioItem post={node} key={`${node.id}`}/>
                // <ProjectContent  path={this.props.path}/>
              ))
            );
          }}  
        </Query>
          
      </div>
    </section>
  }

}

export default HomeSectionThree;
