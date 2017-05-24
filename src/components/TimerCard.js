import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export const TimerCard = (props) => {
  const _handlePress = (event) => {
    console.log('Pressed!', event);
  }
  return (
    <TouchableOpacity onPress={_handlePress} style={styles.container}>
      <Text style={styles.timerTitle}>{props.name}</Text>
      <Text style={styles.timerTime}>{props.time} minutes</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 10,
    marginHorizontal: 15,
    marginVertical: 8,
    alignSelf: 'stretch',
  },
  timerTitle: {
    textAlign: 'center',
    fontSize: 35
  },
  timerTime: {
    textAlign: 'center',
    color: '#666'
  }
})
