import React, { useEffect, useState, useRef } from 'react'
import { 
  View, 
  StyleSheet, 
  Dimensions, 
  StatusBar,
} from 'react-native'
import Image from 'react-native-scalable-image'
import LinearGradient from 'react-native-linear-gradient'
import Carousel, { Pagination } from 'react-native-snap-carousel'

import { carouselItems } from '../static/entries'
import CarouselItem from '../components/welcome/CarouselItem'
import LinksBox from '../components/welcome/LinksBox'

interface Props {}
const Welcome = (props: any) => {

  const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window')
  const ptY = (viewportWidth * 470) / ((viewportHeight) * 375)
  const carouselRef = useRef(null)
  const sliderWidth = viewportWidth
  const itemWidth = sliderWidth
  const [activeSlide, setActiveSlide] = useState(0)

  const { navigate } = props.navigation
  
  useEffect(() => {
    return () => {
    }
  }, [])
  
  const _renderItem = ({ item, index }: { item: any, index: any}) => {
    return (
      <CarouselItem item={item} index={index} />
    )
  }

  return (
    <>
      <StatusBar barStyle='light-content' />
      <View style={styles.container}>
        <Image 
          source={require('../assets/images/bg.png')} 
          width={viewportWidth} 
          style={styles.backgroundImage} 
        />
        <LinearGradient 
          colors={['rgba(45,49,69,0.82)', '#2D3145']} 
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: ptY }}
          style={styles.backgroundGradient}
        >
          <Carousel
            ref={carouselRef}
            data={carouselItems}
            renderItem={_renderItem}
            sliderWidth={sliderWidth}
            itemWidth={itemWidth}
            loop={true}
            autoplay={true}
            lockScrollWhileSnapping={true}
            autoplayDelay={3000}
            autoplayInterval={5000}
            enableMomentum={false}
            activeAnimationType='decay'
            onSnapToItem={(index) => {setActiveSlide(index)}}
          />
          <Pagination
            dotsLength={carouselItems.length}
            activeDotIndex={activeSlide}
            containerStyle={{ backgroundColor: 'transparent', position: 'relative', top: -30}}
            dotStyle={{
              width: 10,
              height: 10,
              borderRadius: 5,
              marginHorizontal: 0,
              backgroundColor: 'rgba(255, 255, 255, 0.92)'
            }}
            inactiveDotStyle={{ }}
            inactiveDotOpacity={0.4}
            inactiveDotScale={1}
            carouselRef={carouselRef.current}
            tappableDots={!!carouselRef.current}
          />
          <View style={{flex: 0.4}}><LinksBox navigate={navigate} /></View>
        </LinearGradient>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
  },
  backgroundGradient: {
    flex: 1,
  },
})
export default Welcome
