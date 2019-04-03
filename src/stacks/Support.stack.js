import React, { Component } from 'react'
import { createAppContainer, createStackNavigator } from 'react-navigation'

import styles from '../styles'

import SupportScreen from '../screens/Support.screen'
import SupportFAQScreen from '../screens/SupportFAQ.screen'
import SupportChatBotScreen from '../screens/SupportChatBot.screen'

export default createAppContainer(
  createStackNavigator({
    Support: { screen: SupportScreen, navigationOptions: { title: 'Help & Support' } },
    SupportFAQ: { screen: SupportFAQScreen, navigationOptions: { title: 'Frequently Asked Questions' } },
    SupportChatBot: { screen: SupportChatBotScreen, navigationOptions: { title: 'Chat Bot' } }
  })
)
