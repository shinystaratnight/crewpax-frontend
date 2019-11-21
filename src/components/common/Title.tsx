import React from 'react'
import {
  Text,
  StyleSheet
} from 'react-native'

const Title = (props: any) => {
  return (
    <Text style={styles.title}>
      {props.value}
    </Text>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 34,
    lineHeight: 41,
    letterSpacing: 0.41,
    fontWeight: 'bold',
    marginVertical: 30,
  }
})

export default Title
