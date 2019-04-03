import React, { Component } from 'react'
import { TouchableOpacity, Text, StyleSheet, View, ScrollView, ImageBackground } from 'react-native'

export default class CardTable extends Component {
  render() {
    return (
      <View style={[styles.card, this.props.style, { maxHeight: this.props.maxHeight }]}>
        {this.props.image ? (
          <View
            style={{
              borderBottomWidth: 1,
              borderColor: '#ccc',
              height: 150
            }}
          >
            <ImageBackground
              source={this.props.image}
              style={{ width: '100%', height: 150 }}
              imageStyle={{ borderTopLeftRadius: 20, borderTopRightRadius: 20 }}
            />
          </View>
        ) : (
          <View style={{ padding: 10, borderBottomWidth: 1, borderColor: '#ccc' }}>
            <Text style={styles.title}>{this.props.title}</Text>
            {this.props.titleRight}
          </View>
        )}
        {this.props.extraHeader && (
          <View style={{ borderBottomWidth: 1, borderColor: '#ccc' }}>
            <this.props.extraHeader style={styles.cell} />
          </View>
        )}
        <ScrollView>
          <View>
            {this.props.data.map((items, key1) => (
              <View key={key1} style={{ flex: 1, flexDirection: 'row' }}>
                {items.map((item, key2) => (
                  <View
                    key={key2}
                    style={[
                      styles.cell,
                      {
                        flex: item.width || 1 / items.length,
                        borderColor: '#ccc',
                        borderRightWidth: key2 == items.length - 1 ? 0 : 1,
                        borderBottomWidth: key1 == this.props.data.length - 1 ? 0 : 1
                      }
                    ]}
                  >
                    {item.element || <Text style={item.style}>{item.text}</Text>}
                  </View>
                ))}
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    )
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
    width: '100%'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  cell: {
    paddingVertical: 5,
    paddingHorizontal: 10
  }
})
