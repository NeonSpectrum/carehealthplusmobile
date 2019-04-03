import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  Text,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  ImageBackground
} from 'react-native'
import styles from '../styles'

import InputField from '../components/InputField.component'
import Button from '../components/Button.component'
import Card from '../components/Card.component'

import backgroundImage from '../../assets/Login.png'

export default class Register extends Component {
  render() {
    return (
      <ImageBackground source={backgroundImage} style={{ width: '100%', height: '100%' }}>
        <ScrollView keyboardShouldPersistTaps="handled">
          <KeyboardAvoidingView
            style={[styles.container, { flex: 1 }]}
            behavior="padding"
            keyboardVerticalOffset={100}
            enabled
          >
            <Card style={{ width: '90%' }}>
              <Text style={styles.header}>Registration</Text>
              <Text style={styles.description}>Supply the required fields.</Text>
              <InputField containerStyle={{ marginTop: 40 }} label="Membership ID" />
              <InputField label="Username" />
              <InputField label="First Name" />
              <InputField label="Last Name" />
              <InputField label="Password" secureTextEntry />
              <Button containerStyle={{ marginTop: 40 }}>Register</Button>
            </Card>
          </KeyboardAvoidingView>
        </ScrollView>
      </ImageBackground>
    )
  }
}
