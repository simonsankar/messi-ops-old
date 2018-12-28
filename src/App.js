import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Navigation from "./components/Navigation Components/Navigation";
import Home from "./components/Home Components/Home";
import Seasons from "./components/Seasons Components/Seasons";
import MSNHeader from "./components/MSN Components/MSNHeader";

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/seasons" component={Seasons} />
          <Route path="/msn" component={MSNHeader} />
        </Switch>
      </div>
    );
  }
}

export default App;
