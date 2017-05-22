import React, { Component } from "react"
import { View, Text, StyleSheet } from "react-native"

export const Splash = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>JUST SIT</Text>
      </View>

      <Text style={styles.subtitle}>Meditation Timer</Text>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#333'
  },
  title: {
    color: '#fff',
    fontSize: 35,
    fontWeight: 'bold'
  },
  titleWrapper: {
    justifyContent: 'center',
    flex: 1
  },
  subtitle: {
    color: '#888',
    fontWeight: '200',
    paddingBottom: 20
  },

})
