import { Location, Permissions } from 'expo'
import React, { Component } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  RefreshControl
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

import styles from '../styles'
import { axios, googleAPI } from '../modules'

import Card from '../components/Card.component'

export default class Services extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state

    return {
      headerTitle: (
        <View style={{ flex: 1, alignSelf: 'stretch', padding: 10 }}>
          <TextInput
            style={{
              width: '100%',
              borderColor: '#ccc',
              borderWidth: 1,
              borderRadius: 10,
              paddingVertical: 5,
              paddingHorizontal: 10
            }}
            placeholder="Search"
            onChangeText={text => params.search(text)}
          />
        </View>
      )
    }
  }

  constructor(props) {
    super(props)

    this.search = this.search.bind(this)
    this.fetchData = this.fetchData.bind(this)
  }

  state = {
    data: [
      {
        name: 'One Hospital',
        description: 'Some info.',
        type: 'nearby',
        image: {
          uri:
            'https://www.ochbuffalo.org/sites/default/files/styles/news_large/public/default_images/KH-15733-OSHEI-SIGN-RENDERING_cmyk.jpg?itok=zfw4Gy_i'
        }
      },
      {
        name: 'Two Hospital',
        description: 'Some info.',
        type: 'nearby',
        image: {
          uri:
            'https://www.ochbuffalo.org/sites/default/files/styles/news_large/public/default_images/KH-15733-OSHEI-SIGN-RENDERING_cmyk.jpg?itok=zfw4Gy_i'
        }
      },
      {
        name: 'Three Hospital',
        description: 'Some info.',
        type: 'others',
        image: {
          uri:
            'https://www.ochbuffalo.org/sites/default/files/styles/news_large/public/default_images/KH-15733-OSHEI-SIGN-RENDERING_cmyk.jpg?itok=zfw4Gy_i'
        }
      }
    ],
    searchedData: [],
    address: 'Fetching...',
    refreshing: true
  }

  componentDidMount() {
    this.props.navigation.setParams({ search: this.search })
    this.fetchData()
  }

  async fetchData() {
    this.setState({ refreshing: true })
    await this.getLocation()
    this.setState({ refreshing: false })
  }

  async getLocation() {
    try {
      let { status } = await Permissions.askAsync(Permissions.LOCATION)

      let location = await Location.getCurrentPositionAsync({})

      let { data } = await axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
        params: {
          address: `${location.coords.latitude},${location.coords.longitude}`,
          key: googleAPI
        }
      })

      this.setState({ address: data.results[0].formatted_address })
    } catch (e) {
      this.setState({ address: 'Cannot fetch address.' })
    }
  }

  search(keyword) {
    this.setState({
      searchText: keyword,
      searchedData: this.state.data.filter(x => {
        return x.name.search(keyword) > -1
      })
    })
  }

  mapper(item, key) {
    return (
      <Card key={key} style={{ flex: 1, flexDirection: 'row', height: 150, padding: 0, marginBottom: 20 }}>
        <View style={{ flex: 0.5 }}>
          <ImageBackground
            source={item.image}
            style={{ width: '100%', height: 150 }}
            imageStyle={{ borderTopLeftRadius: 20, borderBottomLeftRadius: 20 }}
          />
        </View>
        <View style={{ flex: 0.5, padding: 5, position: 'relative' }}>
          <View style={{ height: 130 }}>
            <Text style={styles.header}>{item.name}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
          <TouchableOpacity style={{ position: 'absolute', bottom: 5, right: 15 }}>
            <Text style={{ color: '#f00', fontSize: 18 }}>APPOINT NOW</Text>
          </TouchableOpacity>
        </View>
      </Card>
    )
  }

  render() {
    const nearby = this.state.data.filter(x => x.type == 'nearby')
    const others = this.state.data.filter(x => x.type == 'others')
    const searched = this.state.searchedData

    return (
      <ScrollView
        refreshControl={<RefreshControl refreshing={this.state.refreshing} onRefresh={this.fetchData} />}
      >
        <View style={styles.container}>
          {this.state.refreshing ? (
            <Text>Fetching data...</Text>
          ) : (
            <View style={{ width: '100%' }}>
              <Text style={styles.description}>Current Location: {this.state.address}</Text>
              {this.state.searchText && searched.length == 0 ? (
                <Text style={{ textAlign: 'center' }}>No Results Found</Text>
              ) : this.state.searchText ? (
                searched.map(this.mapper)
              ) : (
                <View style={{ width: '100%' }}>
                  <Text style={[styles.header, { textAlign: 'left', marginBottom: 10 }]}>Nearby</Text>
                  {nearby.map(this.mapper)}
                  <Text style={[styles.header, { textAlign: 'left', marginBottom: 10 }]}>Others</Text>
                  {others.map(this.mapper)}
                </View>
              )}
            </View>
          )}
        </View>
      </ScrollView>
    )
  }
}
