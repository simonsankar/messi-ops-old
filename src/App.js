import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Blog from "./components/Blog/Blog";
import Seasons from "./components/Seasons/Seasons";
import Records from "./components/Records/Records";
import ArgumentsAgainst from "./components/ArgumentsAgainst/ArgumentsAgainst";
import MSN from "./components/MSN/MSN";

class App extends Component {
  render() {
    return (
      <>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/blog" component={Blog} />
          <Route path="/seasons" component={Seasons} />
          <Route path="/records" component={Records} />
          <Route path="/args" component={ArgumentsAgainst} />
          <Route path="/msn" component={MSN} />
        </Switch>
        <Footer />
      </>
    );
  }
}

export default App;
