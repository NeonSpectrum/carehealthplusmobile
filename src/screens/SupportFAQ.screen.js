import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import styles from '../styles'

export default class SupportFAQ extends Component {
  render() {
    return (
      <View style={{ padding: 20 }}>
        <Text>1. How to appoint?</Text>
        <Text style={{ marginLeft: 20 }}>- Search for the nearest hospital and click APPOINT NOW</Text>
        <Text>2. How to save a life?</Text>
        <Text style={{ marginLeft: 20 }}>- Just donate.</Text>
      </View>
    )
  }
}
