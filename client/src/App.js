import React, { Component } from "react";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";

const HomePage = React.lazy(() => import("./components/HomePage"));
const TestPage = React.lazy(() => import("./components/TestPage"));

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

class App extends Component {
  render() {
    return (
      <HashRouter>
        <React.Suspense fallback={loading}>
          <Switch>
            <Route
              exact
              path="/"
              name="Home"
              render={(props) => <HomePage {...props} />}
            />
            <Route
              exact
              path="/test"
              name="Test"
              render={(props) => <TestPage {...props} />}
            />
            <Redirect from="/*" to="/"></Redirect>
          </Switch>
        </React.Suspense>
      </HashRouter>
    );
  }
}

export default App;
