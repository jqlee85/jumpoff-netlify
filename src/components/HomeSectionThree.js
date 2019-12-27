import React, {Component} from "react"
import LoadingShape from './LoadingShape'
import LinkButton from './LinkButton'
import PortfolioCarousel from './PortfolioCarousel';
import PortfolioItem from './PortfolioItem';
import _ from 'lodash';
import styled from 'styled-components'
import {screen} from '../styles/mediaQueries'


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
    setTimeout(this.gridResizer(),2000);
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
    
    let gridStyles = { height: this.state.gridHeight }
    let viewBox = '0 0 100 ' + 100 * this.state.gridAspectRatio
    const {data} = this.props
 
    console.log('data',data)

    return <StyledHomeSectionThree 
      className="home-section flex-section full-height-section" 
      id="home-section-three"
    >
      <div className="home-portfolio-wrapper">
        <div className="home-section-content">   
          <div className="home-portfolio-base-desktop" ref={this.grid} style={gridStyles}>
            <svg viewBox={viewBox} ref={this.gridSizer}></svg>
            <div className="home-portfolio-block home-portfolio-block-1">
              <h2>Recent Projects</h2>
            </div> 
            {data.projects.edges.map(({ node },index) => (
              <PortfolioItem 
                post={node} 
                key={`${node.id}`} 
                itemNumber={index+2}
                mode="transform"
              />
            ))}
            <div className="home-portfolio-block home-portfolio-block-6">
              <LinkButton to="/work" text="More Projects"/>
            </div>
          </div>
        </div> 
        <div className="home-portfolio-base-mobile">
          <h2>Recent Work</h2>
          {data?.projects && 
            <PortfolioCarousel 
              projects={data.projects.edges} 
            />
          }
          <LinkButton to="/work" text="More Projects"/>
        </div>
      </div>
    </StyledHomeSectionThree>
  }

}

export default HomeSectionThree;

const StyledHomeSectionThree = styled.section`
    .home-portfolio-wrapper {
        position:relative;
        width: 100%;
    }
    .home-portfolio-base-desktop > svg {
        grid-area: 1 / 1 / 10 / 6;
    }
    .home-portfolio-base-mobile {
        min-height: 400px;
        height: auto;
        width: 100%;
    }
    .home-portfolio-base-mobile h2 {
        font-size: 2.8rem;
        margin: 1rem auto 2.4rem;
    }
    .home-portfolio-base-mobile .jo-link-button-wrapper {
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 8px 0px;
    }
    .home-portfolio-base-mobile .jo-link-button-wrapper a {
        display: inline;
        margin: auto;
    }

    @media screen and ( min-width: 801px ) {
        .home-portfolio-wrapper {
            margin: 150px auto;
        }
        .home-portfolio-base-mobile {
            display: none;
        }
        .home-portfolio-base-desktop {
            position: relative;
            display: grid;
            grid-template-columns: 31.5% 11.5% 14% 11.5% 31.5%;
            grid-template-rows: 9.29% 8.21% 23.21% 8.21% 2.14% 8.21% 23.21% 8.21% 9.29%;
            width: 80%;
            margin: auto;
            height: auto;
            max-width: 1400px;
            overflow: visible;
        }
        .home-portfolio-block {
            position: relative;
            height: 100%;
            /* background: #ccc; */
        }
        .home-portfolio-block-1 {
            grid-column:1;
            grid-row: 1;
            display: flex;
            align-items: flex-end;
            justify-content: center;
        }
        .home-portfolio-block-2 {
            grid-column: 3/6;
            grid-row: 1/4;
        }
        .home-portfolio-block-3 {
            grid-column: 1;
            grid-row: 3/6;
        }
        .home-portfolio-block-4 {
            grid-column: 5;
            grid-row: 5/8;
        }
        .home-portfolio-block-5 {
            grid-column: 1/4;
            grid-row: 7/10; 
        }
        .home-portfolio-block-6 {
            grid-column: 5;
            grid-row: 9;
            display: flex;
            justify-content:center;
            align-items: flex-start;
        }
    }
    @media screen and ( min-width: 801px ) and ( max-width: 1000px ) {
        .home-portfolio-base-desktop {
            grid-template-columns: 31.5% 11.5% 14% 11.5% 31.5%;
            grid-template-rows: 9.29% 8.21% 23.21% 8.21% 2.14% 8.21% 23.21% 8.21% 9.29%;
            width: 100%;
        }
    }
    @media screen and ( max-width: 800px ) {
        .home-portfolio-wrapper {
            margin: 80px auto 120px;
        }
        .home-portfolio-wrapper .home-section-content, .home-portfolio-base-desktop {
            display: none;
        }
        .home-portfolio-base-mobile {
            display: block;
            width: 100%;
        }
    
    }


`