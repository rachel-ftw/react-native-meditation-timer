import React, { Component } from 'react';
import {
  Alert,
  AppRegistry,
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';
import {Splash} from './containers/Splash'

export default class justSit extends Component {
  onPressLearnMore = () => Alert.alert("pressed the learn more button")
  render() {
    return (
      <Splash />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
    backgroundColor: '#ccc',
  }
});

AppRegistry.registerComponent('justSit', () => justSit);
