import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import MapView from 'react-native-maps';
import styles from './stylingHome';


export default function Home() {
  return (
    <View style={styles.container}>
      <MapView style={styles.map}
        initialRegion={{
          latitude: 9.925201,
          longitude: 78.119774,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  )
}
