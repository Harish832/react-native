import { View, Text } from 'react-native'
import React from 'react'
import { Polygon } from 'react-native-maps'
import styles from '../Screens/homepage/stylingHome';


export default function Polygoncreation() {
  return (
    <View>
      {locations.map(marker=()=>{
        <Polygon coordinates={locations} />
      })}
    </View>
  )
}

