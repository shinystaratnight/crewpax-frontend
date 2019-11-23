import React, { useState, useRef } from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
  TouchableHighlight,
} from 'react-native'

import { crewpax, mobileSignupDescription, chevron } from '../static/entries'
// import Chevron from '../components/common/Chevron'

const MobileSignup = () => {
  return (
    <KeyboardAvoidingView behavior='padding' style={{}}>
      <View style={styles.container}>
        <Image source={crewpax} style={styles.crewpaxImage} />
        <Text style={styles.title}>Phone</Text>
        <Text style={styles.description}>
          {mobileSignupDescription}
        </Text>
        <View style={{flexDirection: 'row',}}>
          <Text style={{paddingVertical:15,marginBottom:20}}>UA +380 {' '}
            <Image source={chevron} />
          </Text>
          
          <TextInput
            style={{fontSize: 15,color:'rgba(45,49,69,0.4)',borderBottomWidth:1,paddingVertical:15, borderBottomColor:'#CACAD4', marginBottom:20 }}
            placeholder='Phone'
            onChangeText={ () => {}}
          />
        </View>
        <TouchableHighlight
          style={{backgroundColor: '#4CD964', justifyContent:'center', alignItems: 'center',paddingVertical:18,borderRadius:3,marginVertical:150}}
          onPress={() => {}}
        >
          <Text style={{color:'#FFF',fontSize:15,fontWeight:'bold'}}>Request</Text>
        </TouchableHighlight>
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 18,
    paddingTop: 20,
  },
  crewpaxImage: {    
  },
  title: {
    fontSize: 34,
    lineHeight: 41,
    letterSpacing: 0.41,
    fontWeight: 'bold',
    marginVertical: 25,
  },
  description: {
    fontSize: 15,
    color: '#2D3145',
    lineHeight: 20,
  },
  phoneNumber: {
    flexDirection: 'row',
  },

})

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 13,
    lineHeight: 16,
    // paddingVertical: 12,
    // paddingHorizontal: 10,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
    paddingBottom: 10,
    // position: 'absolute',
    marginTop: 0,
    paddingTop: 0,
    // top: 20
  },
  inputAndroid: {
    fontSize: 13,
    lineHeight: 16,
    // paddingHorizontal: 10,
    // paddingVertical: 8,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon,
    paddingBottom: 10,
    paddingTop: 0,
    marginTop: 0,
    // top: 20,
  },
})

export default MobileSignup
