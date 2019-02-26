import React, { Component } from 'react';
import AppHeader from './components/App/AppHeader';
import AppBody from './components/App/AppBody';

import {Router } from 'react-router-dom';

import { createBrowserHistory } from "history";
const hist = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <div ref="mainPanel">
        <Router history={hist} locale="es">
          <div>
          <AppHeader/>
          <AppBody/>
          </div>
          </Router>
        </div>
    );
  }
}

export default App;
