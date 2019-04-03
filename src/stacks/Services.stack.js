import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { createAppContainer, createStackNavigator, SafeAreaView } from 'react-navigation'

import styles from '../styles'

import ServicesScreen from '../screens/Services.screen'

export default createAppContainer(
  createStackNavigator({
    Services: { screen: ServicesScreen, navigationOptions: { title: 'Services' } }
  })
)
