import React, { Component } from "react";
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from "./routes";
import {PropsRoute} from 'react-router-with-props';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { withRouter } from "react-router";
import Nav from './components/Nav/Nav';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';


class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = { 
      navToggled: false,
      navFrontToggled: false,
      navInitialized: false,
      appScrolled: false,
      appScrolledClass: 'app-scrolled',
      solidHeaderClass: 'solid-header',
      keepTogglerWhite: false,
      headerSolid: false
    };  
  }

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll, true);
  }

  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll, true);
  }

  // initializeMenuBar(){
  //   this.setState(prevState => ({
  //     navInitialized: true
  //   }));
  // }

  handleScroll = (e) => {
    // let appScrolled = this.state.appScrolled;
    let yPos;
    if ( typeof(e.target.scrollingElement.scrollTop) !== 'undefined' ) {
      yPos = e.target.scrollingElement.scrollTop;
    } else if ( typeof(e.srcElement.scrollingElement.scrollTop) !== 'undefined' ) {
      yPos = e.srcElement.scrollingElement.scrollTop;
    }
    
    if (yPos || yPos === 0) {
      if ( yPos >= 60 && !this.state.headerSolid ) {
        this.makeHeaderSolid();
      } else if ( yPos < 60 && this.state.headerSolid ) {
        this.makeHeaderTransparent();
      }
    }
  }

  makeHeaderSolid = () => {
    // console.log('makesolid');
    this.setState(prevState => ({
      headerSolid: true
    }));
  }

  makeHeaderTransparent = () => {
    // console.log('maketransp');
    this.setState(prevState => ({
      headerSolid: false
    }));
  }

  checkHeaderSolid = (keepTogglerWhite) => {
    if (keepTogglerWhite) {
      this.setState(prevState => ({
        keepTogglerWhite: true
      }));
    } else {
      this.setState(prevState => ({
        keepTogglerWhite: false
      }));
    }
  }

  toggleAppNav = () => {
    
    if ( this.state.navToggled && !this.state.navInitialized) {
      this.setState(prevState => ({
        navInitialized: true
      }));
    }
    
    // Change Navigation Z-Index
    if (this.state.navFrontToggled) {
      setTimeout(() => {
        this.setState(prevState => ({
          navFrontToggled: !prevState.navFrontToggled
        }));
      },400);
    } else {
      this.setState(prevState => ({
        navFrontToggled: !prevState.navFrontToggled
      }));
    }
    // Toggle the Navigation
    setTimeout(() => {
      this.setState(prevState => ({
        navToggled: !prevState.navToggled
      }));
    }, 100); 
  }
  
  render() {
    let appClasses = 'App';
    if (this.state.navToggled) appClasses += ' app-menu-toggled';
    if (this.state.navFadeToggled) appClasses += ' nav-fade';
    if (this.state.keepTogglerWhite) appClasses += ' ' + 'keep-toggler-white';
    if (this.state.appScrolled) appClasses += ' ' + this.state.appScrolledClass;
    if (this.state.headerSolid) appClasses += ' ' + this.state.solidHeaderClass;
    return (
        <Route render={({ location }) => (
          
          <div id="App" className={appClasses}>
            <Nav 
              menuToggled={this.state.navToggled} 
              userLogin={this.props.requestUserLogin} 
              userData={this.props.user} 
              userLogout={this.props.userLogout}
              toggleNav={this.toggleAppNav}
              navFront={this.state.navFrontToggled}
              navInitialized={this.state.navInitialized}
            />
            <Header 
              menuToggled={this.state.navToggled} 
              userLogin={this.props.requestUserLogin} 
              userData={this.props.user}
              toggleNav={this.toggleAppNav}
            />
            <div className="main">
              <TransitionGroup>
                <CSSTransition
                  key={location.key}
                  classNames="fade"
                  timeout={600}
                >
                  <Switch location={location}>
                    {routes.map((route, i) => <PropsRoute 
                      key={i}
                      exact={route.exact} 
                      path={route.path} 
                      component={route.component} 
                      checkHeaderSolid={this.checkHeaderSolid}
                    />)}
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            </div>
            <Footer />
          </div>
          
        )}/>
      
    );
  }
}

export default withRouter(App);
