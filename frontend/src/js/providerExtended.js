import React, {Component} from "react";
import {
    BrowserRouter as Router,
} from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from '../Redux/store'
const initialState = {};
const store = configureStore(initialState)



export default class ProviderExtended extends Component {

  render() {
    const {children} = this.props;

    return (
      <Provider store={store}>
      <Router>
        {children}
      </Router>
      </Provider>
        );
  }
}
