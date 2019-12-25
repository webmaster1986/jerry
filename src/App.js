import React from 'react';
import {BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import { Provider } from "react-redux";
import SignUp from "./Component/SignUp/SignUp";
import Profile from "./Component/Profile/Profile";
import AddPaymentMethod from "./Component/Profile/AddPaymentMethod";
import store from "./store";
import './App.css';
import './assets/Styles/custom-styles.css'

function App() {
  return (
      <Provider store={store}>
      <Router>
          <Switch>
            <Route path="/profile/add-payment-method" component={AddPaymentMethod}/>
            <Route path="/profile" component={Profile}/>
            <Route path="/" component={SignUp}/>
          </Switch>
      </Router>
      </Provider>
  );
}

export default App;
