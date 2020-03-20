import React, { Component } from 'react';
import { Provider } from "react-redux";
import Navigation from './src/Navigator/Navigation'
import store from './src/Reducer/index'

export default class createAccountBirthMain extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}
