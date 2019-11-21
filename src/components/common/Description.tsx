import React from 'react'
import {
  Text,
  StyleSheet,
} from 'react-native'

const Description = (props: any) => {
  return (
    <Text style={styles.description}>
      {props.description}
    </Text>
  )
}

const styles = StyleSheet.create({
  description: {
    fontSize: 15,
    color: '#2D3145',
    lineHeight: 20,
    marginBottom: 25,
  },  
})

export default Description
