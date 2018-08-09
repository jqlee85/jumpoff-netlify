import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class LambdaDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {loading: false, msg: null};
  }

  handleClick = (e) => {
    e.preventDefault();
    this.setState({loading: true});
    fetch('/.netlify/functions/hello?email=' + document.location.pathname.replace('/',''))
      .then(response => response.json())
      .then(json => this.setState({loading: false, msg: json.msg, avatar: json.avatar}));
  }

  render() {
    const {loading, msg, avatar} = this.state;
    return <div>
      <button onClick={this.handleClick}>{loading ? 'Loading...' : 'Call Lambda'}</button><br/>
      <span>{msg}</span>
      <div>
      {avatar ? <img src={avatar} alt="An avatar" /> : ''}
      </div>
    </div>
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <LambdaDemo/>
      </div>
    );
  }
}

export default App;
