import React, {Component} from 'react'
import {Link} from 'gatsby'
import {ShapeFive} from './Shapes/Shapes'
import LinkButton from './LinkButton'
import styled from 'styled-components'
import {screen} from '../styles/mediaQueries'

class NotFound extends Component {

  render(){
    return <StyledNotFound>
      <ShapeFive/>
      <div className="jo-not-found-text">
        <h1>Not Found</h1>
        <Link to='/'>
          <LinkButton size="large" text="Home" to="/"/>
        </Link>
      </div>
    </StyledNotFound>
  }

}

export default NotFound

const StyledNotFound = styled.div`
  
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    padding: 40px;
    box-sizing: border-box;

  svg {
    width: 30%;
    height: auto;
  }
  
  .jo-not-found-text {
    width: auto;
    display: flex;
    flex-direction:column;
    align-items: flex-start;
    justify-content: center;
    
    h1 {
      text-transform: uppercase;
      margin-bottom: 10px;
      font-size: 1.8rem;
      
      @media ${screen.sm}{
        font-size: 2.7rem;
      }

      @media ${screen.md}{
        font-size: 3.2rem;
      }

      @media ${screen.xl}{
        font-size: 3.8rem;
      }
    }
    
    h3 {
      -webkit-animation: white-rainbow 6s infinite;
      -ms-animation: white-rainbow 6s infinite;
      -o-animation: white-rainbow 6s infinite;
      animation: white-rainbow 6s infinite;
      font-size: 1.1rem;

      @media ${screen.sm}{
        font-size: 1.6rem;
      }

      @media ${screen.md}{
        font-size: 1.95rem;
      }

      @media ${screen.xl}{
        font-size: 2.35rem;
      }
    }
    
    a {
      text-decoration: none;
      margin: 1em auto;
    }
  }

`