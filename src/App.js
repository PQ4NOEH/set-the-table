import React, { Component } from 'react';
import AppHeader from './components/App/AppHeader';
import AppBody from './components/App/AppBody';

class App extends Component {
  render() {
    return (
      <div ref="mainPanel">
          <AppHeader/>
          <AppBody/>
        </div>
    );
  }
}

export default App;
