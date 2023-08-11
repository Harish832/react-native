import React from 'react'
import { View,Text } from 'react-native'

const Complaint = ({navigation,route}) => {
  const array=route.params.value;
  return (
    <View>
        <Text>{array.region.latitude}</Text>
        <Text>{array.region.longitude}</Text>
        <Text>{array.option}</Text>
    </View>
  )
}

export default Complaint