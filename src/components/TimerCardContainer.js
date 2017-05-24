import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TimerCard } from './TimerCard'

export default class TimerCardContainer extends Component {
  state = {
    timers: [{
        id: 1,
        name: 'Serene AF',
        meditation_time: 5
      }, {
        id: 2,
        name: 'Just Sit Down and Be Still',
        meditation_time: 10
      }]
  }

  cards = this.state.timers.map(timer => (
    <TimerCard
      key={timer.id}
      name={timer.name}
      time={timer.meditation_time}
    />
  ))

  render() {
    return (
      <View style={styles.container}>
        {this.cards}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#333'
  }
})
