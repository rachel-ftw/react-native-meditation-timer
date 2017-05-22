import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView
} from 'react-native'

export default class NewTimerForm extends Component {
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <TextInput
          placeholder="Timer Name"
          placeholderTextColor='rgba(255,255,255,0.5)'
          style={styles.input}
        />
        <TextInput
          placeholder="Time In Minutes"
          placeholderTextColor='rgba(255,255,255,0.5)'
          style={styles.input}
        />
        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.submitButtonText}>SUBMIT</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom: 10,
    width: 330,
    color: '#fff',
    padding: 8
  },
  submitButton: {
    alignSelf: 'center',
    paddingVertical: 10,
    paddingHorizontal: 138,
    backgroundColor: 'green',
  },
  submitButtonText: {
    color: '#fff',
    fontWeight: '700'
  }
})
