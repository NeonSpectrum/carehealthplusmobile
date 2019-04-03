import React, { Component } from 'react'
import { Platform } from 'react-native'
import { createAppContainer, createStackNavigator, SafeAreaView } from 'react-navigation'

import AppStack from './src/stacks/App.stack.js'
import MainStack from './src/stacks/Main.stack.js'

import Navigator from './src/navigator'

if (Platform.OS === 'android') {
  SafeAreaView.setStatusBarHeight(0)
}

const AppContainer = createAppContainer(
  createStackNavigator(
    {
      Main: MainStack,
      App: AppStack
    },
    { defaultNavigationOptions: { header: null } }
  )
)

export default class App extends Component {
  render() {
    return <AppContainer ref={navigation => Navigator.setTopLevelNavigator(navigation)} />
  }
}
