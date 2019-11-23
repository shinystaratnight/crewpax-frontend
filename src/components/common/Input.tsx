import React, { forwardRef } from 'react'
import {
  StyleSheet,
  TextInput
} from 'react-native'

interface Props {
  style?: any,
  placeholder: string,
  onChangeText: any,
  keyboardType?: string | undefined,
  secureTextEntry?: boolean | undefined,
}

const Input = ({ style, placeholder, onChangeText, keyboardType, secureTextEntry }: Props, ref: any) => {
  return (
    <TextInput
      style={[styles.input, style]}
      placeholder={placeholder}
      placeholderTextColor='rgba(45,49,69,0.4)'
      ref={ref}
      onChangeText={(text) => onChangeText(text)}
      keyboardType={keyboardType || 'default'}
      secureTextEntry={secureTextEntry || false}
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
  },
})

export default forwardRef(Input)
