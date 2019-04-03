import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { createAppContainer, createStackNavigator, SafeAreaView } from 'react-navigation'

import styles from '../styles'

import DashboardScreen from '../screens/Dashboard.screen'

export default createAppContainer(
  createStackNavigator({
    Dashboard: { screen: DashboardScreen, navigationOptions: { title: 'Dashboard' } }
  })
)
