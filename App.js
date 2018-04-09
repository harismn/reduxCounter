/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import { Provider } from 'react-redux';
import NameApp from './src/containers/nameApp';
import configureStore from './src/store/configureStore';
import nameApp from './src/containers/nameApp';

const store = configureStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <NameApp />
      </Provider>
    );
  }
}
