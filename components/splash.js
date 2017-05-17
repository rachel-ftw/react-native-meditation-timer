import Expo from 'expo';
import React, { Component } from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';

class Splash extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('./assets/icons/lotus.png')}
          style={styles.splash}>
        </Image>
        <Text style={styles.title}>JUST SIT</Text>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3d3d3d',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#50E3C2',
    fontSize: 30,
  },
  splash: {
    flex:1,
    maxWidth: '50%',
    maxHeight: '50%',
  }
});
