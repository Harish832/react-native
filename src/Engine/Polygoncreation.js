import { View } from 'react-native'
import React from 'react'
import { Polygon } from 'react-native-maps'


export default function Polygoncreation() {
  return (
    <View>
      {locations.map(marker=()=>{
        <Polygon coordinates={locations} />
      })}
    </View>
  )
}

