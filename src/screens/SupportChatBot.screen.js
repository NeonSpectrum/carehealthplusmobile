import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

import styles from '../styles'

import ChatBlock from '../components/ChatBlock.component'

export default class SupportChatBot extends Component {
  state = {
    messages: [
      {
        message: 'What are your programs offers for corporations?',
        sender: true
      },
      {
        name: 'Care Bot',
        message: `Our PlatinumCare Program Package is a comprehensive healthcare program for Corporate or Group which includes the following benefits and features:
Out-patient Benefits
Annual Physical Examination with Uric Acid Test
In-patient Benefits
Emergency Care Benefits for one (1) year
Dental Benefits
Special Benefits for one (1) year with Free six (6) medical/dental consultations for one (1) pre-designated unenrolled dependents
Pre-existing illness/es are covered from the first year onwards (Minimum of 50 members and up and must be a Semi-annual or Annual payment).`,
        image: {
          uri: 'https://static.generation-robots.com/12630-large_default/marty-humanoid-educational-robot.jpg'
        }
      },
      {
        message: 'Thank you.',
        sender: true
      }
    ]
  }

  render() {
    return (
      <View style={[styles.container, { padding: 0, width: '100%', paddingBottom: 5 }]}>
        <ScrollView style={{ height: '93%', width: '100%' }}>
          <View style={{ width: '100%' }}>
            {this.state.messages.map((item, key) => (
              <ChatBlock key={key} name={item.name} sender={item.sender || false} image={item.image}>
                {item.message}
              </ChatBlock>
            ))}
          </View>
        </ScrollView>
        <View style={{ height: '7%', flexDirection: 'row', margin: 5 }}>
          <TextInput style={{ flex: 0.9, borderColor: '#ccc', borderWidth: 1, borderRadius: 20 }} />
          <TouchableOpacity style={{ flex: 0.1, marginLeft: 10, paddingVertical: 7 }}>
            <Icon name="send" size={25} />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
