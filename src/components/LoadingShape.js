import React from 'react'
import {ShapeThree} from './Shapes/Shapes';
import styled from 'styled-components'

const LoadingShape = () => (
  <StyledLoadingShape className="jo-loading-shape">
    <ShapeThree/>
  </StyledLoadingShape>
)

export default LoadingShape

const StyledLoadingShape = styled.div`
    width: 100%;
    height: auto;
    margin: auto;
    display: flex;
    align-items:center;
    justify-content: center;
  
  svg {
    width: 50%;
    height: auto;
    max-width: 250px;

    ${({ large }) => large && `
      width: 100%;
      max-width: 400px;
    `}

    path {  
      -webkit-animation: loading-shape-rainbow 10s ease-in-out infinite;
      -ms-animation: loading-shape-rainbow 10s ease-in-out infinite;
      -o-animation: loading-shape-rainbow 10s ease-in-out infinite;
      animation: loading-shape-rainbow 10s ease-in-out infinite;
      animation-timing-function: ease-in-out; 
    }

  }
  
`