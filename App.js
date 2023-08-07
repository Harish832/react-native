import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import Home from './src/Screens/homepage/Home';


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
