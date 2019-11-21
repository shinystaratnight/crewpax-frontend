import React from 'react'
import {
  View,
  StyleSheet,
  Image
} from 'react-native'

import { chevron } from '../../static/entries'

const Chevron = (props: any) => {
  return (
    <View style={[styles.chevron, props.style]}>
      <Image source={chevron} />
    </View>
  )
}

const styles = StyleSheet.create({
  chevron: {
    width: 12,
    height: 8
  },
})

export default Chevron
