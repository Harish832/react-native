import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import Home from './src/Screens/homepage/home';
import MapView from 'react-native-maps';

export default function App() {
  return (
    <View style={styles.container}>
      <Home/>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
