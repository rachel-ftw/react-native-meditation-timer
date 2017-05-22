import React, { Component } from 'react';
import { combineReducers, createStore } from 'redux'
import { connect, Provider } from 'react-redux'
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';


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
  switch (action.type) {
    case 'ADD_TIMER':
      state = [...state, action.payload]
      break;
    case 'DELETE_TIMER':
      state = state.filter(timer => timer.id !== action.payload.id)
      break;
    case 'EDIT_TIMER':
      state = state.map(timer =>
        timer.id === action.payload.id
          ? {...timer, meditation_time: action.payload.meditation_time}
          : timer
        )
      break;
  }
  return state
}

const reducers = combineReducers({
  user: userReducer,
  timers: timersReducer
})

const mapStateToProps = state => ({user: state.user, timers: state.timers})

const matchDispatchToProps = dispatch => ({
  changeName: name => dispatch({type: "CHANGE_NAME", payload: name}),
  changeAge: age => dispatch({type: "CHANGE_AGE", payload: age}),
  addTimer: (id, meditation_time) => dispatch({type: "ADD_TIMER", payload: {id, meditation_time}}),
  deleteTimer: id => dispatch({type: "DELETE_TIMER", payload: {id}}),
  editTimer: (id, meditation_time) => dispatch({type: "EDIT_TIMER", payload: {id, meditation_time}})
})


class App extends Component {
  constructor() {
    super()
    this.store = createStore(reducers)
  }
  render() {
    this.store.subscribe(() => {
      console.log('in the render, subscrition: ', this.store.getState())
    })
    // this.store.dispatch({type: "CHANGE_NAME", payload: "Kato"})
    // this.store.dispatch({type: "CHANGE_AGE", payload: 35})
    // this.store.dispatch({type: "ADD_TIMER", payload: {id: 2, meditation_time: 15}})
    // this.store.dispatch({type: "ADD_TIMER", payload: {id: 3, meditation_time: 327}})
    // this.store.dispatch({type: "DELETE_TIMER", payload: {id: 3}})
    // this.store.dispatch({type: "EDIT_TIMER", payload: {id: 2, meditation_time: 2}})
    console.log('!!!!!!!!!!', this.props)
    return (
      <Provider store={this.store}>
        <View style={styles.container}>
          <TextInput placeholder="minutes to meditate" />
          <TouchableHighlight>
            <Text>hi </Text>
          </TouchableHighlight>
        </View>
      </Provider>
    );
  }
}
connect(mapStateToProps, matchDispatchToProps)(App)



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  }
});

AppRegistry.registerComponent('App', () => App);
