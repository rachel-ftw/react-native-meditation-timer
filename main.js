import Expo from 'expo';
import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput
} from 'react-native';
// import { BigButton } from './components/bigButton';
// import Timer from './components/Timer'
import { combineReducers, createStore } from 'redux'
import { connect, Provider } from 'react-redux'
// import { addTimer } from './actions'
// import { ADD_TIMER } from './constants/ActionTypes'

// let nextTimerId = 0
//
// const addTimer = (time) => ({ //acton
//   type: 'ADD_TIMER',
//   id: nextTodoId ++,
//   meditation_time: time
// })

// const AddTodoInput = connect((state) => ({
//   value: state.meditation_time
// }), (dispatch) => ({
//   onChangeText: text => {
//     dispatch(addTimer)
//   }
// }))(TextInput)

const userDefaults = {name: "Rachel", age: 31}
const userReducer = (state=userDefaults, action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      state = {...state, name: action.payload}
      break;
    case 'CHANGE_AGE':
      state = {...state, age: action.payload}
      break;
  }
  return state
}

const timerDefaults = [{id: 1, meditation_time: 5}]
const timersReducer = (state=timerDefaults, action) => {
  // console.log('spread state', JSON.stringify(state.push('hi')))
  switch (action.type) {
    case 'ADD_TIMER':
      state = state.push(action.payload)
      break;
    case 'DELETE_TIMER':
      state = state.filter
  }
  return state
}

const reducers = combineReducers({
  user: userReducer,
  timers: timersReducer
})

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.store = createStore(reducers)
  }
  render() {
    this.store.subscribe(() => {
      console.log('in the render, subscrition: ', this.store.getState())
    })
    this.store.dispatch({type: "CHANGE_NAME", payload: "Kato"})
    this.store.dispatch({type: "CHANGE_AGE", payload: 35})
    this.store.dispatch({type: "ADD_TIMER", payload: {id: 2, meditation_time: 15}})

    return (
      <Provider store={this.store}>
        <View style={styles.container}>
          <TextInput placeholder="minutes to meditate" />
          <TouchableHighlight>
            <Text>Add Timer</Text>
          </TouchableHighlight>
        </View>
      </Provider>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  }
});

Expo.registerRootComponent(App);
