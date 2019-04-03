import { LinearGradient } from 'expo'
import React, { Component } from 'react'
import { View, StyleSheet, Text, Image, KeyboardAvoidingView, ImageBackground } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from '../styles'

import InputField from '../components/InputField.component'
import Button from '../components/Button.component'

import backgroundImage from '../../assets/Landing.png'
import logo from '../../assets/logo.png'

export default class Main extends Component {
  render() {
    return (
      <ImageBackground source={backgroundImage} style={{ width: '100%', height: '100%' }}>
        <KeyboardAvoidingView style={[styles.container, { flex: 1 }]}>
          <Image source={logo} style={{ height: 60, width: 300, position: 'absolute', top: 100 }} />
          <View style={{ width: '80%', position: 'absolute', bottom: 120 }}>
            <Button icon="arrow-circle-o-left" alignIcon="left">
              Login
            </Button>
            <Button icon="arrow-circle-o-right" alignIcon="right">
              Register
            </Button>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    )
  }
}
