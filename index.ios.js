import React, { Component } from 'react';
import { AppRegistry, StatusBar, View } from 'react-native';
import { Splash } from './src/containers/Splash'
import NewTimerContainer from './src/components/NewTimerContainer'
import TimerCardContainer from './src/components/TimerCardContainer'

export default class justSit extends Component {
  onPressLearnMore = () => Alert.alert("pressed the learn more button")
  render() {
    return (
        <TimerCardContainer />
    );
  }
}

AppRegistry.registerComponent('justSit', () => justSit);
