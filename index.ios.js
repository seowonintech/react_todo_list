/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// React Native
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

// Redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';
// Custom
import Counter from './example/counter/Counter';
import counterApp from './example/counter/reducers';

const store = createStore(counterApp);

export default class react_todo_list extends Component {
  render() {
    return (
      <Provider store={ store }>
        <Counter />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('react_todo_list', () => react_todo_list);
