import Expo from 'expo';
import React, {Component} from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import { BigButton } from './components/bigButton';

class App extends Component {
  onPress = () => {
    console.log('onpress is a function now, are you happy?')
  }
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('./assets/icons/lotus.png')}
          style={styles.lotus}>
        </Image>
        <BigButton
          color="#50E3C2"
          title="5 min"
          accessibilityLabel="A 5 minute meditation timer"
          onPress={this.onPress} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3d3d3d',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 20,
  },
  lotus: {
    flex:1,
    maxWidth: '20%',
    maxHeight: '20%',
  }
});

Expo.registerRootComponent(App);
