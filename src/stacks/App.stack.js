import React, { Component } from 'react'
import { createAppContainer } from 'react-navigation'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome'

import DashboardStack from '../stacks/Dashboard.stack'
import ServicesStack from '../stacks/Services.stack'
import SearchStack from '../stacks/Search.stack'
import SupportStack from '../stacks/Support.stack'
import ProfileStack from '../stacks/Profile.stack'

export default createAppContainer(
  createMaterialBottomTabNavigator(
    {
      Dashboard: { screen: DashboardStack },
      Services: { screen: ServicesStack },
      Search: { screen: SearchStack },
      Support: { screen: SupportStack },
      Profile: { screen: ProfileStack }
    },
    {
      swipeEnabled: true,
      barStyle: { backgroundColor: '#e36881' },
      activeColor: '#fff',
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) => {
          const { routeName } = navigation.state
          let iconName
          if (routeName === 'Dashboard') {
            iconName = 'home'
          } else if (routeName === 'Services') {
            iconName = 'hospital-o'
          } else if (routeName === 'Search') {
            iconName = 'search'
          } else if (routeName === 'Support') {
            iconName = 'question-circle'
          } else if (routeName === 'Profile') {
            iconName = 'user-circle-o'
          }
          return <Icon name={iconName} size={23} color={'#fff'} />
        }
      })
    }
  )
)
