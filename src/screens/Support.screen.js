import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import styles from '../styles'

export default class Support extends Component {
  constructor(props) {
    super(props)

    this.goToFAQ = this.goToFAQ.bind(this)
    this.goToChatBot = this.goToChatBot.bind(this)
  }

  goToFAQ() {
    this.props.navigation.push('SupportFAQ')
  }

  goToChatBot() {
    this.props.navigation.push('SupportChatBot')
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={{ alignSelf: 'stretch' }} onPress={this.goToFAQ}>
          <Text>Frequently Asked Questions</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ alignSelf: 'stretch', marginTop: 20 }} onPress={this.goToChatBot}>
          <Text>Chat Bot</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
