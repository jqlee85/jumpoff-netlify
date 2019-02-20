import React, {Component} from 'react';
import  './HomeSectionThree.css';
import PortfolioItem from '../PortfolioItem/PortfolioItem';
import LoadingShape from '../LoadingShape/LoadingShape';
import LinkButton from '../LinkButton/LinkButton';
import PortfolioCarousel from '../PortfolioCarousel/PortfolioCarousel';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import _ from 'lodash';

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
  
  grid = React.createRef();
  gridSizer = React.createRef();

  constructor(props) {
    super(props);
    this.state = {
      gridHeight: 'auto',
      gridAspectRatio: 1.4
    }
  }

  componentDidMount(){
    this.gridResizer();
    window.addEventListener("resize", _.debounce(this.gridResizer.bind(this), 50));
  }

  componentWillUnmount(){
    window.removeEventListener("resize", _.debounce(this.gridResizer.bind(this), 50));
  }

  gridResizer() {
    if (this.grid.current){
      let width = this.grid.current.offsetWidth;
      let currentHeight = this.grid.current.offsetHeight;
      let sizerHeight = this.gridSizer.current.clientHeight;
      let newHeight = Math.floor(width * this.state.gridAspectRatio);
      if ( sizerHeight < 1 || (sizerHeight !== width * this.state.gridAspectRatio || currentHeight !== width * this.state.gridAspectRatio )) {
        this.setState({gridHeight: newHeight})
      }
    }
  }

  render(){
    
    let gridStyles = {
      height: this.state.gridHeight
    }
    let viewBox = '0 0 100 ' + 100 * this.state.gridAspectRatio;

    return <section className="home-section flex-section full-height-section" id="home-section-three">
      <div className="home-portfolio-wrapper">
        <div className="home-section-content">   
          <div className="home-portfolio-base-desktop" ref={this.grid} style={gridStyles}>
            <svg viewBox={viewBox} ref={this.gridSizer}></svg>
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
