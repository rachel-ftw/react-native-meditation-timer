import Expo from 'expo';
import React, {Component} from 'react';
import { StyleSheet, Text, Image, View, TouchableHighlight } from 'react-native';
import { BigButton } from './components/bigButton';
import Timer from './components/Timer'
import { connect } from 'react-redux'
import { addTimer } from '../actions'


class App extends Component {
  render() {
    return (
      <AddTimer />
    );
  }
}

let AddTodo = ({dispatch}) => {
  let input

  return (
    <View>
      <form onSubmit = { event => {
        event.preventDefault()
        const timeInSeconds = input.value * 60
        dispatch(addTimer(timeInSeconds))
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
      <button type='submit'>Add Timer</button>
      </form>
    </View>
  )
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#3d3d3d',
//     alignItems: 'center',
//     justifyContent: 'flex-start',
//     paddingTop: 20,
//   },
//   lotus: {
//     flex:1,
//     maxWidth: '20%',
//     maxHeight: '20%',
//   },
//   button: {
//     height: 80,
//     marginTop: 5,
//     paddingHorizontal: 10,
//     backgroundColor: 'yellow',
//     minWidth: '80%',
//     alignItems: 'center',
//     justifyContent: 'center'
//   }
// });

Expo.registerRootComponent(App);
