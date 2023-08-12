import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import Home from './src/Screens/homepage/Home';
import Homey from './src/Screens/homepage/Homey';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Complaint from './src/Screens/complaint/Complaint';
import Login from './src/Screens/newuserlogin/Login';
import Repview from './src/Screens/Representative_view/Repview';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
            name="Login"
            component={Login}
            // options={{ headerShown: false }}
        />
        <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: true }}
        />
        <Stack.Screen
            name="Repsentative"
            component={Repview}
            options={{ headerShown: true }}
        />
        <Stack.Screen
            name="Complaint"
            component={Complaint}
            options={{ headerShown: false }}
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
