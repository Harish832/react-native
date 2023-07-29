
import { View, Text } from 'react-native'
import React from 'react'

export default function Raycasting() {
    var pointInPolygon = require('point-in-polygon');


    var polygon = [[9.918103, 78.118368], [9.918761, 78.120918], [9.921002, 78.12036], [9.920347, 78.117801]];

    var istrue =pointInPolygon([9.918251, 78.121144], polygon);
    let Ans1="No answer"
    if(istrue==false){
       Ans1="True Son"
    }
    return (
        <View>
            <Text>{Ans1}</Text>
        </View>
    )
}
