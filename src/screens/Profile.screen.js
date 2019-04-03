import React, { Component } from 'react'
import {
  View,
  FlatList,
  ScrollView,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Alert
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

import Avatar from '../components/Avatar.component'
import CardTable from '../components/CardTable.component'

import styles from '../styles'
import Navigator from '../navigator'

export default class Profile extends Component {
  state = {
    basicInfo: [
      [{ text: 'Name', width: 0.3 }, { text: 'Juan Dela Cruz', width: 0.7 }],
      [{ text: 'Birthday', width: 0.3 }, { text: 'January 1, 1990', width: 0.7 }]
    ],
    dependencies: [[{ text: 'Manny Young' }], [{ text: 'Russell Santos' }], [{ text: 'Michaela Panopio' }]]
  }

  constructor(props) {
    super(props)

    this.logout = this.logout.bind(this)
  }

  logout() {
    Alert.alert('Confirm', 'Are you sure do you want to logout?', [
      {
        text: 'No',
        style: 'cancel'
      },
      { text: 'Yes', onPress: () => Navigator.reset('Main') }
    ])
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <TouchableOpacity
            style={{ position: 'absolute', top: 10, right: 10, padding: 10 }}
            onPress={this.logout}
          >
            <Icon name="sign-out" size={30} />
          </TouchableOpacity>
          <Avatar
            image={{
              uri: 'https://pbs.twimg.com/profile_images/3049814340/1c2e2a0f153a6141117a33339c08cf79.jpeg'
            }}
            name="Juan Dela Cruz"
            position="Applicant"
          />
          <CardTable
            style={{ marginTop: 30 }}
            title="Basic Information"
            data={this.state.basicInfo}
            titleRight={
              <TouchableOpacity style={{ position: 'absolute', top: 13, right: 15 }}>
                <Text>
                  <Icon name="pencil" size={18} />
                </Text>
              </TouchableOpacity>
            }
          />
          <CardTable
            style={{ marginTop: 30 }}
            title="Current Dependencies"
            data={this.state.dependencies}
            titleRight={
              <TouchableOpacity style={{ position: 'absolute', top: 13, right: 15 }}>
                <Text>
                  <Icon name="pencil" size={18} />
                </Text>
              </TouchableOpacity>
            }
          />
        </View>
      </ScrollView>
    )
  }
}
