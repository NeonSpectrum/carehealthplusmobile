import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { createAppContainer, createStackNavigator } from 'react-navigation'

import ProfileScreen from '../screens/Profile.screen'

import styles from '../styles'

export default createAppContainer(
  createStackNavigator({
    Profile: { screen: ProfileScreen, navigationOptions: { header: null } }
  })
)
