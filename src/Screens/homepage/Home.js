import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import MapView, { Circle, Marker, Polygon } from 'react-native-maps';
import styles from './stylingHome';
import { ward51,ward52 } from '../../Engine/Data';
import { Button,TouchableOpacity } from 'react-native';
export default function Home() {
  return (
    <View style={styles.container}>
      <MapView style={styles.map}
        initialRegion={{
          latitude: 9.918103,
          longitude: 78.118368,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Polygon coordinates={ward51.coordinates} fillColor='rgba(255,20,147,0.1)' strokeColor='rgba(255,20,147,0.6)' ></Polygon>
        <Polygon coordinates={ward52.coordinates} fillColor='rgba(255,20,147,0.1)' strokeColor='rgba(255,20,147,0.6)'></Polygon>
      </MapView>
    </View>
  )
}
