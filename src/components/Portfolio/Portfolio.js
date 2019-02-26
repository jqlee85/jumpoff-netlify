import React, {Component} from 'react';
import  './Portfolio.css';
import PortfolioItem from '../PortfolioItem/PortfolioItem';
import LoadingShape from '../LoadingShape/LoadingShape';
import NotFound from '../NotFound/NotFound';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import _ from 'lodash';

const PORTFOLIO_PROJECTS_QUERY = gql`
  query listView {
    projects(first: 7, where: {orderby: {field: MENU_ORDER, order: DESC}}) {
      edges {
        node {
          id
          title
          slug
          projectDescription
          portfolioImage
          projectColor
          projectColor2
          featuredImage {
            sourceUrl
          }
        }
      }
    }
  }
`;

class Portfolio extends Component {

  grid = React.createRef();
  gridSizer = React.createRef();

  constructor(props) {
    super(props);
    this.state = {
      gridHeight: 'auto',
      gridAspectRatio: 1.628
    }
  }

  componentDidMount(){
    if (!this.gridResizer()) {
      setTimeout(this.gridResizer,10);
    }
    window.addEventListener("resize", _.debounce(this.gridResizer.bind(this), 20));
  }

  componentWillUnmount(){
    window.removeEventListener("resize", _.debounce(this.gridResizer.bind(this), 20));
  }

  gridResizer() {
    if (window.innerWidth < 751) {
      this.setState({gridHeight: 'auto'})
      return true;
    } else if (this.grid.current) {
      let width = this.grid.current.offsetWidth;
      let currentHeight = this.grid.current.offsetHeight;
      let sizerHeight = this.gridSizer.current.clientHeight;
      let newHeight = Math.floor(width * this.state.gridAspectRatio);
      if ( sizerHeight < 1 || (sizerHeight !== width * this.state.gridAspectRatio || currentHeight !== width * this.state.gridAspectRatio )) {
        console.log('change height of '+currentHeight+' to ' + newHeight);
        this.setState({gridHeight: newHeight})
      } 
      console.log(this.grid);
      console.log(this.gridSizer);
      console.log('w:'  + width);
      console.log('h:' +currentHeight);
      console.log('sh:' +sizerHeight);
      console.log('newh:' +newHeight);
      return true;
    }
    return false;
  }


  render(){
    
    let gridStyles = {
      height: this.state.gridHeight
    }
    let viewBox = '0 0 100 ' + 100 * this.state.gridAspectRatio;

    return (
    <section className="jo-portfolio">
      <div className="jo-portfolio-content">
        <div className="jo-portfolio-list-grid" ref={this.grid} style={gridStyles}>
          <svg viewBox={viewBox} ref={this.gridSizer}></svg>
          <Query query={PORTFOLIO_PROJECTS_QUERY}>
            {({ loading, error, data }) => {
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
    </section>);
  }
}

export default Portfolio;
