import React, { Component } from "react";
import store from "./store/store";
import { Provider } from "react-redux";
import { Route, Link } from "react-router-dom";

import Home from "./components/pages/home";
import Login from "./components/pages/login";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <section>
          <nav>
            <h1>Here comes a navigation</h1>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/login">login</Link>
              </li>
            </ul>
          </nav>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <footer>
            <h1>Here comes a footer</h1>
          </footer>
        </section>
      </Provider>
    );
  }
}
export default App;
