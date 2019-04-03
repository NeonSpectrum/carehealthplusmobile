import React, { Component } from 'react'
import { View, Text, Image, ScrollView, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

import Avatar from '../components/Avatar.component'
import CardTable from '../components/CardTable.component'

import styles from '../styles'

import googleMap from '../../assets/googlemapsample.png'

export default class Dashboard extends Component {
  state = {
    statusData: [
      [{ text: 'Program Availed' }, { text: 'ValuePlus (Individual)' }],
      [{ text: '' }, { text: 'Another One' }],
      [{ text: 'Saving Period Status' }, { text: '12% out of 100% (100% = 43,368)' }],
      [{ text: 'Years Covered' }, { text: '2/3' }]
    ],
    medicalClaimData: [
      [{ text: 'Claim Number' }, { text: '1234' }],
      [{ text: 'Provider' }, { text: 'Makati Medical Center' }],
      [{ text: 'Claim Status' }, { text: 'Accepted\n(CareHealth Plus - full payment)' }]
    ]
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <CardTable title="Status" data={this.state.statusData} />
          <CardTable style={{ marginTop: 20 }} title="Medical Claim" data={this.state.medicalClaimData} />
        </View>
      </ScrollView>
    )
  }
}
