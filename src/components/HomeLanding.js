import React, {Component} from 'react'
import {ShapeOne,ShapeTwo,ShapeThree,ShapeFour} from './Shapes/Shapes';
// import HomeBoids from '../HomeBoids/HomeBoids';
import styled from 'styled-components'
import {screen} from '../styles/mediaQueries'

class HomeLanding extends Component {

  render(){
    
    return <StyledHomeLanding className="home-section-one home-landing">
      {/* <HomeBoids/> */}
      <div className="jo-home-shapes-wrapper aspectRatioSizer">
        <ShapeOne classNames={'jo-home-shape jo-home-shape-1'}/>
        <ShapeTwo classNames={'jo-home-shape jo-home-shape-2'}/>
        <ShapeThree classNames={'jo-home-shape jo-home-shape-3'}/>
        <ShapeFour classNames={'jo-home-shape jo-home-shape-4'}/>
      </div>
      <div className="jo-home-title-wrapper">
        <h1 className="jo-home-title">JumpOff</h1>
        <p className="jo-home-description">web development by Jesse Lee<br/>unique, modern web experiences</p>
      </div>
    </StyledHomeLanding>
  }

}

export default HomeLanding

const StyledHomeLanding = styled.section`

  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  box-sizing: border-box;
  height: auto;
  height: 100vh;
  z-index: 10;
  
  .jo-home-shapes-wrapper {
    position: absolute;
    box-sizing: border-box;
    height: 100%;
    height: 100vw;
    width: 100%;
    width: 100vw;
    overflow:hidden;
    right: 0;
    width: 165vw;
    height: 165vw;
    bottom: 150px;
    right: 10px;

    @media ${screen.xs} {
    }

    @media ${screen.sm} {
      width: 130vw;
      height: 130vw;
      bottom: 190px;
    }
  
    @media ${screen.md} {
      bottom: 82px;
    }

    @media ${screen.lg} {
      bottom: 0;
    }

    @media ${screen.xl} {
      
    }

    @media ${screen.xxl} {
      
    }

    @media ${screen.sm} and ${screen.uptomd} and (max-height: 780px) {
      bottom: 0px;
    }

    

  }
  .jo-home-shape {
    position: absolute;
    height:auto;
  }
  .jo-home-shape-1 {
    right: 20px;
    bottom: 20px;
    width: 28%;

    @media ${screen.sm} {
      
    }

    @media ${screen.md} {
      right: 40px;
      bottom: 40px;
    }

    @media ${screen.xl} {
      right: 80px;
      bottom: 80px;
    }

    path, polygon, rect {
    fill: #191919;
    }
  }
  .jo-home-shape-2 {
    width: 27.5%;
    right: calc(21% + 20px);
    bottom: calc(10% + 20px);

    @media ${screen.md} {
      right: calc(21% + 40px);
      bottom: calc(10% + 40px);
    }

    @media ${screen.xl} {
      right: 25%; /* fallback if needed */
      right: calc(21% + 80px);
      bottom: 14%; /* fallback if needed */
      bottom: calc(10% + 80px);
    }

    path {
      /* fill: url('#jo-home-landing-shape-gradient') #191919;  */
    }
  }
  .jo-home-shape-3 {
    width: 27%;
    right: calc(3% + 20px);
    bottom: calc(23% + 20px);

    @media ${screen.sm} {
    }

    @media ${screen.md} {
      right: calc(3% + 40px);
      bottom: calc(23% + 40px);
    }

    @media ${screen.xl} {
      right: 7%; /* fallback if needed */
      right: calc(3% + 80px);
      bottom: 27%; /* fallback if needed */
      bottom: calc(23% + 80px);
    }
  }
  
  .jo-home-shape-4 {
    width: 23%;
    transform: rotate(-34deg);
    right: calc(24% + 20px);
    bottom: calc(40% + 20px);

    @media ${screen.sm} {
      right: calc(24% + 20px);
      bottom: calc(40% + 20px);
      width: 21%;
    }

    @media ${screen.md} {
      right: calc(24% + 40px);
      bottom: calc(40% + 40px);
    }

    @media ${screen.xl} {
      right: 28%; /* fallback if needed */
      right: calc(24% + 80px);
      bottom: 44%; /* fallback if needed */
      bottom: calc(40% + 80px);
      width: 23%;
    }

  }
  
  .jo-home-title-wrapper {
    height: auto;
    padding: 30px;
    padding-bottom: 80px;
    box-sizing: border-box;
    z-index: 20; 

    @media ${screen.md} {
      padding-left: 40px;
      padding-bottom: 40px;
    }

    @media ${screen.xl} {
      padding-left: 80px;
      padding-bottom: 80px;
    }  
  

  }
  
  h1.jo-home-title {
    font-family: 'Montserrat', sans-serif;
    text-transform: uppercase;
    font-weight: bold;
    text-align: left;
    font-size: 40px; 

    @media ${screen.xs} {
      font-size: 60px; 
    }

    @media ${screen.sm} {
      font-size: 90px; 
    }

    @media ${screen.md} {
      font-size: 105px; 
    }

    @media ${screen.xl} {
      font-size: 120px;
    }

    @media ${screen.xxl} {
      font-size: 160px;
    }
  }
  
  .jo-home-description {
    text-align: left;
    font-weight: 300;
    font-size: 16px;

    @media ${screen.xs} {
      font-size: 20px;
    }

    @media ${screen.sm} {
      font-size: 24px;
    }
  
    @media ${screen.md} {
      font-size: 34px;
    }

    @media ${screen.lg} {
      
    }

    @media ${screen.xl} {
      font-size: 44px;
    }

    @media ${screen.xxl} {
      font-size: 60px;
    }
  
  }
  
  .jo-scroll-down {
    height: 60px;
    width: 100%;
  }

  /* Media Queries */
  
  




`