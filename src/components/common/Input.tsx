import React from 'react'
import {
  StyleSheet,
  TextInput
} from 'react-native'

const Input = (props: any) => {
  return (
    <TextInput
      style={[styles.input, props.style]}
      placeholder={props.placeholder}
      placeholderTextColor='rgba(45, 49, 69, 0.4)'
      onChangeText={props.onChangeText}
      secureTextEntry={props.secureTextEntry}
    />
  )
}

const styles = StyleSheet.create({
  input: {
    fontSize: 15,
    lineHeight: 18,
    color: '#000',
    borderBottomWidth: 1,
    paddingVertical: 15,
    borderBottomColor: '#CACAD4',
    marginBottom: 10,
  }  
})

export default Input
