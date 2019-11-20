import React from 'react'
import { View, Image } from 'react-native'

import { back } from '../../static/entries'

interface Props {
  onPress: any
}
const Left = () => (
    <View>
      <Image
        source={back}
      />
    </View>
  )

export default Left
