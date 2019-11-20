import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { logo } from '../../static/entries'

interface ItemType {
  imgUrl: any,
  subtitle: string,
  description: string,
}

interface Props {
  item: ItemType,
  index: number,
}

const CarouselItem = ({ item, index}: Props) => {
  return (
    <View style={styles.container}>
      <View style={[styles.logoImage, styles.alignContent]}><Image source={logo} /></View>
      <View style={[styles.entryIcon, styles.alignContent]}><Image source={item.imgUrl} /></View>
      <View style={[styles.descriptor, styles.alignContent]}>
        <Text style={styles.subtitle}>{item.subtitle}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  alignContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  logoImage: {
    flex: 3,
  },
  entryIcon: {
    flex: 1,
  },
  descriptor: {
    flex: 2,
    paddingHorizontal: '14%',
  },
  subtitle: {
    color: 'white',
    fontSize: 22,
    marginBottom: 15,
    fontWeight: 'bold',
  },
  description: {
    color: 'white',
    fontSize: 13,
    lineHeight: 16,
    textAlign: 'center',
  }
})

export default CarouselItem
