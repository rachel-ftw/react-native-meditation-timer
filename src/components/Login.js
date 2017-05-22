import React, { Component } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import NewTimerForm from './NewTimerForm'

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require('../assets/icons/lotus.png')}
          />
        <Text style={styles.title}>Create a New Meditation Timer</Text>
        </View>
        <View style={styles.formContainer}>
          <NewTimerForm />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: "#fff",
    marginTop: 10,
    width: 140,
    textAlign: 'center',
    opacity: 0.5
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  logo: {
    width: 100,
    height: 100,
  }
})
