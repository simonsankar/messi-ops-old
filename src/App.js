import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Navigation from './components/Navigation Components/Navigation';
import Home from './components/Home Components/Home';
import Seasons from './components/Seasons Components/Seasons';
import Records from './components/Records Components/Records';
import MSN from './components/MSN Components/MSN';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/seasons" component={Seasons} />
          <Route path="/records" component={Records} />
          <Route path="/msn" component={MSN} />
        </Switch>
      </div>
    );
  }
}

export default App;
