import React from 'react'
import {
  View,
  TextInput,
  StyleSheet
} from 'react-native'

const Code = () => {
  const itemArray = [0, 1, 2, 3, 4, 5]
  
  return (
    <View style={styles.codeContainer}>
      {itemArray.map((_: any, index: any) => {
        console.log(index)
        return (
          <TextInput
            key={index}
            style={styles.codeItem}
          />
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  codeItem: {
    width: '12%',
    borderBottomWidth: 1,
    borderBottomColor: '#CACAD4',
    fontSize: 15,
    lineHeight: 20,
    paddingVertical: 15,
  },
})
export default Code
