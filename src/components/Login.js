import React, { Component } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={}></Image>
        </View>
        <View style={styles.formContainer}>

        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
