import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import Home from './src/Screens/homepage/Home';
import Raycasting from './src/Engine/Raycasting';
export default function App() {
  return (
    <View style={styles.container}>
      <Home/>
      <Raycasting></Raycasting>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
