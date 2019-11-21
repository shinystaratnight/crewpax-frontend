import React from 'react'
import { 
  View, 
  Image, 
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native'

import {
  crewpax,
  enterCodeDescription
} from '../static/entries'
import { commonStyles } from '../static/styles'
import Title from '../components/common/Title'
import Description from '../components/common/Description'
import Input from '../components/common/Input'
import Button from '../components/common/Button'
import Code from '../components/signup/Code'

const ConfirmCode = () => {
  return (
    <KeyboardAvoidingView behavior='padding' style={{}}>
      <View style={commonStyles.loginContainer}>
        <Image source={crewpax} />
        <Title
          value="Enter your Code"
        />
        <Description
          description={enterCodeDescription}
        />
        <Code />
        <Button
          value="Request"
        />
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
    
  }
})
export default ConfirmCode
