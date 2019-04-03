import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

export default class InputField extends Component {
  render() {
    return (
      <View style={this.props.containerStyle}>
        <Text style={styles.label}>{this.props.label}</Text>
        <TextInput
          style={styles.input}
          onChangeText={this.props.onChangeText}
          secureTextEntry={this.props.secureTextEntry}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  label: {
    fontSize: 14,
    marginBottom: 5,
    color: '#cf2648',
    textAlign: 'center'
  },
  input: {
    alignSelf: 'stretch',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 30,
    borderColor: '#333',
    borderWidth: 1,
    fontSize: 18
  }
})
