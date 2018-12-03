import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import { Container } from 'semantic-ui-react';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Seasons from './components/Seasons';

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
