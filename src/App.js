import React, { Component } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";

import "bootstrap/dist/css/bootstrap.css";
import Aux from "./hoc/Aux";

class App extends Component {
  state = {
    loggedIn: false
  };

  handleLogin = response => {
    // console.log(response);
    if (response.error) {
      this.setState({ loggedIn: false });
    } else {
      this.setState({ loggedIn: true });
    }
  };

  render() {
    return (
      <Router>
        <Layout>
          <Switch>
            <Route
              exact
              path="/"
              render={() =>
                this.state.loggedIn ? (
                  <Redirect to="/profile" />
                ) : (
                  <Home onLogin={this.handleLogin} />
                )
              }
            />
            <Route
              exact
              path="/home"
              render={() =>
                this.state.loggedIn ? (
                  <Redirect to="/profile" />
                ) : (
                  <Home onLogin={this.handleLogin} />
                )
              }
            />
            <Route
              path="/profile"
              render={() =>
                this.state.loggedIn ? (
                  <Profile />
                ) : (
                  <Aux>
                    <Redirect to="/home" />
                    {alert(
                      "You are not authorised to access this page. Please Login!"
                    )}
                  </Aux>
                )
              }
            />
          </Switch>
        </Layout>
      </Router>
    );
  }
}

export default App;
