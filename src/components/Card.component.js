import React, { Component } from 'react'
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native'

export default class Card extends Component {
  render() {
    return <View style={[styles.card, this.props.style]}>{this.props.children}</View>
  }
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.8,
    shadowRadius: 20,
    elevation: 7,
    position: 'relative',
    padding: 15
  }
})
