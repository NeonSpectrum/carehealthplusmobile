import React, { Component } from 'react'
import { TouchableOpacity, Text, StyleSheet, View, Image } from 'react-native'

export default class Card extends Component {
  render() {
    return (
      <View style={{ marginHorizontal: 10 }}>
        {this.props.sender ? (
          <View style={{ width: '100%', alignItems: 'flex-end', marginTop: 20 }}>
            <Text style={{ backgroundColor: '#eee', width: '60%', padding: 10, borderRadius: 20 }}>
              {this.props.children}
            </Text>
          </View>
        ) : (
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <View
              style={{
                flex: 0.13,
                justifyContent: 'flex-end'
              }}
            >
              <Image source={this.props.image} style={{ height: 40, width: 40, borderRadius: 50 }} />
            </View>
            <View style={{ flex: 0.87 }}>
              <Text style={{ fontSize: 12, marginLeft: 5 }}>{this.props.name}</Text>
              <Text style={{ backgroundColor: '#eee', width: '60%', padding: 10, borderRadius: 20 }}>
                {this.props.children}
              </Text>
            </View>
          </View>
        )}
      </View>
    )
  }
}
