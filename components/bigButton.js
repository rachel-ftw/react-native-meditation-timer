import Expo from 'expo';
import React from 'react';
import { Button, StyleSheet, View } from 'react-native';

const BigButton = (props) => {
  const styles = StyleSheet.create({
    background: {
      backgroundColor: `${props.color}`,
    }
  })
  return (
    <View style={styles.background}>
      <Button
        onPress={props.onPress}
        title={props.title}
        // color={props.color}
        accessibilityLabel={props.accessibilityLabel}
      />
    </View>
  )
}


export {BigButton}
