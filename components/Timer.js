import React, { Component } from 'react'
import { StyleSheet, View, TouchableOpacity, Image, Text, Dimensions } from 'react-native'

export default class Timer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      seconds: this.props.seconds,
      timer: null
    }
    this.renderCountdown = this.renderCountdown.bind(this)
  }
  //takes in props.seconds
  renderCountdown = () => {
    console.log('in renderCountdown')
    let interval = 1000,
        duration = this.state.seconds * interval
        _this = this
    this.log('duration is', duration)
    let timer = setInterval(() => {
      duration = duration - interval
      _this.setState({
        seconds: duration / 1000,
        timer: timer
      })
      if (duration <= 1) {
        _thi.setState({
          seconds: '',
          timer: null
        }, () => clearInterval(timer))
      }
    }, interval)
  }
  render() {
    return (

    )
  }
}
