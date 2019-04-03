import React, { Component } from 'react'
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class Button extends Component {
  render() {
    return (
      <TouchableOpacity
        style={[styles.buttonContainer, this.props.containerStyle]}
        onPress={this.props.onPress}
        disabled={this.props.disabled}
      >
        <View style={[styles.button, this.props.style]}>
          {this.props.icon && (
            <Icon
              name={this.props.icon}
              size={25}
              color="#fff"
              style={{ position: 'absolute', [this.props.alignIcon || 'left']: 20, paddingVertical: 15 }}
            />
          )}
          <Text style={[styles.buttonText, this.props.textStyle]}>{this.props.children}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    marginBottom: 10,
    borderRadius: 10,
    position: 'relative'
  },
  button: {
    borderRadius: 30,
    backgroundColor: '#cf2648',
    alignSelf: 'stretch'
  },
  buttonText: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 18,
    padding: 15,
    color: '#fff'
  }
})
