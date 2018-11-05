import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { ApolloProvider } from 'react-apollo';
import client from './graphql/apolloClient';
import ScrollToTop from 'react-router-scroll-top';
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
<ApolloProvider client={client} >
  <Router> 
    <ScrollToTop>  
      <App />
    </ScrollToTop>
  </Router>
</ApolloProvider>
, document.getElementById('root'));
registerServiceWorker();
