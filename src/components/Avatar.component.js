import React, { Component } from 'react'
import { TouchableOpacity, Text, StyleSheet, View, Image } from 'react-native'

export default class Avatar extends Component {
  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <View style={{ flex: 0.13 }}>
          <Image source={this.props.image} style={{ height: 40, width: 40, borderRadius: 50 }} />
        </View>
        <View style={{ flex: 0.87 }}>
          <Text style={[styles.header, { textAlign: 'left' }]}>{this.props.name}</Text>
          <Text style={[styles.description, { textAlign: 'left' }]}>{this.props.position}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  description: {
    fontSize: 12
  }
})
