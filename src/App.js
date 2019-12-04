import React from 'react';
import {BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import { Provider } from "react-redux";
import SignUp from "./Component/SignUp/SignUp";
import store from "./store";

import './App.css';
import './assets/Styles/custom-styles.css'

function App() {
  return (
      <Provider store={store}>
      <Router>
          <Switch>
            <Route path="/" component={SignUp}/>
          </Switch>
      </Router>
      </Provider>
  );
}

export default App;
