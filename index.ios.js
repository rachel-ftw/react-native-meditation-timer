import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Splash } from './src/containers/Splash'
import Login from './src/components/Login'

export default class justSit extends Component {
  onPressLearnMore = () => Alert.alert("pressed the learn more button")
  render() {
    return (
      <Login />
    );
  }
}

AppRegistry.registerComponent('justSit', () => justSit);
