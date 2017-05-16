import Expo from 'expo';
import React, {Component} from 'react';
import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native';
import { BigButton } from './components/bigButton';
import Timer from './components/Timer'


class App extends Component {
  constructor() {
    super()
    this.onPress = this.onPress.bind(this)
  }
  onPress = () => {
    console.log('onpress is a function now, are you happy?')
  }
  render() {
    let button = (
      <TouchableOpacity style={styles.button} onpress={() => this.onPress}>
        <Text>hiiii</Text>
      </TouchableOpacity>
    )
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
        {button}
        <Timer />
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
  },
  button: {
    height: 80,
    marginTop: 5,
    paddingHorizontal: 10,
    backgroundColor: 'yellow',
    minWidth: '80%',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

Expo.registerRootComponent(App);
