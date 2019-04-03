import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { createAppContainer, createStackNavigator, SafeAreaView } from 'react-navigation'

import styles from '../styles'

import SearchScreen from '../screens/Search.screen'

export default createAppContainer(
  createStackNavigator({
    Search: { screen: SearchScreen }
  })
)
