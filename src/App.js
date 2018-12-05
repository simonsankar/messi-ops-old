import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Navigation from './components/Navigation Components/Navigation';
import Home from './components/Home Components/Home';
import Seasons from './components/Seasons Components/Seasons';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/seasons" component={Seasons} />
        </Switch>
      </div>
    );
  }
}

export default App;
