import React from 'react';
import {BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import { Provider } from "react-redux";
import SignUp from "./Component/SignUp/SignUp";
import Profile from "./Component/Profile/Profile";
import LoanDetails from "./Component/LoanDetails/LoanDetails";
import AddPaymentMethod from "./Component/Profile/AddPaymentMethod";
import MakePayment from "./Component/MakePayment/MakePayment";
import VerifyPayment from "./Component/VerifyPayment";
import store from "./store";
import './App.css';
import './assets/Styles/custom-styles.css'

function App() {
  return (
      <Provider store={store}>
      <Router>
          <Switch>
            <Route path="/profile/add-payment-method" component={AddPaymentMethod}/>
            <Route path="/loan-details" component={LoanDetails}/>
            <Route path="/make-payment" component={MakePayment}/>
            <Route path="/verify-payment" component={VerifyPayment}/>
            <Route path="/profile" component={Profile}/>
            <Route path="/" component={SignUp}/>
          </Switch>
      </Router>
      </Provider>
  );
}

export default App;
