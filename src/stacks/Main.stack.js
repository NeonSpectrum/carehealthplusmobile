import SwipeNavigator from 'react-native-swipe-navigation'

import MainScreen from '../screens/Main.screen.js'
import LoginScreen from '../screens/Login.screen.js'
import RegisterScreen from '../screens/Register.screen.js'

export default SwipeNavigator({
  Main: {
    screen: MainScreen,
    left: 'Login',
    right: 'Register'
  },
  Login: {
    screen: LoginScreen
  },
  Register: {
    screen: RegisterScreen
  }
})
