import React from 'react'
import {
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native'

export default (props: any) => {
  return (
    <TouchableOpacity
      style={[styles.button, props.style]}
      onPress={props.onPress}
    >
      <Text style={styles.text}>{props.value}</Text>
    </TouchableOpacity>
  )
}

export const styles = StyleSheet.create({
  button: {
    backgroundColor: '#4CD964',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
    borderRadius: 3,
    marginVertical: 10,
    
  },
  text: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 15,
  }
})

