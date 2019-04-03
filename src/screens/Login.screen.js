import React, { Component } from 'react'
import { View, StyleSheet, Text, Image, KeyboardAvoidingView, ImageBackground } from 'react-native'
import styles from '../styles'
import Navigator from '../navigator'

import InputField from '../components/InputField.component'
import Button from '../components/Button.component'
import Card from '../components/Card.component'

import backgroundImage from '../../assets/Login.png'
import logo from '../../assets/logo.png'

export default class Login extends Component {
  constructor(props) {
    super(props)

    this.goToMain = this.goToMain.bind(this)
    this.goToRegister = this.goToRegister.bind(this)
  }

  goToMain() {
    Navigator.navigate('App')
  }

  goToRegister() {
    this.props.nav.navigate('Register', {
      leaveFrom: 'left'
    })
  }

  render() {
    return (
      <ImageBackground source={backgroundImage} style={{ width: '100%', height: '100%' }}>
        <KeyboardAvoidingView style={[styles.container, { flex: 1 }]} behavior="padding" enabled>
          <Image source={logo} style={{ height: 60, width: 300 }} />
          <Card style={{ marginTop: 50, width: '90%' }}>
            <Text style={styles.header}>Log in</Text>
            <Text style={styles.description}>Enter your credentials to log onto your account</Text>
            <InputField containerStyle={{ marginTop: 50 }} label="USERNAME" />
            <InputField containerStyle={{ marginTop: 10 }} label="PASSWORD" secureTextEntry />
            <Button containerStyle={{ marginTop: 40 }} onPress={this.goToMain}>
              Login
            </Button>
          </Card>
          <View style={{ marginTop: 20 }}>
            <Text style={[styles.description, { color: '#fff' }]}>
              Do you want to apply for an insurance?
            </Text>
            <Text
              style={[styles.description, { color: '#fff', textDecorationLine: 'underline' }]}
              onPress={this.goToRegister}
            >
              Register here
            </Text>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    )
  }
}
