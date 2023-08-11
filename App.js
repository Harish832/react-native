import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import Home from './src/Screens/homepage/Home';
import Homey from './src/Screens/homepage/Homey';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Complaint from './src/Screens/newuserlogin/Complaint';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
            name="Home"
            component={Home}
        />
        <Stack.Screen
            name="Login"
            component={Complaint}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
